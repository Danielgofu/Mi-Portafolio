import React, { useState, useMemo } from "react";
import "../../styles/StyleLab.css";

function IconCopy() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="4" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function StyleLab() {
  const [primary, setPrimary] = useState("#8b5cf6"); // --purple
  const [secondary, setSecondary] = useState("#a78bfa"); // --purple-soft
  const [radius, setRadius] = useState(12);
  const [shadow, setShadow] = useState(18);
  const [glass, setGlass] = useState(true);
  const [copied, setCopied] = useState(false);

  const primarySwatches = ["#8b5cf6", "#7c3aed", "#6d28d9", "#9f7aea"];
  const secondarySwatches = ["#a78bfa", "#c4b5fd", "#c7b9ff", "#b794f4"];

  const cssOutput = useMemo(() => {
    return `:root {
  --bg-secondary: #1a1b1f;
  --purple: ${primary};
  --purple-soft: ${secondary};
  --text: #e5e5e5;
  --muted: #9ca3af;
  --card-radius: ${radius}px;
  --card-shadow: 0 ${shadow}px ${Math.round(shadow * 2.2)}px rgba(139,92,246,0.12);
}
`;
  }, [primary, secondary, radius, shadow]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([cssOutput], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "stylelab.css";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="sl-container" aria-labelledby="sl-title">
      <header className="sl-header">
        <div>
          <h1 id="sl-title" className="sl-title">StyleLab</h1>
          <p className="sl-sub">Editor visual — vertical por defecto. Modo oscuro y export CSS.</p>
        </div>

        <div className="sl-actions">
          <button className={`sl-btn sl-ghost ${copied ? "copied" : ""}`} onClick={handleCopy} aria-pressed={copied}>
            <IconCopy /> <span>{copied ? "Copiado" : "Copiar CSS"}</span>
          </button>
          <button className="sl-btn sl-primary" onClick={handleDownload}>
            <IconDownload /> <span>Descargar</span>
          </button>
        </div>
      </header>

      <section className="sl-column">
        {/* CONTROLS */}
        <aside className="sl-panel" aria-label="Controles de paleta">
          <div className="control">
            <label className="control-label">Color primario</label>
            <div className="control-row">
              <input
                aria-label="Seleccionar color primario"
                className="color-input"
                type="color"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
              />
              <div className="swatches" role="list" aria-label="Swatches primario">
                {primarySwatches.map((c) => (
                  <button
                    key={c}
                    className={`swatch ${c.toLowerCase() === primary.toLowerCase() ? "active" : ""}`}
                    style={{ background: c }}
                    onClick={() => setPrimary(c)}
                    aria-pressed={c.toLowerCase() === primary.toLowerCase()}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="control">
            <label className="control-label">Color secundario</label>
            <div className="control-row">
              <input
                aria-label="Seleccionar color secundario"
                className="color-input"
                type="color"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
              />
              <div className="swatches" role="list" aria-label="Swatches secundario">
                {secondarySwatches.map((c) => (
                  <button
                    key={c}
                    className={`swatch ${c.toLowerCase() === secondary.toLowerCase() ? "active" : ""}`}
                    style={{ background: c }}
                    onClick={() => setSecondary(c)}
                    aria-pressed={c.toLowerCase() === secondary.toLowerCase()}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="control">
            <label className="control-label">Border radius: <strong>{radius}px</strong></label>
            <input
              aria-label="Ajustar border radius"
              type="range"
              min="0"
              max="48"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
            />
          </div>

          <div className="control">
            <label className="control-label">Sombra: <strong>{shadow}px</strong></label>
            <input
              aria-label="Ajustar sombra"
              type="range"
              min="0"
              max="40"
              value={shadow}
              onChange={(e) => setShadow(Number(e.target.value))}
            />
          </div>

          <div className="control control-row-between">
            <label className="control-label">Glass effect</label>
            <button
              className={`toggle ${glass ? "on" : "off"}`}
              onClick={() => setGlass((s) => !s)}
              aria-pressed={glass}
              aria-label="Alternar efecto glass"
            >
              <span className="toggle-ball" />
            </button>
          </div>
        </aside>

        {/* PREVIEW */}
        <div className="sl-previewWrap">
          <div
            className="preview"
            style={{
              borderRadius: `${radius}px`,
              boxShadow: `0 ${shadow}px ${Math.round(shadow * 2.2)}px rgba(139,92,246,0.12)`,
              background: glass
                ? "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))"
                : primary,
              border: "1px solid rgba(255,255,255,0.03)"
            }}
            aria-hidden="false"
          >
            <div className="preview-head">
              <h2 style={{ color: "var(--text)" }}>Preview — Componentes</h2>
              <div className="badge" style={{ background: secondary }}>Nuevo</div>
            </div>

            <p className="preview-text" style={{ color: "var(--muted)" }}>
              Tipografía clara, botones redondeados y tarjetas con glass + sombra suave.
            </p>

            <div className="preview-controls">
              <button className="sl-btn sl-primary" style={{ background: primary, borderRadius: `${radius}px` }}>
                Acción principal
              </button>
              <button className="sl-btn sl-ghost" style={{ borderRadius: `${radius}px`, color: secondary }}>
                Secundaria
              </button>
              <div className="mini-card" style={{ borderRadius: `${Math.max(6, Math.round(radius / 2))}px` }}>
                <strong>Tarjeta</strong>
                <p className="muted">Elemento de ejemplo</p>
              </div>
            </div>
          </div>

          {/* CODE */}
          <div className="sl-code" aria-label="CSS generado">
            <pre>{cssOutput}</pre>
          </div>
        </div>
      </section>
    </main>
  );
}
