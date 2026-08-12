import { BENEFITS } from '../data/content';
import Button from './Button';
import MeetingsSection from './MeetingsSection';
import './ClubBenefits.css';

const SUMMARY_ASSETS = {
  photo: 'https://static.tildacdn.com/tild3562-3261-4733-b435-646438396365/IMG_5532_1_1.png',
  decor: 'https://static.tildacdn.com/tild6237-6262-4238-b364-393833656263/Group_148.png',
};

export default function ClubBenefits() {
  return (
    <section className="club-benefits" id="club-inside" aria-labelledby="club-benefits-title">
      <div className="container club-benefits__inner fade-in">
        <div className="club-benefits__wrapper">
          <h2 className="club-benefits__title" id="club-benefits-title">
            Из чего именно состоит клуб:
          </h2>

          <div className="club-benefits__list">
            <div className="club-benefits__meetings">
              <MeetingsSection />
            </div>

            {BENEFITS.map((benefit, index) => (
              <article
                key={benefit.id}
                className={`benefit-card benefit-card--${benefit.variant}${
                  index % 2 === 1 ? ' benefit-card--reverse' : ''
                }`}
                style={{ animationDelay: `${(index + 1) * 0.06}s` }}
              >
                <div className="benefit-card__content">
                  {benefit.title && (
                    <h3 className="benefit-card__title">{benefit.title}</h3>
                  )}
                  <p className="benefit-card__text">{benefit.text}</p>
                </div>
                <div className="benefit-card__media">
                  <img
                    src={benefit.image}
                    alt={benefit.imageAlt ?? ''}
                    loading="lazy"
                  />
                </div>
              </article>
            ))}

            <div className="club-benefits__summary">
              <div className="club-benefits__summary-content">
                <h3 className="club-benefits__summary-title">
                  <span className="club-benefits__summary-title-line">
                    ВСЕ ЭТИ ИНСТРУМЕНТЫ
                  </span>
                  <span className="club-benefits__summary-title-line">
                    + МОЩНОЕ ОКРУЖЕНИЕ
                  </span>
                </h3>
                <p className="club-benefits__summary-lead">
                  неизбежно приведут вас к росту
                </p>
                <Button
                  href="#pricing"
                  className="btn--wide club-benefits__summary-btn"
                  ariaLabel="Вступить в клуб"
                >
                  Вступить в клуб
                </Button>
              </div>
              <div className="club-benefits__summary-media" aria-hidden="true">
                <img
                  className="club-benefits__summary-deco"
                  src={SUMMARY_ASSETS.decor}
                  alt=""
                  loading="lazy"
                />
                <img
                  className="club-benefits__summary-photo"
                  src={SUMMARY_ASSETS.photo}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
