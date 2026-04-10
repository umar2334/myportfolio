import React from 'react';

const socials = [
  { href: 'https://github.com/umar2334', icon: 'fab fa-github' },
  { href: 'https://www.linkedin.com/in/umar-khan-094059203/', icon: 'fab fa-linkedin-in' },
  { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=umarkhn895@gmail.com', icon: 'fas fa-envelope' },
];

export default function AboutSection() {
  return (
    <section id="about-detail" style={{ background: '#FAFAF9', padding: '100px 60px', borderTop: '1px solid #ebebeb' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* Two-tone heading */}
        <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", lineHeight: 1.15, marginBottom: '72px' }}>
          <span style={{ display: 'block', fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#bbb' }}>
            A full-stack engineer's approach
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#111' }}>
            to building great web apps.
          </span>
        </h2>

        <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          {/* Left — photo card */}
          <div style={{ flexShrink: 0, position: 'relative', paddingTop: '24px', paddingRight: '14px', paddingBottom: '14px' }}>

            {/* Badge overlapping top-left corner */}
            <div style={{
              position: 'absolute', top: '4px', left: '14px', zIndex: 3,
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid #d0d0d0', borderRadius: '6px',
              padding: '6px 14px',
              background: 'white',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '13px', color: '#444',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              whiteSpace: 'nowrap',
            }}>
              Pixel-Perfect Dev
            </div>

            {/* Offset shadow layer — like the screenshot */}
            <div style={{
              position: 'absolute',
              top: '30px', left: '20px',
              width: '300px',
              borderRadius: '8px',
              background: '#c8c8c8',
              zIndex: 0,
              aspectRatio: '4/5',
            }} />

            {/* Photo frame */}
            <div style={{
              width: '300px',
              border: '1px solid #d0d0d0',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#1a1a1a',
              position: 'relative',
              zIndex: 1,
            }}>
              <img
                src="/profile.jpeg"
                alt="Muhammad Umar"
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover', objectPosition: 'center top',
                  filter: 'none',
                  aspectRatio: '4/5',
                }}
              />

              {/* Social icons overlay at bottom */}
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px',
                display: 'flex', gap: '8px', zIndex: 2,
              }}>
                {socials.map((s, i) => (
                  <a
                    key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      width: '38px', height: '38px', borderRadius: '50%',
                      background: 'rgba(0,0,0,0.72)', color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '14px', textDecoration: 'none',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.95)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.72)'; }}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Name + role */}
            <div style={{ marginTop: '16px' }}>
              <p style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '17px', fontWeight: 800, color: '#111' }}>
                Muhammad Umar
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', color: '#888', marginTop: '3px' }}>
                Software Engineer → building web apps
              </p>
            </div>
          </div>

          {/* Right — bio */}
          <div style={{ flex: 1, minWidth: '280px', paddingTop: '8px' }}>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '17px', lineHeight: 1.75, color: '#111',
              fontWeight: 600, marginBottom: '24px',
            }}>
              I wrote my first line of code over 4 years ago — and never looked back.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '24px',
            }}>
              What started as curiosity turned into a craft. I build modern web applications
              using React, Node.js, Firebase, and Supabase — focusing on clean UI and
              performance that users can actually feel.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '16px', lineHeight: 1.75, color: '#111',
              fontWeight: 700, marginBottom: '20px',
            }}>
              Good code is invisible. Bad code is everywhere.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '15px', lineHeight: 1.8, color: '#555',
            }}>
              I refine until things simply work — letting the product speak for itself,
              not the complexity behind it. Currently pursuing BS Software Engineering
              at Indus University (2026).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
