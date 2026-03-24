import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import "./App.css";

export default function App() {
  // --- STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERİ ÇEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TÜRETİLMİŞ (DERIVED) VERİ ---
  const filtered = applyFilters(
    projects,
    search,
    category,
    sortField,
    sortOrder
  );

  const categories: (Category | "all")[] = [
    "all",
    "frontend",
    "fullstack",
    "backend",
  ];

  // --- UI ---
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
        {/* HAKKIMDA */}
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

        {/* PROJELER */}
        <section id="projeler">
          <h2>Projelerim</h2>

          {/* FİLTRELER */}
          <div className="filters">
            {/* Arama */}
            <div className="filter-search">
              <input
                id="search"
                type="text"
                placeholder="Proje ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Proje ara"
              />
            </div>

            {/* Kategori Butonları */}
            <div className="filter-categories" role="group" aria-label="Kategori filtresi">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${category === cat ? "active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat === "all" ? "Tumu" : cat}
                </button>
              ))}
            </div>

            {/* Sıralama */}
            <div className="filter-sort">
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortField)}
                aria-label="Siralama alani"
              >
                <option value="year">Yil</option>
                <option value="title">Baslik</option>
              </select>
              <button
                className="filter-btn sort-order-btn"
                onClick={() =>
                  setSortOrder((o) => (o === "asc" ? "desc" : "asc"))
                }
                aria-label="Siralama yonu degistir"
              >
                {sortOrder === "asc" ? "▲ Artan" : "▼ Azalan"}
              </button>
            </div>
          </div>

          {/* HATA DURUMU */}
          {error && (
            <div className="alert alert-error" role="alert">
              <strong>Hata:</strong> {error}
            </div>
          )}

          {/* YÜKLENİYOR */}
          {loading && (
            <p className="status-msg">Yukleniyor...</p>
          )}

          {/* SONUÇ YOK */}
          {!loading && !error && filtered.length === 0 && (
            <p className="status-msg">Eslesen proje bulunamadi.</p>
          )}

          {/* PROJE LİSTESİ */}
          {!loading && !error && (
            <div className="project-grid">
              {filtered.map((project) => (
                <article className="project-card" key={project.id}>
                  <img
                    src={project.image}
                    alt={`${project.title} ekran goruntusu`}
                    width="800"
                    height="400"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/800x400/1e293b/646cff?text=" +
                        encodeURIComponent(project.title);
                    }}
                  />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul className="skill-tags">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                    {project.featured && (
                      <span className="project-featured">★ Öne Çıkan</span>
                    )}
                  </div>

                  <div className="project-links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Demo
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Kaynak Kod
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* SONUÇ SAYISI */}
          {!loading && (
            <p className="result-count">
              {filtered.length} / {projects.length} proje gosteriliyor
            </p>
          )}
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Samet ALTUNER. Tum haklari saklidir.</p>
        <p>
          <a
            href="https://github.com/SametAltuner"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/samet-altuner-910712294"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </>
  );
}
