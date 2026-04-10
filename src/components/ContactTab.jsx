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
            <button
              onClick={() => setShowBooking(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#111', color: 'white',
                padding: '14px 28px', borderRadius: '999px',
                border: 'none', cursor: 'pointer',
                fontSize: '15px', fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#333'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#111'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M21 8.5L17 12l4 3.5V8.5z" fill="#00BFA5"/>
                <rect x="3" y="7" width="14" height="10" rx="2" fill="#4CAF50"/>
                <path d="M21 8.5L17 12l4 3.5V8.5z" fill="#00897B"/>
              </svg>
              Start Google Meet
              <span style={{
                width: '22px', height: '22px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px',
              }}>↗</span>
            </button>
            <a
              href="https://www.linkedin.com/in/muhammad-umar-khan-khan/"
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

      </div>
    </section>
    </>
  );
}
