import { assetUrl } from '../utils/assetUrl';
import { useCallback, useEffect, useRef, useState } from 'react';
import { REVIEWS } from '../data/content';
import './ReviewsSection.css';

const REVIEWS_COUNT = REVIEWS.length;

function ReviewsDecor() {
  const floatRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const floatEl = floatRef.current;
    const imageEl = imageRef.current;
    if (!floatEl || !imageEl) return undefined;

    let frameId = 0;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = (now - start) / 1000;
      const x = Math.sin(elapsed * 0.75) * 12 + Math.sin(elapsed * 1.15) * 4;
      const y = Math.cos(elapsed * 0.65) * 10 + Math.cos(elapsed * 0.95) * 4;
      const rotation = (elapsed * 6) % 360;

      floatEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      imageEl.style.transform = `rotate(${rotation}deg)`;

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="reviews__decor" aria-hidden="true">
      <div className="reviews__decor-float" ref={floatRef}>
        <img
          ref={imageRef}
          className="reviews__decor-image"
          src={assetUrl('reviews/decor-sphere.png')}
          alt=""
          width={660}
          height={660}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ChevronIcon({ direction = 'left' }) {
  return (
    <svg
      className={`reviews__nav-icon reviews__nav-icon--${direction}`}
      width="12"
      height="20"
      viewBox="0 0 12 20"
      aria-hidden="true"
    >
      <path
        d={direction === 'left' ? 'M10 2L2 10l8 8' : 'M2 2l8 8-8 8'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index) => {
    setActiveIndex((index + REVIEWS_COUNT) % REVIEWS_COUNT);
  }, []);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const activeReview = REVIEWS[activeIndex];

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="container reviews__inner fade-in">
        <header className="reviews__header">
          <h2 className="reviews__title" id="reviews-title">
            ЧТО ГОВОРЯТ УЧАСТНИКИ
          </h2>
          <p className="reviews__subtitle">о клубе SMM и Нейросетей</p>
        </header>

        <div className="reviews__stage">
          <ReviewsDecor />

          <div className="reviews__slider">
            <button
              type="button"
              className="reviews__nav reviews__nav--prev"
              onClick={goPrev}
              aria-label="Предыдущий отзыв"
            >
              <ChevronIcon direction="left" />
            </button>

            <div
              className="reviews__viewport"
              aria-live="polite"
              aria-atomic="true"
            >
              <figure className="reviews__figure">
                <img
                  key={activeReview.id}
                  className="reviews__image"
                  src={activeReview.image}
                  alt={activeReview.alt}
                  loading="lazy"
                />
              </figure>
            </div>

            <button
              type="button"
              className="reviews__nav reviews__nav--next"
              onClick={goNext}
              aria-label="Следующий отзыв"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

        <p className="reviews__footnote">
          Со слов участников, клуб – это мотивация, вдохновение, мягкая дисциплина,
          «волшебный пендель» и место, где хочется быть
        </p>
      </div>
    </section>
  );
}
