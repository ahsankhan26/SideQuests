import { shuffleArray } from '@/utils';

import { DIFFICULTY } from './constants';
import { countries, easy } from './countries';

export const getRandomCountries = ({
  difficulty,
  length,
}: {
  difficulty: DIFFICULTY;
  length: number;
}) => {
  const randomizedArray = shuffleArray(
    difficulty === DIFFICULTY.EASY ? easy : countries,
  );
  return randomizedArray.slice(0, length);
};

export const getRandomFlags = (flags: string[], number: number) => {
  const randomizedFlags = shuffleArray(flags);
  return randomizedFlags.slice(0, number);
};
