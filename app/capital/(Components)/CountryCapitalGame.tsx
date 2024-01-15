'use client';

import { useEffect, useState } from 'react';
import {
  easy,
  getRandomSubObject,
  hard,
} from 'app/capital/(Components)/constants';
import classNames from 'classnames';

import { Button } from '@/components';
import { shuffleArray } from '@/utils';

enum DIFFICULTY {
  EASY = 20,
  HARD = 40,
}

const CountryCapitalGame: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: string } | null>(null);
  const [gameData, setGameData] = useState<string[]>([]);
  const [currentSelected, setCurrentSelected] = useState<string[]>([]);
  const [isWrong, setIsWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);
  const [percentScore, setPercentScore] = useState(0);

  const resetGame = (isHard?: boolean) => {
    const infoData = isHard ? hard : easy;
    // get random values;
    const info = getRandomSubObject(infoData, DIFFICULTY.EASY);
    setIsWrong(false);
    setCurrentSelected([]);
    setScore(0);
    setCorrectScore(0);
    setPercentScore(0);
    const arr: string[] = [];
    Object.keys(info).forEach((key) => {
      arr.push(key);
      // @ts-expect-error weird error
      arr.push(info[key]);
    });

    const shuffledArr = shuffleArray(
      arr.slice(0, isHard ? DIFFICULTY.HARD : DIFFICULTY.EASY),
    );
    setGameData(shuffledArr);
  };

  const changeDifficulty = (isHard: boolean) => {
    setData(isHard ? hard : easy);
    resetGame(isHard);
  };

  useEffect(() => {
    setData(easy);
    resetGame();
  }, []);

  useEffect(() => {
    if (currentSelected.length === 2 && gameData) {
      // check if correct
      // @ts-expect-error weird error
      const key = currentSelected.find((item) => data[item]);
      if (!key) {
        // wrong
        setIsWrong(true);
      } else {
        // check other value
        const otherValue = currentSelected.filter((item) => item !== key);
        if (data && data[key] === otherValue[0]) {
          // Correct
          const filtered = gameData.filter(
            (item) => item !== key && item !== otherValue[0],
          );
          setCorrectScore(correctScore + 1);
          setGameData(filtered);
          setCurrentSelected([]);
        } else {
          // Wrong
          setIsWrong(true);
        }
      }
    }
  }, [currentSelected]);

  useEffect(() => {
    if (score > 0 && score % 2 === 0) {
      const percent = Math.round((correctScore / (score / 2)) * 100);
      const final = Math.min(100, percent); // Ensure percentScore is not greater than 100%)
      setPercentScore(final > 0 ? final : 0);
    }
  }, [score, correctScore]);

  return (
    <div>
      {gameData.length === 0 && score > 0 ? (
        <div className='my-20 flex-col gap-5 text-4xl font-bold flex-center'>
          <div>Game Over</div>
          <Button
            className='btn-secondary btn-lg px-20'
            onClick={() => {
              const isHard = (
                document.querySelector('#difficulty') as HTMLInputElement
              ).checked;
              resetGame(isHard);
            }}
          >
            Reset
          </Button>
        </div>
      ) : null}
      <div className='my-5 gap-10 text-2xl flex-between'>
        <div className='items-center gap-1 flex-column md:flex-row'>
          <div>
            Accuracy:{' '}
            <strong className='countdown'>
              {/* @ts-expect-error countdown type issue */}
              <span style={{ '--value': percentScore }} />
            </strong>
          </div>
          <div>
            Attempts: <strong>{score}</strong>
          </div>
        </div>
        <div>
          <label className='label cursor-pointer gap-2'>
            <span className='label-text'>Easy</span>
            <input
              className='toggle toggle-lg'
              id='difficulty'
              onClick={(e) =>
                changeDifficulty((e.target as HTMLInputElement).checked)
              }
              type='checkbox'
            />
            <span className='label-text'>Hard</span>
          </label>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
        {gameData?.map((item) => (
          <Button
            className={classNames('btn-lg h-40', {
              'btn-primary pointer-events-none border-4 border-info':
                currentSelected?.includes(item) && !isWrong,
              'btn-error border-4 border-error-content':
                currentSelected?.includes(item) && isWrong,
              'btn-neutral': !currentSelected?.includes(item),
            })}
            key={item}
            onClick={() => {
              setCurrentSelected((prev) => {
                if (isWrong) {
                  setIsWrong(false);
                  setScore((count) => count + 1);
                  return [item];
                }
                if (prev.length < 2 && !prev.includes(item)) {
                  setScore((count) => count + 1);
                  return [...prev, item];
                }
                return prev;
              });
            }}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CountryCapitalGame;
