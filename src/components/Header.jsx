import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import defaultOpen from '../assets/menu-open.svg';
import defaultClose from '../assets/menu-close.svg';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


function Header({ openIcon = defaultOpen, closeIcon = defaultClose }) {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

      gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: section,
        offsetY: 70, // Ajusta el desplazamiento para evitar que el header cubra la sección
      },
      ease: "power2.out",
    });
  }
};

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // Detecta cuando el 60% de la sección está visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title"><strong>Mi portafolio</strong></h1>

                <button
                    className={`menu-toggle ${open ? 'open' : ''}`}
                    aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <img
                        src={open ? closeIcon : openIcon}
                        alt=""
                        aria-hidden="true"
                        className="menu-icon"
                    />
                    <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
                </button>

                <nav className={`header-nav ${open ? 'open' : ''}`}>
                    <a
                        href="#projects"
                        className={`header-link ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#projects');
                            setOpen(false);
                        }}
                    >
                        Proyectos
                    </a>
                    <a
                        href="#about"
                        className={`header-link ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#about');
                            setOpen(false);
                        }}
                    >
                        Sobre mí
                    </a>
                    <a
                        href="#contact"
                        className={`header-link ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#contact');
                            setOpen(false);
                        }}
                    >
                        Contáctame
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;