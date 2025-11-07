import './App.css'
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import TextType from './components/TextType.jsx'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // smooth scroll with header offset for internal links
    const header = () => document.querySelector('header');
    const handleClick = (e) => {
      const a = e.currentTarget;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const headerEl = header();
      const offset = headerEl ? headerEl.getBoundingClientRect().height + 12 : 12;
      const top = window.scrollY + target.getBoundingClientRect().top - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    };

    const links = Array.from(document.querySelectorAll('a[href^="#"]'));
    links.forEach(l => l.addEventListener('click', handleClick));
    return () => links.forEach(l => l.removeEventListener('click', handleClick));
  }, []);

  return (
    <>
      <Header />
      <Hero>
        <TextType 
          text={["< Hola soy Daniel Gómez ", "< Bienvenido a mi portafolio "]}
          typingSpeed={40}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="/>"
        />
      </Hero>
      <Projects />
      {/* decorative divider for nice transition */}
      <div className="section-divider" aria-hidden="true" />
      <Contact />
    </>
  )
}

export default App
