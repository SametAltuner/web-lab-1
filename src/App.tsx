import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import UIKit from './pages/UIKit';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [page, setPage] = useState<'portfolio' | 'uikit'>('portfolio');

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-blue-800 focus:text-white focus:p-2"
      >
        Ana içeriğe atla
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Samet Altuner — Portföy
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-1">
              <li>
                <button
                  onClick={() => setPage('portfolio')}
                  className={`px-3 py-1 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                    ${page === 'portfolio'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'}`}
                >
                  Portföy
                </button>
              </li>
              {page === 'portfolio' && (
                <>
                  <li>
                    <a href="#hakkimda" className="px-3 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Hakkımda
                    </a>
                  </li>
                  <li>
                    <a href="#projeler" className="px-3 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Projeler
                    </a>
                  </li>
                  <li>
                    <a href="#iletisim" className="px-3 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      İletişim
                    </a>
                  </li>
                </>
              )}
              <li>
                <button
                  onClick={() => setPage('uikit')}
                  className={`px-3 py-1 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                    ${page === 'uikit'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'}`}
                >
                  UI Kit
                </button>
              </li>
            </ul>
          </nav>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Tema değiştir"
          >
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
        </div>
      </header>

      {/* Page Content */}
      {page === 'uikit' ? (
        <UIKit />
      ) : (
        <main id="main-content">
          {/* Hakkımda */}
          <section id="hakkimda" className="py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              <figure className="shrink-0">
                <img
                  src="/1760975275328.jpg"
                  alt="Samet Altuner'in vesikalık fotoğrafı"
                  className="w-40 h-40 rounded-full object-cover shadow-lg ring-4 ring-blue-200 dark:ring-blue-800"
                />
                <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Samet Altuner
                </figcaption>
              </figure>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                  Hakkımda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Merhaba, ben <strong>Samet Altuner</strong>. Yazılım Mühendisliği öğrencisiyim.
                  Modern web ve mobil teknolojileriyle kullanıcı dostu arayüzler geliştiriyorum.
                </p>
                <ul
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Beceri etiketleri"
                >
                  {['Flutter', 'Java / Spring Boot', 'JavaScript', 'HTML / CSS', 'React', 'Tailwind CSS'].map(
                    (skill) => (
                      <li
                        key={skill}
                        className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm dark:bg-blue-700"
                      >
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* Projeler */}
          <section id="projeler" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  variant="elevated"
                  title="Rüya Tabiri"
                  image="/ruya tabırı.jpeg"
                  imageAlt="Rüya Tabiri uygulaması ana ekran görüntüsü"
                  footer={
                    <div className="flex gap-2">
                      <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs px-2 py-1 rounded-full">Flutter</span>
                    </div>
                  }
                >
                  Kullanıcıların rüyalarını yorumlatan kapsamlı bir mobil uygulama. Yapay zeka destekli rüya analizi sunar.
                </Card>
                <Card
                  variant="elevated"
                  title="Akademik İçerik Sistemi"
                  image="/Ekran görüntüsü 2026-02-24 231337.png"
                  imageAlt="Akademik İçerik Sistemi ekran görüntüsü"
                  footer={
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded-full">Spring Boot</span>
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full">Thymeleaf</span>
                    </div>
                  }
                >
                  Makale, bildiri, kitap ve proje gibi akademik içeriklerin listelendiği ve yönetilebildiği bir platform.
                </Card>
                <Card
                  variant="elevated"
                  title="Portfolio Web Sitesi"
                  footer={
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 text-xs px-2 py-1 rounded-full">React</span>
                      <span className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
                    </div>
                  }
                >
                  Vite + React + Tailwind CSS v4 ile geliştirilmiş modern, responsive ve dark mode destekli portföy sayfası.
                </Card>
              </div>
            </div>
          </section>

          {/* İletişim */}
          <section id="iletisim" className="py-16 px-4">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                İletişim
              </h2>
              <form
                className="space-y-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <Input id="name" label="Ad Soyad" placeholder="Samet Altuner" required />
                <Input
                  id="email"
                  label="E-posta"
                  type="email"
                  placeholder="ornek@mail.com"
                  helpText="İş teklifleri ve sorular için."
                  required
                />
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit" className="w-full">
                  Gönder
                </Button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
            <p>© 2026 Samet Altuner. Tüm hakları saklıdır.</p>
            <p className="mt-2 flex justify-center gap-4">
              <a
                href="https://github.com/SametAltuner"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/samet-altuner-910712294"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}

export default App;
