export const LETTER_RANGE: [number, number] = [3, 10];
export const SENTENCE_RANGE: [number, number] = [4, 15];

export const CAT_WORDS = [
  'Meow',
  'Meeow',
  'Meoww',
  'Meooow',
  'Meoow',
  'Meowww',
  'Meeoww',
  'Meowwww',
  'Meeeow',
  'Meowoo',
];

export const getRandomBetweenRange = (range: [number, number]) =>
  Math.floor(Math.random() * (range[1] - range[0]) + range[0]);

export const generateMessage = () => {
  const message = [];
  for (let i = 0; i < getRandomBetweenRange(SENTENCE_RANGE); i += 1) {
    message.push(CAT_WORDS[getRandomBetweenRange([0, CAT_WORDS.length - 1])]);
  }
  message.push('.');
  return message.join(' ');
};
