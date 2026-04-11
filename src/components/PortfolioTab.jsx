import React, { useState } from 'react';

const projects = [
  {
    id: 'p1',
    icon: 'fas fa-file-alt',
    iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    title: 'APNNCV',
    subtitle: 'Resume Builder — for job seekers & professionals.',
    tech: 'React · Firebase · Tailwind CSS',
    badges: [
      { label: 'REACT', color: '#6366f1' },
      { label: 'WEB', color: '#0ea5e9' },
      { label: 'FIREBASE', color: '#f97316' },
    ],
    stats: [
      { value: 'ATS', label: 'Optimized' },
      { value: '3+', label: 'Templates' },
      { value: 'PDF', label: 'Export' },
    ],
    btnColor: '#6366f1',
    demo: 'https://apnnacv.vercel.app/',
    isDownload: false,
    img: '/apnacv.png',
    desc: 'A modern SaaS platform to simplify creating professional, ATS-friendly resumes. Empowers job seekers to build high-quality CVs in minutes.',
    features: ['Secure Login UI', 'Professional Templates', 'ATS Optimization', 'PDF & DOCX Export'],
  },
  {
    id: 'p2',
    icon: 'fas fa-chart-pie',
    iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
    title: 'Finance App',
    subtitle: 'Expense Tracker — budget visualization & insights.',
    tech: 'Flutter · Dart · Supabase',
    badges: [
      { label: 'FLUTTER', color: '#06b6d4' },
      { label: 'ANDROID', color: '#22c55e' },
      { label: 'WEB', color: '#8b5cf6' },
    ],
    stats: [
      { value: '4+', label: 'Chart Types' },
      { value: 'Live', label: 'Sync' },
      { value: '100%', label: 'Privacy' },
    ],
    btnColor: '#22c55e',
    demo: 'https://personal-finance-visualizer-ochre-psi.vercel.app/',
    isDownload: false,
    img: '/finance.png',
    desc: 'Modern application for seamless personal expense management and budget visualization with dynamic financial insights.',
    features: ['Interactive Charts', 'Real-Time Sync', 'Budget Tools', 'Financial Trends'],
  },
  {
    id: 'p3',
    icon: 'fas fa-shopping-bag',
    iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    title: 'E-Commerce UI',
    subtitle: 'Responsive Storefront — clean product layout.',
    tech: 'HTML · CSS · JavaScript',
    badges: [
      { label: 'HTML', color: '#f97316' },
      { label: 'CSS', color: '#0ea5e9' },
      { label: 'WEB', color: '#6366f1' },
    ],
    stats: [
      { value: '20+', label: 'Products' },
      { value: 'Fast', label: 'Load' },
      { value: '100%', label: 'Responsive' },
    ],
    btnColor: '#0ea5e9',
    demo: 'https://umar2334.github.io/project-1-umar-store/',
    isDownload: false,
    img: '/project1.png',
    desc: 'Modern and responsive e-commerce front-end with clean product layout and smooth UI. Focused on performance and usability.',
    features: ['Product Grid Layout', 'Responsive Design', 'Clean Architecture'],
  },
  {
    id: 'p4',
    icon: 'fas fa-mountain',
    iconBg: 'linear-gradient(135deg, #f59e0b, #92400e)',
    title: 'Ghumo',
    subtitle: 'Pakistan Travel Explorer — maps, trails & expeditions.',
    tech: 'Flutter · Dart · Google Maps',
    badges: [
      { label: 'FLUTTER', color: '#06b6d4' },
      { label: 'ANDROID', color: '#22c55e' },
      { label: 'APK', color: '#f59e0b' },
    ],
    stats: [
      { value: 'Live', label: 'Weather' },
      { value: 'Maps', label: 'Interactive' },
      { value: 'APK', label: 'Ready' },
    ],
    btnColor: '#f59e0b',
    demo: 'https://github.com/umar2334/Ghumo/releases/download/v1.0.0/Ghumo-v1.0.0.apk',
    github: 'https://github.com/umar2334/Ghumo',
    isDownload: true,
    img: '/ghumo.png',
    desc: 'Flutter travel app for exploring Pakistan — featuring real interactive maps, offline route download, turn-by-turn directions, and live weather for mountains, valleys & trails.',
    features: ['Interactive Maps', 'Offline Download', 'Turn-by-Turn Directions', 'Live Weather'],
  },
];

