/* DressRoom · textos en ES / EN / FR / RU.
   El español vive en el HTML; aquí solo están las traducciones
   y las frases que genera JavaScript. */
(() => {
  'use strict';

  const DICT = {
    en: {
      'skip': 'Skip to content',
      'nav.brands': 'Brands', 'nav.sections': 'Departments', 'nav.fitting': 'Fitting room', 'nav.stores': 'Shops',
      'cta.whatsapp': 'Message us on WhatsApp',
      'hg.woman': 'Women', 'hg.coats': 'Coats', 'hg.shoes': 'Shoes', 'hg.bags': 'Bags', 'hg.man': 'Men',
      'hero.hint': 'Run your mouse over the hangers', 'hero.hintTouch': 'Swipe across the hangers',
      'hero.eyebrow': 'Multi-brand store · Lloret de Mar',
      'hero.title': 'Authentic brands', 'hero.sewn': '100% original', 'hero.sub': 'in the heart of Lloret de Mar',
      'hero.lead': 'Clothing, shoes and accessories for women and men. Guess, Lacoste, Calvin Klein, Liu Jo, Replay, Versace Jeans Couture and many more, in two shops a stone’s throw from the beach.',
      'cta.fitting': 'Plan your fitting', 'cta.directions': 'Get directions',
      'about.eyebrow': 'The house', 'about.title': 'Everything on our rails is the real thing.',
      'about.p1': 'DressRoom is a Costa Brava multi-brand store with two spaces in the old town of Lloret de Mar. We select clothing, shoes and accessories from the best Spanish and international brands.',
      'about.p2': 'We guarantee the authenticity and quality of every piece. And we look after you the way a good fitting room should: with time, a good eye and no rush.',
      'about.s1': 'shops in the centre', 'about.s2': 'original brands', 'about.s3': 'open every day',
      'care.big': '100% original',
      'care.t1': 'Hand care', 'care.d1': 'Personal advice, piece by piece, no rush.',
      'care.t2': 'No imitations', 'care.d2': 'Only original products from each brand.',
      'care.t3': 'Always pressed', 'care.d3': 'New arrivals every season.',
      'care.t4': 'Dry in the sun', 'care.d4': 'Steps away from Lloret beach.',
      'care.foot': 'One size: yours',
      'brands.eyebrow': 'Brands', 'brands.title': 'The labels you’re looking for',
      'brands.lead': 'We work with Spanish and international brands. Tap a label to flip it and ask us what we have from it this season.',
      'brands.note': 'And many more in store. Stock changes every season.',
      'cat.eyebrow': 'Departments', 'cat.title': 'From shoes to bags',
      'cat.w': 'Women', 'cat.wd': 'Dresses, jeans, jackets and knitwear',
      'cat.m': 'Men', 'cat.md': 'Polos, T-shirts, jeans and sweatshirts',
      'cat.s': 'Shoes', 'cat.sd': 'Sneakers and sandals for every day',
      'cat.b': 'Bags & accessories', 'cat.bd': 'Bags, wallets, caps and belts',
      'cat.go': 'Ask →',
      'denim.title': 'Denim, done right.',
      'denim.text': 'Levi’s, Replay and Calvin Klein Jeans: classic and seasonal fits to try on at your own pace.',
      'denim.cta': 'I’m after jeans',
      'fit.eyebrow': 'Fitting room', 'fit.title': 'Plan your fitting before you come',
      'fit.lead': 'Tell us what you’re looking for and your size. We’ll reply on WhatsApp with what we have in store.',
      'fit.who': 'Who is it for?', 'opt.woman': 'Women', 'opt.man': 'Men', 'opt.gift': 'It’s a gift',
      'fit.what': 'What are you looking for?',
      'opt.jeans': 'Jeans', 'opt.dresses': 'Dresses & skirts', 'opt.tees': 'T-shirts & polos', 'opt.shirts': 'Shirts',
      'opt.knit': 'Sweatshirts & knitwear', 'opt.coats': 'Jackets & coats', 'opt.sneakers': 'Sneakers', 'opt.sandals': 'Sandals',
      'opt.bags': 'Bags', 'opt.acc': 'Caps & accessories',
      'fit.size': 'Clothing size', 'fit.shoe': 'Shoe size (EU)', 'fit.brands': 'Favourite brands',
      'fit.store': 'Which shop?', 'opt.any': 'Either one',
      'fit.when': 'When are you coming?', 'opt.today': 'Today', 'opt.tomorrow': 'Tomorrow', 'opt.week': 'This week',
      'fit.name': 'Your name (optional)', 'fit.namePh': 'e.g. Laura',
      'tk.no': 'Fitting room No.', 'tk.send': 'Send on WhatsApp', 'tk.call': 'or call us:', 'tk.reset': 'Clear',
      'st.eyebrow': 'Shops', 'st.title': 'Two shops in the old town',
      'st.lead': '150 metres apart, between Sant Romà church and Lloret’s seafront promenade.',
      'st.go': 'Get directions ↗', 'st.map': 'Show on map', 'st.hours': 'Opening hours',
      'st.note': 'We’re open every day. Off-season, hours may vary: if you’re coming from afar, message us first.',
      'st.phone': 'Phone & WhatsApp',
      'ig.eyebrow': 'Latest', 'ig.sub': 'New arrivals and offers land on Instagram first.',
      'ft.about': 'Multi-brand clothing, shoes and accessories store in Lloret de Mar, Costa Brava.',
      'ft.contact': 'Contact', 'ft.social': 'Social', 'ft.photos': 'Illustrative photos: Unsplash'
    },

    fr: {
      'skip': 'Aller au contenu',
      'nav.brands': 'Marques', 'nav.sections': 'Rayons', 'nav.fitting': 'Cabine', 'nav.stores': 'Boutiques',
      'cta.whatsapp': 'Écrivez-nous sur WhatsApp',
      'hg.woman': 'Femme', 'hg.coats': 'Manteaux', 'hg.shoes': 'Chaussures', 'hg.bags': 'Sacs', 'hg.man': 'Homme',
      'hero.hint': 'Passez la souris sur les cintres', 'hero.hintTouch': 'Glissez le doigt sur les cintres',
      'hero.eyebrow': 'Boutique multimarque · Lloret de Mar',
      'hero.title': 'Marques authentiques', 'hero.sewn': '100% original', 'hero.sub': 'au cœur de Lloret de Mar',
      'hero.lead': 'Vêtements, chaussures et accessoires pour femme et homme. Guess, Lacoste, Calvin Klein, Liu Jo, Replay, Versace Jeans Couture et bien d’autres, dans deux boutiques à deux pas de la plage.',
      'cta.fitting': 'Préparez votre cabine', 'cta.directions': 'Itinéraire',
      'about.eyebrow': 'La maison', 'about.title': 'Tout ce qui est suspendu ici est authentique.',
      'about.p1': 'DressRoom est une boutique multimarque de la Costa Brava, avec deux espaces dans la vieille ville de Lloret de Mar. Nous sélectionnons vêtements, chaussures et accessoires des meilleures marques espagnoles et internationales.',
      'about.p2': 'Nous garantissons l’authenticité et la qualité de chaque pièce. Et nous vous accueillons comme dans une vraie cabine d’essayage : avec du temps, l’œil juste et sans vous presser.',
      'about.s1': 'boutiques en centre-ville', 'about.s2': 'marques originales', 'about.s3': 'ouvert tous les jours',
      'care.big': '100% original',
      'care.t1': 'Lavage à la main', 'care.d1': 'Conseil personnalisé, pièce par pièce, sans hâte.',
      'care.t2': 'Pas d’imitations', 'care.d2': 'Uniquement des produits originaux de chaque marque.',
      'care.t3': 'Toujours repassé', 'care.d3': 'Des nouveautés à chaque saison.',
      'care.t4': 'Séchage au soleil', 'care.d4': 'À deux pas de la plage de Lloret.',
      'care.foot': 'Taille unique : la vôtre',
      'brands.eyebrow': 'Marques', 'brands.title': 'Les étiquettes que vous cherchez',
      'brands.lead': 'Nous travaillons avec des marques espagnoles et internationales. Touchez une étiquette pour la retourner et demandez-nous ce que nous avons cette saison.',
      'brands.note': 'Et bien d’autres en boutique. L’offre change à chaque saison.',
      'cat.eyebrow': 'Rayons', 'cat.title': 'Des pieds au sac',
      'cat.w': 'Femme', 'cat.wd': 'Robes, jeans, vestes et maille',
      'cat.m': 'Homme', 'cat.md': 'Polos, t-shirts, jeans et sweats',
      'cat.s': 'Chaussures', 'cat.sd': 'Baskets et sandales pour tous les jours',
      'cat.b': 'Sacs et accessoires', 'cat.bd': 'Sacs, portefeuilles, casquettes et ceintures',
      'cat.go': 'Demander →',
      'denim.title': 'Le jean, sérieusement.',
      'denim.text': 'Levi’s, Replay et Calvin Klein Jeans : coupes classiques et de saison, à essayer tranquillement.',
      'denim.cta': 'Je cherche un jean',
      'fit.eyebrow': 'Cabine', 'fit.title': 'Préparez votre cabine avant de venir',
      'fit.lead': 'Dites-nous ce que vous cherchez et votre taille. Nous vous répondons sur WhatsApp avec ce que nous avons en boutique.',
      'fit.who': 'Pour qui ?', 'opt.woman': 'Femme', 'opt.man': 'Homme', 'opt.gift': 'C’est un cadeau',
      'fit.what': 'Que cherchez-vous ?',
      'opt.jeans': 'Jeans', 'opt.dresses': 'Robes et jupes', 'opt.tees': 'T-shirts et polos', 'opt.shirts': 'Chemises',
      'opt.knit': 'Sweats et maille', 'opt.coats': 'Vestes et manteaux', 'opt.sneakers': 'Baskets', 'opt.sandals': 'Sandales',
      'opt.bags': 'Sacs', 'opt.acc': 'Casquettes et accessoires',
      'fit.size': 'Taille', 'fit.shoe': 'Pointure', 'fit.brands': 'Marques préférées',
      'fit.store': 'Quelle boutique ?', 'opt.any': 'Peu importe',
      'fit.when': 'Quand venez-vous ?', 'opt.today': 'Aujourd’hui', 'opt.tomorrow': 'Demain', 'opt.week': 'Cette semaine',
      'fit.name': 'Votre prénom (facultatif)', 'fit.namePh': 'Ex. Laura',
      'tk.no': 'Cabine nº', 'tk.send': 'Envoyer sur WhatsApp', 'tk.call': 'ou appelez-nous :', 'tk.reset': 'Vider',
      'st.eyebrow': 'Boutiques', 'st.title': 'Deux boutiques dans la vieille ville',
      'st.lead': 'À 150 mètres l’une de l’autre, entre l’église de Sant Romà et le front de mer de Lloret.',
      'st.go': 'Itinéraire ↗', 'st.map': 'Voir sur la carte', 'st.hours': 'Horaires',
      'st.note': 'Nous ouvrons tous les jours. Hors saison, les horaires peuvent changer : si vous venez de loin, écrivez-nous avant.',
      'st.phone': 'Téléphone et WhatsApp',
      'ig.eyebrow': 'Nouveautés', 'ig.sub': 'Les nouveautés et les offres sortent d’abord sur Instagram.',
      'ft.about': 'Boutique multimarque de vêtements, chaussures et accessoires à Lloret de Mar, Costa Brava.',
      'ft.contact': 'Contact', 'ft.social': 'Réseaux', 'ft.photos': 'Photos d’illustration : Unsplash'
    },

    ru: {
      'skip': 'Перейти к содержанию',
      'nav.brands': 'Бренды', 'nav.sections': 'Отделы', 'nav.fitting': 'Примерочная', 'nav.stores': 'Магазины',
      'cta.whatsapp': 'Написать в WhatsApp',
      'hg.woman': 'Женщинам', 'hg.coats': 'Пальто', 'hg.shoes': 'Обувь', 'hg.bags': 'Сумки', 'hg.man': 'Мужчинам',
      'hero.hint': 'Проведите мышкой по вешалкам', 'hero.hintTouch': 'Проведите пальцем по вешалкам',
      'hero.eyebrow': 'Мультибрендовый магазин · Льорет-де-Мар',
      'hero.title': 'Оригинальные бренды', 'hero.sewn': '100% оригинал', 'hero.sub': 'в самом центре Льорет-де-Мар',
      'hero.lead': 'Одежда, обувь и аксессуары для женщин и мужчин. Guess, Lacoste, Calvin Klein, Liu Jo, Replay, Versace Jeans Couture и многие другие — в двух магазинах в двух шагах от пляжа.',
      'cta.fitting': 'Подготовить примерку', 'cta.directions': 'Как добраться',
      'about.eyebrow': 'О нас', 'about.title': 'Всё, что висит у нас, — оригинал.',
      'about.p1': 'DressRoom — мультибрендовый магазин на Коста-Браве с двумя залами в старом городе Льорет-де-Мар. Мы подбираем одежду, обувь и аксессуары лучших испанских и международных брендов.',
      'about.p2': 'Мы гарантируем подлинность и качество каждой вещи. И помогаем, как в хорошей примерочной: не торопясь, внимательно и со вкусом.',
      'about.s1': 'магазина в центре', 'about.s2': 'оригинальных брендов', 'about.s3': 'открыто каждый день',
      'care.big': '100% оригинал',
      'care.t1': 'Ручной уход', 'care.d1': 'Подбираем вещь за вещью, без спешки.',
      'care.t2': 'Никаких подделок', 'care.d2': 'Только оригинальная продукция каждого бренда.',
      'care.t3': 'Всегда отглажено', 'care.d3': 'Новинки каждый сезон.',
      'care.t4': 'Сушить на солнце', 'care.d4': 'В двух шагах от пляжа Льорета.',
      'care.foot': 'Размер один: ваш',
      'brands.eyebrow': 'Бренды', 'brands.title': 'Ярлыки, которые вы ищете',
      'brands.lead': 'Мы работаем с испанскими и международными брендами. Нажмите на ярлык, чтобы перевернуть его, и спросите, что есть в этом сезоне.',
      'brands.note': 'И многое другое в магазине. Ассортимент меняется каждый сезон.',
      'cat.eyebrow': 'Отделы', 'cat.title': 'От обуви до сумки',
      'cat.w': 'Женщинам', 'cat.wd': 'Платья, джинсы, куртки и трикотаж',
      'cat.m': 'Мужчинам', 'cat.md': 'Поло, футболки, джинсы и свитшоты',
      'cat.s': 'Обувь', 'cat.sd': 'Кроссовки и сандалии на каждый день',
      'cat.b': 'Сумки и аксессуары', 'cat.bd': 'Сумки, кошельки, кепки и ремни',
      'cat.go': 'Спросить →',
      'denim.title': 'Джинсы — всерьёз.',
      'denim.text': 'Levi’s, Replay и Calvin Klein Jeans: классика и модели сезона — примеряйте спокойно.',
      'denim.cta': 'Ищу джинсы',
      'fit.eyebrow': 'Примерочная', 'fit.title': 'Подготовьте примерку заранее',
      'fit.lead': 'Расскажите, что ищете и какой у вас размер. Мы ответим в WhatsApp, что есть в магазине.',
      'fit.who': 'Для кого?', 'opt.woman': 'Для женщины', 'opt.man': 'Для мужчины', 'opt.gift': 'Это подарок',
      'fit.what': 'Что ищете?',
      'opt.jeans': 'Джинсы', 'opt.dresses': 'Платья и юбки', 'opt.tees': 'Футболки и поло', 'opt.shirts': 'Рубашки',
      'opt.knit': 'Свитшоты и трикотаж', 'opt.coats': 'Куртки и пальто', 'opt.sneakers': 'Кроссовки', 'opt.sandals': 'Сандалии',
      'opt.bags': 'Сумки', 'opt.acc': 'Кепки и аксессуары',
      'fit.size': 'Размер одежды', 'fit.shoe': 'Размер обуви (EU)', 'fit.brands': 'Любимые бренды',
      'fit.store': 'Какой магазин?', 'opt.any': 'Любой',
      'fit.when': 'Когда придёте?', 'opt.today': 'Сегодня', 'opt.tomorrow': 'Завтра', 'opt.week': 'На этой неделе',
      'fit.name': 'Ваше имя (необязательно)', 'fit.namePh': 'Например, Анна',
      'tk.no': 'Примерочная №', 'tk.send': 'Отправить в WhatsApp', 'tk.call': 'или позвоните:', 'tk.reset': 'Очистить',
      'st.eyebrow': 'Магазины', 'st.title': 'Два магазина в старом городе',
      'st.lead': 'В 150 метрах друг от друга, между церковью Сант-Рома и набережной Льорета.',
      'st.go': 'Как добраться ↗', 'st.map': 'Показать на карте', 'st.hours': 'Часы работы',
      'st.note': 'Мы открыты каждый день. Вне сезона график может меняться: если едете издалека, напишите нам заранее.',
      'st.phone': 'Телефон и WhatsApp',
      'ig.eyebrow': 'Новинки', 'ig.sub': 'Новинки и акции сначала появляются в Instagram.',
      'ft.about': 'Мультибрендовый магазин одежды, обуви и аксессуаров в Льорет-де-Мар, Коста-Брава.',
      'ft.contact': 'Контакты', 'ft.social': 'Соцсети', 'ft.photos': 'Иллюстративные фото: Unsplash'
    }
  };

  /* Frases que arma JavaScript (estado, ticket, mensajes de WhatsApp) */
  const line = (k, v) => (v ? `• ${k}: ${v}` : '');
  function buildMessage(L, d) {
    const out = [L.hi];
    if (d.nombre) out.push(L.me(d.nombre));
    const when = d.cuandoVal ? L.when[d.cuandoVal] : '';
    const visit = L.visit(when, d.tienda, d.tiendaVal === 'igual');
    if (visit) out.push(visit);
    const list = [
      line(L.rows.para, d.para), line(L.rows.busco, d.busco.join(', ')), line(L.rows.talla, d.talla),
      line(L.rows.pie, d.pie), line(L.rows.marcas, d.marcas.join(', '))
    ].filter(Boolean);
    if (list.length) { out.push('', ...list, '', L.ask); }
    else if (!visit) { out.push(L.generic); }
    else { out.push(L.ask); }
    return out.join('\n');
  }

  const STR = {
    es: {
      meta: { title: 'DressRoom · Tienda multimarca de ropa en Lloret de Mar', desc: null },
      open: t => `Abierto ahora · cierra a las ${t}`,
      closedToday: t => `Cerrado ahora · abre hoy a las ${t}`,
      closedTomorrow: t => `Cerrado ahora · abre mañana a las ${t}`,
      closedOn: (d, t) => `Cerrado · abre el ${d} a las ${t}`,
      everyDay: 'Todos los días', closed: 'Cerrado',
      since: y => `Desde ${y}`, askBrand: 'Preguntar ↗', flipHint: 'Ver detalles',
      brandMsg: n => `Hola DressRoom 👋 ¿Qué tenéis de ${n} esta temporada?`,
      rows: { para: 'Para', busco: 'Busco', talla: 'Talla', pie: 'Calzado', marcas: 'Marcas', tienda: 'Tienda', cuando: 'Cuándo', nombre: 'Nombre' },
      when: { hoy: 'hoy', manana: 'mañana', semana: 'esta semana' },
      hi: 'Hola DressRoom 👋', me: n => `Soy ${n}.`,
      visit: (w, s, any) => {
        if (!w && !s) return '';
        const where = any ? 'por alguna de vuestras tiendas' : s ? `por la tienda de ${s}` : 'por la tienda';
        return `Me gustaría pasar ${w ? w + ' ' : ''}${where}.`;
      },
      ask: '¿Lo tenéis disponible? ¡Gracias!',
      generic: 'Me gustaría información sobre vuestra ropa y vuestras marcas.'
    },
    en: {
      meta: { title: 'DressRoom · Multi-brand clothing store in Lloret de Mar', desc: 'DressRoom: authentic brand clothing, shoes and accessories in the centre of Lloret de Mar. Guess, Lacoste, Calvin Klein, Liu Jo, Replay, Versace Jeans Couture and more.' },
      open: t => `Open now · closes at ${t}`,
      closedToday: t => `Closed now · opens today at ${t}`,
      closedTomorrow: t => `Closed now · opens tomorrow at ${t}`,
      closedOn: (d, t) => `Closed · opens ${d} at ${t}`,
      everyDay: 'Every day', closed: 'Closed',
      since: y => `Since ${y}`, askBrand: 'Ask us ↗', flipHint: 'See details',
      brandMsg: n => `Hi DressRoom 👋 What do you have from ${n} this season?`,
      rows: { para: 'For', busco: 'Looking for', talla: 'Size', pie: 'Shoes', marcas: 'Brands', tienda: 'Shop', cuando: 'When', nombre: 'Name' },
      when: { hoy: 'today', manana: 'tomorrow', semana: 'this week' },
      hi: 'Hi DressRoom 👋', me: n => `I’m ${n}.`,
      visit: (w, s, any) => {
        if (!w && !s) return '';
        const where = any ? 'one of your shops' : s ? `your shop on ${s}` : 'your shop';
        return `I’d like to visit ${where}${w ? ' ' + w : ''}.`;
      },
      ask: 'Do you have it available? Thank you!',
      generic: 'I’d like some information about your clothes and brands.'
    },
    fr: {
      meta: { title: 'DressRoom · Boutique multimarque à Lloret de Mar', desc: 'DressRoom : vêtements, chaussures et accessoires de marques authentiques au cœur de Lloret de Mar. Guess, Lacoste, Calvin Klein, Liu Jo, Replay, Versace Jeans Couture et plus.' },
      open: t => `Ouvert · ferme à ${t}`,
      closedToday: t => `Fermé · ouvre aujourd’hui à ${t}`,
      closedTomorrow: t => `Fermé · ouvre demain à ${t}`,
      closedOn: (d, t) => `Fermé · ouvre ${d} à ${t}`,
      everyDay: 'Tous les jours', closed: 'Fermé',
      since: y => `Depuis ${y}`, askBrand: 'Demander ↗', flipHint: 'Voir les détails',
      brandMsg: n => `Bonjour DressRoom 👋 Qu’avez-vous de ${n} cette saison ?`,
      rows: { para: 'Pour', busco: 'Je cherche', talla: 'Taille', pie: 'Pointure', marcas: 'Marques', tienda: 'Boutique', cuando: 'Quand', nombre: 'Prénom' },
      when: { hoy: 'aujourd’hui', manana: 'demain', semana: 'cette semaine' },
      hi: 'Bonjour DressRoom 👋', me: n => `Je m’appelle ${n}.`,
      visit: (w, s, any) => {
        if (!w && !s) return '';
        const where = any ? 'dans l’une de vos boutiques' : s ? `à votre boutique ${s}` : 'à votre boutique';
        return `J’aimerais passer ${w ? w + ' ' : ''}${where}.`;
      },
      ask: 'Est-ce disponible ? Merci !',
      generic: 'J’aimerais avoir des informations sur vos vêtements et vos marques.'
    },
    ru: {
      meta: { title: 'DressRoom · Мультибрендовый магазин одежды в Льорет-де-Мар', desc: 'DressRoom: одежда, обувь и аксессуары оригинальных брендов в центре Льорет-де-Мар. Guess, Lacoste, Calvin Klein, Liu Jo, Replay, Versace Jeans Couture и другие.' },
      open: t => `Открыто · до ${t}`,
      closedToday: t => `Закрыто · откроется сегодня в ${t}`,
      closedTomorrow: t => `Закрыто · откроется завтра в ${t}`,
      closedOn: (d, t) => `Закрыто · откроется в ${d} в ${t}`,
      everyDay: 'Ежедневно', closed: 'Закрыто',
      since: y => `С ${y} года`, askBrand: 'Спросить ↗', flipHint: 'Подробнее',
      brandMsg: n => `Здравствуйте, DressRoom 👋 Что у вас есть от ${n} в этом сезоне?`,
      rows: { para: 'Для', busco: 'Ищу', talla: 'Размер', pie: 'Обувь', marcas: 'Бренды', tienda: 'Магазин', cuando: 'Когда', nombre: 'Имя' },
      when: { hoy: 'сегодня', manana: 'завтра', semana: 'на этой неделе' },
      hi: 'Здравствуйте, DressRoom 👋', me: n => `Меня зовут ${n}.`,
      visit: (w, s, any) => {
        if (!w && !s) return '';
        const where = any ? 'в один из ваших магазинов' : s ? `в магазин на ${s}` : 'в магазин';
        return `Хотел(а) бы зайти ${w ? w + ' ' : ''}${where}.`;
      },
      ask: 'Есть ли это в наличии? Спасибо!',
      generic: 'Хотел(а) бы узнать о вашей одежде и брендах.'
    }
  };
  Object.values(STR).forEach(L => { L.message = d => buildMessage(L, d); });

  const LANGS = ['es', 'en', 'fr', 'ru'];
  const originals = new Map();
  const attrOriginals = new Map();
  const listeners = [];
  const metaDesc = document.querySelector('meta[name="description"]');
  const esDesc = metaDesc ? metaDesc.content : '';

  function pickInitial() {
    try {
      const saved = localStorage.getItem('dr-lang');
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* sin almacenamiento */ }
    const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : 'es';
  }

  const api = {
    lang: 'es',
    str: () => STR[api.lang],
    onChange: fn => listeners.push(fn),
    apply(lang) {
      if (!LANGS.includes(lang)) lang = 'es';
      api.lang = lang;
      const d = DICT[lang] || {};
      document.querySelectorAll('[data-i18n]').forEach(el => {
        if (!originals.has(el)) originals.set(el, el.innerHTML);
        const key = el.dataset.i18n;
        el.innerHTML = lang !== 'es' && d[key] != null ? d[key] : originals.get(el);
      });
      document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        el.dataset.i18nAttr.split(';').forEach(pair => {
          const [attr, key] = pair.split(':');
          const id = el;
          if (!attrOriginals.has(id)) attrOriginals.set(id, {});
          const store = attrOriginals.get(id);
          if (!(attr in store)) store[attr] = el.getAttribute(attr);
          el.setAttribute(attr, lang !== 'es' && d[key] != null ? d[key] : store[attr]);
        });
      });
      document.documentElement.lang = lang;
      document.title = STR[lang].meta.title;
      if (metaDesc) metaDesc.content = STR[lang].meta.desc || esDesc;
      document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
      try { localStorage.setItem('dr-lang', lang); } catch (e) { /* sin almacenamiento */ }
      listeners.forEach(fn => fn(lang));
    },
    init() {
      document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => api.apply(b.dataset.lang)));
      api.apply(pickInitial());
    }
  };

  window.DR_I18N = api;
})();
