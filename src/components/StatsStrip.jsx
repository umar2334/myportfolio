import React from 'react';

const stats = [
  { num: '4', label: 'Years coding', sub: 'since 2022' },
  { num: '10+', label: 'Apps shipped', sub: 'web + mobile' },
  { num: '8', label: 'Stack tools', sub: 'production-ready' },
  { num: '7d', label: 'Avg. ship time', sub: 'brief to launch' },
];

export default function StatsStrip() {
  return (
    <section style={{
      background: '#111', padding: '56px 48px',
      borderTop: '1px solid #1a1a1a',
    }}>
      <div className="stats-grid" style={{
        maxWidth: '1040px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', gap: '6px',
            borderLeft: i === 0 ? 'none' : '1px solid #222',
            paddingLeft: i === 0 ? 0 : '24px',
          }}>
            <p style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '44px', fontWeight: 800, color: 'white',
              letterSpacing: '-0.03em', lineHeight: 1,
            }}>
              {s.num}
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '14px', fontWeight: 600, color: '#e8e8e8',
            }}>
              {s.label}
            </p>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', color: '#666',
            }}>
              {s.sub}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          .stats-grid > div { border-left: none !important; padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
