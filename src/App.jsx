import React, { useState, useEffect } from 'react';
import PortfolioTab from './components/PortfolioTab';
import ResumeTab from './components/ResumeTab';
import ContactTab from './components/ContactTab';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';

/* ── Loading Screen ── */
function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 100) { const t = setTimeout(onComplete, 400); return () => clearTimeout(t); }
    const t = setTimeout(() => setCount(c => c + 1), 18);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#111111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <p style={{ color: '#666', fontSize: '13px', letterSpacing: '0.08em', marginBottom: '16px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Crafting your experience
      </p>
      <p style={{ color: 'white', fontSize: '80px', fontWeight: 800, fontFamily: "'Cabinet Grotesk', sans-serif", lineHeight: 1 }}>
        {String(count).padStart(2, '0')}%
      </p>
    </div>
  );
}

/* ── Phone Mockup ── */
function PhoneMockup() {
  const slides = ['/apnacv.png', '/finance.png', '/project1.png'];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      {/* Glow shadow beneath phone */}
      <div style={{
        position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)',
        width: '220px', height: '60px',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)',
        filter: 'blur(12px)',
        zIndex: 0,
      }} />

      {/* Phone shell */}
      <div style={{
        width: '270px', height: '560px', flexShrink: 0,
        background: 'linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 100%)',
        borderRadius: '50px',
        padding: '16px 12px',
        boxShadow: '0 0 0 1.5px #3a3a3a, 0 40px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
        position: 'relative', zIndex: 1,
      }}>
        {/* Dynamic island / notch */}
        <div style={{
          position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)',
          width: '100px', height: '28px', background: '#111',
          borderRadius: '999px', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1a1a1a', border: '1px solid #333' }} />
        </div>

        {/* Side buttons */}
        <div style={{ position: 'absolute', right: '-4px', top: '110px', width: '4px', height: '52px', background: '#333', borderRadius: '0 3px 3px 0' }} />
        <div style={{ position: 'absolute', left: '-4px', top: '90px', width: '4px', height: '36px', background: '#333', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', left: '-4px', top: '136px', width: '4px', height: '36px', background: '#333', borderRadius: '3px 0 0 3px' }} />

        {/* Screen */}
        <div style={{
          width: '100%', height: '100%',
          borderRadius: '36px', overflow: 'hidden',
          background: '#0a0a0a', position: 'relative',
        }}>
          {/* Status bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '44px',
            background: '#0a0a0a', zIndex: 5,
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            padding: '0 20px 6px',
          }}>
            <span style={{ color: 'white', fontSize: '11px', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <i className="fas fa-signal" style={{ color: 'white', fontSize: '9px' }}></i>
              <i className="fas fa-wifi" style={{ color: 'white', fontSize: '9px' }}></i>
              <i className="fas fa-battery-three-quarters" style={{ color: 'white', fontSize: '10px' }}></i>
            </div>
          </div>

          {/* Slides */}
          {slides.map((src, i) => (
            <img
              key={i} src={src} alt=""
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'top left',
                opacity: i === current ? 1 : 0,
                transition: 'opacity 0.8s ease',
              }}
            />
          ))}

          {/* Bottom home bar + dots */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '48px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            zIndex: 5, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '8px', gap: '6px',
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {slides.map((_, i) => (
                <div key={i} style={{
                  width: i === current ? '18px' : '5px', height: '5px',
                  background: i === current ? 'white' : 'rgba(255,255,255,0.35)',
                  borderRadius: '999px', transition: 'all 0.4s ease',
                }} />
              ))}
            </div>
            <div style={{ width: '100px', height: '4px', background: 'rgba(255,255,255,0.4)', borderRadius: '999px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main App ── */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #FAFAF9; font-family: 'Plus Jakarta Sans', sans-serif; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }

        .pill-btn {
          background: #111; color: white; padding: 12px 28px; border-radius: 999px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif; border: 1px solid #222;
          transition: background 0.2s; display: inline-block; cursor: pointer;
        }
        .pill-btn:hover { background: #333; }

        .pill-btn-outline {
          background: transparent; color: #111; padding: 12px 28px; border-radius: 999px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif; border: 1px solid #2a2a2a;
          transition: background 0.2s; display: inline-block; cursor: pointer;
        }
        .pill-btn-outline:hover { background: #f0f0f0; }

        /* Centered pill nav links */
        .nav-link {
          background: none; border: none; cursor: pointer;
          font-size: 14px; color: #333; font-weight: 500;
          padding: 7px 16px; border-radius: 999px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { background: #f0f0f0; color: #111; }

        .nav-contact-btn {
          background: none; border: 1px solid #d0d0d0; cursor: pointer;
          font-size: 14px; color: #111; font-weight: 600;
          padding: 7px 20px; border-radius: 999px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .nav-contact-btn:hover { background: #111; color: white; border-color: #111; }

        /* Nav items slide out on scroll */
        .nav-links-group {
          display: flex; align-items: center; gap: 2px;
          overflow: hidden;
          max-width: 500px; opacity: 1;
          transition: max-width 0.4s ease, opacity 0.3s ease;
        }
        .nav-links-group.collapsed {
          max-width: 0; opacity: 0; pointer-events: none;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }

        @media (max-width: 768px) {
          .hero-section { padding: 110px 24px 64px !important; }
          .hero-title { font-size: 48px !important; }
          .hero-layout { flex-direction: column !important; gap: 48px !important; align-items: flex-start !important; }
          .phone-col { align-self: center !important; }
          .projects-section { padding: 72px 24px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-section { padding: 72px 24px !important; }
          .skills-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-section { padding: 72px 24px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-inner { flex-direction: column !important; gap: 16px !important; text-align: center; }
          .hero-info-table { display: none !important; }
          .nav-links-group { display: none !important; }
        }
      `}</style>

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <div style={{ minHeight: '100vh', background: '#FAFAF9' }}>

          {/* ── Centered Pill Navigation ── */}
          <div style={{
            position: 'fixed', top: '20px', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}>
            <nav style={{
              display: 'flex', alignItems: 'center', gap: '2px',
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid #e0e0e0',
              borderRadius: '999px',
              padding: '5px 5px 5px 6px',
              boxShadow: '0 2px 24px rgba(0,0,0,0.09)',
              backdropFilter: 'blur(16px)',
              transition: 'padding 0.35s ease',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}>
              {/* Avatar — icon.jpeg */}
              <div style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: '#111', flexShrink: 0, overflow: 'hidden',
                border: '2px solid #e0e0e0',
              }}>
                <img
                  src="/icon.jpeg" alt="Umar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>

              {/* Name */}
              <span
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  fontSize: '15px', fontWeight: 800, color: '#111',
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  padding: '0 10px 0 8px', cursor: 'pointer',
                  letterSpacing: '0.01em', flexShrink: 0,
                }}
              >Umar.</span>

              {/* Separator */}
              <div style={{ width: '1px', height: '20px', background: '#e0e0e0', flexShrink: 0, margin: '0 4px' }} />

              {/* Nav links — collapse on scroll */}
              <div className={`nav-links-group${scrolled ? ' collapsed' : ''}`}>
                {['about', 'projects', 'skills'].map(id => (
                  <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
                <button className="nav-contact-btn" onClick={() => scrollTo('contact')}>
                  Contact
                </button>
              </div>
            </nav>
          </div>

          {/* ── Hero / About ── */}
          <section id="about" className="hero-section fade-up" style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            padding: '120px 60px 80px',
            background: 'radial-gradient(ellipse 80% 60% at 70% 60%, #e8e8e4 0%, #FAFAF9 60%)',
            overflow: 'hidden',
          }}>
            <div style={{ maxWidth: '1040px', width: '100%', margin: '0 auto' }}>

              <div className="hero-layout" style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Left — text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Available badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    border: '1px solid #d8d8d8', borderRadius: '999px',
                    padding: '6px 14px', marginBottom: '32px',
                    background: 'white',
                  }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Available for Inquiries
                    </span>
                  </div>

                  {/* Title — "I enjoy creating / *web* apps." */}
                  <h1 className="hero-title" style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800, lineHeight: 1.05,
                    letterSpacing: '-0.03em', marginBottom: '24px',
                    fontSize: 'clamp(42px, 6vw, 72px)',
                  }}>
                    <span style={{ display: 'block', color: '#111' }}>I enjoy creating</span>
                    <span style={{ display: 'block' }}>
                      <em style={{ color: '#b0b0b0', fontStyle: 'italic', fontWeight: 800 }}>web</em>
                      <span style={{ color: '#111' }}> apps.</span>
                    </span>
                  </h1>

                  {/* PERHAPS TODAY label */}
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                    color: '#888', textTransform: 'uppercase',
                    marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    Perhaps today <span style={{ fontSize: '14px' }}>📍</span>
                  </p>

                  <p style={{
                    color: '#555', fontSize: '15px', lineHeight: 1.75,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    maxWidth: '400px', marginBottom: '36px',
                  }}>
                    I'm <strong style={{ color: '#111' }}>Umar</strong> a Software Engineer building modern web experiences.
                  </p>

                  <button
                    onClick={() => scrollTo('projects')}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '12px',
                      background: '#111', color: 'white', border: 'none',
                      padding: '16px 28px', borderRadius: '999px',
                      fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#333'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#111'; }}
                  >
                    View Projects
                    <span style={{
                      width: '26px', height: '26px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px',
                    }}>↗</span>
                  </button>
                </div>

                {/* Right — phone mockup, slightly tilted */}
                <div className="phone-col" style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                  <div style={{ transform: 'rotate(4deg)', transformOrigin: 'center bottom' }}>
                    <PhoneMockup />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── About ── */}
          <AboutSection />

          {/* ── Projects ── */}
          <PortfolioTab />

          {/* ── Process ── */}
          <ProcessSection />

          {/* ── Skills ── */}
          <ResumeTab />

          {/* ── FAQ ── */}
          <FAQSection />

          {/* ── Contact ── */}
          <ContactTab />

          {/* ── Footer ── */}
          <footer style={{ background: '#f4f4f2', borderTop: '1px solid #e0e0e0', padding: '24px 48px' }}>
            <div className="footer-inner" style={{ maxWidth: '1040px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              {/* Instagram left */}
              <a href="https://www.instagram.com/umarkhan404/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: '#666', textDecoration: 'none', fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#E1306C'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#666'; }}
              >
                <i className="fab fa-instagram" style={{ fontSize: '14px' }}></i>
                Instagram
              </a>

              {/* Social icons right */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { href: 'https://github.com/umar2334', icon: 'fab fa-github', bg: '#1f2937', color: 'white' },
                  { href: 'https://www.linkedin.com/in/muhammad-umar-khan-khan/', icon: 'fab fa-linkedin-in', bg: '#0a66c2', color: 'white' },
                  { href: 'https://www.instagram.com/umarkhan404/', icon: 'fab fa-instagram', bg: '#E1306C', color: 'white' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: s.bg, color: s.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', fontSize: '14px',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}
