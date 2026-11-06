import React, { useEffect } from 'react';
import { articles, formatDate, readTime } from '../articles';
import SectionHead from './SectionHead';

function Cover({ cover }) {
  if (cover.type === 'image') {
    return <img className="article-cover" src={cover.src} alt={cover.alt} loading="lazy" />;
  }
  return (
    <div className="article-cover article-cover-text" aria-hidden="true">
      {cover.lines.map((line) => <p key={line}>{line}</p>)}
    </div>
  );
}

function Meta({ article }) {
  return <p className="mono-tag">{formatDate(article.date)} · {readTime(article)} min read</p>;
}

function ArticleCard({ article }) {
  return (
    <a className="card article-card reveal" href={`/blog/${article.slug}`}>
      <Cover cover={article.cover} />
      <div className="article-body">
        <Meta article={article} />
        <h3>{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <span className="accent article-read">Read article <span aria-hidden="true">→</span></span>
      </div>
    </a>
  );
}

export function WritingSection() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <div className="writing-head">
          <SectionHead eyebrow="Writing" sub="Notes on the real problems behind the apps I build.">
            What I learned <span className="accent">building them.</span>
          </SectionHead>
          <a className="btn btn-ghost reveal" href="/blog">All articles</a>
        </div>
        <div className="article-grid">
          {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </div>
    </section>
  );
}

function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

export function BlogIndex() {
  useDocumentMeta('Blog | Muhammad Umar', 'Articles by Muhammad Umar on building AI apps, Android apps, games and automation.');
  return (
    <section className="page">
      <div className="container blog-container">
        <a className="back-link" href="/"><span aria-hidden="true">←</span> Back to home</a>
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">Writing</h1>
        <p className="lead">Notes on the real problems behind the apps I build.</p>
        <div className="blog-list">
          {articles.map((a) => (
            <a className="card blog-row" href={`/blog/${a.slug}`} key={a.slug}>
              <Cover cover={a.cover} />
              <div>
                <Meta article={a} />
                <h2>{a.title}</h2>
                <p className="article-excerpt">{a.excerpt}</p>
                <ul className="tags tags-sm">{a.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Turns **text** into bold. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => (
    part.startsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : <React.Fragment key={i}>{part}</React.Fragment>
  ));
}

function Block({ block }) {
  if (block.h) return <h2>{block.h}</h2>;
  if (block.code) return <pre><code>{block.code}</code></pre>;
  if (block.ul) return <ul>{block.ul.map((t) => <li key={t}><Rich text={t} /></li>)}</ul>;
  if (block.ol) return <ol>{block.ol.map((t) => <li key={t}><Rich text={t} /></li>)}</ol>;
  return <p><Rich text={block.p} /></p>;
}

export function BlogPost({ article }) {
  useDocumentMeta(`${article.title} | Muhammad Umar`, article.excerpt);
  return (
    <article className="page">
      <div className="container post">
        <a className="back-link" href="/blog"><span aria-hidden="true">←</span> Back to blog</a>
        <Meta article={article} />
        <h1>{article.title}</h1>
        <ul className="tags tags-sm">{article.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="post-author">
          <img src="/profile.jpeg" alt="" width="44" height="44" />
          <div>
            <p>Muhammad Umar</p>
            <p>AI Engineer</p>
          </div>
        </div>
        <div className="post-body">
          {article.body.map((block, i) => <Block key={i} block={block} />)}
        </div>
        <div className="card post-cta">
          <div>
            <h2>Building something similar?</h2>
            <p>I&apos;m open to roles and freelance work.</p>
          </div>
          <a className="btn btn-primary btn-sm" href="/#contact">Get in touch <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </article>
  );
}

export function NotFound() {
  useDocumentMeta('Page not found | Muhammad Umar', 'This page does not exist.');
  return (
    <section className="page">
      <div className="container blog-container">
        <p className="eyebrow">404</p>
        <h1 className="page-title">Page not found</h1>
        <p className="lead">This page doesn&apos;t exist or has moved.</p>
        <div className="btn-row page-actions"><a className="btn btn-primary" href="/">Back to home</a></div>
      </div>
    </section>
  );
}
