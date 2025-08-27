-import React from 'react';
+import React from 'react';
+import Link from '@docusaurus/Link';

 export default function CardGrid({ items = [] }) {
   return (
     <div className="cardGrid">
       {items.map((it, i) => (
-        <a key={i} className="card" href={it.href}>
+        <Link key={i} className="card" to={it.href}>
           <div className="pill">{it.pill || 'How to'}</div>
           <h3 style={{ marginTop: '.5rem' }}>{it.title}</h3>
           {it.desc && <p className="muted">{it.desc}</p>}
-        </a>
+        </Link>
       ))}
     </div>
   );
 }
