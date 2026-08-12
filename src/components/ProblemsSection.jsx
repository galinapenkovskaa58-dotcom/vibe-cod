import './ProblemsSection.css';

const ASSETS = {
  title: 'https://static.tildacdn.com/tild3637-3531-4437-b432-366632633961/__.png',
  photo: 'https://static.tildacdn.com/tild6463-3230-4136-b839-633565363537/confused-lovely-fema.png',
  arrowTopRight: 'https://static.tildacdn.com/tild3534-3933-4338-b865-323536366266/Arrow_5.png',
  arrowBottomRight: 'https://static.tildacdn.com/tild3662-6232-4030-b532-623535613434/Arrow_7.png',
  arrowTopLeft: 'https://static.tildacdn.com/tild3835-3635-4237-a236-356337366530/Arrow_5-1.png',
  arrowBottomLeft: 'https://static.tildacdn.com/tild6630-6362-4564-b239-346130626464/Arrow_6.png',
};

const BUBBLES = [
  {
    id: 'tl',
    text: 'Где теперь получить обратную связь? Попросить совета? Пообщаться с людьми?',
  },
  {
    id: 'bl',
    text: (
      <>
        А что делать дальше?
        <br />
        В каком направлении идти?
      </>
    ),
  },
  {
    id: 'tr',
    text: 'Нейросети обновились, все стало по-другому! Что теперь делать? У кого спросить?',
  },
  {
    id: 'br',
    text: 'Все… я пропал!',
  },
];

export default function ProblemsSection() {
  return (
    <section className="problems" aria-labelledby="problems-title">
      <div className="container problems__inner fade-in">
        <h2 className="problems__heading" id="problems-title">
          <img
            src={ASSETS.title}
            alt="Вот давайте честно"
            width={569}
            height={56}
          />
        </h2>

        <p className="problems__intro">
          Вы наверняка прошли уже много различных курсов и сталкивались с тем, что когда
          уходите «в свободное плавание», начинается:
        </p>

        <div className="problems__scene">
          {BUBBLES.map((bubble) => (
            <article
              key={bubble.id}
              className={`problems__bubble problems__bubble--${bubble.id}`}
            >
              <p className="problems__bubble-text">{bubble.text}</p>
            </article>
          ))}

          <div className="problems__center">
            <img
              className="problems__photo"
              src={ASSETS.photo}
              alt=""
              width={334}
              height={334}
              loading="lazy"
            />
            <img
              className="problems__arrow problems__arrow--tl"
              src={ASSETS.arrowTopLeft}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <img
              className="problems__arrow problems__arrow--bl"
              src={ASSETS.arrowBottomLeft}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <img
              className="problems__arrow problems__arrow--tr"
              src={ASSETS.arrowTopRight}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <img
              className="problems__arrow problems__arrow--br"
              src={ASSETS.arrowBottomRight}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
