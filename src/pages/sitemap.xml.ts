import type { APIRoute } from 'astro';
import { abs } from '../config/site';
import { pages } from '../data/pages';

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${pages
    .map((p) => `  <url><loc>${abs(p.path)}</loc>${p.path === '/' ? `<image:image><image:loc>${abs('/images/og-mj-pdf-3-1-0.png')}</image:loc></image:image>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
