import htmlFormatter from 'pretty';

export enum WIDTH {
  AUTO = 'w-3',
  FIXED = 'w-32',
  FULL = 'w-full',
}
export enum WRAP {
  NOWRAP = 'flex-nowrap',
  WRAP = 'flex-wrap',
  WRAP_REVERSED = 'flex-wrap-reverse',
}
export enum DIRECTION {
  ROW = 'flex-row',
  ROW_REVERSE = 'flex-row-reverse',
  COLUMN = 'flex-col',
  COLUMN_REVERSE = 'flex-col-reverse',
}
export enum JUSTIFY_CONTENT {
  START = 'justify-start',
  END = 'justify-end',
  CENTER = 'justify-center',
  BETWEEN = 'justify-between',
  AROUND = 'justify-around',
  EVENLY = 'justify-evenly',
}
export enum ALIGN_ITEMS {
  START = 'items-start',
  END = 'items-end',
  CENTER = 'items-center',
  BASELINE = 'items-baseline',
  STRETCH = 'items-stretch',
}

export interface IConfiguration {
  itemCount: number;
  gap: number;
  wrap: WRAP;
  width: WIDTH;
  direction: DIRECTION;
  justifyContent: JUSTIFY_CONTENT;
  alignItems: ALIGN_ITEMS;
}

export const initialConfiguration: IConfiguration = {
  itemCount: 5,
  gap: 2,
  wrap: WRAP.WRAP,
  width: WIDTH.FIXED,
  direction: DIRECTION.ROW,
  justifyContent: JUSTIFY_CONTENT.START,
  alignItems: ALIGN_ITEMS.BASELINE,
};

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
  let filtered = html.replaceAll('animate-fade', '');
  filtered = filtered.replaceAll('animate-once', '');
  filtered = filtered.replaceAll('hover:bg-fuchsia-800', '');
  filtered = filtered.replaceAll('id="flex"', '');
  filtered = filtered.replaceAll('font-semibold', '');
  filtered = filtered.replaceAll('transition-all', '');
  filtered = filtered.replaceAll('duration-500', '');
  filtered = filtered.replaceAll('ease-in-out', '');
  filtered = filtered.replace(/\s{2,}/g, ' '); // remove double whitespace caused by removing classes
  return htmlFormatter(filtered);
};
