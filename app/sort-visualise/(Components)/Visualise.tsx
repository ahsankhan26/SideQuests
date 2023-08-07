'use client';

import { useEffect, useRef, useState } from 'react';

import { generateRandomArr, getRangeValue, isSorted } from './helpers';
import RangeInput from './RangeInput';
import ShuffleIcon from './ShuffleIcon';

const valuesArr = [10, 50, 100, 200];
const speedArr = [100, 50, 0];

const Visualiser: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [arr, setArr] = useState<number[]>([]);
  const [inProgress, setInProgress] = useState(false);

  const [speed, setSpeed] = useState(speedArr[1]);
  const [valNumber, setValNumber] = useState(valuesArr[2] ?? 50);

  const stopSort = useRef(false);

  useEffect(() => {
    setArr(generateRandomArr(valNumber));
  }, [valNumber]);

  const shuffle = () => setArr(generateRandomArr(valNumber));

  const sort = async () => {
    if (isSorted(arr)) {
      return;
    }
    stopSort.current = false; // ref to force stop
    setInProgress(true);
    const tempArr = [...arr];
    for (let i = 0; i < tempArr.length; i += 1) {
      for (let j = 0; j < tempArr.length - i - 1; j += 1) {
        if (stopSort.current) {
          setInProgress(false);
          return;
        }
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) =>
          // eslint-disable-next-line no-promise-executor-return
          setTimeout(() => {
            resolve(0);
          }, speed),
        );
        if ((tempArr[j] as number) > (tempArr[j + 1] as number)) {
          const temp = tempArr[j] as number;
          tempArr[j] = tempArr[j + 1] as number;
          tempArr[j + 1] = temp;
        }
        setCurrent(j + 1);
        setArr(tempArr);
      }
    }
    setInProgress(false);
    setCurrent(0);
  };

  return (
    <>
      {/* Form */}
      <div className='flex-between mt-3 flex-col gap-4 md:flex-row'>
        <div className='flex w-full items-center gap-4'>
          <RangeInput
            title='Values'
            aria-label='Values'
            disabled={inProgress}
            onChange={(e) => {
              const value = Number(e.target.value);
              const updatedValue = getRangeValue(valuesArr, value);
              if (updatedValue > -1) setValNumber(updatedValue);
            }}
            defaultValue={3}
            values={valuesArr}
          />
          <RangeInput
            title='Speed'
            aria-label='Speed'
            disabled={inProgress}
            values={['1x', '2x', '🚀']}
            defaultValue={2}
            onChange={(e) => {
              const value = Number(e.target.value);
              const updatedValue = getRangeValue(speedArr, value);
              if (updatedValue > -1) setSpeed(updatedValue);
            }}
          />
        </div>
        <div className='flex h-full w-full gap-4 md:w-auto'>
          <button
            onClick={() => {
              if (inProgress) {
                stopSort.current = true;
              } else {
                shuffle();
              }
            }}
            className='flex-center button-shadow border-right enabled:hover:bg-purple/80 rounded px-6 py-2.5 text-3xl font-medium uppercase leading-tight text-white transition duration-150 ease-in-out active:scale-105 enabled:hover:rotate-1 disabled:opacity-50 enabled:md:hover:rotate-6'
          >
            {inProgress ? 'Stop' : <ShuffleIcon />}
          </button>
          <button
            onClick={sort}
            disabled={inProgress}
            className='button-shadow border-right bg-purple enabled:hover:bg-purple/80 w-full rounded px-6 py-2.5 text-3xl font-medium uppercase leading-tight text-white transition duration-150 ease-in-out active:scale-105 enabled:hover:rotate-1 disabled:opacity-50 enabled:md:hover:rotate-6'
          >
            Sort
          </button>
        </div>
      </div>
      {/* Preview */}
      <div className='card-shadow border-text my-5 h-96 rounded border-4 bg-teal-500'>
        <div className='flex h-full flex-col'>
          <div className='border-text border-b-4 bg-white py-3 text-center text-lg' />
          <div className='flex h-full' style={{ transform: 'rotateX(180deg)' }}>
            {arr.map((item, idx) => (
              <div
                key={`${item}_${idx}`}
                id={`arr_${item}_${idx}`}
                className={`w-32 ${
                  current === idx
                    ? 'border-text border-2 border-t-0 bg-rose-500'
                    : 'border bg-white'
                }`}
                style={{ height: `${item}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualiser;
