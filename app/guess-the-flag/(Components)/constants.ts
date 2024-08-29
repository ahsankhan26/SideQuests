export enum DIFFICULTY {
  EASY = 'EASY',
  HARD = 'HARD',
}

export enum GAME_STATE {
  START = 'START',
  PLAYING = 'PLAYING',
  SCORE_CHECK = 'SCORE_CHECK',
  END = 'END',
}

export interface Country {
  name: string;
  flag: string;
  similarFlags: string[];
}

export const COUNTRIES_LENGTH = {
  [DIFFICULTY.EASY]: 10,
  [DIFFICULTY.HARD]: 20,
};
export const OPTIONS_LENGTH = 3;
