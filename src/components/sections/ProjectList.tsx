import { useState, useEffect, useMemo } from "react";
import type {
  Project, Category, SortField, SortOrder
} from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";

export default function ProjectList() {
  // State
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<Category | "all">("all");
  const [sortField, setSortField] =
    useState<SortField>("year");
  const [sortOrder, setSortOrder] =
    useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Veri cekme
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Bilinmeyen hata olustu"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Filtrelenmis ve siralanmis veri (useMemo ile memoized)
  const filtered = useMemo(
    () =>
      applyFilters(
        projects,
        search,
        category,
        sortField,
        sortOrder
      ),
    [projects, search, category, sortField, sortOrder]
  );

  return (
    <section id="projeler">
      <h2>Projelerim</h2>
      <p className="section-subtitle">
        Uzerinde calistigim projeler
      </p>

      {/* Hata */}
      {error && (
        <div className="alert alert-error" role="alert">
          <strong>Hata:</strong> {error}
          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline"
            style={{ marginLeft: "1rem" }}
          >
            Tekrar dene
          </button>
        </div>
      )}

      {/* Filtreler */}
      {!loading && !error && (
        <ProjectFilter
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sortField={sortField}
          onSortFieldChange={setSortField}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
          resultCount={filtered.length}
          totalCount={projects.length}
        />
      )}

      {/* Yukleniyor */}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner" />
          <p>Yukleniyor...</p>
        </div>
      )}

      {/* Bos durum */}
      {!loading && !error && filtered.length === 0 && (
        <p className="status-msg">
          Eslesen proje bulunamadi.
        </p>
      )}

      {/* Proje grid */}
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
              <div className="project-card-content">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  {project.featured && (
                    <span className="project-featured">★ One Cikan</span>
                  )}
                </div>
                <p>{project.description}</p>

                <ul className="skill-tags">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-category">{project.category}</span>
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
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
