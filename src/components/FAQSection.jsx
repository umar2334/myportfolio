import React, { useState } from 'react';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope and complexity. A simple landing page takes 1–2 weeks. A full web app with auth, database and dashboards typically takes 4–8 weeks. After understanding your goals, I give a clear timeline upfront.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'React, Next.js, Tailwind CSS, Node.js, Firebase, Supabase, and WordPress. For mobile I use React Native and Flutter. I pick the right tool for the job — not just what\'s trending.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes, absolutely. I work with clients remotely across different time zones. Communication is async-friendly with regular updates via email or WhatsApp.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. I offer post-launch support for bug fixes and small updates. For ongoing maintenance, we can discuss a monthly retainer depending on the project.',
  },
  {
    q: 'Can you work with an existing codebase?',
    a: 'Yes. I can jump into an existing React or Node project, review the code, and continue development or fix issues. I\'m comfortable reading and extending other people\'s code.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ background: '#FAFAF9', padding: '100px 60px', borderTop: '1px solid #ebebeb' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <h2 style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
          color: '#111', letterSpacing: '-0.02em',
          textAlign: 'center', marginBottom: '56px',
        }}>
          Still got questions?
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #e0e0e0', borderRadius: '14px',
                background: 'white', overflow: 'hidden',
                transition: 'box-shadow 0.2s',
                boxShadow: open === i ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
              }}
            >
              {/* Question row */}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '22px 24px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', gap: '16px',
                }}
              >
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '15px', fontWeight: 600, color: '#111',
                }}>
                  {item.q}
                </span>
                <span style={{
                  width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                  background: open === i ? '#111' : '#f0f0f0',
                  color: open === i ? 'white' : '#555',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 700,
                  transition: 'background 0.2s, color 0.2s, transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  +
                </span>
              </button>

              {/* Answer */}
              <div style={{
                maxHeight: open === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '14px', color: '#666', lineHeight: 1.75,
                  padding: '0 24px 24px',
                }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
