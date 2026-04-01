import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#hakkimda", label: "Hakkimda" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "Iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav aria-label="Ana navigasyon">
        {/* Logo */}
        <a href="#hero" className="logo">
          Samet Altuner
        </a>

        {/* Desktop nav */}
        <ul className="nav-desktop">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobil menu butonu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobil menu */}
      {menuOpen && (
        <ul className="nav-mobile">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
