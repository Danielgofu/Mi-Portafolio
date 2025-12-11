import React, { useState } from 'react';
import '../styles/Contact.css';

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

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus({ ok: false, msg: 'Introduce un correo válido.' });
      return;
    }

    if (form.message.length < 10) {
      setStatus({ ok: false, msg: 'El mensaje debe tener al menos 10 caracteres.' });
      return;
    }

    setStatus({ ok: null, msg: 'Enviando...' });

    try {
      const res = await fetch('https://formspree.io/f/xrbnlglp', {
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
        setStatus({ ok: true, msg: 'Mensaje enviado con éxito. ¡Gracias por contactarme!' });
        setForm({ name: '', email: '', message: '', hp: '' });
      } else {
        setStatus({ ok: false, msg: data?.message || 'Error al enviar el mensaje.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'No se ha podido conectar con el servicio.' });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2>Contacto</h2>
        <p>Déjame un mensaje y me pondré en contacto contigo lo antes posible.</p>
        <form 
          onSubmit={handleSubmit} 
          className="contact-form"
          noValidate
        >
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Tu nombre" 
            value={form.name} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Tu correo" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Mensaje</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Tu mensaje" 
            rows="5" 
            value={form.message} 
            onChange={handleChange} 
            required
          ></textarea>

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