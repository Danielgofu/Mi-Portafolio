import React, { useState } from 'react';
import '../styles/Header.css';
import defaultOpen from '../assets/menu-open.svg';
import defaultClose from '../assets/menu-close.svg';

function Header({ openIcon = defaultOpen, closeIcon = defaultClose }) {
    const [open, setOpen] = useState(false);

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
                    <a href="#about" className="header-link" onClick={() => setOpen(false)}>Sobre mi</a>
                    <a href="#projects" className="header-link" onClick={() => setOpen(false)}>Projectos</a>
                    <a href="#contact" className="header-link" onClick={() => setOpen(false)}>Contactame</a>
                </nav>
            </div>
        </header>
    );
}
export default Header;