function ProjectCard({ p, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1e1e1e' : '#161616',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #2a2a2a',
        transition: 'background 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column', gap: '16px',
      }}
    >
      {/* Icon + title row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: p.iconBg, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px', color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}>
          <i className={p.icon}></i>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '18px', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
            {p.title}
          </h3>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '12px', color: '#888', marginTop: '3px', lineHeight: 1.4 }}>
            {p.subtitle}
          </p>
        </div>
      </div>

      {/* Tech */}
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '12px', color: '#555' }}>
        {p.tech}
      </p>

      {/* Platform badges */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {p.badges.map(b => (
          <span key={b.label} style={{
            background: b.color + '22',
            border: `1px solid ${b.color}55`,
            color: b.color,
            fontSize: '10px', fontWeight: 700,
            padding: '3px 10px', borderRadius: '6px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: '0.06em',
          }}>
            {b.label}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '0', borderTop: '1px solid #222', paddingTop: '16px' }}>
        {p.stats.map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < p.stats.length - 1 ? '1px solid #222' : 'none' }}>
            <p style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '16px', fontWeight: 800, color: p.btnColor }}>
              {s.value}
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', color: '#666', marginTop: '2px' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
        <a
          href={p.demo} target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, textAlign: 'center',
            background: p.btnColor, color: 'white',
            padding: '11px 16px', borderRadius: '10px',
            fontWeight: 700, textDecoration: 'none',
            fontSize: '13px', fontFamily: "'Plus Jakarta Sans', sans-serif",
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          {p.isDownload ? 'Download APK' : 'View Demo'}
        </a>
        <button
          onClick={() => onOpen(p.id)}
          style={{
            background: '#2a2a2a', color: '#ccc', border: '1px solid #333',
            padding: '11px 16px', borderRadius: '10px', cursor: 'pointer',
            fontSize: '13px', fontWeight: 600,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            display: 'flex', alignItems: 'center', gap: '4px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#333'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#2a2a2a'; }}
        >
          Open <span style={{ fontSize: '12px' }}>↗</span>
        </button>
      </div>
    </div>
  );
}

export default function PortfolioTab() {
  const [active, setActive] = useState(null);
  const project = projects.find(p => p.id === active);

  return (
    <>
      <style>{`
        .modal-bg {
          position: fixed; inset: 0; background: rgba(0,0,0,0.8);
          z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        @media (max-width: 768px) {
          .proj-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section id="projects" style={{ background: '#0f0f0f', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '12px',
            }}>
              Projects I built <span style={{ fontSize: '0.75em' }}>💡</span>
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', color: '#666' }}>
              Production-ready apps built with React, Flutter, and modern web technologies.
            </p>
          </div>

          {/* Cards grid — 3 cols, 4th card centered on last row */}
          <div
            className="proj-cards-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
          >
            {projects.map(p => (
              <ProjectCard key={p.id} p={p} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      {/* Detail modal */}
      {active && project && (
        <div className="modal-bg" onClick={() => setActive(null)}>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#161616', borderRadius: '16px', maxWidth: '540px', width: '100%',
              overflow: 'hidden', maxHeight: '88vh', overflowY: 'auto',
              border: '1px solid #2a2a2a',
            }}
          >
            <div style={{ position: 'relative', height: '220px', background: '#111' }}>
              <img src={project.img} alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.85 }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
              <button onClick={() => setActive(null)}
                style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none',
                  borderRadius: '999px', padding: '7px 16px', fontSize: '12px',
                  fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(8px)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >← Back</button>
              <span style={{
                position: 'absolute', bottom: '16px', left: '24px',
                fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '26px', fontWeight: 800, color: 'white',
              }}>{project.title}</span>
            </div>
            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
                {project.badges.map(b => (
                  <span key={b.label} style={{
                    background: b.color + '22', border: `1px solid ${b.color}55`,
                    color: b.color, fontSize: '10px', fontWeight: 700,
                    padding: '4px 12px', borderRadius: '6px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.06em',
                  }}>{b.label}</span>
                ))}
              </div>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.75, marginBottom: '22px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {project.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
                {project.features.map((f, i) => (
                  <li key={i} style={{ fontSize: '13px', color: '#888', marginBottom: '8px', display: 'flex', gap: '10px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: project.btnColor, fontWeight: 800 }}>→</span> {f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: project.btnColor, color: 'white', padding: '13px',
                    borderRadius: '10px', fontWeight: 700, textDecoration: 'none',
                    fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif",
                    boxSizing: 'border-box',
                  }}
                >
                  {project.isDownload ? 'Download APK ↓' : 'View Live Demo →'}
                </a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      background: '#2a2a2a', color: '#ccc', padding: '13px 18px',
                      borderRadius: '10px', fontWeight: 700, textDecoration: 'none',
                      fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif",
                      border: '1px solid #333', boxSizing: 'border-box',
                    }}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
