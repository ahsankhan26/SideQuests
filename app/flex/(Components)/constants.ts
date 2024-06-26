export enum GAP {
  ZERO = 'gap-0',
  ONE = 'gap-1',
  TWO = 'gap-2',
  THREE = 'gap-3',
}
export enum WIDTH {
  AUTO = 'w-3',
  FIXED = 'w-32',
  FULL = 'w-full',
}
export enum WRAP {
  NOWRAP = 'flex-nowrap',
  WRAP = 'flex-wrap',
  WRAP_REVERSE = 'flex-wrap-reverse',
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
  gap: GAP;
  wrap: WRAP;
  width: WIDTH;
  direction: DIRECTION;
  justifyContent: JUSTIFY_CONTENT;
  alignItems: ALIGN_ITEMS;
}

export const initialConfiguration: IConfiguration = {
  itemCount: 5,
  gap: GAP.TWO,
  wrap: WRAP.WRAP,
  width: WIDTH.FIXED,
  direction: DIRECTION.ROW,
  justifyContent: JUSTIFY_CONTENT.START,
  alignItems: ALIGN_ITEMS.START,
};

export const gapButtons = [
  { name: '0', value: GAP.ZERO },
  { name: '0.25', value: GAP.ONE },
  { name: '0.5', value: GAP.TWO },
  { name: '0.75', value: GAP.THREE },
];
export const widthButtons = [
  { name: 'Auto', value: WIDTH.AUTO },
  { name: 'Fixed', value: WIDTH.FIXED },
  { name: 'Full', value: WIDTH.FULL },
];
export const wrapButtons = [
  { name: 'nowrap', value: WRAP.NOWRAP },
  { name: 'wrap', value: WRAP.WRAP },
  { name: 'wrap-reverse', value: WRAP.WRAP_REVERSE },
];
export const directionButtons = [
  { name: 'row', value: DIRECTION.ROW },
  { name: 'row-reverse', value: DIRECTION.ROW_REVERSE },
  { name: 'column', value: DIRECTION.COLUMN },
  { name: 'column-reverse', value: DIRECTION.COLUMN_REVERSE },
];
export const justifyContentButtons = [
  { name: 'flex-start', value: JUSTIFY_CONTENT.START },
  { name: 'center', value: JUSTIFY_CONTENT.CENTER },
  { name: 'flex-end', value: JUSTIFY_CONTENT.END },
  { name: 'space-between', value: JUSTIFY_CONTENT.BETWEEN },
  { name: 'space-around', value: JUSTIFY_CONTENT.AROUND },
  { name: 'space-evenly', value: JUSTIFY_CONTENT.EVENLY },
];
export const alignItemsButtons = [
  { name: 'start', value: ALIGN_ITEMS.START },
  { name: 'center', value: ALIGN_ITEMS.CENTER },
  { name: 'end', value: ALIGN_ITEMS.END },
];
