import '../styles/Hero.css';
import miAvatar from '../assets/miAvatar-Photoroom.png';
import miAvatarSaludo from '../assets/miAvatar-saludo-Photoroom.png';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mailIcon from '../assets/email.svg';
import React, { useState, useEffect } from 'react';

function Hero({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleHeroButtonClick = (e) => {
      e.preventDefault();
      const target = document.querySelector('#projects');
      if (!target) return;

      // Scroll suave con desplazamiento
      const offset = window.innerWidth <= 768 ? -50 : -100;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // hace que la transición sea bonita y fluida
      });
    };

    const heroButton = document.querySelector('.hero-button');
    if (heroButton) {
      heroButton.addEventListener('click', handleHeroButtonClick);
    }

    return () => {
      if (heroButton) {
        heroButton.removeEventListener('click', handleHeroButtonClick);
      }
    };
  }, []);

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
            <a className="hero-button">
              Ver proyectos
            </a>
            <a className="hero-button secondary">
              Contáctame
            </a>
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
              href="mailto:tu@correo.com"
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
