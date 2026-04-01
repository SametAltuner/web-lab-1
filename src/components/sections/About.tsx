export default function About() {
  return (
    <section id="hakkimda">
      <h2>Hakkimda</h2>
      <div className="about-content">
        <figure>
          <img
            src="/profil.jpg"
            alt="Samet Altuner'in vesikalik fotografi"
            width="150"
            height="150"
          />
          <figcaption>Samet Altuner</figcaption>
        </figure>
        <div>
          <p>
            Merhaba, ben Samet Altuner. Yazilim Muhendisligi ogrencisiyim.
            Mobil uygulama gelistirme, web gelistirme ve backend sistemleri
            uzerine calismalar yapiyorum.
          </p>
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>Flutter</li>
            <li>Java-Spring Boot</li>
            <li>Javascript</li>
            <li>HTML / CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
