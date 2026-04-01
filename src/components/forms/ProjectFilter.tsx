import type {
  Category, SortField, SortOrder
} from "../../types/project";

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories: {
  value: Category | "all";
  label: string;
}[] = [
  { value: "all", label: "Tumu" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="filters">
      {/* Arama */}
      <div className="filter-search">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Proje ara (baslik, aciklama, teknoloji)..."
          aria-label="Proje ara"
        />
      </div>

      {/* Kategori + Siralama */}
      <div className="filter-row">
        {/* Kategori butonlari */}
        <div
          className="filter-categories"
          role="group"
          aria-label="Kategori filtresi"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`filter-btn ${
                category === cat.value ? "active" : ""
              }`}
              aria-pressed={category === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Siralama */}
        <div className="filter-sort">
          <select
            value={sortField}
            onChange={(e) =>
              onSortFieldChange(e.target.value as SortField)
            }
            aria-label="Siralama alani"
          >
            <option value="year">Yil</option>
            <option value="title">Baslik</option>
          </select>

          <button
            className="filter-btn sort-order-btn"
            onClick={() =>
              onSortOrderChange(
                sortOrder === "asc" ? "desc" : "asc"
              )
            }
            aria-label={`Siralama yonu: ${
              sortOrder === "asc" ? "artan" : "azalan"
            }`}
          >
            {sortOrder === "asc" ? "▲ Artan" : "▼ Azalan"}
          </button>
        </div>
      </div>

      {/* Sonuc sayisi */}
      <p className="result-count">
        {resultCount} / {totalCount} proje gosteriliyor
      </p>
    </div>
  );
}
