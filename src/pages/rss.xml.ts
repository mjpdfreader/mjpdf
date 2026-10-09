import type { APIRoute } from 'astro';
import { abs, SITE } from '../config/site';
import { guides } from '../data/guides';
import { releases } from '../data/releases';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const GET: APIRoute = () => {
  const items = [
    ...releases.filter((r) => r.highlights.length).map((r) => ({ t: `${r.title} release notes`, u: `/releases/${r.slug}/`, d: r.summary })),
    ...guides.map((g) => ({ t: g.title, u: `/guides/${g.slug}/`, d: g.description })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>${esc(SITE.name)}</title><link>${abs('/')}</link><description>${esc(SITE.description)}</description><language>en</language>\n${items
    .map((i) => `<item><title>${esc(i.t)}</title><link>${abs(i.u)}</link><guid>${abs(i.u)}</guid><description>${esc(i.d)}</description></item>`).join('\n')}\n</channel></rss>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
