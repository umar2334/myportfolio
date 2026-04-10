import React, { useState } from 'react';

const inputStyle = {
  width: '100%', padding: '14px 18px', fontSize: '14px',
  background: 'white', border: '1px solid #e0e0e0',
  borderRadius: '10px', outline: 'none',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  color: '#111', transition: 'border-color 0.2s', boxSizing: 'border-box',
};

export default function ContactTab() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" style={{ background: '#f4f4f2', padding: '100px 60px 80px', borderTop: '1px solid #ebebeb' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* CTA Card — like junaidjamel.com */}
        <div style={{
          background: 'white', borderRadius: '20px',
          border: '1px solid #e0e0e0',
          padding: '56px 48px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          marginBottom: '64px',
          position: 'relative', overflow: 'visible',
        }}>
          {/* Avatar floating top center */}
          <div style={{
            position: 'absolute', top: '-22px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', alignItems: 'center', gap: '10px',
            background: 'white', border: '1px solid #e0e0e0',
            borderRadius: '999px', padding: '6px 18px 6px 6px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: '#111', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '13px', fontWeight: 800, color: 'white',
              fontFamily: "'Cabinet Grotesk', sans-serif",
            }}>U</div>
            <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '15px', fontWeight: 800, color: '#111' }}>
              Umar
            </span>
          </div>

          {/* Availability badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            border: '1px solid #d0d0d0', borderRadius: '999px',
            padding: '6px 14px', marginBottom: '28px',
            background: '#fafafa',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Available for inquiries
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800,
            lineHeight: 1.1, marginBottom: '20px',
          }}>
            <span style={{ color: '#111' }}>Got a project idea?</span><br />
            <span style={{ color: '#bbb' }}>Let's make it real.</span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '15px', color: '#666', lineHeight: 1.75,
            maxWidth: '500px', marginBottom: '40px',
          }}>
            From first concept to final deployment — I help turn your ideas into
            polished web applications. Let's talk about your project.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=umarkhn895@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#111', color: 'white',
                padding: '14px 28px', borderRadius: '999px',
                textDecoration: 'none', fontSize: '15px', fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#333'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#111'; }}
            >
              <i className="fas fa-paper-plane" style={{ fontSize: '13px' }}></i>
              Send a Message
              <span style={{
                width: '22px', height: '22px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px',
              }}>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/umar-khan-094059203/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#0a66c2', color: 'white',
                padding: '14px 28px', borderRadius: '999px',
                textDecoration: 'none', fontSize: '15px', fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0852a0'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0a66c2'; }}
            >
              <i className="fab fa-linkedin-in" style={{ fontSize: '14px' }}></i>
              Connect on LinkedIn
            </a>
          </div>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '12px', color: '#aaa',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <i className="fas fa-clock" style={{ fontSize: '11px' }}></i>
            Quick response — usually within 24 hours
          </p>
        </div>

        {/* ── Contact Form ── */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: '24px', fontWeight: 800, color: '#111', marginBottom: '8px',
          }}>
            Or send a message directly
          </h3>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', color: '#888', marginBottom: '28px' }}>
            Fill in the form and I'll get back to you shortly.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xgvrgepv"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
            <input
              type="text" name="name" placeholder="Full Name" required
              value={formData.name} onChange={handleChange}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#111'; }}
              onBlur={e => { e.target.style.borderColor = '#e0e0e0'; }}
            />
            <input
              type="email" name="email" placeholder="Email Address" required
              value={formData.email} onChange={handleChange}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#111'; }}
              onBlur={e => { e.target.style.borderColor = '#e0e0e0'; }}
            />
          </div>
          <textarea
            name="message" rows="5" placeholder="Tell me about your project..." required
            value={formData.message} onChange={handleChange}
            style={{ ...inputStyle, resize: 'none' }}
            onFocus={e => { e.target.style.borderColor = '#111'; }}
            onBlur={e => { e.target.style.borderColor = '#e0e0e0'; }}
          />
          <button
            type="submit"
            style={{
              background: '#111', color: 'white', padding: '14px',
              borderRadius: '999px', border: 'none', cursor: 'pointer',
              fontWeight: 700, fontSize: '14px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '0.02em', transition: 'background 0.2s',
              alignSelf: 'flex-start', paddingLeft: '36px', paddingRight: '36px',
            }}
            onMouseEnter={e => { e.target.style.background = '#333'; }}
            onMouseLeave={e => { e.target.style.background = '#111'; }}
          >
            Send Message →
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
