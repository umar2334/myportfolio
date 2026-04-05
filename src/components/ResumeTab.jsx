import React from 'react';

const skills = [
  { label: 'React.js / JavaScript', pct: 90, color: 'bg-indigo-500' },
  { label: 'Node.js', pct: 50, color: 'bg-indigo-500' },
  { label: 'HTML5 / Tailwind CSS', pct: 95, color: 'bg-indigo-500' },
  { label: 'WordPress', pct: 95, color: 'bg-indigo-500' },
  { label: 'Firebase', pct: 80, color: 'bg-indigo-500' },
  { label: 'Supabase', pct: 85, color: 'bg-indigo-500' },
];

const designSkills = [
  { label: 'Figma / UI Wireframing', pct: 85, color: 'bg-pink-500' },
  { label: 'Adobe Photoshop', pct: 90, color: 'bg-pink-500' },
];

export default function ResumeTab({ isMobile }) {
  return (
    <div
      id="tab-resume"
      className="column active-tab custom-scrollbar relative"
      style={{ flex: 1, padding: '25px', borderRight: '1px solid rgba(255,255,255,0.3)', overflowY: 'auto', position: 'relative', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(10px)' }}
    >
      <h2
        className="col-header"
        style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '2px', color: '#4f46e5', borderColor: '#e0e7ff', display: isMobile ? 'none' : 'block' }}
      >
        Resume
      </h2>

      {/* Education */}
      <div className="mb-6">
        <h3 style={{ fontWeight: 700, color: '#1f2937', display: 'flex', alignItems: 'center', marginBottom: '12px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>
          <i className="fas fa-graduation-cap mr-2" style={{ color: '#6366f1' }}></i> Education
        </h3>
        <div style={{ paddingLeft: '12px', borderLeft: '2px solid #c7d2fe', marginLeft: '4px' }}>
          {[
            { degree: 'BS Software Engineering', inst: 'Indus University | 2022 - 2026' },
            { degree: 'Intermediate (CS)', inst: 'Fatimiyah Boys College | 2019 - 2021' },
          ].map((edu, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '16px' }}>
              <div style={{ position: 'absolute', left: '-19px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: '#6366f1', border: '2px solid white' }}></div>
              <h4 style={{ fontWeight: 700, color: '#1f2937', fontSize: '14px' }}>{edu.degree}</h4>
              <p style={{ fontSize: '11px', color: '#6b7280' }}>{edu.inst}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <a
          href="/umarcv.pdf"
          download="Muhammad_Umar_CV.pdf"
          style={{ display: 'inline-block', background: '#4f46e5', color: 'white', fontSize: '12px', fontWeight: 700, padding: '8px 24px', borderRadius: '50px', boxShadow: '0 4px 12px rgba(79,70,229,0.4)', textDecoration: 'none', transition: 'background 0.2s' }}
          onMouseEnter={e => e.target.style.background = '#4338ca'}
          onMouseLeave={e => e.target.style.background = '#4f46e5'}
        >
          <i className="fas fa-download mr-2"></i> DOWNLOAD CV
        </a>
      </div>

      {/* Dev Skills */}
      <div className="mb-6">
        <h3 style={{ fontWeight: 700, color: '#1f2937', display: 'flex', alignItems: 'center', marginBottom: '12px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>
          <i className="fas fa-code mr-2" style={{ color: '#6366f1' }}></i> Development Skills
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {skills.map((s, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 700, color: '#4b5563', marginBottom: '4px' }}>
                <span>{s.label}</span><span>{s.pct}%</span>
              </div>
              <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '9999px', height: '6px' }}>
                <div style={{ width: `${s.pct}%`, background: '#6366f1', height: '6px', borderRadius: '9999px' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Skills */}
      <div className="mb-6">
        <h3 style={{ fontWeight: 700, color: '#1f2937', display: 'flex', alignItems: 'center', marginBottom: '12px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>
          <i className="fas fa-paint-brush mr-2" style={{ color: '#ec4899' }}></i> Design Skills
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {designSkills.map((s, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 700, color: '#4b5563', marginBottom: '4px' }}>
                <span>{s.label}</span><span>{s.pct}%</span>
              </div>
              <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '9999px', height: '6px' }}>
                <div style={{ width: `${s.pct}%`, background: '#ec4899', height: '6px', borderRadius: '9999px' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-4">
        <h3 style={{ fontWeight: 700, color: '#1f2937', display: 'flex', alignItems: 'center', marginBottom: '12px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>
          <i className="fas fa-concierge-bell mr-2" style={{ color: '#16a34a' }}></i> Services
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { icon: 'fas fa-laptop-code', color: '#6366f1', label: '🌐 Full Stack Development' },
            { icon: 'fab fa-wordpress', color: '#2563eb', label: '📱 Mobile App Development' },
            { icon: 'fas fa-mobile-alt', color: '#22c55e', label: '☁️ BaaS & Cloud Solutions' },
            { icon: 'fas fa-mobile-alt', color: '#22c55e', label: '📱 Responsive Web Design' },
            { icon: 'fas fa-mobile-alt', color: '#22c55e', label: '🖥️ WordPress Development' },
            { icon: 'fas fa-mobile-alt', color: '#22c55e', label: '🛠️ WP Plugin & Theme Customization' },
          ].map((svc, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', padding: '8px', borderRadius: '6px', display: 'flex', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
              <i className={`${svc.icon} mr-2`} style={{ color: svc.color, fontSize: '12px' }}></i>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#4b5563' }}>{svc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
