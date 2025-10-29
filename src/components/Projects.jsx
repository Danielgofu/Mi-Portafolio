import React from 'react';
import '../styles/Projects.css';

const sampleProjects = [
  {
    id: 1,
    title: 'Dashboard UI',
    desc: 'Dashboard interactivo con gráficos y filtros. Enfocado en rendimiento y accesibilidad.',
    tech: ['React', 'Vite', 'Chart.js'],
    live: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'E-commerce demo',
    desc: 'Tienda de ejemplo con carrito, checkout y optimizaciones de carga de imágenes.',
    tech: ['React', 'Tailwind', 'Stripe'],
    live: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'Blog estático',
    desc: 'Blog rápido con Markdown y generación estática, SEO optimizado.',
    tech: ['Gatsby', 'MDX'],
    live: '#',
    repo: '#'
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">
        <h2 id="projects-title" className="projects-title">Proyectos destacados</h2>
        <p className="projects-subtitle">Trabajos recientes que combinan diseño y rendimiento.</p>

        <div className="projects-grid">
          {sampleProjects.map(p => (
            <article key={p.id} className="project-card" aria-labelledby={`proj-${p.id}`}>
              <div className="project-visual" role="img" aria-label={p.title}>
                <span className="pv-initials">{p.title.split(' ').map(w=>w[0]).slice(0,2).join('')}</span>
              </div>

              <div className="project-body">
                <h3 id={`proj-${p.id}`} className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-tech" aria-hidden="true">
                  {p.tech.map(t => <li key={t}>{t}</li>)}
                </ul>

                <div className="project-cta">
                  <a className="btn btn-primary" href={p.live} target="_blank" rel="noopener noreferrer">
                    Ver demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 21H3V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`Repositorio ${p.title}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.54 1.19 3.16.91.1-.71.38-1.19.69-1.46-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.13a10.6 10.6 0 0 1 2.8-.38c.95 0 1.9.13 2.8.38 2.13-1.43 3.07-1.13 3.07-1.13.62 1.54.23 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.25-2.59 5.19-5.06 5.46.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.76.53 4.4-1.47 7.55-5.63 7.55-10.53C23.25 5.48 18.27.5 12 .5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}