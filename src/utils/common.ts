/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isUndefined = (value: any) => value === undefined;
export const isDefined = (value: any) => value !== undefined;
export const isNull = (value: any) => value === null;
export const isEven = (value: number) => value % 2 === 0;
export const copyToClipboard = (value: string) =>
  navigator.clipboard.writeText(value);

export const removeFramerAttributes = (value: string) => {
  // Create a temporary element to work with
  const tempElement = document.createElement('div');
  tempElement.innerHTML = value;

  // Remove "data-projection-id" and "style" attributes from all elements
  const elementsWithAttributes = tempElement.querySelectorAll(
    '[data-projection-id], [style]',
  );
  elementsWithAttributes.forEach((element) => {
    element.removeAttribute('data-projection-id');
    element.removeAttribute('style');
  });

  // get modified HTML string
  return tempElement.innerHTML;
};

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
