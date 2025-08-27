import React from 'react';
export default function Hero({eyebrow, title, subtitle, ctaLabel, ctaHref}){
  return (
    <header className="heroBanner">
      <div className="container">
        <div className="heroEyebrow">{eyebrow}</div>
        <h1 style={{marginTop: '0.25rem'}}>{title}</h1>
        {subtitle && <p className="muted" style={{maxWidth: 720}}>{subtitle}</p>}
        {ctaHref && <p style={{marginTop: '1rem'}}>
          <a className="button button--primary button--lg" href={ctaHref}>{ctaLabel || 'Get started'}</a>
        </p>}
      </div>
    </header>
  );
}
