export enum DIFFICULTY {
  EASY = 'EASY',
  HARD = 'HARD',
}

export enum GAME_STATE {
  START = 'START',
  PLAYING = 'PLAYING',
  END = 'END',
}

export interface GameInfo {
  difficulty?: DIFFICULTY;
  gameState: GAME_STATE;
}

export interface Country {
  name: string;
  flag: string;
  similarFlags: string[];
}

export const COUNTRIES_LENGTH = {
  // [DIFFICULTY.EASY]: 10,
  [DIFFICULTY.EASY]: 2,
  [DIFFICULTY.HARD]: 20,
};
export const OPTIONS_LENGTH = 3;
