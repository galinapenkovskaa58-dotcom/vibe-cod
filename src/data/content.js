import { assetUrl } from '../utils/assetUrl';

export const BENEFITS = [
  {
    id: 'networking',
    title: 'СИЛЬНОЕ ОКРУЖЕНИЕ, НЕТВОРКИНГ И ПОЛЕЗНЫЕ СВЯЗИ',
    text: 'В клубе состоят практикующие SMM-щики, маркетологи, промпт-инженеры, эксперты, предприниматели, продюсеры. Тут можно найти друзей, партнеров и даже клиентов.',
    variant: 'purple',
    image: assetUrl('icon/icon-1.png'),
    imageAlt: 'Нетворкинг и полезные связи',
  },
  {
    id: 'library',
    title: 'ОГРОМНАЯ БИБЛИОТЕКА ЗНАНИЙ И АКТУАЛЬНЫЕ УРОКИ',
    text: 'Личный кабинет в котором 60+ уроков по соцсетям, продвижению, воронкам продаж, нейросетям, уроки с психологами, с юристами и тд. Плюс гайды, памятки, шаблоны, чек-листы.',
    variant: 'white',
    image: assetUrl('icon/icon-2.png'),
    imageAlt: 'Библиотека знаний',
  },
  {
    id: 'support',
    title: 'БЕЗЛИМИТНАЯ ПОМОЩЬ И ПОДДЕРЖКА ОТ КУРАТОРОВ И УЧАСТНИКОВ',
    text: 'Можно в любое время задавать вопросы, запрашивать обратную связь или просить поддержки.',
    variant: 'purple',
    image: assetUrl('icon/icon-3.png'),
    imageAlt: 'Поддержка от кураторов',
  },
  {
    id: 'experts',
    title: 'ЭКСПЕРТНЫЕ ZOOM-ВСТРЕЧИ',
    text: 'Психологи, нутрициологи, юристы и т.д. Плюс возможность для экспертов провести свою ZOOM-встречу с участниками в рамках клуба.',
    variant: 'white',
    image: assetUrl('icon/icon-4.png'),
    imageAlt: 'Экспертные ZOOM-встречи',
  },
  {
    id: 'ksenia',
    title: 'ZOOM-ВСТРЕЧИ С КСЕНИЕЙ БАРАНОВОЙ',
    text: 'Вы сможете в живом диалоге задать Ксении любой вопрос и получить обратную связь и рекомендации.',
    variant: 'purple',
    image: assetUrl('icon/icon-5.png'),
    imageAlt: 'ZOOM-встречи с Ксенией Барановой',
  },
  {
    id: 'privileges',
    title: 'БОНУСЫ «ДЛЯ СВОИХ»',
    text: 'Скидки и спецпредложения на продукты школы, конкурсы с призами и другие привилегии участникам клуба.',
    variant: 'white',
    image: assetUrl('icon/icon-6.png'),
    imageAlt: 'Бонусы для участников клуба',
  },
];

export const MEETINGS = {
  august: [
    {
      title: 'Мастермайнд с Кристиной Дейнеко на тему:',
      topic: '«Как написать книжку с помощью ИИ»',
    },
    {
      title: 'Мастермайнд с экспертом по нейровидео — Владиславом Кабаковым.',
    },
    {
      title: 'Мастермайнд с HR-специалистом Натальей Матрехиной на тему:',
      topic: '«Как сделать свое резюме привлекательным для работодателя»',
    },
  ],
  september: [
    {
      title: 'Zoom-встреча с Ксенией Барановой.',
      topic: 'Формат: вопрос–ответ.',
    },
    {
      title: 'Мастермайнд с Еленой Соколовой на тему:',
      topic: '«Актуальные тренды в SMM»',
    },
    {
      title: 'Мастермайнд с Юлией Бондаренко на тему:',
      topic: '«Тренды в работе с мессенджером MAX»',
    },
  ],
};

export const PRICING_FEATURES = [
  'Библиотека знаний 70+ уроков',
  'Живой эфир каждый месяц с Ксенией Барановой',
  'Чат в Телеграм',
  'Обратная связь от кураторов и Ксении Барановой в чате',
  'Партнерская программа',
  'Скидки на участие в других проектах Школы',
  'Бот Техподдержки',
];

export const PRICING_PLANS = [
  {
    id: 'featured-10',
    variant: 'featured',
    featured: true,
    marqueeText: 'самый выгодный тариф',
    accessLead: 'доступ',
    duration: 'НА 10 МЕСЯЦЕВ',
    bonus: '+ 2 месяца в подарок',
    price: '741',
    oldPrice: '1500',
    totalPrice: '9500',
    totalLabel: 'всё время',
  },
  {
    id: 'months-3',
    variant: 'light',
    durationLead: 'Доступ на',
    duration: '3 МЕСЯЦА',
    price: '1490',
    oldPrice: '1990',
    totalPrice: '4470',
  },
  {
    id: 'months-6',
    variant: 'light',
    durationLead: 'Доступ на',
    duration: '6 МЕСЯЦЕВ',
    price: '990',
    oldPrice: '1500',
    totalPrice: '5940',
  },
];

export const REVIEWS = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  image: assetUrl(`reviews/otziv-${index + 1}.png`),
  alt: `Отзыв участника клуба ${index + 1}`,
}));
