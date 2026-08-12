import './ClubIntro.css';

const ASSETS = {
  whyTitle: 'https://static.tildacdn.com/tild6634-6137-4834-b065-316463356330/_____.png',
  hand: 'https://static.tildacdn.com/tild3232-3932-4039-b063-613232383961/Group_168_1_1.png',
};

export default function ClubIntro() {
  return (
    <section className="club-intro" aria-labelledby="club-intro-title">
      <div className="container club-intro__inner fade-in">
        <div className="club-intro__panel">
          <div className="club-intro__visual" aria-hidden="true">
            <img src={ASSETS.hand} alt="" width={294} height={294} loading="lazy" />
          </div>

          <div className="club-intro__content">
            <h2 className="club-intro__why" id="club-intro-title">
              <img
                src={ASSETS.whyTitle}
                alt="А знаете, почему это происходит?"
                width={460}
                height={56}
              />
            </h2>

            <p className="club-intro__lead">
              Вы просто выпали из контекста, который обеспечивал вам развитие и рост. И самое
              главное звено в этом контексте –{' '}
              <span className="club-intro__accent">ОКРУЖЕНИЕ.</span>
            </p>

            <div className="club-intro__club-card">
              <h3 className="club-intro__club-heading">
                <span className="club-intro__club-heading-lead">
                  Именно поэтому мы решили создать
                </span>
                <span className="club-intro__club-heading-name">Клуб SMM и нейросетей</span>
              </h3>
              <p className="club-intro__description">
                <strong>
                  Клуб SMM и Нейросетей - это сообщество единомышленников под кураторством Ксении
                  Барановой
                </strong>
                , с полной библиотекой знаний, наставниками и анонсами всех обновлений в сфере SMM
                и нейросетей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
