import { useRef, useState } from 'react';
import Button from './Button';
import clubVideo from '../../video/Club.mp4';
import './VideoSection.css';

const ASSETS = {
  laptop: 'https://static.tildacdn.com/tild6666-3730-4638-b064-623132303934/Group_146_1.png',
};

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    setIsPlaying(true);

    requestAnimationFrame(async () => {
      const video = videoRef.current;
      if (!video) return;

      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    });
  };

  return (
    <section className="video-section" aria-labelledby="video-section-title">
      <div className="container video-section__inner fade-in">
        <div className="video-section__media">
          {!isPlaying ? (
            <button
              type="button"
              className="video-section__poster"
              onClick={handlePlay}
              aria-label="Смотреть видео о клубе"
            >
              <img
                src={ASSETS.laptop}
                alt=""
                width={804}
                height={507}
                loading="lazy"
              />
            </button>
          ) : (
            <div className="video-section__player">
              <video
                ref={videoRef}
                className="video-section__video"
                src={clubVideo}
                controls
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          )}
        </div>

        <div className="video-section__content">
          <h2 className="video-section__title" id="video-section-title">
            Просто посмотрите это видео
          </h2>
          <p className="video-section__subtitle">
            и вы поймете, почему внутри клуба ваш рост в деньгах неизбежен
          </p>
          <Button href="#pricing" className="btn--wide" ariaLabel="Вступить в клуб">
            Вступить в клуб
          </Button>
        </div>
      </div>
    </section>
  );
}
