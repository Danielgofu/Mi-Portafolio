import '../styles/Hero.css';
import miAvatar from '../assets/miAvatar-Photoroom.png';
import miAvatarSaludo from '../assets/miAvatar-saludo-Photoroom.png';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mailIcon from '../assets/email.svg';
import { gsap } from "gsap";
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import { useState } from 'react';

gsap.registerPlugin(ScrollToPlugin);

function Hero({children}) {
  
document.querySelector('.btn-hero').addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#servicios-lista');
  // Ajustar el offset dinámicamente según el tamaño de la pantalla
  const offset = window.innerWidth <= 768 ? -50 : -100;
  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY + offset;
  // Usar GSAP para animar el desplazamiento
  gsap.to(window, {
    scrollTo: { y: targetPosition, autoKill: true },
    duration: 1,
    ease: 'power2.out',
  });
});
  const [isHovered, setIsHovered] = useState(false);

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
            <a
              href="#projects" 
              className="hero-button"
              >
                Ver proyectos
            </a>
            <a
              href="#"
              className="hero-button secondary"
            >
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