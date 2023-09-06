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
  alignItems: ALIGN_ITEMS.START,
};

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
  { name: 'column-reversed', value: DIRECTION.COLUMN_REVERSE },
];
export const justifyContentButtons = [
  { name: 'flex-start', value: JUSTIFY_CONTENT.START },
  { name: 'flex-end', value: JUSTIFY_CONTENT.END },
  { name: 'space-between', value: JUSTIFY_CONTENT.BETWEEN },
  { name: 'center', value: JUSTIFY_CONTENT.CENTER },
  { name: 'space-around', value: JUSTIFY_CONTENT.AROUND },
  { name: 'space-evenly', value: JUSTIFY_CONTENT.EVENLY },
];
export const alignItemsButtons = [
  { name: 'start', value: ALIGN_ITEMS.START },
  { name: 'end', value: ALIGN_ITEMS.END },
  { name: 'center', value: ALIGN_ITEMS.CENTER },
];
