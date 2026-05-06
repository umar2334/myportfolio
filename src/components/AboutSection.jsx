import React from 'react';

const socials = [
  { href: 'https://github.com/umar2334', icon: 'fab fa-github', bg: '#1f2937', hover: '#111' },
  { href: 'https://www.linkedin.com/in/muhammad-umar-khan-khan/', icon: 'fab fa-linkedin-in', bg: '#0a66c2', hover: '#0852a0' },
  { href: 'https://www.instagram.com/umarkhan404/', icon: 'fab fa-instagram', bg: '#E1306C', hover: '#c0254f' },
];

export default function AboutSection() {
  return (
    <section id="about-detail" style={{ background: '#FAFAF9', padding: '100px 60px', borderTop: '1px solid #ebebeb' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* Two-tone heading */}
        <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", lineHeight: 1.15, marginBottom: '72px' }}>
          <span style={{ display: 'block', fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#bbb' }}>
            Built like a senior.
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#111' }}>
            Shipping like a startup.
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
              Karachi · Pakistan
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
                      background: s.bg, color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '14px', textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.12)',
                      transition: 'background 0.2s, transform 0.2s',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = s.hover; e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = s.bg; e.currentTarget.style.transform = 'scale(1)'; }}
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
              I'm an AI-native software engineer. I started coding 4 years ago — right when LLMs began rewriting how software is built.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '24px',
            }}>
              I work across the full stack — Next.js, React, Flutter, Node, Supabase — and use Claude, Cursor, and GPT as daily tools. The result: I ship working products in days, not months. Ten side projects deployed. Real users on a few of them.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '16px', lineHeight: 1.75, color: '#111',
              fontWeight: 700, marginBottom: '20px',
            }}>
              Speed is a skill. Taste is a skill. I'm working on both.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '15px', lineHeight: 1.8, color: '#555',
            }}>
              Open to full-time engineering roles and selective freelance work for founders who need to move fast. BS Software Engineering · Indus University · 2026.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
