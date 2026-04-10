import React from 'react';

const steps = [
  {
    num: '01',
    icon: 'fas fa-search',
    title: 'Discover & Define',
    desc: 'I understand your vision, map out requirements, and define what "done" actually looks like — before writing a single line of code.',
    tags: ['Requirements', 'Research', 'Timeline'],
  },
  {
    num: '02',
    icon: 'fas fa-pencil-ruler',
    title: 'Design & Build',
    desc: 'You see real screens before development locks in. UI is designed for clarity first, then built with clean, scalable code.',
    tags: ['UI/UX Design', 'React', 'Prototyping'],
  },
  {
    num: '03',
    icon: 'fas fa-rocket',
    title: 'Test & Ship',
    desc: 'Thoroughly tested across devices, optimized for performance, and deployed live with everything working end-to-end.',
    tags: ['QA Testing', 'Deployment', 'Clean code'],
  },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{ background: '#FAFAF9', padding: '100px 60px', borderTop: '1px solid #ebebeb' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800,
            color: '#111', lineHeight: 1.1, letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            From brief to launch in weeks,<br />
            <span style={{ color: '#111' }}>Not months.</span>
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '16px', color: '#888',
          }}>
            Three focused phases. No fluff, no delays.
          </p>
        </div>

        {/* Step cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
          className="process-grid"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #e0e0e0', borderRadius: '16px',
                padding: '32px 28px', background: 'white',
                display: 'flex', flexDirection: 'column', gap: '20px',
              }}
            >
              {/* Step label */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                color: '#999', textTransform: 'uppercase',
              }}>
                STEP {step.num}
              </p>

              {/* Icon */}
              <div style={{
                width: '48px', height: '48px',
                border: '1px solid #e0e0e0', borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', color: '#333',
              }}>
                <i className={step.icon}></i>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '22px', fontWeight: 800, color: '#111',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '14px', color: '#666', lineHeight: 1.7, flex: 1,
              }}>
                {step.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {step.tags.map(tag => (
                  <span key={tag} style={{
                    border: '1px solid #e0e0e0', borderRadius: '999px',
                    padding: '5px 14px', fontSize: '12px', color: '#555',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: '#fafafa',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '15px', color: '#888', marginBottom: '20px',
          }}>
            Ready to start your project?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#111', color: 'white', border: 'none',
              padding: '14px 36px', borderRadius: '999px',
              fontSize: '15px', fontWeight: 700, cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '0.01em', transition: 'background 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#333'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#111'; }}
          >
            Start your Project
            <span style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px',
            }}>↗</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
