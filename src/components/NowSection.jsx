import React from 'react';

const shipping = [
  {
    status: 'shipping',
    label: 'In design',
    title: 'FYPMatch',
    desc: 'AI-powered FYP idea generator for Pakistani students. JSON-prompted Claude returns 5 ranked, supervisor-approved ideas with tech stack and post-grad monetization.',
    stack: 'Next.js · Claude API · JSON Prompting',
    week: 'Designed this week',
  },
  {
    status: 'live',
    label: 'Live',
    title: 'LeadHunter Pro',
    desc: 'AI lead generation SaaS with Chrome extension. Gemini-powered scraping, scoring, and outreach generation in one dashboard.',
    stack: 'Next.js · Gemini · Chrome MV3',
    week: 'Shipped recently',
  },
  {
    status: 'live',
    label: 'Live',
    title: 'SEO Autopilot',
    desc: 'Auto-distribute content across 6+ platforms with AI rewrites for each. OAuth + scheduled jobs.',
    stack: 'Next.js · OpenAI · OAuth',
    week: 'Shipped last month',
  },
];

const dotColor = (s) => s === 'shipping' ? '#f59e0b' : '#22c55e';

export default function NowSection() {
  return (
    <section style={{ background: '#FAFAF9', padding: '80px 60px 40px', borderTop: '1px solid #ebebeb' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ position: 'relative', display: 'inline-block', width: '10px', height: '10px' }}>
              <span style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: '#22c55e', opacity: 0.5,
                animation: 'nowPulse 2s infinite',
              }} />
              <span style={{
                position: 'absolute', inset: '2px', borderRadius: '50%',
                background: '#22c55e',
              }} />
            </span>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em',
              color: '#888', textTransform: 'uppercase',
            }}>
              Now · Currently shipping
            </p>
          </div>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px', color: '#aaa',
          }}>
            Updated weekly
          </p>
        </div>

        <style>{`
          @keyframes nowPulse {
            0%   { transform: scale(0.9); opacity: 0.7; }
            70%  { transform: scale(2.2); opacity: 0; }
            100% { transform: scale(0.9); opacity: 0; }
          }
        `}</style>

        {/* Cards */}
        <div className="now-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
        }}>
          {shipping.map((p, i) => (
            <div key={i} style={{
              background: 'white', border: '1px solid #e8e8e8',
              borderRadius: '14px', padding: '22px 22px 20px',
              display: 'flex', flexDirection: 'column', gap: '12px',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#111'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Status pill */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px', fontWeight: 600, color: '#444',
                  background: '#f4f4f2', padding: '4px 10px', borderRadius: '999px',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dotColor(p.status) }} />
                  {p.label}
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px', color: '#aaa',
                }}>
                  {p.week}
                </span>
              </div>

              <p style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '20px', fontWeight: 800, color: '#111',
                letterSpacing: '-0.01em',
              }}>
                {p.title}
              </p>

              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13.5px', color: '#666', lineHeight: 1.6, flex: 1,
              }}>
                {p.desc}
              </p>

              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px', color: '#999', marginTop: '4px',
              }}>
                {p.stack}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .now-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
