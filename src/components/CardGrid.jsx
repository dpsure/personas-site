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

        <div key={i} className="card">
          <Link to={it.href}>
            <div className="pill">{it.pill || "How To..."}</div>
            <h3 style={{ marginTop: '.5rem' }}>{it.title}</h3>
          </Link>

          {it.desc && <p className="muted">{it.desc}</p>}
          {it.jtbd_href && it.jtbd_href.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"> {link.label || "Click here to view more"} </a>
          ))}
          {it.deploy_href && it.deploy_href.map((link, index) => (
            <a key={index} href={link.url} className="button button--primary button--me" target="_blank" rel="noopener noreferrer">
              {link.label ? `Click to Deploy: ${link.label}` : "Click to Deploy"}
            </a>
          ))}
          {it.related_video && (
            <a href={it.related_video} className='button button--secondary video-button' target='_blank' rel='noopener noreferrer'>
                <span className='play-icon'>▶</span> Play Video
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
