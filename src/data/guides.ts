export interface Guide {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  shot: string; // id from screenshots.ts
  steps: { name: string; text: string }[];
  tips: string[];
  related: string[];
}

// Steps describe controls visible in the supplied 3.1.0 screenshots.
export const guides: Guide[] = [
  {
    slug: 'highlight-pdf-text-on-android',
    title: 'How to Highlight PDF Text on Android',
    h1: 'How to highlight PDF text on Android with MJ PDF',
    description: 'Step-by-step guide to selecting and highlighting text in a PDF on Android with MJ PDF 3.1.0, including color choices and quick actions.',
    intro: 'Highlighting turns a long PDF into something you can revisit quickly. In MJ PDF 3.1.0 you select text, pick a color from the bar that appears, and your highlights stay with the document. You can list them later from the reader menu.',
    shot: 'highlights',
    steps: [
      { name: 'Open a PDF', text: 'Open any PDF from the Recent, Library or Folders tab.' },
      { name: 'Select text', text: 'Long-press a word and drag the selection handles over the passage you want to mark.' },
      { name: 'Choose a color', text: 'A bar appears with a row of highlight colors. Tap one to apply it to the selection.' },
      { name: 'Use the quick actions', text: 'The same bar offers copy, share, web search, add note and translate, so you can act on the selection without leaving the page.' },
      { name: 'Review your highlights', text: 'Open the reader menu and choose My Highlights to see everything you have marked.' },
    ],
    tips: ['Use one color per purpose, for example yellow for key ideas and blue for definitions.', 'Combine highlights with notes for passages you want to revisit.', 'Use Share Quote to turn a highlighted passage into an image.'],
    related: ['share-quotes-from-pdf-as-images', 'read-pdf-in-dark-mode-on-android'],
  },
  {
    slug: 'read-pdf-in-dark-mode-on-android',
    title: 'How to Read PDFs in Dark Mode on Android',
    h1: 'How to read PDFs in dark mode on Android',
    description: 'Turn on dark mode in MJ PDF 3.1.0 for comfortable night reading. The PDF page itself is darkened, not just the app interface.',
    intro: 'Many PDF apps only darken their toolbars while the white page still glares. MJ PDF 3.1.0 applies dark mode to the page as well, which makes reading at night far more comfortable.',
    shot: 'dark',
    steps: [
      { name: 'Open your PDF', text: 'Open the document you want to read.' },
      { name: 'Open the reader menu', text: 'Tap the menu icon at the top right of the reader.' },
      { name: 'Tap Dark Mode', text: 'Choose Dark Mode in the menu. The page and the interface switch immediately.' },
      { name: 'Adjust your view', text: 'Combine dark mode with full screen or Single Page mode, and use the unified Reading Mode settings to fine-tune the reader.' },
    ],
    tips: ['Dark mode is a per-reader toggle, so you can switch back for diagrams that need their original colors.', 'Theme controls were improved in 3.1.0.'],
    related: ['text-mode-read-pdf-like-an-ebook', 'highlight-pdf-text-on-android'],
  },
  {
    slug: 'text-mode-read-pdf-like-an-ebook',
    title: 'Text Mode: Read a PDF Like an E-book on Android',
    h1: 'Text Mode: read a PDF like an e-book on Android',
    description: 'Learn how Text Mode in MJ PDF 3.1.0 reflows PDF text so you can read it like an e-book on a phone screen.',
    intro: 'Fixed-layout PDFs are awkward on small screens. Text Mode reflows the text of a PDF so it can be read like an e-book, with reading settings you can adjust.',
    shot: 'menu',
    steps: [
      { name: 'Open the document', text: 'Open a PDF that contains selectable text.' },
      { name: 'Open the reader menu', text: 'Tap the menu icon in the top right corner.' },
      { name: 'Choose Text Mode', text: 'Tap Text Mode in the menu to switch to the reflowed view.' },
      { name: 'Adjust the reading experience', text: 'Use the reading settings for fonts and themes until the text feels right.' },
    ],
    tips: ['Text Mode works best on text-heavy documents such as books and articles.', 'Scanned documents without a text layer have nothing to reflow.'],
    related: ['read-pdf-in-dark-mode-on-android', 'highlight-pdf-text-on-android'],
  },
  {
    slug: 'share-quotes-from-pdf-as-images',
    title: 'How to Share Quotes from a PDF as Images',
    h1: 'How to share quotes from a PDF as images',
    description: 'Create a shareable quote card from any PDF passage with MJ PDF 3.1.0, with book name, author and light, dark or sepia themes.',
    intro: 'Share Quote turns a passage into a clean quote card with the book title and author. It is a quick way to share a line you liked without screenshots.',
    shot: 'quote',
    steps: [
      { name: 'Select a passage', text: 'Long-press and select the text you want to share.' },
      { name: 'Open Share Quote', text: 'Use the share action on the selection bar to open the Share Quote dialog.' },
      { name: 'Fill in the details', text: 'Check the book name and author fields and edit them if needed.' },
      { name: 'Pick a theme', text: 'Choose a theme such as Light, Dark or Sepia and review the preview.' },
      { name: 'Share', text: 'Tap Share to send the quote card to any app.' },
    ],
    tips: ['Keep quotes short; cards read best with a few lines.', 'Credit the author by keeping the author field filled in.'],
    related: ['highlight-pdf-text-on-android', 'text-mode-read-pdf-like-an-ebook'],
  },
];
