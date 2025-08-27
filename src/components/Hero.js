import React from 'react';
import Link from '@docusaurus/Link';

export default function Hero({ eyebrow, title, subtitle, ctaLabel, ctaHref }) {
  return (
    <header className="heroBanner">
      <div className="container">
        {eyebrow && <div className="heroEyebrow">{eyebrow}</div>}
        <h1 style={{ marginTop: '0.25rem' }}>{title}</h1>
        {subtitle && <p className="muted" style={{ maxWidth: 720 }}>{subtitle}</p>}
        {ctaHref && (
          <p style={{ marginTop: '1rem' }}>
            <Link className="button button--primary button--lg" to={ctaHref}>
              {ctaLabel || 'Get started'}
            </Link>
          </p>
        )}
      </div>
    </header>
  );
}
