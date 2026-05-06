import React, { useState } from 'react';

const faqs = [
  {
    q: 'How fast can you actually ship?',
    a: 'Landing page: 3–7 days. Production MVP with auth + database: 2–3 weeks. Full mobile app: 3–4 weeks. AI-augmented workflow (Claude + Cursor as daily drivers) cuts the timeline roughly in half compared to traditional dev. You get a fixed quote and a timeline upfront — and daily Loom updates so you see progress, not promises.',
  },
  {
    q: 'You use AI to write code — does that mean you don\'t actually understand it?',
    a: 'Fair question. I read every line, refactor what the AI gets wrong, and own every shipped commit. AI is a faster keyboard, not a substitute for engineering. I architect, debug, optimize, and review — and yes, I can whiteboard the solution without it. Treat me like a senior dev with a very fast assistant.',
  },
  {
    q: 'What\'s your stack?',
    a: 'Frontend: Next.js, React, TypeScript, Tailwind. Backend: Node, Supabase, Firebase, Postgres. Mobile: Flutter. AI: OpenAI, Anthropic, Gemini APIs. Tools: Vercel, GitHub, Figma. I pick what fits the problem — not what is trendy.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. Async-first, timezone-friendly. I overlap with US/EU mornings and respond within a few hours. Karachi is GMT+5. Payments via Wise, Payoneer, or direct bank.',
  },
  {
    q: 'Can you join an existing codebase?',
    a: 'Yes. I jump into existing React, Next, Flutter, or Node projects, do a code-walk, and continue from where the previous dev left off. I document what I touch and ship clean PRs — no cowboy commits.',
  },
  {
    q: 'What about post-launch support?',
    a: 'Free fixes for 14 days after handoff. Beyond that, ongoing support is monthly retainer or hourly — your choice. Source code, deployment access, and docs are always yours. No lock-in.',
  },
  {
    q: 'Are you open to full-time roles?',
    a: 'Yes — actively. I am open to remote-first software engineering roles globally and on-site in Pakistan. Send me a JD and I\'ll get back to you the same day.',
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
