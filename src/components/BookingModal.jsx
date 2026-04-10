import React, { useState } from 'react';

const TIMES = [
  '09:00','09:30','10:00','10:30','11:00','11:30',
  '14:00','14:30','15:00','15:30','16:00','16:30',
  '17:00','17:30','18:00','18:30','19:00','19:30',
];

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

const DAY_NAMES = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

export default function BookingModal({ onClose }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [use24h, setUse24h] = useState(true);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
    setSelectedDate(null);
  };

  const isPast = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
    return d < todayStart;
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      viewMonth === today.getMonth() &&
      viewYear === today.getFullYear()
    );
  };

  const handleTimeClick = (time) => {
    if (!selectedDate) return;
    const [h, m] = time.split(':').map(Number);
    const pad = (n) => String(n).padStart(2, '0');
    const startStr = `${viewYear}${pad(viewMonth + 1)}${pad(selectedDate)}T${pad(h)}${pad(m)}00`;
    const endH = m + 15 >= 60 ? h + 1 : h;
    const endM = (m + 15) % 60;
    const endStr = `${viewYear}${pad(viewMonth + 1)}${pad(selectedDate)}T${pad(endH)}${pad(endM)}00`;
    const gcal = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=15+min+meeting+with+Muhammad+Umar&dates=${startStr}/${endStr}&add=umarkhn895@gmail.com&details=Quick+intro+call+to+discuss+your+project+idea.&location=Google+Meet`;
    window.open(gcal, '_blank');
  };

  const formatTime = (t) => {
    if (use24h) return t;
    const [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const selectedLabel = selectedDate
    ? `${DAY_NAMES[new Date(viewYear, viewMonth, selectedDate).getDay()].slice(0,3)} ${selectedDate}`
    : null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#18181b',
          borderRadius: '16px',
          display: 'flex',
          width: '100%',
          maxWidth: selectedDate ? '860px' : '680px',
          minHeight: '460px',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
          transition: 'max-width 0.3s ease',
        }}
      >
        {/* ── Left panel ── */}
        <div style={{
          width: '220px', flexShrink: 0,
          padding: '32px 24px',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', flexDirection: 'column', gap: '12px',
        }}>
          {/* Avatar */}
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            overflow: 'hidden', border: '2px solid rgba(255,255,255,0.15)',
          }}>
            <img src="/icon.jpeg" alt="Umar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>

          <p style={{ color: '#a1a1aa', fontSize: '13px', fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: '4px' }}>
            Muhammad Umar
          </p>

          <h3 style={{
            color: 'white', fontSize: '20px', fontWeight: 800,
            fontFamily: "'Cabinet Grotesk', sans-serif", lineHeight: 1.2,
          }}>
            15 min meeting
          </h3>

          <p style={{ color: '#71717a', fontSize: '13px', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.6 }}>
            A quick intro call to map your vision &amp; timeline. I'll review your idea and pinpoint the exact next step — no fluff.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '13px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <i className="fas fa-clock" style={{ fontSize: '12px', width: '16px' }}></i>
              15m
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '13px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M21 8.5L17 12l4 3.5V8.5z" fill="#00BFA5"/>
                <rect x="3" y="7" width="14" height="10" rx="2" fill="#4CAF50"/>
                <path d="M21 8.5L17 12l4 3.5V8.5z" fill="#00897B"/>
              </svg>
              Google Meet
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '13px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <i className="fas fa-globe" style={{ fontSize: '12px', width: '16px' }}></i>
              Asia/Karachi
            </div>
          </div>
        </div>

        {/* ── Center: Calendar ── */}
        <div style={{ flex: 1, padding: '32px 28px', borderRight: selectedDate ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
          {/* Month header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h4 style={{
              color: 'white', fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '17px', fontWeight: 800,
            }}>
              <span style={{ color: 'white' }}>{MONTH_NAMES[viewMonth]}</span>{' '}
              <span style={{ color: '#71717a' }}>{viewYear}</span>
            </h4>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[prevMonth, nextMonth].map((fn, i) => (
                <button
                  key={i} onClick={fn}
                  style={{
                    width: '30px', height: '30px', borderRadius: '6px',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white', cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '12px',
                  }}
                >
                  {i === 0 ? '‹' : '›'}
                </button>
              ))}
            </div>
          </div>

          {/* Day names */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '8px' }}>
            {DAY_NAMES.map(d => (
              <div key={d} style={{
                textAlign: 'center', fontSize: '11px', fontWeight: 700,
                color: '#52525b', fontFamily: "'Plus Jakarta Sans', sans-serif",
                paddingBottom: '6px',
              }}>{d}</div>
            ))}
          </div>

          {/* Calendar cells */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {cells.map((day, i) => {
              if (!day) return <div key={`e${i}`} />;
              const past = isPast(day);
              const isSel = selectedDate === day;
              const todayMark = isToday(day);
              return (
                <button
                  key={day}
                  onClick={() => !past && setSelectedDate(day)}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: past ? 'default' : 'pointer',
                    background: isSel ? 'white' : 'transparent',
                    color: past ? '#3f3f46' : isSel ? '#111' : 'white',
                    fontSize: '14px', fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    position: 'relative',
                    transition: 'background 0.15s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  onMouseEnter={e => { if (!past && !isSel) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                  onMouseLeave={e => { if (!past && !isSel) e.currentTarget.style.background = 'transparent'; }}
                >
                  {day}
                  {todayMark && (
                    <span style={{
                      position: 'absolute', bottom: '2px', left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px', height: '4px', borderRadius: '50%',
                      background: isSel ? '#111' : 'white',
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Right: Time slots (only when date selected) ── */}
        {selectedDate && (
          <div style={{ width: '200px', flexShrink: 0, padding: '32px 16px 32px 20px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {/* Header with 12h/24h toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <p style={{ color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                {selectedLabel}
              </p>
              <div style={{ display: 'flex', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', overflow: 'hidden' }}>
                {['12h', '24h'].map(mode => (
                  <button
                    key={mode}
                    onClick={() => setUse24h(mode === '24h')}
                    style={{
                      padding: '4px 8px', fontSize: '11px', fontWeight: 700, border: 'none', cursor: 'pointer',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: (mode === '24h') === use24h ? 'rgba(255,255,255,0.18)' : 'transparent',
                      color: (mode === '24h') === use24h ? 'white' : '#71717a',
                    }}
                  >{mode}</button>
                ))}
              </div>
            </div>

            {/* Time list */}
            <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              {TIMES.map(t => (
                <button
                  key={t}
                  onClick={() => handleTimeClick(t)}
                  style={{
                    padding: '10px 0', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white', fontSize: '14px', fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    cursor: 'pointer', transition: 'background 0.15s',
                    width: '100%',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                >
                  {formatTime(t)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '20px', right: '20px',
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          color: 'white', fontSize: '18px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >×</button>
    </div>
  );
}
