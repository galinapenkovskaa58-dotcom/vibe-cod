import { MEETINGS } from '../data/content';
import './MeetingsSection.css';

function MeetingItem({ item }) {
  return (
    <li className="meetings__item">
      <p className="meetings__item-title">{item.title}</p>
      {item.topic && <p className="meetings__item-topic">{item.topic}</p>}
    </li>
  );
}

export default function MeetingsSection() {
  return (
    <div className="meetings" aria-labelledby="meetings-title">
      <div className="meetings__header">
        <h3 className="meetings__title" id="meetings-title">
          ВСТРЕЧИ, КОТОРЫЕ ОДНОЗНАЧНО НЕЛЬЗЯ ПРОПУСТИТЬ
        </h3>
      </div>

      <div className="meetings__columns">
        <div className="meetings__month">
          <h4 className="meetings__month-label">Август</h4>
          <ul className="meetings__list">
            {MEETINGS.august.map((item) => (
              <MeetingItem key={item.title} item={item} />
            ))}
          </ul>
        </div>

        <div className="meetings__month">
          <h4 className="meetings__month-label">Сентябрь</h4>
          <ul className="meetings__list">
            {MEETINGS.september.map((item) => (
              <MeetingItem key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
