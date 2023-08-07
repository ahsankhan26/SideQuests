const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const generateRandomArr = (arrSize: number) =>
  new Array(arrSize).fill(0).map(() => randomNumber(5, 320));

export const isSorted = (arr: number[]) => {
  const temp = [...arr];
  temp.sort((a, b) => a - b);
  return JSON.stringify(temp) === JSON.stringify(arr);
};

export const getRangeValue = (arr: number[], value: number) =>
  arr[value - 1] ?? -1;
