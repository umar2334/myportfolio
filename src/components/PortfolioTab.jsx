import React, { useState } from 'react';

const projects = [
  
  // {
  //   id: 'p2',
  //   img: '/project2.png',
  //   fallback: 'https://via.placeholder.com/400x250?text=WP+Themes',
  //   title: 'Housing Society Portal',
  //   subtitle: 'Login & Admin Dashboard (HTML / CSS / JS)',
  //   detailTitle: 'Society Management Portal',
  //   tech: 'HTML • CSS • JavaScript',
  //   desc: 'Designed and developed a fully responsive Society Management Portal with a clean login interface and a structured layout for residents and administrators. This project demonstrates strong front-end architecture, UI/UX design clarity, and real-world functionality for community & housing management.',
  //   features: ['Secure Login UI with Validation', 'Fully Responsive Interface', 'Real-World Society / Housing Portal Design'],
  //   demo: 'https://umar2334.github.io/society-managment-portal/',
  // },
{
    id: 'p1',
    img: 'apnacv.png',
    fallback: 'https://via.placeholder.com/400x250?text=WP+Themes',
    title: 'APNNCV',
    subtitle: 'apnacv  (REACT JS / TypeScript   / Tailwind CSS / firebase)',
    detailTitle: 'APNNCV',
    tech: 'REACT JS  • Tailwind CSS • FIREBASE .API',
    desc: 'ApnnaCv is a modern SaaS platform designed to simplify the process of creating professional, ATS-friendly resumes. It empowers job seekers to build high-quality CVs in minutes using a streamlined, intuitive interface.',
    features: ['Secure Login UI with Validation', 'Fully Responsive Interface', 'Professional Templates with Customization Options , ATS Optimization, Real-Time Preview, Downloadable CVs in Multiple Formats (PDF, DOCX)'],
    demo: 'https://apnnacv.vercel.app/',
  },

{
    id: 'p2',
    img: 'finance.png',
    fallback: 'https://via.placeholder.com/400x250?text=WP+Themes',
    title: 'Finance App',
    subtitle: 'finance  (REACT JS /  TypeScript   / Tailwind CSS / Supabase)',
    detailTitle: 'Finance App',
    tech: 'FLUTTER • DART • Supabase .API',
    desc: 'A modern web application built for seamless personal expense management and budget visualization. It streamlines financial oversight by categorizing transactions and generating dynamic insights into monthly fiscal health.',
    features: ['Secure Login UI with Validation', 'Fully Responsive Interface', 'Interactive Data Charts: , Responsive Dashboard: , Real-Time Sync with Supabase, User-Friendly Transaction Management, Budgeting Tools, Expense Categorization, Financial Insights and Trends'],
    demo: 'https://personal-finance-visualizer-ochre-psi.vercel.app/',
  },

{
    id: 'p3',
    img: '/project1.png',
    fallback: 'https://via.placeholder.com/400x250?text=Core+Dynamics',
    title: 'Modern E-Commerce UI',
    subtitle: 'Full Responsive E-Commerce Website',
    detailTitle: 'E-Commerce Website',
    tech: 'HTML • CSS • JavaScript • API',
    desc: 'A modern and responsive e-commerce front-end built with a clean product layout, smooth UI elements, and a professional shopping experience. Designed with a focus on performance, usability, and real-world online store structure.',
    features: ['Product Grid & Category Layout', 'Responsive UI (Tailwind CSS)', 'Clean Front-End Architecture'],
    demo: 'https://umar2334.github.io/project-1-umar-store/',
  },

{
    id: 'p4',
    img: 'pic123.jpeg',
    fallback: 'https://via.placeholder.com/400x250?text=WP+Themes',
    title: 'Society Management app',
    subtitle: 'Society Management app (flutter  / dart / firebase)',
    detailTitle: 'Society Management app',
    tech: 'FLUTTER • DART • FIREBASE .API',
    desc: 'Designed and developed a fully responsive Society Management app with a clean login interface and a structured layout for residents and administrators. This project demonstrates strong front-end architecture, UI/UX design clarity, and real-world functionality for community & housing management.',
    features: ['Secure Login UI with Validation', 'Fully Responsive Interface', 'Real-World Society / Housing Portal Design'],
    demo: 'https://umar2334.github.io/society-managment-portal/',
  },


];

export default function PortfolioTab({ isMobile }) {
  const [activeProject, setActiveProject] = useState(null);

  const project = projects.find(p => p.id === activeProject);

  return (
    <div
      style={{ flex: 1, padding: '25px', borderRight: '1px solid rgba(255,255,255,0.3)', overflowY: 'auto', position: 'relative', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(10px)' }}
    >
      {/* Detail View */}
      {activeProject && project && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'white', zIndex: 20, display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '192px', position: 'relative' }}>
            <img
              src={project.img}
              onError={e => { e.target.src = project.fallback; }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt={project.title}
            />
            <button
              onClick={() => setActiveProject(null)}
              style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255,255,255,0.9)', color: '#1f2937', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', border: 'none', cursor: 'pointer' }}
            >
              <i className="fas fa-arrow-left mr-1"></i> Back
            </button>
          </div>
          <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937' }}>{project.detailTitle}</h2>
            <p style={{ color: '#2563eb', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>{project.tech}</p>
            <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>{project.desc}</p>
            <h3 style={{ fontWeight: 700, fontSize: '14px', color: '#1f2937', marginBottom: '8px' }}>
              {project.id === 'p1' ? 'Key Features:' : 'Highlights:'}
            </h3>
            <ul style={{ listStyle: 'disc inside', fontSize: '12px', color: '#6b7280', marginBottom: '24px' }}>
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%', background: '#2563eb', color: 'white', textAlign: 'center', padding: '12px', borderRadius: '8px', fontWeight: 700, boxShadow: '0 2px 8px rgba(37,99,235,0.3)', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => e.target.style.background = '#1d4ed8'}
              onMouseLeave={e => e.target.style.background = '#2563eb'}
            >
              View Demo <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>
      )}

      {/* Grid View */}
      {!activeProject && (
        <>
          <h2
            style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #bfdbfe', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '2px', color: '#2563eb', display: isMobile ? 'none' : 'block' }}
          >
            Portfolio
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {projects.map(p => (
              <div
                key={p.id}
                onClick={() => setActiveProject(p.id)}
                style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer', height: '192px' }}
                className="project-card"
              >
                <img
                  src={p.img}
                  onError={e => { e.target.src = p.fallback; }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  alt={p.title}
                  className="project-img"
                />
                <div className="project-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', opacity: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'opacity 0.3s' }}>
                  <i className="fas fa-eye" style={{ fontSize: '28px', marginBottom: '8px' }}></i>
                  <span style={{ fontWeight: 700, letterSpacing: '2px', fontSize: '13px' }}>VIEW PROJECT</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '16px' }}>
                  <h3 style={{ color: 'white', fontWeight: 700, fontSize: '18px' }}>{p.title}</h3>
                  <p style={{ color: '#93c5fd', fontSize: '12px' }}>{p.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <style>{`
        .project-card:hover .project-overlay { opacity: 1 !important; }
        .project-card:hover .project-img { transform: scale(1.1); }
      `}</style>
    </div>
  );
}
