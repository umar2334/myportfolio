import React, { useEffect } from 'react';
import { links } from '../data';

const emailHref = `mailto:${links.email}`;

const buttons = [
  { label: 'Portfolio', href: '/', icon: 'fas fa-globe', primary: true, sameTab: true },
  { label: 'LinkedIn', href: links.linkedin, icon: 'fab fa-linkedin-in' },
  { label: 'GitHub', href: links.github, icon: 'fab fa-github' },
  { label: 'Email me', href: emailHref, icon: 'far fa-envelope', sameTab: true },
];

const socials = [
  { label: 'Instagram', href: links.instagram, icon: 'fab fa-instagram' },
  { label: 'LinkedIn', href: links.linkedin, icon: 'fab fa-linkedin-in' },
  { label: 'GitHub', href: links.github, icon: 'fab fa-github' },
  { label: 'X', href: links.x, icon: 'fab fa-x-twitter' },
  { label: 'Email', href: emailHref, icon: 'far fa-envelope', sameTab: true },
];

const external = (item) => (item.sameTab ? {} : { target: '_blank', rel: 'noopener noreferrer' });

export default function LinksPage() {
  useEffect(() => {
    document.title = 'Muhammad Umar | Links';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Links to Muhammad Umar’s portfolio, LinkedIn, GitHub and email.');
  }, []);

  return (
    <main className="links-page">
      <img className="links-photo" src="/profile.jpeg" alt="Muhammad Umar" width="112" height="112" />
      <h1>Muhammad Umar</h1>
      <p className="links-bio">AI-native software engineer building apps, games and AI agents. Islamabad.</p>

      <nav className="links-buttons" aria-label="Links">
        {buttons.map((item) => (
          <a key={item.label} className={`links-button${item.primary ? ' is-primary' : ''}`} href={item.href} {...external(item)}>
            <i className={item.icon} aria-hidden="true" />
            <span>{item.label}</span>
            <span className="links-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>

      <nav className="links-socials" aria-label="Social media">
        {socials.map((item) => (
          <a key={item.label} href={item.href} aria-label={item.label} title={item.label} {...external(item)}>
            <i className={item.icon} aria-hidden="true" />
          </a>
        ))}
      </nav>

      <a className="links-site" href="/">muhammadumar18.vercel.app</a>
    </main>
  );
}
