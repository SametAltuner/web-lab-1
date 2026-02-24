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
          <figure>
            <img src="/profil.jpg" alt="Samet Altuner'in vesikalik fotografi" />
            <figcaption>Samet Altuner</figcaption>
          </figure>
          <p>Merhaba, ben Samet Altuner. Yazilim Muhendisligi ogrencisiyim.</p>
          <ul>
            <li>Flutter</li>
            <li>Java</li>
            <li>React / TypeScript</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Ruya Tabiri</h3>
            <img src="/ruya-tabiri.jpg" alt="Ruya Tabiri uygulamasi ana ekran goruntusu" />
            <p>Kullanicilarin ruyalarini yorumlatan kapsamli bir mobil uygulama.</p>
            <p><strong>Kullanilan Teknoloji:</strong> Flutter</p>
          </article>
          <article>
            <h3>Akademik Icerik Sistemi</h3>
            <img src="/proexpert.png" alt="Proexpert Akademik Icerik Sistemi ekran goruntusu" />
            <p>Makale, bildiri, kitap ve proje gibi akademik iceriklerin listelendigi ve yonetilebildigi bir platform.</p>
            <p><strong>Kullanilan Teknoloji:</strong> Java</p>
          </article>
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
        <p>&copy; 2025 Samet Altuner. Tum haklari saklidir.</p>
        <p>
          <a href="https://github.com/SametAltuner" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/samet-altuner-910712294" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </>
  )
}

export default App
