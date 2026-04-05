import React, { useState } from 'react';

export default function ContactTab({ isMobile, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div
      style={{ flex: 1, padding: '25px', overflowY: 'auto', position: 'relative', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(10px)' }}
    >
      <h2
        style={{ textAlign: 'center', marginBottom: '24px', paddingBottom: '10px', borderBottom: '2px solid #bbf7d0', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '2px', color: '#16a34a', display: isMobile ? 'none' : 'block' }}
      >
        Get In Touch
      </h2>

      <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '24px', textAlign: 'center', lineHeight: 1.6 }}>
        Have a project in mind or want to hire me?<br />
        <span style={{ color: '#16a34a', fontWeight: 700 }}>Fill the form below!</span>
      </p>

      <form action="https://formspree.io/f/xgvrgepv" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Name */}
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '12px', top: '10px', color: '#9ca3af', pointerEvents: 'none' }}>
            <i className="fas fa-user"></i>
          </span>
          <input
            type="text" name="name" placeholder="Full Name" required
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', paddingLeft: '40px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none', boxSizing: 'border-box', fontFamily: 'Poppins, sans-serif' }}
            onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.background = 'white'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }}
          />
        </div>

        {/* Email */}
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '12px', top: '10px', color: '#9ca3af', pointerEvents: 'none' }}>
            <i className="fas fa-envelope"></i>
          </span>
          <input
            type="email" name="email" placeholder="Email Address" required
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', paddingLeft: '40px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none', boxSizing: 'border-box', fontFamily: 'Poppins, sans-serif' }}
            onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.background = 'white'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }}
          />
        </div>

        {/* Message */}
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '12px', top: '12px', color: '#9ca3af', pointerEvents: 'none' }}>
            <i className="fas fa-comment-dots"></i>
          </span>
          <textarea
            name="message" rows="4" placeholder="Write your message here..." required
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', paddingLeft: '40px', paddingRight: '12px', paddingTop: '12px', paddingBottom: '12px', fontSize: '14px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none', resize: 'none', boxSizing: 'border-box', fontFamily: 'Poppins, sans-serif' }}
            onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.background = 'white'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; }}
          />
        </div>

        <button
          type="submit"
          style={{ width: '100%', background: 'linear-gradient(to right, #22c55e, #16a34a)', color: 'white', fontWeight: 700, padding: '12px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(22,163,74,0.3)', border: 'none', cursor: 'pointer', fontSize: '14px', letterSpacing: '1px', fontFamily: 'Poppins, sans-serif', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 16px rgba(22,163,74,0.4)'; }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 12px rgba(22,163,74,0.3)'; }}
        >
          SEND MESSAGE <i className="fas fa-paper-plane ml-2"></i>
        </button>
      </form>

      {/* Social Links */}
      <div style={{ marginTop: '32px', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '24px' }}>
        <p style={{ fontSize: '10px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700, letterSpacing: '2px', marginBottom: '16px' }}>Or Connect Via</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          {[
            { href: 'https://www.linkedin.com/in/umar-khan-094059203/', icon: 'fab fa-linkedin-in', bg: '#eff6ff', color: '#2563eb', hoverBg: '#2563eb' },
            { href: 'https://github.com/umar2334', icon: 'fab fa-github', bg: '#f9fafb', color: '#1f2937', hoverBg: '#1f2937' },
            { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=umarkhn895@gmail.com', icon: 'fas fa-envelope', bg: '#fff1f2', color: '#ef4444', hoverBg: '#ef4444' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: s.bg, color: s.color, textDecoration: 'none', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = s.hoverBg; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = s.bg; e.currentTarget.style.color = s.color; }}
            >
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Close */}
      {!isMobile && (
        <button
          onClick={onClose}
          style={{ position: 'absolute', bottom: '16px', right: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', fontWeight: 700, color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
          onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
        >
          <span>Close</span> <i className="fas fa-times-circle" style={{ fontSize: '18px' }}></i>
        </button>
      )}

      <div style={{ height: '48px' }}></div>
    </div>
  );
}
