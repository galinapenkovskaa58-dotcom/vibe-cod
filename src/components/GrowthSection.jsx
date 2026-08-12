import Button from './Button';
import './GrowthSection.css';

export default function GrowthSection() {
  return (
    <section className="growth" aria-labelledby="growth-title">
      <div className="container growth__inner fade-in">
        <img
          className="growth__image"
          src="https://static.tildacdn.com/tild6638-3862-4166-b437-613832356339/ChatGPT_Image_29__20.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="growth__content">
          <h2 className="growth__title section-title" id="growth-title">
            неизбежно приведут вас к росту
          </h2>
          <Button href="#pricing" className="btn--wide" ariaLabel="Вступить в клуб">
            Вступить в клуб
          </Button>
        </div>
      </div>
    </section>
  );
}
