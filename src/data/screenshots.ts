export interface Shot {
  id: string;
  file: string; // base name, files exist as -400.webp and -800.webp
  title: string;
  alt: string;
  caption: string;
  category: string;
}

const base = '/images/screenshots/';
export const shotSrc = (s: Shot, w: 400 | 800) => `${base}${s.file}-${w}.webp`;
export const SHOT_W = 1080;
export const SHOT_H = 2283;

export const shots: Shot[] = [
  { id: 'home', file: 'mj-pdf-3-1-0-home-recent', title: 'Continue Reading', category: 'App Overview',
    alt: 'MJ PDF 3.1.0 home screen showing the Recent tab with a Continue Reading card and a list of books with progress',
    caption: 'The Recent tab puts the book you were reading first, with page counts, progress and last-opened time.' },
  { id: 'library', file: 'mj-pdf-3-1-0-library-reading-status', title: 'Library & reading status', category: 'App Overview',
    alt: 'MJ PDF 3.1.0 Library tab with a grid of book covers and filters for To Read, Reading, On Hold, Completed and Abandoned',
    caption: 'The Library tab as a cover grid, filterable by reading status.' },
  { id: 'highlights', file: 'mj-pdf-3-1-0-text-highlights', title: 'Highlight text', category: 'Annotation',
    alt: 'MJ PDF 3.1.0 showing selected text and several highlight colors on a PDF page, with a color and action bar',
    caption: 'Select text, choose a color, and keep highlights in the document. The action bar offers copy, share, web search, notes and translate.' },
  { id: 'dark', file: 'mj-pdf-3-1-0-dark-mode', title: 'Dark mode', category: 'Reading',
    alt: 'MJ PDF 3.1.0 displaying a PDF in dark mode on Android',
    caption: 'Dark mode applies to the app and to the PDF page itself.' },
  { id: 'menu', file: 'mj-pdf-3-1-0-reader-menu', title: 'Reader menu', category: 'Reading',
    alt: 'MJ PDF 3.1.0 reader menu with options such as Search, Go To Page, Full Screen, Text Mode, Table of Contents, Bookmarks, Notes and Highlights',
    caption: 'Everything in one menu: search, go to page, bookmarks, full screen, signature, incognito, Text Mode, table of contents, notes and highlights.' },
  { id: 'quote', file: 'mj-pdf-3-1-0-share-quote', title: 'Share quotes as images', category: 'Reading',
    alt: 'MJ PDF 3.1.0 Share Quote dialog previewing a quote card with the book name and author and light, dark and sepia themes',
    caption: 'Turn a passage into a quote card with the book name, author and a choice of themes.' },
];
