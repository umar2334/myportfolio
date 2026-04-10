import React from 'react';

const devSkills = [
  { label: 'React.js / JavaScript', pct: 90 },
  { label: 'Node.js', pct: 50 },
  { label: 'HTML5 / Tailwind CSS', pct: 95 },
  { label: 'WordPress', pct: 95 },
  { label: 'Firebase', pct: 80 },
  { label: 'Supabase', pct: 85 },
  { label: 'Flutter', pct: 75 },
];

const designSkills = [
  { label: 'Figma / UI Wireframing', pct: 85 },
  { label: 'Adobe Photoshop', pct: 90 },
];

const services = [
  'Full Stack Development',
  'Mobile App Development',
  'BaaS & Cloud Solutions',
  'Responsive Web Design',
  'WordPress Development',
  'WP Plugin & Theme Customization',
];

const education = [
  { degree: 'BS Software Engineering', inst: 'Indus University', year: '2022 – 2026' },
  { degree: 'Intermediate (CS)', inst: 'Fatimiyah Boys College', year: '2019 – 2021' },
];

function SkillBar({ label, pct, dark }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ color: dark ? '#ccc' : '#333', fontSize: '13px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {label}
        </span>
        <span style={{ color: dark ? '#666' : '#888', fontSize: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {pct}%
        </span>
      </div>
      <div style={{ background: dark ? '#2a2a2a' : '#e8e8e8', height: '2px', borderRadius: '999px' }}>
        <div style={{ width: `${pct}%`, background: dark ? '#e8e8e8' : '#111', height: '2px', borderRadius: '999px' }} />
      </div>
    </div>
  );
}

export default function ResumeTab() {
  return (
    <section id="skills" className="skills-section" style={{ background: '#111', padding: '100px 48px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ color: '#555', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            What I do
          </p>
          <h2 style={{ fontSize: '48px', fontWeight: 800, color: 'white', fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Skills & Services
          </h2>
        </div>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

          {/* Left: Skills */}
          <div>
            <p style={{ color: '#666', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
              Development
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
              {devSkills.map((s, i) => <SkillBar key={i} label={s.label} pct={s.pct} dark />)}
            </div>

            <p style={{ color: '#666', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
              Design
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {designSkills.map((s, i) => <SkillBar key={i} label={s.label} pct={s.pct} dark />)}
            </div>

            <div style={{ marginTop: '48px' }}>
              <a
                href="/umarcv.pdf"
                download="Muhammad_Umar_CV.pdf"
                style={{
                  display: 'inline-block', background: 'white', color: '#111',
                  padding: '12px 28px', borderRadius: '999px', fontSize: '14px', fontWeight: 600,
                  textDecoration: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif",
                  border: '1px solid #e0e0e0', transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e8e8e8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; }}
              >
                Download CV →
              </a>
            </div>
          </div>

          {/* Right: Services + Education */}
          <div>
            <p style={{ color: '#666', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
              Services
            </p>
            <div style={{ marginBottom: '48px' }}>
              {services.map((svc, i) => (
                <div key={i} style={{
                  padding: '16px 0', borderBottom: '1px solid #1e1e1e',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ color: '#ccc', fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {svc}
                  </span>
                  <span style={{ color: '#444', fontSize: '18px' }}>→</span>
                </div>
              ))}
            </div>

            <p style={{ color: '#666', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
              Education
            </p>
            <div>
              {education.map((edu, i) => (
                <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid #1e1e1e' }}>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: '4px' }}>
                    {edu.degree}
                  </p>
                  <p style={{ color: '#666', fontSize: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {edu.inst} · {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
