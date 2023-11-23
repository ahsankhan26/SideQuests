'use client';

import { useEffect, useState } from 'react';
import { easy, hard } from 'app/capital/(Components)/constants';
import classNames from 'classnames';

import { Button } from '@/components';
import { shuffleArray } from '@/utils';

const CountryCapitalGame: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: string } | null>(null);
  const [gameData, setGameData] = useState<string[]>([]);
  const [currentSelected, setCurrentSelected] = useState<string[]>([]);
  const [isWrong, setIsWrong] = useState(false);
  const [score, setScore] = useState(0);

  const resetGame = (value?: { [key: string]: string }) => {
    const info = value ?? data;
    if (info) {
      setIsWrong(false);
      setCurrentSelected([]);
      setScore(0);
      const arr: string[] = [];
      Object.keys(info).forEach((key) => {
        arr.push(key);
        // @ts-expect-error weird error
        arr.push(info[key]);
      });

      const shuffledArr = shuffleArray(arr);
      setGameData(shuffledArr);
    }
  };

  const changeDifficulty = (isHard: boolean) => {
    setData(isHard ? hard : easy);
    resetGame(isHard ? hard : easy);
  };

  useEffect(() => {
    setData(easy);
    resetGame(easy);
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
          const filtered = gameData.filter(
            (item) => item !== key && item !== otherValue[0],
          );
          setGameData(filtered);
          setCurrentSelected([]);
        } else {
          setIsWrong(true);
        }
      }
    }
  }, [currentSelected]);

  return (
    <div>
      {gameData.length === 0 && score > 0 ? (
        <div className='flex-center my-20 flex-col gap-5 text-4xl font-bold'>
          <div>Game Over</div>
          <Button
            className='btn-secondary btn-lg px-20'
            onClick={() => resetGame()}
          >
            Reset
          </Button>
        </div>
      ) : null}
      <div className='flex-between my-5 gap-10 text-2xl'>
        <div>
          Score:{' '}
          <strong className='countdown'>
            {/* @ts-expect-error countdown type issue */}
            <span style={{ '--value': score }}></span>
          </strong>
        </div>
        <div>
          <label className='label cursor-pointer gap-2'>
            <span className='label-text'>Easy</span>
            <input
              className='toggle toggle-lg'
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
        {gameData?.map((item, idx) => (
          <Button
            className={classNames('btn-lg h-40', {
              'btn-primary pointer-events-none border-4 border-info':
                currentSelected?.includes(item) && !isWrong,
              'btn-error border-4 border-error-content':
                currentSelected?.includes(item) && isWrong,
              'btn-neutral': !currentSelected?.includes(item),
            })}
            key={`${item}_${idx}`}
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
