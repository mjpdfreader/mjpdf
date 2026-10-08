export interface Release {
  version: string;
  slug: string;
  title: string;
  /** ISO date. Leave undefined until verified from the official release page. */
  date?: string;
  current: boolean;
  summary: string;
  highlights: string[];
  fixes: string[];
  apk?: string;
}

// Add newer versions at the top. Pages, sitemap and the download page all read from here.
export const releases: Release[] = [
  {
    version: '3.1.0',
    slug: '3-1-0',
    title: 'MJ PDF 3.1.0',
    current: true,
    summary:
      'A correctness and stability release: a few new reading options, much safer saving and backups, and a long list of fixes.',
    highlights: [
      'Single Page mode',
      'Page fit options',
      'Unified Reading Mode settings',
      'Improved in-document search',
      'Safer file saving, with rescue copies after a failed save',
      'Improved document identification',
      'Improved theme controls',
    ],
    fixes: ['Search', 'Gestures', 'Backups', 'Screen rotation', 'Right-to-left (RTL) reading'],
    apk: '/downloads/mj-pdf-3.1.0.apk',
  },
  {
    version: '3.0.0',
    slug: '3-0-0',
    title: 'MJ PDF 3.0.0',
    current: false,
    summary:
      'The 3.x generation. The project says the app was entirely rewritten in 3.0.0 after the 1.x and 2.x versions based on PDF Viewer Plus.',
    highlights: [],
    fixes: [],
  },
];

export const currentRelease = releases.find((r) => r.current)!;
