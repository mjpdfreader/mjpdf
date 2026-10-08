import type { APIRoute } from 'astro';
import { abs } from '../config/site';
import { releases } from '../data/releases';

export const GET: APIRoute = () => {
  const paths = ['/', '/features/', '/screenshots/', '/download/', '/releases/', ...releases.filter((r) => r.highlights.length || r.current).map((r) => `/releases/${r.slug}/`), '/faq/', '/privacy/', '/about/'];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${abs(p)}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
