import htmlFormatter from 'pretty';

import { removeFramerAttributes } from '@/utils';

export interface IConfiguration {
  itemCount: number;
  columns: number;
  rows: number;
  gap: number;
}

export interface IAdvanceConfiguration {
  colSpan?: number | 'auto' | 'full';
  colStart?: number | 'auto';
  colEnd?: number | 'auto';
  rowSpan?: number | 'auto' | 'full';
  rowStart?: number | 'auto';
  rowEnd?: number | 'auto';
}

export const getGridRows = (rows: number) => {
  return {
    'grid-rows-1': rows === 1,
    'grid-rows-2': rows === 2,
    'grid-rows-3': rows === 3,
    'grid-rows-4': rows === 4,
    'grid-rows-5': rows === 5,
    'grid-rows-6': rows === 6,
  };
};

export const getGridCols = (columns: number) => {
  return {
    'grid-cols-1': columns === 1,
    'grid-cols-2': columns === 2,
    'grid-cols-3': columns === 3,
    'grid-cols-4': columns === 4,
    'grid-cols-5': columns === 5,
    'grid-cols-6': columns === 6,
    'grid-cols-7': columns === 7,
    'grid-cols-8': columns === 8,
    'grid-cols-9': columns === 9,
    'grid-cols-10': columns === 10,
    'grid-cols-11': columns === 11,
    'grid-cols-12': columns === 12,
  };
};

export const getGridGap = (gap: number) => {
  return {
    'gap-0': gap === 0,
    'gap-1': gap === 1,
    'gap-2': gap === 2,
    'gap-3': gap === 3,
    'gap-4': gap === 4,
    'gap-5': gap === 5,
  };
};

export const getColSpan = (colSpan: number | 'auto' | 'full' | undefined) => {
  return {
    'col-auto': colSpan === 'auto',
    'col-span-1': colSpan === 1,
    'col-span-2': colSpan === 2,
    'col-span-3': colSpan === 3,
    'col-span-4': colSpan === 4,
    'col-span-5': colSpan === 5,
    'col-span-6': colSpan === 6,
    'col-span-7': colSpan === 7,
    'col-span-8': colSpan === 8,
    'col-span-9': colSpan === 9,
    'col-span-10': colSpan === 10,
    'col-span-11': colSpan === 11,
    'col-span-12': colSpan === 12,
    'col-span-full': colSpan === 'full',
  };
};
export const getColStart = (colStart: number | 'auto' | undefined) => {
  return {
    'col-start-auto': colStart === 'auto',
    'col-start-2': colStart === 2,
    'col-start-3': colStart === 3,
    'col-start-4': colStart === 4,
    'col-start-5': colStart === 5,
    'col-start-6': colStart === 6,
    'col-start-7': colStart === 7,
    'col-start-8': colStart === 8,
    'col-start-9': colStart === 9,
    'col-start-10': colStart === 10,
    'col-start-11': colStart === 11,
    'col-start-12': colStart === 12,
  };
};
export const getColEnd = (colEnd: number | 'auto' | undefined) => {
  return {
    'col-end-auto': colEnd === 'auto',
    'col-end-2': colEnd === 2,
    'col-end-3': colEnd === 3,
    'col-end-4': colEnd === 4,
    'col-end-5': colEnd === 5,
    'col-end-6': colEnd === 6,
    'col-end-7': colEnd === 7,
    'col-end-8': colEnd === 8,
    'col-end-9': colEnd === 9,
    'col-end-10': colEnd === 10,
    'col-end-11': colEnd === 11,
    'col-end-12': colEnd === 12,
  };
};

export const getRowSpan = (rowSpan: number | 'auto' | 'full' | undefined) => {
  return {
    'row-auto': rowSpan === 'auto',
    'row-span-1': rowSpan === 1,
    'row-span-2': rowSpan === 2,
    'row-span-3': rowSpan === 3,
    'row-span-4': rowSpan === 4,
    'row-span-5': rowSpan === 5,
    'row-span-6': rowSpan === 6,
    'row-span-full': rowSpan === 'full',
  };
};
export const getRowStart = (rowStart: number | 'auto' | undefined) => {
  return {
    'row-start-auto': rowStart === 'auto',
    'row-start-2': rowStart === 2,
    'row-start-3': rowStart === 3,
    'row-start-4': rowStart === 4,
    'row-start-5': rowStart === 5,
    'row-start-6': rowStart === 6,
  };
};
export const getRowEnd = (rowEnd: number | 'auto' | undefined) => {
  return {
    'row-end-auto': rowEnd === 'auto',
    'row-end-2': rowEnd === 2,
    'row-end-3': rowEnd === 3,
    'row-end-4': rowEnd === 4,
    'row-end-5': rowEnd === 5,
    'row-end-6': rowEnd === 6,
  };
};

export const prettifiedHtmlString = (html: string) => {
  // remove redundant classes
  let filtered = html.replaceAll('hover:bg-fuchsia-800', '');
  filtered = filtered.replaceAll('id="grid"', '');
  filtered = filtered.replaceAll('font-semibold', '');
  filtered = filtered.replaceAll('col-start-auto', '');
  filtered = filtered.replaceAll('col-span-auto', '');
  filtered = filtered.replaceAll('col-end-auto', '');
  filtered = filtered.replace(/\s{2,}/g, ' '); // remove double whitespace caused by removing classes
  filtered = removeFramerAttributes(filtered); // remove framer-motion attributes

  return htmlFormatter(filtered);
};
