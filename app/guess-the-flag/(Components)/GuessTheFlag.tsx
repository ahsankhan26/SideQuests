'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { Button } from '@/components';
import { cn, shuffleArray } from '@/utils';

import { Container, ScoreIcon } from './Common';
import { OPTIONS_LENGTH, SELECTED_COUNTRIES_LENGTH } from './constants';
import { Country } from './countries';
import { getRandomCountries, getRandomFlags } from './utils';

const GuessTheFlag = () => {
  const [randomCountries, setRandomCountries] = useState<Country[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFlag, setSelectedFlag] = useState<string | null>(null);
  // array to maintain score,
  // user will be displayed with correct or wrong based `score[currentIndex]` value
  const [score, setScore] = useState<boolean[]>([]);

  // Reset the game
  const reset = useCallback(() => {
    setCurrentIndex(0);
    setScore([]);
    setRandomCountries(getRandomCountries(SELECTED_COUNTRIES_LENGTH));
  }, []);

  // Handle the next button after option is selected
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // handle the flag selection
  const handleFlagSelect = useCallback(
    (selected: string) => {
      if (score[currentIndex] !== undefined) return;
      const currentCountry = randomCountries[currentIndex];
      if (!currentCountry) return;
      setSelectedFlag(selected);
      setScore((prev) => [...prev, selected === currentCountry.flag]);
    },
    [currentIndex, randomCountries],
  );

  // Initiate the game
  useEffect(() => {
    reset();
  }, []);

  // Get the flag options, one correct and two wrong from similar flags array
  const options = useMemo(() => {
    const currentCountry = randomCountries[currentIndex];
    if (currentCountry) {
      const arr = [
        ...getRandomFlags(currentCountry.similarFlags, OPTIONS_LENGTH),
        currentCountry.flag,
      ];
      return shuffleArray(arr);
    }
    return [];
  }, [currentIndex, randomCountries]);

  const isGameOver = useMemo(
    () =>
      score[currentIndex] !== undefined &&
      currentIndex === randomCountries.length - 1,
    [currentIndex, randomCountries, score],
  );

  if (isGameOver) {
    return (
      <Container className='min-h-[20rem] flex-col flex-center'>
        <h1 className='text-center text-4xl font-semibold md:text-6xl'>
          Game Over
        </h1>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-center text-lg font-medium'>
            Your score is {score.filter((item) => item).length} /{' '}
            {randomCountries.length}
          </p>
          <Button className='btn-accent' onClick={reset}>
            Play Again
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className='md:pt-2'>
      <p className='text-center text-lg font-medium'>
        {currentIndex + 1} / {randomCountries.length}
      </p>
      <div className='mx-auto flex flex-col items-center gap-10'>
        <h1 className='text-center text-4xl font-semibold md:text-6xl'>
          {randomCountries[currentIndex]?.name}
        </h1>
        <div className='grid grid-cols-2 gap-3 md:gap-6'>
          {options.map((option, index) => (
            <div className='relative' key={`${option}_${index}`}>
              <Button
                className={cn(
                  'btn-outline h-28 w-28 border-zinc-500 text-7xl md:h-36 md:w-36 md:text-9xl',
                  {
                    'pointer-events-none': score[currentIndex] !== undefined,
                    'bg-success/30':
                      score[currentIndex] && selectedFlag === option,
                    'bg-error/30':
                      !score[currentIndex] && selectedFlag === option,
                  },
                )}
                onClick={() => handleFlagSelect(option)}
              >
                {option}
              </Button>

              {/* Display the correct or wrong icon based on score */}
              <ScoreIcon
                option={option}
                score={score[currentIndex] ?? false}
                selectedOption={selectedFlag ?? ''}
              />
            </div>
          ))}
        </div>
        {/* Display the next button */}
        {score[currentIndex] !== undefined && (
          <Button
            className='btn-accent max-w-xl'
            disabled={currentIndex === randomCountries.length - 1}
            fullWidth
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </div>
    </Container>
  );
};
export default GuessTheFlag;
