import { releases } from './releases';
import { guides } from './guides';

export interface PageEntry { path: string; title: string; group: string; blurb: string }

/** Single registry used by the XML sitemap, the HTML sitemap and the footer. */
export const pages: PageEntry[] = [
  { path: '/', title: 'Home', group: 'Main', blurb: 'MJ PDF 3.1.0 overview, features and downloads.' },
  { path: '/features/', title: 'Features', group: 'Main', blurb: 'Library, reader, search, annotation, Text Mode and saving.' },
  { path: '/screenshots/', title: 'Screenshots', group: 'Main', blurb: 'Real screenshots of the app.' },
  { path: '/download/', title: 'Download', group: 'Main', blurb: 'F-Droid, IzzyOnDroid, source code and the x86_64 APK.' },
  { path: '/releases/', title: 'Releases', group: 'Releases', blurb: 'All release notes.' },
  ...releases.filter((r) => r.highlights.length || r.current).map((r) => ({ path: `/releases/${r.slug}/`, title: `${r.title} release notes`, group: 'Releases', blurb: r.summary })),
  { path: '/guides/', title: 'Guides', group: 'Guides', blurb: 'How-to guides for MJ PDF.' },
  ...guides.map((g) => ({ path: `/guides/${g.slug}/`, title: g.title, group: 'Guides', blurb: g.description })),
  { path: '/faq/', title: 'FAQ', group: 'Help', blurb: 'Answers about installing and using MJ PDF.' },
  { path: '/privacy/', title: 'Privacy & permissions', group: 'Help', blurb: 'What the app asks for and what is verified.' },
  { path: '/about/', title: 'About', group: 'Help', blurb: 'About MJ PDF and this website.' },
  { path: '/sitemap/', title: 'Sitemap', group: 'Help', blurb: 'Every page on this website.' },
];
