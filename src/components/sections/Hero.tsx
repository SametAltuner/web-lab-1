export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Merhaba, ben</p>
        <h1 className="hero-title">Samet Altuner</h1>
        <p className="hero-subtitle">
          Yazilim Muhendisligi Ogrencisi | Flutter & Spring Boot & React
        </p>
        <div className="hero-actions">
          <a href="#projeler" className="btn btn-primary">
            Projelerimi Gor
          </a>
          <a href="#iletisim" className="btn btn-outline">
            Iletisime Gec
          </a>
        </div>
      </div>
    </section>
  );
}
