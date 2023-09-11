import htmlFormatter from 'pretty';

export const getFlexGap = (gap: number) => {
  return {
    'gap-0': gap === 0,
    'gap-1': gap === 1,
    'gap-2': gap === 2,
    'gap-3': gap === 3,
    'gap-4': gap === 4,
    'gap-5': gap === 5,
  };
};

export const prettifiedHtmlString = (html: string) => {
  // remove redundant classes
  let filtered = html.replaceAll('hover:bg-fuchsia-800', '');
  filtered = filtered.replaceAll('id="flex"', '');
  filtered = filtered.replaceAll('font-semibold', '');
  filtered = filtered.replace(/\s{2,}/g, ' '); // remove double whitespace caused by removing classes
  return htmlFormatter(filtered);
};
