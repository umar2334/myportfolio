import React, { useEffect, useRef, useState } from 'react';
import BookingModal from './components/BookingModal';
import SectionHead from './components/SectionHead';
import { BlogIndex, BlogPost, NotFound, WritingSection } from './components/Blog';
import LinksPage from './components/LinksPage';
import { articles } from './articles';
import {
  links, stats, buildingWith, skillGroups, experience, education, featured, pipeline,
  projects, certifications, steps, services, faqs,
} from './data';
import './styles.css';

/* Adds .is-visible to each .reveal element as it scrolls into view. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Orange glow plus a grid of dots that swell and push away from the pointer. */
const DOT_SPACING = 26;
const DOT_RADIUS = 190;

function CursorGlow() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const allowed = window.matchMedia('(pointer: fine)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!wrap || !ctx || !allowed) return undefined;

    const target = { x: -1000, y: -1000 };
    const eased = { x: -1000, y: -1000 };
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const firstCol = Math.max(0, Math.floor((eased.x - DOT_RADIUS) / DOT_SPACING));
      const lastCol = Math.ceil((eased.x + DOT_RADIUS) / DOT_SPACING);
      const firstRow = Math.max(0, Math.floor((eased.y - DOT_RADIUS) / DOT_SPACING));
      const lastRow = Math.ceil((eased.y + DOT_RADIUS) / DOT_SPACING);
      for (let col = firstCol; col <= lastCol; col += 1) {
        for (let row = firstRow; row <= lastRow; row += 1) {
          const baseX = col * DOT_SPACING + DOT_SPACING / 2;
          const baseY = row * DOT_SPACING + DOT_SPACING / 2;
          const dx = baseX - eased.x;
          const dy = baseY - eased.y;
          const distance = Math.hypot(dx, dy);
          if (distance <= DOT_RADIUS) {
            const strength = (1 - distance / DOT_RADIUS) ** 2;
            const push = (14 * strength) / (distance || 1);
            ctx.beginPath();
            ctx.arc(baseX + dx * push, baseY + dy * push, 0.8 + 1.6 * strength, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 150, 70, ${0.12 + 0.7 * strength})`;
            ctx.fill();
          }
        }
      }
    };

    const tick = () => {
      eased.x += (target.x - eased.x) * 0.15;
      eased.y += (target.y - eased.y) * 0.15;
      wrap.style.setProperty('--x', `${eased.x}px`);
      wrap.style.setProperty('--y', `${eased.y}px`);
      draw();
      const settled = Math.abs(target.x - eased.x) < 0.1 && Math.abs(target.y - eased.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const move = (e) => {
      if (target.x < -500) {
        eased.x = e.clientX;
        eased.y = e.clientY;
      }
      target.x = e.clientX;
      target.y = e.clientY;
      wrap.style.opacity = 1;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const hide = () => { wrap.style.opacity = 0; };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
    };
  }, []);

  return (
    <div ref={wrapRef} className="cursor-glow" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

/* Returns the id of the section currently under the nav. */
function useActiveSection(ids) {
  const [active, setActive] = useState('');
  const key = ids.join(',');
  useEffect(() => {
    const sections = key.split(',').map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
  return active;
}

function Nav({ isBlog }) {
  const [open, setOpen] = useState(false);
  const items = [
    ['About', '/#about', 'about'],
    ['Experience', '/#experience', 'experience'],
    ['Work', '/#work', 'work'],
    ...(certifications.length ? [['Certs', '/#certifications', 'certifications']] : []),
    ['Process', '/#process', 'process'],
    ['Blog', '/blog', 'writing'],
  ];
  const spied = useActiveSection(items.map((item) => item[2]));
  const active = isBlog ? 'writing' : spied;
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <a className="nav-brand" href="/#home" onClick={() => setOpen(false)}>
          <img src="/profile.jpeg" alt="" width="36" height="36" />
          <span>Muhammad Umar</span>
        </a>
        <div className="nav-links">
          {items.map(([label, href, id]) => (
            <a key={href} href={href} className={active === id ? 'is-active' : undefined} aria-current={active === id ? 'true' : undefined}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="nav-contact" href="/#contact">Contact</a>
          <button
            className="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={open ? 'fas fa-xmark' : 'fas fa-bars'} aria-hidden="true" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="nav-menu">
          {[...items, ['Contact', '/#contact']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Json({ rows }) {
  return (
    <pre className="json" aria-label="Summary of Umar's role, location, stack and availability">
      <code>
        <span className="json-dim">{'{'}</span>{'\n'}
        {rows.map(([key, value], i) => (
          <React.Fragment key={key}>
            {'  '}<span className="json-key">"{key}"</span><span className="json-dim">: </span>
            {Array.isArray(value)
              ? <><span className="json-dim">[</span>{value.map((v, j) => (
                <React.Fragment key={v}><span className="json-str">"{v}"</span>{j < value.length - 1 && <span className="json-dim">, </span>}</React.Fragment>
              ))}<span className="json-dim">]</span></>
              : <span className="json-str">"{value}"</span>}
            {i < rows.length - 1 && <span className="json-dim">,</span>}{'\n'}
          </React.Fragment>
        ))}
        <span className="json-dim">{'}'}</span>
      </code>
    </pre>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="chip"><span className="dot dot-green" />Open to roles &amp; freelance · Islamabad</p>
            <h1>I turn ideas into <span className="grad">shipped products.</span></h1>
            <p className="lead">
              I&apos;m Umar, an AI engineer. I build AI-powered web apps, Android apps,
              games and the automations that market them.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
              <a className="btn btn-ghost" href={links.cv} target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-down" aria-hidden="true" /> Download CV</a>
            </div>
          </div>

          <div className="window hero-window">
            <div className="window-bar"><span /><span /><span /><em>umar.json</em></div>
            <img className="hero-photo" src="/profile.jpeg" alt="Muhammad Umar" width="1280" height="1050" />
            <Json rows={[
              ['role', 'AI Engineer'],
              ['based', 'Islamabad, PK'],
              ['stack', ['React', 'Next.js', 'Flutter']],
              ['open_to', ['roles', 'freelance']],
            ]} />
          </div>
        </div>

        <dl className="stats reveal">
          {stats.map((s) => (
            <div key={s.label}><dt>{s.label}</dt><dd>{s.num}</dd></div>
          ))}
        </dl>

        <div className="building reveal">
          <p className="mono-label">Building with</p>
          <ul>{buildingWith.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="about-left"><div className="about-left-inner">
          <SectionHead eyebrow="About">Built like a senior. <span className="accent">Shipping like a startup.</span></SectionHead>
          <div className="card now reveal">
            <p className="mono-label"><span className="dot dot-green" />Now shipping</p>
            <ul>
              {featured.map((p) => (
                <li key={p.id}>
                  <a href="#work">{p.title}</a>
                  <span className={`status status-${p.statusTone}`}>{p.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div></div>
        <div className="about-right reveal">
          <div className="prose">
            <p>I started coding 4 years ago, right when LLMs began rewriting how software is built. Claude, Cursor and GPT are daily tools for me, and I work across the full stack with Next.js, React, Flutter, Node and Supabase.</p>
            <p>Recently that has meant going beyond websites: a Flutter CV app with Gemini, a Godot puzzle game going through Google Play testing, and an automation that markets that game by itself.</p>
            <p className="prose-strong">Speed is a skill. Taste is a skill. I&apos;m working on both.</p>
            <p>Open to full-time engineering roles and selective freelance work for founders who need to move fast.</p>
          </div>

          <p className="mono-label about-label">Skills &amp; technologies</p>
          <div className="skills">
            {skillGroups.map((g) => (
              <div className="skill-row" key={g.label}>
                <h3>{g.label}</h3>
                <ul className="tags">{g.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>

          <p className="mono-label about-label">Education</p>
          <div className="edu">
            {education.map((e) => (
              <div className="card edu-card" key={e.degree}>
                <h3>{e.degree}</h3>
                <p className="accent">{e.inst}</p>
                <p>{e.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container process-grid">
        <div className="process-side">
          <SectionHead eyebrow="Experience" sub="Research and product work on bringing AI into Karachi schools.">
            Where I&apos;ve <span className="accent">worked.</span>
          </SectionHead>
        </div>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="reveal" key={job.role}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="card timeline-card job">
                <div className="job-head">
                  <h3>{job.role}</h3>
                  <span className="mono-tag">{job.period}</span>
                </div>
                <p className="job-org"><span className="accent">{job.org}</span> · {job.place}</p>
                <ul className="bullets">{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <ul className="tags tags-sm">{job.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                {job.demo && (
                  <a className="job-demo" href={job.demo.href} target="_blank" rel="noopener noreferrer">
                    <img src={job.demo.img} alt={job.demo.alt} width="1000" height="625" loading="lazy" />
                    <span className="job-demo-bar">
                      <span>
                        <b>{job.demo.title}</b>
                        <em>{job.demo.note}</em>
                      </span>
                      <span className="accent job-demo-open">Open demo <span aria-hidden="true">↗</span></span>
                    </span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectLink({ link, primary }) {
  return (
    <a className={primary ? 'btn btn-primary btn-sm' : 'text-link'} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label} <span aria-hidden="true">↗</span>
    </a>
  );
}

function FeaturedVisual({ visual }) {
  return (
    <div className="window feature-window">
      <div className="window-bar"><span /><span /><span /><em>{visual.file}</em></div>
      {visual.type === 'image' && <img src={visual.src} alt={visual.alt} width="1024" height="500" loading="lazy" />}
      {visual.type === 'game' && (
        <div className="game-visual">
          <img src={visual.src} alt={visual.alt} width="1024" height="500" loading="lazy" />
          <div className="game-screens">
            {visual.screens.map((screen) => <img key={screen.src} src={screen.src} alt={screen.alt} loading="lazy" />)}
          </div>
        </div>
      )}
      {visual.type === 'terminal' && (
        <div className="terminal">
          <p><span className="json-dim">$</span> <span className="json-str">reels run</span> <span className="json-dim">--every-day</span> 18:00</p>
          {pipeline.map(([step, note]) => (
            <p key={step}><span className="tick">✓</span> <b>{step}</b><span className="json-dim">{note}</span></p>
          ))}
          <p className="terminal-last"><span className="accent">→</span> next reel queued <span className="json-dim">·</span> <span className="json-str">cost: $0</span></p>
        </div>
      )}
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead eyebrow="Work" sub="Three new builds first, followed by the rest of my projects.">
          Apps, games and <span className="accent">automation I&apos;ve built.</span>
        </SectionHead>

        <div className="featured">
          {featured.map((p, i) => (
            <article className={`feature reveal${i % 2 ? ' feature-flip' : ''}`} key={p.id}>
              <FeaturedVisual visual={p.visual} />
              <div className="feature-copy">
                <div className="feature-title">
                  {p.icon ? <img src={p.icon} alt="" width="48" height="48" /> : <span className="agent-icon"><i className="fas fa-robot" aria-hidden="true" /></span>}
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.kind}</p>
                  </div>
                </div>
                <p className={`status status-${p.statusTone}`}><span className="dot" />{p.status}</p>
                <p className="feature-desc">{p.desc}</p>
                <ul className="bullets">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="btn-row feature-links">
                  {p.links.map((l) => <ProjectLink key={l.href} link={l} primary={l.primary} />)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="more-title reveal">More projects</h3>
        <div className="project-grid">
          {projects.map((p) => (
            <article className="card project reveal" key={p.title}>
              <div className="project-img">
                <img src={p.img} alt={`${p.title} 3D artwork`} width="1280" height="800" loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-head">
                  <h4>{p.title}</h4>
                  <p className={`status status-${p.tone}`}><span className="dot" />{p.status}</p>
                </div>
                <p className="project-desc">{p.desc}</p>
                <ul className="tags tags-sm">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="project-links">
                  {p.links.map((l) => <ProjectLink key={l.href} link={l} />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  if (!certifications.length) return null;
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Certifications" sub="Courses I've completed, with links you can check yourself.">
          Keep learning. <span className="accent">Prove it.</span>
        </SectionHead>
        <div className="cert-grid">
          {certifications.map((c) => {
            const Tag = c.url ? 'a' : 'div';
            const linkProps = c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <Tag className={`card cert reveal${c.featured ? ' cert-featured' : ''}`} key={c.title} {...linkProps}>
                <div className="cert-top">
                  <span className="cert-icon">
                    {c.logo ? <img src={c.logo} alt="" width="26" height="26" /> : <i className="fas fa-award" aria-hidden="true" />}
                  </span>
                  {c.level && <span className="cert-level">{c.level}</span>}
                </div>
                <h3>{c.title}</h3>
                <p className="mono-tag">{[c.issuer, c.code, c.year].filter(Boolean).join(' · ')}</p>
                {c.desc && <p className="cert-desc">{c.desc}</p>}
                {c.url && <p className="accent cert-verify">Verify <span aria-hidden="true">↗</span></p>}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section section-alt">
      <div className="container process-grid">
        <div className="process-side">
          <SectionHead eyebrow="Process" sub="A short path from your idea to something people can use.">
            How we&apos;d <span className="accent">work together.</span>
          </SectionHead>
        </div>
        <div>
          <ol className="timeline">
            {steps.map((s, i) => (
              <li className="reveal" key={s.title}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="card timeline-card">
                  <div className="timeline-head">
                    <h3>{s.title}</h3>
                    <span className="mono-num">0{i + 1}</span>
                  </div>
                  <p>{s.desc}</p>
                  <p className="mono-tag">{s.tag}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mono-label services-label reveal">What I take on</p>
          <ul className="services reveal">
            {services.map((s) => (
              <li key={s.label}><span>{s.label}</span><span className="mono-tag">{s.note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container faq-container">
        <SectionHead eyebrow="FAQ">Questions you <span className="accent">might have.</span></SectionHead>
        <div className="faq reveal">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}<i className="fas fa-plus" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [booking, setBooking] = useState(false);
  const rows = [
    ['Email', links.email, `mailto:${links.email}?subject=Project%20inquiry`],
    ['WhatsApp', '+92 340 2288644', links.whatsapp],
    ['LinkedIn', 'umar-khan-dev', links.linkedin],
    ['GitHub', 'umar2334', links.github],
    ['Instagram', 'umarkhan404', links.instagram],
    ['X', 'Umarkha02529271', links.x],
  ];
  return (
    <section id="contact" className="section section-alt contact">
      {booking && <BookingModal onClose={() => setBooking(false)} />}
      <div className="container contact-grid">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="contact-title">Have something <span className="grad">worth building?</span></h2>
          <p className="lead">Send me the idea or the JD. I reply within a few hours, and you&apos;ll get an honest answer on what&apos;s realistic.</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true" /> Message on WhatsApp</a>
            <button className="btn btn-ghost" type="button" onClick={() => setBooking(true)}><i className="fas fa-calendar" aria-hidden="true" /> Book a 15-min call</button>
          </div>
        </div>
        <dl className="card contact-rows reveal">
          {rows.map(([label, value, href]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd><a href={href} target="_blank" rel="noopener noreferrer">{value}</a></dd>
            </div>
          ))}
          <div><dt>Location</dt><dd>Islamabad, Pakistan · GMT+5</dd></div>
        </dl>
      </div>
    </section>
  );
}

function currentPage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return { name: 'home' };
  if (path === '/links') return { name: 'links' };
  if (path === '/blog') return { name: 'blog' };
  const match = path.match(/^\/blog\/([^/]+)$/);
  const article = match && articles.find((a) => a.slug === match[1]);
  return article ? { name: 'post', article } : { name: 'missing' };
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Certifications />
      <Process />
      <WritingSection />
      <Faq />
      <Contact />
    </main>
  );
}

export default function App() {
  const [page] = useState(currentPage);
  useReveal();

  /* The page renders after load, so the browser can't jump to /#section by itself. */
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    jump();
    document.fonts?.ready.then(jump); // web fonts can shift the layout after the first jump
  }, []);

  if (page.name === 'links') {
    return (
      <>
        <div className="backdrop backdrop-links" aria-hidden="true" />
        <CursorGlow />
        <LinksPage />
      </>
    );
  }

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <CursorGlow />
      <Nav isBlog={page.name === 'blog' || page.name === 'post'} />
      {page.name === 'home' && <Home />}
      {page.name === 'blog' && <main><BlogIndex /></main>}
      {page.name === 'post' && <main><BlogPost article={page.article} /></main>}
      {page.name === 'missing' && <main><NotFound /></main>}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-name">Muhammad Umar</p>
            <p>AI engineer. Built in Pakistan. © {new Date().getFullYear()}</p>
          </div>
          <a className="text-link" href="#">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
