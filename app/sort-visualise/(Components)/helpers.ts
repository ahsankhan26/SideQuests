export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const generateRandomArr = (arrSize: number) => {
  if (arrSize <= 0) {
    return [];
  }

  const min = 5;
  const max = 320;

  // Step 1: Calculate the interval
  const interval = (max - min) / (arrSize - 1);

  // Step 2: Generate the array
  const result: number[] = [];
  for (let i = 0; i < arrSize; i += 1) {
    result.push(Math.round(min + i * interval)); // Round to ensure integer values
  }

  // Step 3: Shuffle the array
  for (let i = result.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    [result[i], result[randomIndex]] = [result[randomIndex]!, result[i]!];
  }

  return result;
};

export const isSorted = (arr: number[]) => {
  const temp = [...arr];
  temp.sort((a, b) => a - b);
  return JSON.stringify(temp) === JSON.stringify(arr);
};

export const getRangeValue = (arr: number[], value: number) =>
  arr[value - 1] ?? -1;
