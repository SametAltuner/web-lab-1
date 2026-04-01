import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";
import "./App.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
