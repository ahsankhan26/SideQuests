import { shuffleArray } from '@/utils';

import { countries } from './countries';

export const getRandomCountries = (number: number) => {
  const randomizedArray = shuffleArray(countries);
  return randomizedArray.slice(0, number);
};

export const getRandomFlags = (flags: string[], number: number) => {
  const randomizedFlags = shuffleArray(flags);
  return randomizedFlags.slice(0, number);
};
