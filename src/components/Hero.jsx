import { assetUrl } from '../utils/assetUrl';
import './Hero.css';

const NAV_LINKS = [
  { label: 'Что внутри', href: '#club-inside' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Тарифы', href: '#pricing' },
];

const ASSETS = {
  logo: 'https://static.tildacdn.com/tild3733-3832-4463-b739-323063326464/2Mask_group.png',
  title: 'https://static.tildacdn.com/tild3965-3033-4261-a637-613133353465/Group_2085666083.svg',
  photo: 'https://static.tildacdn.com/tild3766-3239-4162-b038-663963666263/IMG_5526.png',
  cloudBase: 'https://static.tildacdn.com/tild6539-6463-4138-b764-636666383532/1_1.png',
  cloudLeft: 'https://static.tildacdn.com/tild3234-3063-4561-a638-326532336265/pngwingcom_1_1.png',
  decorLeft: assetUrl('image/hero-decor-left.png'),
  decorRight: assetUrl('image/hero-decor-right.png'),
  scroll: 'https://static.tildacdn.com/tild3439-6536-4235-b438-666238633530/3-1.png',
};

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__panel">
        <div className="hero__decor" aria-hidden="true">
          <img
            className="hero__decor-img hero__decor-img--left"
            src={ASSETS.decorLeft}
            alt=""
          />
          <img
            className="hero__decor-img hero__decor-img--right"
            src={ASSETS.decorRight}
            alt=""
          />
        </div>

        <div className="hero__clouds" aria-hidden="true">
          <img
            className="hero__cloud hero__cloud--base"
            src={ASSETS.cloudBase}
            alt=""
          />
          <img
            className="hero__cloud hero__cloud--mid"
            src={ASSETS.cloudLeft}
            alt=""
          />
          <img
            className="hero__cloud hero__cloud--far-right"
            src={ASSETS.cloudLeft}
            alt=""
          />
        </div>

        <div className="hero__portrait">
          <img
            src={ASSETS.photo}
            alt="Ксения Баранова"
            width={777}
            height={720}
          />
        </div>

        <div className="hero__container">
          <nav className="hero__nav" aria-label="Основная навигация">
            <a className="hero__logo" href="#top" aria-label="Ксения Baranova">
              <img src={ASSETS.logo} alt="Xenia Baranova" width={136} height={110} />
            </a>
            <ul className="hero__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hero__body">
            <div className="hero__copy">
              <h1 className="hero__title">
                <img
                  src={ASSETS.title}
                  alt="Клуб нейросетей и SMM Ксении Барановой"
                  width={556}
                  height={273}
                />
              </h1>
              <p className="hero__subtitle">
                Сильное окружение и лучшие инструменты для вашего финансового роста
              </p>
              <a className="hero__cta" href="#pricing" aria-label="Вступить в клуб">
                Вступить в клуб
              </a>
            </div>
          </div>

          <a className="hero__scroll" href="#club-inside" aria-label="Прокрутить вниз">
            <img src={ASSETS.scroll} alt="" width={50} height={44} />
          </a>
        </div>
      </div>
    </header>
  );
}
