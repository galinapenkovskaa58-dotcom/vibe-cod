import { useEffect, useRef } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { PRICING_FEATURES, PRICING_PLANS } from '../data/content';
import Button from './Button';
import './PricingSection.css';

const MARQUEE_REPEAT = 8;
const VIGODA_BADGE = assetUrl('image/vigoda2.png');

function FeatureList({ variant = 'light' }) {
  return (
    <ul className={`pricing-card__features pricing-card__features--${variant}`}>
      {PRICING_FEATURES.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  );
}

function PricingCardHead({ plan }) {
  return (
    <div className="pricing-card__head">
      <div className="pricing-card__duration">
        <span className="pricing-card__duration-lead">{plan.durationLead}</span>
        <span className="pricing-card__duration-value">{plan.duration}</span>
      </div>

      <div className="pricing-card__pricing">
        <p className="pricing-card__price">
          <strong>{plan.price}</strong> ₽ / мес.
        </p>
        <p className="pricing-card__old-price">
          <s>{plan.oldPrice} ₽ / мес.</s>
        </p>
        <p className="pricing-card__total">{plan.totalPrice} ₽ / все время</p>
      </div>
    </div>
  );
}

function FeaturedPricingHead({ plan }) {
  return (
    <div className="pricing-card__head pricing-card__head--featured">
      <div className="pricing-card__access">
        <span className="pricing-card__access-lead">{plan.accessLead}</span>
        <span className="pricing-card__access-duration">{plan.duration}</span>
        <span className="pricing-card__access-bonus">{plan.bonus}</span>
      </div>

      <div className="pricing-card__pricing pricing-card__pricing--featured">
        <p className="pricing-card__price">
          <strong>{plan.price}</strong> ₽ / мес.
        </p>
        <p className="pricing-card__old-price">
          <s>{plan.oldPrice} ₽ / мес.</s>
        </p>
        <p className="pricing-card__total">
          {plan.totalPrice} ₽ / {plan.totalLabel}
        </p>
      </div>
    </div>
  );
}

function PricingMarquee({ text }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frameId = 0;
    let offset = 0;
    const speed = 0.75;

    const tick = () => {
      const loopWidth = track.scrollWidth / 2;

      if (loopWidth > 0) {
        offset += speed;
        if (offset >= loopWidth) {
          offset -= loopWidth;
        }
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [text]);

  const renderGroup = (prefix) =>
    Array.from({ length: MARQUEE_REPEAT }, (_, index) => (
      <span key={`${prefix}-${index}`} className="pricing-card__marquee-item">
        {text}
      </span>
    ));

  return (
    <div className="pricing-card__marquee" aria-hidden="true">
      <div className="pricing-card__marquee-track" ref={trackRef}>
        <div className="pricing-card__marquee-group">{renderGroup('a')}</div>
        <div className="pricing-card__marquee-group" aria-hidden="true">
          {renderGroup('b')}
        </div>
      </div>
    </div>
  );
}

function PricingFeaturedBadge() {
  const innerRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const innerEl = innerRef.current;
    const shineEl = shineRef.current;
    if (!innerEl || !shineEl) return undefined;

    let frameId = 0;
    const start = performance.now();
    const pulsePeriod = 3400;
    const shinePeriod = 5600;
    const minScale = 0.93;

    const getRotation = () =>
      window.matchMedia('(max-width: 640px)').matches ? -10 : -11;

    const tick = (now) => {
      const elapsed = now - start;
      const pulseProgress = (elapsed % pulsePeriod) / pulsePeriod;
      const scale = minScale + (1 - minScale) * (0.5 + 0.5 * Math.cos(pulseProgress * Math.PI * 2));
      const rotation = getRotation();

      innerEl.style.transform = `rotate(${rotation}deg) scale(${scale})`;

      const shineElapsed = elapsed % shinePeriod;
      const half = shinePeriod / 2;
      const isDown = shineElapsed < half;
      const localProgress = isDown ? shineElapsed / half : (shineElapsed - half) / half;
      const shineTop = isDown ? -35 + localProgress * 140 : 105 - localProgress * 140;

      let shineOpacity = 0.55;
      if (localProgress < 0.08) {
        shineOpacity = (localProgress / 0.08) * 0.55;
      } else if (localProgress > 0.92) {
        shineOpacity = ((1 - localProgress) / 0.08) * 0.55;
      }

      shineEl.style.top = `${shineTop}%`;
      shineEl.style.opacity = String(shineOpacity);

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="pricing__featured-badge" aria-hidden="true">
      <div className="pricing__featured-badge-inner" ref={innerRef}>
        <img src={VIGODA_BADGE} alt="" width={340} height={340} loading="lazy" />
        <span className="pricing__featured-badge-shine">
          <span className="pricing__featured-badge-shine-band" ref={shineRef} />
        </span>
      </div>
    </div>
  );
}

function PricingCard({ plan }) {
  const isFeatured = plan.variant === 'featured';
  const isLight = plan.variant === 'light';

  if (isFeatured) {
    return (
      <article
        className="pricing-card pricing-card--featured"
        aria-label="Самый выгодный тариф"
      >
        <PricingMarquee text={plan.marqueeText} />

        <div className="pricing-card__body">
          <FeaturedPricingHead plan={plan} />
          <FeatureList variant="featured" />
          <Button
            href="#"
            className="btn--wide btn--compact pricing-card__btn pricing-card__btn--featured"
            ariaLabel="Получить доступ"
          >
            Получить доступ
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className="pricing-card pricing-card--light" aria-label="Тарифный план">
      <PricingCardHead plan={plan} />
      <FeatureList variant="light" />
      <Button
        href="#"
        className="btn--wide btn--compact pricing-card__btn"
        ariaLabel="Получить доступ"
      >
        Получить доступ
      </Button>
    </article>
  );
}

export default function PricingSection() {
  const featuredPlan = PRICING_PLANS.find((plan) => plan.variant === 'featured');
  const otherPlans = PRICING_PLANS.filter((plan) => plan.variant !== 'featured');

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container pricing__inner fade-in">
        <h2 className="pricing__title section-title visually-hidden" id="pricing-title">
          Тарифы
        </h2>

        {featuredPlan && (
          <div className="pricing__featured-wrap">
            <PricingCard plan={featuredPlan} />
            <PricingFeaturedBadge />
          </div>
        )}

        <div className="pricing__grid">
          {otherPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
