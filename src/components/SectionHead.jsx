import React from 'react';

export default function SectionHead({ eyebrow, children, sub }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
