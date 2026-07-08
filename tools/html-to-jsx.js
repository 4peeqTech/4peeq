const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const destDir = path.join(__dirname, '../web-next/src/app/(frontend)');

const files = [
  { in: 'index.html', out: 'page.tsx' },
  { in: 'academy.html', out: 'academy/page.tsx' },
  { in: 'consultoria.html', out: 'consultoria/page.tsx' },
  { in: 'people.html', out: 'people/page.tsx' },
  { in: 'tech.html', out: 'tech/page.tsx' },
  { in: 'makers.html', out: 'makers/page.tsx' },
  { in: 'club.html', out: 'club/page.tsx' },
  { in: 'lo-que-hacemos.html', out: 'lo-que-hacemos/page.tsx' },
  { in: 'postulate.html', out: 'postulate/page.tsx' },
  { in: 'nuestrapropuesta.html', out: 'nuestrapropuesta/page.tsx' },
];

files.forEach(f => {
  const inPath = path.join(srcDir, f.in);
  if (!fs.existsSync(inPath)) return;
  
  let html = fs.readFileSync(inPath, 'utf8');
  
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return;
  let body = bodyMatch[1];
  
  body = body.replace(/<header class="nav"[\s\S]*?<\/header>/gi, '');
  body = body.replace(/<nav class="mobile-menu"[\s\S]*?<\/nav>/gi, '');
  body = body.replace(/<footer class="foot">[\s\S]*?<\/footer>/gi, '');
  body = body.replace(/<script.*?>[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<a class="wa"[\s\S]*?<\/a>/gi, '');

  body = body.replace(/class=/g, 'className=');
  body = body.replace(/for=/g, 'htmlFor=');
  body = body.replace(/autocomplete=/g, 'autoComplete=');
  body = body.replace(/maxlength=/gi, 'maxLength=');
  body = body.replace(/maxLength="([^"]*)"/g, 'maxLength={$1}');
  body = body.replace(/tabindex=/gi, 'tabIndex=');
  body = body.replace(/tabIndex="([^"]*)"/g, 'tabIndex={$1}');
  body = body.replace(/stroke-width=/g, 'strokeWidth=');
  body = body.replace(/stroke-linecap=/g, 'strokeLinecap=');
  body = body.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  body = body.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  body = body.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
  body = body.replace(/<a name=/g, '<a id=');
  body = body.replace(/inputmode=/g, 'inputMode=');
  
  body = body.replace(/<(img|input|hr|br|meta|link)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
  
  // Fix HTML comments -> JSX comments
  body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Fix SVG styles or other inline styles
  body = body.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(s => s.trim());
    let hasCustomProps = false;
    const obj = rules.map(r => {
      let [k, v] = r.split(':').map(s => s.trim());
      if (!k || !v) return '';
      
      if (k.startsWith('--')) {
        hasCustomProps = true;
        return `'${k}': '${v}'`;
      }
      
      k = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
      if (!isNaN(v) && k !== 'fontWeight') return `${k}: ${v}`;
      return `${k}: '${v}'`;
    }).filter(Boolean).join(', ');
    return hasCustomProps ? `style={{ ${obj} } as React.CSSProperties}` : `style={{ ${obj} }}`;
  });

  const outPath = path.join(destDir, f.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  
  const componentName = f.out === 'page.tsx' ? 'HomePage' : f.in.replace('.html', '').charAt(0).toUpperCase() + f.in.replace('.html', '').slice(1).replace(/-/g, '') + 'Page';
  
  let content = `import React from 'react'

export default function ${componentName}() {
  return (
    <>
      ${body.trim()}
    </>
  )
}
`;
  
  fs.writeFileSync(outPath, content);
  console.log(`Converted ${f.in} -> ${f.out}`);
});
