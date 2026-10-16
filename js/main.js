/* DressRoom · interacción
   - perchas con física de péndulo en la portada
   - etiquetas tejidas que se giran
   - sello holográfico
   - ticket de probador → mensaje de WhatsApp
   - horario en vivo (hora de Madrid) y mapa de las dos tiendas */
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = matchMedia('(hover: hover)').matches;
  const I = window.DR_I18N;
  const PHONE = '34640158529';
  const wa = text => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

  /* Horario según la ficha de Google (0 = domingo). Para cambiarlo, editar aquí. */
  const HOURS = [
    [['10:00', '22:00']], [['10:00', '22:00']], [['10:00', '22:00']], [['10:00', '22:00']],
    [['10:00', '22:00']], [['10:00', '22:00']], [['10:00', '22:00']]
  ];

  const NY = { es: 'Nueva York', en: 'New York', fr: 'New York', ru: 'Нью-Йорк' };
  const MILAN = { es: 'Milán', en: 'Milan', fr: 'Milan', ru: 'Милан' };
  const BRANDS = [
    { n: 'Guess', c: { es: 'Los Ángeles', en: 'Los Angeles', fr: 'Los Angeles', ru: 'Лос-Анджелес' }, y: 1981, v: 1, f: 'a' },
    { n: 'Lacoste', c: { es: 'París', en: 'Paris', fr: 'Paris', ru: 'Париж' }, y: 1933, v: 2, f: 'b' },
    { n: 'Calvin Klein', c: NY, y: 1968, v: 4, f: 'e' },
    { n: 'Liu Jo', c: { es: 'Carpi, Italia', en: 'Carpi, Italy', fr: 'Carpi, Italie', ru: 'Карпи, Италия' }, y: 1995, v: 3, f: 'd' },
    { n: 'Armani', c: MILAN, y: 1975, v: 6, f: 'e' },
    { n: 'Versace Jeans Couture', c: MILAN, y: 1978, v: 1, f: 'c' },
    { n: 'Replay', c: { es: 'Italia', en: 'Italy', fr: 'Italie', ru: 'Италия' }, y: 1981, v: 5, f: 'd' },
    { n: 'Levi’s', c: { es: 'San Francisco', en: 'San Francisco', fr: 'San Francisco', ru: 'Сан-Франциско' }, y: 1853, v: 3, f: 'a' },
    { n: 'Tommy Hilfiger', c: NY, y: 1985, v: 2, f: 'c' },
    { n: 'Tous', c: { es: 'Manresa', en: 'Manresa', fr: 'Manresa', ru: 'Манреса' }, y: 1920, v: 6, f: 'b' },
    { n: 'Birkenstock', c: { es: 'Alemania', en: 'Germany', fr: 'Allemagne', ru: 'Германия' }, y: 1774, v: 4, f: 'a' },
    { n: 'Munich', c: { es: 'Barcelona', en: 'Barcelona', fr: 'Barcelone', ru: 'Барселона' }, y: 1939, v: 5, f: 'c' },
    { n: 'Colors of California', c: { es: 'Espíritu californiano', en: 'Californian spirit', fr: 'Esprit californien', ru: 'Калифорнийский стиль' }, y: null, v: 2, f: 'd' }
  ];
  const TILTS = [-1.6, 1.1, -.6, 2, -1.2, .7, -2.1, 1.5, -.4, 1.9, -1, .5, -1.7];

  /* ---------- Cabecera y menú móvil ---------- */
  const top = $('#top');
  const onScroll = () => top.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('.burger');
  const drawer = $('#drawer');
  const setDrawer = open => {
    burger.setAttribute('aria-expanded', String(open));
    drawer.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setDrawer(drawer.hidden));
  $$('a', drawer).forEach(a => a.addEventListener('click', () => setDrawer(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) setDrawer(false); });
  matchMedia('(min-width: 1101px)').addEventListener('change', e => { if (e.matches) setDrawer(false); });

  /* ---------- Perchas: péndulos amortiguados ---------- */
  const stage = $('#stage');
  const hangers = $$('.hanger', stage).map((el, i) => ({
    el, tag: $('.hanger__tag', el),
    // entrada: una ráfaga de aire empuja toda la barra hacia el mismo lado
    th: reduce ? 0 : -.3 + i * .025 + Math.random() * .04,
    w: reduce ? 0 : -.25 * Math.random()
  }));
  const K = 15;    // rigidez (≈ g / longitud)
  const C = 1.05;  // rozamiento
  let running = false, last = 0, stageVisible = true;

  function frame(t) {
    const dt = Math.min(.032, (t - last) / 1000 || .016);
    last = t;
    let energy = 0;
    for (const h of hangers) {
      h.w += (-K * Math.sin(h.th) - C * h.w) * dt;
      h.th = clamp(h.th + h.w * dt, -.75, .75);
      energy += Math.abs(h.th) + Math.abs(h.w);
      h.el.style.transform = `rotate(${h.th.toFixed(4)}rad)`;
      h.tag.style.setProperty('--lag', `${(-h.w * .1).toFixed(4)}rad`);
    }
    if (energy < .002 || !stageVisible) { running = false; return; }
    requestAnimationFrame(frame);
  }
  function kick() {
    if (running || !stageVisible) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  }

  if (!reduce) {
    let lx = null, lt = 0;
    stage.addEventListener('pointermove', e => {
      const now = performance.now();
      if (lx !== null && now - lt < 120) {
        const vx = (e.clientX - lx) / Math.max(8, now - lt); // px/ms
        for (const h of hangers) {
          if (!h.el.offsetParent) continue;
          const r = h.el.getBoundingClientRect();
          if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top + 30 || e.clientY > r.bottom) continue;
          const lever = clamp((e.clientY - r.top) / r.height + .25, .3, 1.1);
          h.w = clamp(h.w + clamp(vx * .42 * lever, -.9, .9), -2.4, 2.4);
        }
        kick();
      }
      lx = e.clientX; lt = now;
    }, { passive: true });
    stage.addEventListener('pointerleave', () => { lx = null; });

    // brisa de mar: de vez en cuando una percha se mueve sola
    setInterval(() => {
      if (!stageVisible || document.hidden) return;
      const vis = hangers.filter(h => h.el.offsetParent);
      const h = vis[Math.floor(Math.random() * vis.length)];
      if (h) { h.w += (Math.random() - .5) * .5; kick(); }
    }, 2600);

    new IntersectionObserver(([en]) => {
      stageVisible = en.isIntersecting;
      if (stageVisible) kick();
    }).observe(stage);
    kick();
  }

  /* ---------- Aparición al hacer scroll ---------- */
  $$('.cats .cat').forEach((el, i) => { el.style.animationDelay = `${i * 110}ms`; });
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  $$('.rv, .rv-hang').forEach(el => io.observe(el));

  /* ---------- Sello holográfico ---------- */
  const holo = $('#holo');
  if (holo && canHover && !reduce) {
    addEventListener('pointermove', e => {
      const r = holo.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const dx = (e.clientX - (r.left + r.width / 2)) / innerWidth;
      const dy = (e.clientY - (r.top + r.height / 2)) / innerHeight;
      holo.style.setProperty('--ry', `${(dx * 46).toFixed(2)}deg`);
      holo.style.setProperty('--rx', `${(-dy * 46).toFixed(2)}deg`);
      holo.style.setProperty('--a', `${(20 + dx * 300 + dy * 160).toFixed(1)}deg`);
    }, { passive: true });
  }

  /* ---------- Etiquetas tejidas de marcas ---------- */
  const labelsEl = $('#labels');
  function renderLabels() {
    const S = I.str();
    labelsEl.innerHTML = '';
    BRANDS.forEach((b, i) => {
      const li = document.createElement('li');
      li.className = `label lv-${b.v}`;
      li.style.setProperty('--tilt', `${TILTS[i % TILTS.length]}deg`);
      const origin = b.c[I.lang] || b.c.es;
      li.innerHTML = `
        <button class="label__flip" type="button" aria-pressed="false">
          <span class="label__face label__front lf-${b.f}">${b.n}</span>
          <span class="label__face label__back"><em>${origin}${b.y ? ' · ' + S.since(b.y) : ''}</em><b>${S.askBrand}</b></span>
        </button>`;
      const btn = $('button', li);
      btn.setAttribute('aria-label', `${b.n} — ${S.flipHint}`);
      const flip = on => {
        li.classList.toggle('is-flipped', on);
        btn.setAttribute('aria-pressed', String(on));
        btn.setAttribute('aria-label', on ? `${b.n} — ${S.askBrand.replace(' ↗', '')} (WhatsApp)` : `${b.n} — ${S.flipHint}`);
      };
      btn.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') flip(true); });
      li.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') flip(false); });
      btn.addEventListener('click', () => {
        if (li.classList.contains('is-flipped')) {
          window.open(wa(I.str().brandMsg(b.n)), '_blank', 'noopener');
        } else {
          $$('.label.is-flipped', labelsEl).forEach(o => { o.classList.remove('is-flipped'); $('button', o).setAttribute('aria-pressed', 'false'); });
          flip(true);
        }
      });
      labelsEl.append(li);
    });
  }

  /* ---------- Probador ---------- */
  const form = $('#fit');
  const brandChips = $('#brandChips');
  BRANDS.forEach(b => {
    const l = document.createElement('label');
    l.className = 'chip';
    l.innerHTML = `<input type="checkbox" name="marcas" value="${b.n}"><span>${b.n}</span>`;
    brandChips.append(l);
  });

  const rowsEl = $('#tkRows');
  const send = $('#tkSend');
  const code = $('#tkCode');
  const ticket = $('#ticket');
  const tkNo = String(1000 + Math.floor(Math.random() * 9000));
  $('#tkNo').textContent = tkNo;

  const labelOf = input => input.nextElementSibling.textContent.trim();
  function readForm() {
    const one = name => form.querySelector(`input[name="${name}"]:checked`);
    const many = name => $$(`input[name="${name}"]:checked`, form).map(labelOf);
    const tienda = one('tienda'), cuando = one('cuando'), para = one('para'), talla = one('talla');
    return {
      para: para ? labelOf(para) : '',
      busco: many('busco'),
      talla: talla ? labelOf(talla) : '',
      pie: form.pie.value,
      marcas: many('marcas'),
      tienda: tienda ? labelOf(tienda) : '',
      tiendaVal: tienda ? tienda.value : '',
      cuando: cuando ? labelOf(cuando) : '',
      cuandoVal: cuando ? cuando.value : '',
      nombre: form.nombre.value.trim()
    };
  }

  function renderTicket(bump) {
    const d = readForm();
    const S = I.str();
    const rows = [
      [S.rows.para, d.para], [S.rows.busco, d.busco.join(', ')], [S.rows.talla, d.talla],
      [S.rows.pie, d.pie], [S.rows.marcas, d.marcas.join(', ')], [S.rows.tienda, d.tienda],
      [S.rows.cuando, d.cuando], [S.rows.nombre, d.nombre]
    ];
    rowsEl.textContent = '';
    rows.forEach(([k, v]) => {
      const row = document.createElement('div');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = k;
      dd.textContent = v || '—';
      if (!v) dd.className = 'empty';
      row.append(dt, dd);
      rowsEl.append(row);
    });
    const msg = S.message(d);
    send.href = wa(msg);
    drawBarcode(code, tkNo + '|' + msg);
    if (bump && !reduce) {
      ticket.classList.remove('bump');
      void ticket.offsetWidth;
      ticket.classList.add('bump');
    }
  }

  form.addEventListener('change', () => renderTicket(true));
  form.nombre.addEventListener('input', () => renderTicket(false));
  form.addEventListener('submit', e => e.preventDefault());
  $('#tkReset').addEventListener('click', () => { form.reset(); renderTicket(true); });

  // Las perchas y las secciones llevan al probador con algo ya marcado
  $$('[data-pick]').forEach(a => a.addEventListener('click', () => {
    const [name, val] = a.dataset.pick.split(':');
    const input = form.querySelector(`input[name="${name}"][value="${val}"]`);
    if (input && !input.checked) { input.checked = true; renderTicket(true); }
  }));

  /* ---------- Código de barras decorativo ---------- */
  function drawBarcode(svg, text) {
    let s = [...text].reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) >>> 0, 2166136261) || 1;
    const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
    let x = 0;
    const out = [];
    const bar = (w, ink) => { if (ink) out.push(`<rect x="${x}" y="0" width="${w}" height="100"/>`); x += w; };
    bar(2, 1); bar(1, 0); bar(2, 1); bar(2, 0);
    for (let i = 0; i < 40; i++) { bar(1 + Math.floor(rnd() * 3), 1); bar(1 + Math.floor(rnd() * 2.5), 0); }
    bar(2, 1); bar(1, 0); bar(2, 1);
    svg.setAttribute('viewBox', `0 0 ${x} 100`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.innerHTML = out.join('');
  }
  $$('[data-barcode]').forEach(svg => drawBarcode(svg, svg.dataset.barcode));

  /* ---------- Tiendas y mapa ---------- */
  const mapFrame = $('#map iframe');
  const mapObs = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return;
    if (!mapFrame.src) mapFrame.src = mapFrame.dataset.src;
    mapObs.disconnect();
  }, { rootMargin: '400px 0px' });
  mapObs.observe(mapFrame);

  $$('.store').forEach(store => {
    $('[data-show-map]', store).addEventListener('click', () => {
      $$('.store').forEach(s => s.classList.toggle('is-active', s === store));
      mapFrame.dataset.src = store.dataset.map;
      mapFrame.src = store.dataset.map;
      $('#mapPin').textContent = store.dataset.pin;
      if (innerWidth < 900) $('#map').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    });
  });

  /* ---------- Horario en vivo (Europe/Madrid) ---------- */
  const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  function madridNow() {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Madrid', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23'
    }).formatToParts(new Date());
    const get = type => parts.find(p => p.type === type).value;
    return {
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')),
      min: (Number(get('hour')) % 24) * 60 + Number(get('minute'))
    };
  }
  const dayName = (d, style = 'long') =>
    new Intl.DateTimeFormat(I.lang, { weekday: style, timeZone: 'UTC' }).format(new Date(Date.UTC(2024, 0, 7 + d)));

  function openStatus() {
    const { day, min } = madridNow();
    const S = I.str();
    for (const [o, c] of HOURS[day]) if (min >= toMin(o) && min < toMin(c)) return { open: true, text: S.open(c) };
    const later = HOURS[day].find(([o]) => toMin(o) > min);
    if (later) return { open: false, text: S.closedToday(later[0]) };
    for (let i = 1; i <= 7; i++) {
      const d = (day + i) % 7;
      if (HOURS[d].length) return { open: false, text: i === 1 ? S.closedTomorrow(HOURS[d][0][0]) : S.closedOn(dayName(d), HOURS[d][0][0]) };
    }
    return { open: false, text: S.closed };
  }

  function renderHours() {
    const S = I.str();
    const st = openStatus();
    $$('[data-status]').forEach(el => {
      el.classList.toggle('is-open', st.open);
      el.classList.toggle('is-closed', !st.open);
      $('span', el).textContent = st.text;
    });

    const { day } = madridNow();
    const order = [1, 2, 3, 4, 5, 6, 0];
    const fmt = d => HOURS[d].map(([o, c]) => `${o} – ${c}`).join(' · ') || S.closed;
    const same = order.every(d => fmt(d) === fmt(1));

    const week = $('#week');
    week.textContent = '';
    order.forEach(d => {
      const li = document.createElement('li');
      li.textContent = dayName(d, 'short').replace('.', '');
      if (d === day) li.className = 'is-today';
      if (!HOURS[d].length) li.classList.add('is-off');
      week.append(li);
    });

    const list = $('#hours');
    list.textContent = '';
    const rows = same ? [[S.everyDay, fmt(1), true]] : order.map(d => [dayName(d), fmt(d), d === day]);
    rows.forEach(([name, time, today]) => {
      const li = document.createElement('li');
      if (today && !same) li.className = 'is-today';
      li.innerHTML = `<span></span><span></span>`;
      li.children[0].textContent = name;
      li.children[1].textContent = time;
      list.append(li);
    });
  }
  setInterval(renderHours, 60000);

  /* ---------- Titular: que la palabra más larga quepa en cualquier idioma ---------- */
  const big = $('.h1__big');
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;left:-9999px;top:0';
  document.body.append(probe);
  function fitTitle() {
    big.style.fontSize = '';
    const cs = getComputedStyle(big);
    const cssSize = parseFloat(cs.fontSize);
    probe.style.font = `${cs.fontWeight} 100px ${cs.fontFamily}`;
    probe.style.letterSpacing = cs.letterSpacing.endsWith('px')
      ? `${parseFloat(cs.letterSpacing) / cssSize * 100}px` : cs.letterSpacing;
    const longest = Math.max(...big.textContent.trim().split(/\s+/).map(w => { probe.textContent = w; return probe.getBoundingClientRect().width / 100; }));
    const avail = big.closest('.hero__title').clientWidth;
    const fit = Math.floor(avail / longest * .97);
    if (fit < cssSize) big.style.fontSize = `${fit}px`;
  }
  let fitTimer;
  addEventListener('resize', () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitTitle, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitle);

  /* ---------- Idioma ---------- */
  I.onChange(() => {
    renderLabels();
    renderTicket(false);
    renderHours();
    fitTitle();
  });
  I.init();

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
