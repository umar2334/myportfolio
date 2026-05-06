import React from 'react';

const skillGroups = [
  {
    label: 'AI-augmented dev',
    items: ['Claude · Cursor · Copilot', 'OpenAI / Gemini / Anthropic APIs', 'Custom GPTs · agents · prompt eng', 'Spec-to-prod in days, not weeks'],
  },
  {
    label: 'Frontend',
    items: ['React · Next.js (App Router)', 'TypeScript · Tailwind CSS', 'Framer Motion · shadcn/ui', 'Performance & accessibility'],
  },
  {
    label: 'Backend & data',
    items: ['Node.js · API routes · serverless', 'Supabase · Firebase · Postgres', 'Auth, RLS, realtime, storage', 'REST · webhooks · cron'],
  },
  {
    label: 'Mobile',
    items: ['Flutter · Dart', 'Cross-platform iOS + Android', 'APK builds, releases', 'Google Maps, native plugins'],
  },
  {
    label: 'Tools & ops',
    items: ['Git · GitHub · Vercel', 'Figma · UI/UX wireframing', 'WordPress (when needed)', 'Linear-style workflow'],
  },
];

const services = [
  { label: 'Production MVP — web', note: '1–3 weeks' },
  { label: 'Production MVP — mobile', note: '2–4 weeks' },
  { label: 'AI integration / agent', note: 'project-based' },
  { label: 'Marketing / landing pages', note: '3–7 days' },
  { label: 'Existing codebase work', note: 'hourly' },
];

const education = [
  { degree: 'BS Software Engineering', inst: 'Indus University', year: '2022 – 2026' },
  { degree: 'Intermediate (Computer Science)', inst: 'Fatimiyah Boys College', year: '2019 – 2021' },
];

export default function ResumeTab() {
  return (
    <section id="skills" className="skills-section" style={{ background: '#111', padding: '100px 48px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ color: '#555', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            What I work with
          </p>
          <h2 style={{ fontSize: '48px', fontWeight: 800, color: 'white', fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Stack & capabilities
          </h2>
        </div>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px' }}>

          {/* Left: Skill groups */}
          <div>
            {skillGroups.map((g, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <p style={{
                  color: '#888', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
                  marginBottom: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                }}>
                  {g.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {g.items.map((item, j) => (
                    <span key={j} style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '13px', color: '#e8e8e8',
                      padding: '8px 14px',
                      background: '#1c1c1c',
                      border: '1px solid #2a2a2a',
                      borderRadius: '999px',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ marginTop: '40px' }}>
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
            <p style={{ color: '#888', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
              Available for
            </p>
            <div style={{ marginBottom: '48px' }}>
              {services.map((svc, i) => (
                <div key={i} style={{
                  padding: '14px 0', borderBottom: '1px solid #1e1e1e',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
                }}>
                  <span style={{ color: '#e8e8e8', fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
                    {svc.label}
                  </span>
                  <span style={{ color: '#666', fontSize: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: 'nowrap' }}>
                    {svc.note}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ color: '#888', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
              Education
            </p>
            <div>
              {education.map((edu, i) => (
                <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid #1e1e1e' }}>
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
