import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>
      <header>
        <h1>Samet Altuner - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="/profil.jpg" alt="Samet Altuner'in vesikalik fotografi" width="150" height="150" />
              <figcaption>Samet Altuner</figcaption>
            </figure>
            <div>
              <p>Merhaba, ben Samet Altuner. Yazilim Muhendisligi ogrencisiyim.</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>Flutter</li>
                <li>Java-Spring Boot</li>
                <li>Javascript</li>
                <li>HTML / CSS</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="/ruya-tabiri.jpg" alt="Ruya Tabiri uygulamasi ana ekran goruntusu" width="800" height="400" loading="lazy" />
              <h3>Ruya Tabiri</h3>
              <p>Kullanicilarin ruyalarini yorumlatan kapsamli bir mobil uygulama.</p>
              <ul className="skill-tags">
                <li>Flutter</li>
              </ul>
            </article>
            <article className="project-card">
              <img src="/proexpert.png" alt="Proexpert Akademik Icerik Sistemi ekran goruntusu" width="800" height="400" loading="lazy" />
              <h3>Akademik Icerik Sistemi</h3>
              <p>Makale, bildiri, kitap ve proje gibi akademik iceriklerin listelendigi ve yonetilebildigi bir platform.</p>
              <ul className="skill-tags">
                <li>Java-Spring Boot</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name"
                  required minLength={2}
                  aria-describedby="name-error" />
                <small id="name-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email"
                  required
                  aria-describedby="email-error" />
                <small id="email-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required
                  aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message"
                  rows={5} required minLength={10}
                  aria-describedby="message-error">
                </textarea>
                <small id="message-error" className="error-msg"
                  role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Samet ALTUNER. Tum haklari saklidir.</p>
        <p>
          <a href="https://github.com/SametAltuner" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/samet-altuner-910712294" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </>
  )
}

export default App
