import { shuffleArray } from '@/utils';

import { COUNTRIES_LENGTH, DIFFICULTY } from './constants';
import { countries } from './countries';

export const getRandomCountries = (number?: number) => {
  const randomizedArray = shuffleArray(countries);
  return randomizedArray.slice(0, number ?? COUNTRIES_LENGTH[DIFFICULTY.EASY]);
};

export const getRandomFlags = (flags: string[], number: number) => {
  const randomizedFlags = shuffleArray(flags);
  return randomizedFlags.slice(0, number);
};
