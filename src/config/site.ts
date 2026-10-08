/** Single source of truth for the canonical origin. Never hardcode the domain elsewhere. */
export const SITE_URL = 'https://mjpdf.site';

export const abs = (path = '/'): string => new URL(path, SITE_URL + '/').toString();

export const SITE = {
  name: 'MJ PDF',
  tagline: 'Fast. Private. Powerful PDF reading for Android.',
  description:
    'MJ PDF 3.1.0 is a free, open-source PDF reader for Android with a library, dark mode, in-document search, highlights, notes, signatures and Text Mode.',
  author: 'Mudlej',
  ogImage: '/images/og-mj-pdf-3-1-0.png',
  links: {
    source: 'https://gitlab.com/mudlej_android/mj_pdf_reader',
    mirror: 'https://github.com/mudlej/mj_pdf/',
    official: 'https://mudlej.com/projects/mj-pdf',
    fdroid: 'https://f-droid.org/packages/com.gitlab.mudlej.MjPdfReader/',
    izzy: 'https://apt.izzysoft.de/fdroid/index/apk/com.gitlab.mudlej.MjPdfReader',
  },
};
