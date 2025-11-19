import React, { useState, useEffect } from "react";
import "./StyleLab.css";
import Switch from "./components/Switch";

export default function StyleLab() {
  const [primary, setPrimary] = useState("#8b5cf6");
  const [secondary, setSecondary] = useState("#000000");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleDarkMode = (isDark) => {
    setIsDarkMode(isDark);
    document.documentElement.style.setProperty(
      "--bg-secondary",
      isDark ? "#1a1b1f" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--text",
      isDark ? "#e5e5e5" : "#333333"
    );
    document.documentElement.style.setProperty(
      "--muted",
      isDark ? "#9ca3af" : "#666666"
    );
  };

  useEffect(() => {
    handleToggleDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <main className="stylelab-main">
      <div className="stylelab-darkmode">
        <Switch isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />
      </div>
      <div className="stylelab-container">
        <header className="stylelab-header">
          <div className="stylelab-title-subtitle">
            <h1 className="stylelab-title">
              StyleLab
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-flask"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814l.034 .077a1.7 1.7 0 0 1 -.002 1.193l-.07 .162a1.7 1.7 0 0 1 -1.213 .911l-.181 .017h-11l-.181 -.017a1.7 1.7 0 0 1 -1.285 -2.266l.039 -.09l3.927 -10.804v-4.823a1 1 0 1 1 0 -2h6zm-2 2h-2v4h2v-4z" />
              </svg>
            </h1>
            <p className="stylelab-subtitle">Editor visual para estilos en CSS</p>
          </div>
          <div className="stylelab-portfolio-link">
            <a
              href="/"
              className="btn-link"
              target="_self"
              rel="noopener noreferrer"
            >
              Mi portafolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                <path d="M13 11l1.5 6l1.5 -6" />
              </svg>
            </a>
          </div>
        </header>
        <div className="stylelab-grid">
          <div className="stylelab-card">
            <div className="stylelab-card-changer">
            <h3>Fondo de los cuadros</h3>
            <input
              type="color"
              value={primary}
              onChange={(e) => setPrimary(e.target.value)}
              aria-label="Seleccionar color de fondo de los cuadros"
            />
            </div>
            <x style={{ color: primary }}>Color seleccionado: {primary}</x>
            <div className="stylelab-card-changer">
            <h3>Color texto</h3>
            <input
              type="color"
              value={secondary}
              onChange={(e) => setSecondary(e.target.value)}
              aria-label="Seleccionar color del texto"
            />
            </div>
            <x style={{ color: secondary }}>Color seleccionado: {secondary}</x>
          </div>
          <div className="stylelab-card">

          </div>
        </div>  
        <div className="parent">
            <div className="div1" style={{ background: primary, color: secondary }}>
              <h3>Texto de ejemplo</h3>
              <p>Este es un texto dentro del div 1.</p>
            </div>
            <div className="div2" style={{ background: primary, color: secondary  }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>              <p>Imagen en el div 2.</p>
            </div>
            <div className="div3" style={{ background: primary, color: secondary  }}>
              <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
              </ul>
            </div>
            <div className="div4" style={{ background: primary, color: secondary  }}>
              <button>Botón en el div 4</button>
            </div>
            <div className="div5" style={{ background: primary, color: secondary  }}>
              <blockquote>
                "Este es un bloque de cita en el div 5."
              </blockquote>
            </div>
            <div className="div6" style={{ background: primary, color: secondary  }}>
              <form>
                <label htmlFor="input6">Input:</label>
                <input id="input6" type="text" placeholder="Escribe algo..." />
              </form>
            </div>
            <div className="div7" style={{ background: primary, color: secondary  }}>
              <video width="100%" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="div8" style={{ background: primary, color: secondary  }}>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Enlace en el div 8
              </a>
            </div>
        </div>
      </div>
    </main>
  );
}
