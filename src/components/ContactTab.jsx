import React, { useState } from 'react';
import BookingModal from './BookingModal';

export default function ContactTab() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
    {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    <section id="contact" style={{ background: '#f4f4f2', padding: '100px 60px 80px', borderTop: '1px solid #ebebeb' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* CTA Card — like junaidjamel.com */}
        <div style={{
          background: 'white', borderRadius: '20px',
          border: '1px solid #e0e0e0',
          padding: '56px 48px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
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
            <span style={{ color: '#111' }}>Tell me what you're building.</span><br />
            <span style={{ color: '#bbb' }}>I'll reply in 24 hours.</span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '15px', color: '#666', lineHeight: 1.75,
            maxWidth: '500px', marginBottom: '40px',
          }}>
            Hiring for a role, scoping a freelance project, or just want a second opinion on an idea — drop me a line. I read everything.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href="https://wa.me/923402288644?text=Hi%20Umar%2C%20I%20saw%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#25D366', color: 'white',
                padding: '14px 26px', borderRadius: '999px',
                textDecoration: 'none', fontSize: '15px', fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1ebd5c'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '16px' }}></i>
              WhatsApp
            </a>
            <a
              href="mailto:umarkhn895@gmail.com?subject=Project%20inquiry"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#111', color: 'white',
                padding: '14px 26px', borderRadius: '999px',
                textDecoration: 'none', fontSize: '15px', fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#333'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#111'; }}
            >
              <i className="fas fa-envelope" style={{ fontSize: '14px' }}></i>
              Email
            </a>
            <button
              onClick={() => setShowBooking(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'transparent', color: '#111',
                padding: '14px 26px', borderRadius: '999px',
                border: '1px solid #d0d0d0', cursor: 'pointer',
                fontSize: '15px', fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f0f0f0'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <i className="fas fa-video" style={{ fontSize: '13px' }}></i>
              Book a 15-min call
            </button>
            <a
              href="https://www.linkedin.com/in/muhammad-umar-khan-khan/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'transparent', color: '#0a66c2',
                padding: '14px 26px', borderRadius: '999px',
                textDecoration: 'none', fontSize: '15px', fontWeight: 600,
                border: '1px solid #cfdcec',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f0f6fc'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <i className="fab fa-linkedin-in" style={{ fontSize: '14px' }}></i>
              LinkedIn
            </a>
          </div>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '12px', color: '#aaa',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <i className="fas fa-clock" style={{ fontSize: '11px' }}></i>
            Based in Karachi · Replies within 24 hours
          </p>
        </div>

      </div>
    </section>
    </>
  );
}
