import React from 'react';
import Link from '@docusaurus/Link';

export default function CardGrid({ items = [], sectionType = 'how-to' }) {
  const getDefaultPillText = () => {
    switch (sectionType) {
      case 'persona':
        return 'Persona';
      case 'job':
        return 'Job to be Done';
      default:
        return 'How to';
    }
  };

  return (
    <div className="cardGrid">
      {items.map((it, i) => (
        <Link key={i} className="card" to={it.href}>
          <div className="pill">{it.pill || getDefaultPillText()}</div>
          <h3 style={{ marginTop: '.5rem' }}>{it.title}</h3>
          {it.desc && <p className="muted">{it.desc}</p>}
        </Link>
      ))}
    </div>
  );
}
