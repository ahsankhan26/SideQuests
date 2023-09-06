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

export interface IConfiguration {
  itemCount: number;
  gap: number;
  wrap: WRAP;
  width: WIDTH;
  direction: DIRECTION;
  justifyContent: JUSTIFY_CONTENT;
}

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
