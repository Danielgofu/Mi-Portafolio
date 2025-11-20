import '../styles/Hero.css';
import miAvatar from '../assets/miAvatar-Photoroom.png';
import miAvatarSaludo from '../assets/miAvatar-saludo-Photoroom.png';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mailIcon from '../assets/email.svg';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

function Hero({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef();
  const contactButtonRef = useRef();
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`[debug] scrollToSection: target not found -> #${sectionId}`);
    return;
  }

  const headerEl = document.querySelector("header");
  const offset = headerEl ? headerEl.getBoundingClientRect().height + 12 : (window.innerWidth <= 768 ? 50 : 100);

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: section, offsetY: offset, autoKill: true },
    ease: "power2.out",
  });
};
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar-container">
          <img
            src={isHovered ? miAvatarSaludo : miAvatar}
            alt="Mi avatar"
            className="hero-avatar"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>

        <div className="hero-text-container">
          <h1 className="hero-title">{children}</h1>
          <p className="hero-subtitle">
            Desarrollo interfaces limpias, aplicaciones y proyectos que combinan diseño y rendimiento.
          </p>
          <div className="hero-buttons">
            <button 
              ref={buttonRef}
              className="hero-button"
              onClick={() => scrollToSection('projects')}
            >
              Ver proyectos
            </button>
            <button 
              ref={contactButtonRef}
              className="hero-button secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contáctame
            </button>
          </div>

          <div className="hero-socials" aria-label="Redes sociales">
            <a
              className="social-btn"
              href="https://github.com/Danielgofu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" className="social-svg" />
            </a>

            <a
              className="social-btn"
              href="https://www.linkedin.com/in/daniel-gómez-san-andrés-74369b335"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-svg" />
            </a>

            <a
              className="social-btn"
              href="mailto:danielgofu8@gmail.com"
              aria-label="Email"
            >
              <img src={mailIcon} alt="Email" className="social-svg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
