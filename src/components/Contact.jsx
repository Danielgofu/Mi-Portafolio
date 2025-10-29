import React, { useState } from 'react';
import '../styles/Contact.css';

// reemplaza por tu email en formsubmit.co
const FORMSUBMIT_EMAIL = 'danielgofu8@gmail.com';
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', hp: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'Rellena todos los campos.' });
      return;
    }
    if (form.hp) {
      setStatus({ ok: false, msg: 'Spam detectado.' });
      return;
    }

    setStatus({ ok: null, msg: 'Enviando...' });

    try {
      const res = await fetch(FORMSUBMIT_AJAX, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Nuevo mensaje desde portafolio: ${form.name}`,
          _captcha: 'false'
        })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ ok: true, msg: 'Mensaje enviado. Revisa tu correo para confirmar (FormSubmit requiere verificar el email).' });
        setForm({ name: '', email: '', message: '', hp: '' });
      } else {
        setStatus({ ok: false, msg: data?.message || 'Error al enviar el mensaje.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'No se ha podido conectar con el servicio.' });
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <h2 id="contact-title">Contacto</h2>
        <p className="contact-desc">¿Tienes un proyecto o quieres colaborar? Escríbeme.</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Nombre
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>

          {/* honeypot (visually hidden) */}
          <label className="hp" aria-hidden="true">
            Deja este campo vacío
            <input name="hp" value={form.hp} onChange={handleChange} autoComplete="off" />
          </label>

          <label>
            Mensaje
            <textarea name="message" rows="6" value={form.message} onChange={handleChange} required />
          </label>

          <div className="contact-actions">
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
            <button type="reset" className="btn btn-ghost" onClick={() => { setForm({ name: '', email: '', message: '', hp: '' }); setStatus(null); }}>Limpiar</button>
          </div>

          {status && (
            <p className={`contact-status ${status.ok ? 'ok' : ''}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}