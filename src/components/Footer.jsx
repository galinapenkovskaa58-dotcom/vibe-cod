import './Footer.css';

const ASSETS = {
  logo: 'https://static.tildacdn.com/tild3033-3939-4337-b562-366165656539/2Mask_group.png',
  license: 'https://static.tildacdn.com/tild6539-6638-4662-a639-663861336234/photo.jpg',
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__license-header">
          <p>Школа лицензирована Министерством образования и науки</p>
          <p>Регистрационный номер лицензии № Л035-01198-02/00172850</p>
        </div>

        <div className="footer__grid">
          <div className="footer__branding">
            <img
              className="footer__logo"
              src={ASSETS.logo}
              alt="Xenia Baranova"
              width={154}
              height={125}
              loading="lazy"
            />
            <p className="footer__disclaimer">
              <em>Инстаграм* — признан экстремистской соцсетью и запрещен на территории РФ</em>
            </p>
          </div>

          <div className="footer__doc">
            <img
              className="footer__doc-image"
              src={ASSETS.license}
              alt="Лицензия на образовательную деятельность"
              width={200}
              height={280}
              loading="lazy"
            />
          </div>

          <div className="footer__legal">
            <nav className="footer__links" aria-label="Юридическая информация">
              <a href="https://xeniabaranova-school.ru/oferta_new" target="_blank" rel="noopener noreferrer">
                Публичная оферта
              </a>
              <a href="https://xeniabaranova-school.ru/politica" target="_blank" rel="noopener noreferrer">
                Политика конфиденциальности
              </a>
            </nav>

            <div className="footer__details">
              <p>ИП Баранова Ксения Николаевна</p>
              <p>ИНН 027402381827</p>
              <p>ОГРНИП 317028000116318</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
