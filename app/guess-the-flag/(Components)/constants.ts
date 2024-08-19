export const SELECTED_COUNTRIES_LENGTH = 10;
export const OPTIONS_LENGTH = 3;

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
  difficulty: DIFFICULTY;
  gameState: GAME_STATE;
}

export interface Country {
  name: string;
  flag: string;
  similarFlags: string[];
}
