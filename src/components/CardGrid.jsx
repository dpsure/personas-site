import React from 'react';
import Link from '@docusaurus/Link';

export default function CardGrid({ items = [] }) {
  return (
    <div className="cardGrid">
      {items.map((it, i) => (
        <div key={i} className="card">
          <Link to={it.href}>
            <div className="pill">{it.pill || "How To..."}</div>
            <h3 style={{ marginTop: '.5rem' }}>{it.title}</h3>
          </Link>
          {it.desc && <p className="muted">{it.desc}</p>}
          {it.jtbd_link && <a href={it.jtbd_link}>{it.jtbd_title}</a>}
          {it.deploy_href && it.deploy_href.map((link, index) => (
            <a key={index} href={link.url} className="button button--primary button--me" target="_blank" rel="noopener noreferrer">
              {link.label ? `Click to Deploy: ${link.label}` : "Click to Deploy"}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
