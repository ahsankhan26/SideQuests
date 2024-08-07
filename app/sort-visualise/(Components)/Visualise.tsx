'use client';

import { useEffect, useRef, useState } from 'react';
import { FiRotateCw, FiX } from 'react-icons/fi';

import { cn } from '@/utils';

import { generateRandomArr, getRangeValue, isSorted } from './helpers';
import RangeInput from './RangeInput';
import SortButton from './SortButton';

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

  const shuffle = () => {
    setCurrent(0);
    setArr(generateRandomArr(valNumber));
  };

  const sort = async () => {
    if (isSorted(arr)) {
      return;
    }
    stopSort.current = false; // ref to force stop
    setInProgress(true);
    const tempArr = [...arr];
    let swapped;

    for (let i = 0; i < tempArr.length; i += 1) {
      swapped = false;
      for (let j = 0; j < tempArr.length - i - 1; j += 1) {
        if (stopSort.current) {
          setInProgress(false);
          return;
        }

        if ((tempArr[j] as number) > (tempArr[j + 1] as number)) {
          const temp = tempArr[j] as number;
          tempArr[j] = tempArr[j + 1] as number;
          tempArr[j + 1] = temp;
          swapped = true;
        }
        // eslint-disable-next-line no-promise-executor-return, no-await-in-loop
        await new Promise((resolve) => setTimeout(resolve, speed));
        setCurrent(j + 1);
        setArr([...tempArr]);
      }
      if (!swapped) break;
    }
    setInProgress(false);
    setCurrent(0);
  };

  return (
    <>
      {/* Form */}
      <div className='mt-3 flex-col gap-4 flex-between lg:flex-row'>
        <div className='w-full items-center gap-4 flex-column md:flex-row'>
          <RangeInput
            aria-label='Values'
            defaultValue={3}
            disabled={inProgress}
            onChange={(e) => {
              const value = Number(e.target.value);
              const updatedValue = getRangeValue(valuesArr, value);
              if (updatedValue > -1) setValNumber(updatedValue);
            }}
            title='Values'
            values={valuesArr}
          />
          <RangeInput
            aria-label='Speed'
            defaultValue={2}
            disabled={inProgress}
            onChange={(e) => {
              const value = Number(e.target.value);
              const updatedValue = getRangeValue(speedArr, value);
              if (updatedValue > -1) setSpeed(updatedValue);
            }}
            title='Speed'
            titleClassName='bg-[#DDC066]'
            values={['1x', '2x', '🚀']}
          />
        </div>
        <div className='flex size-full gap-4 lg:w-auto'>
          <SortButton
            aria-label='shuffle'
            onClick={() => {
              if (inProgress) {
                stopSort.current = true;
              } else {
                shuffle();
              }
            }}
          >
            {inProgress ? <FiX /> : <FiRotateCw />}
          </SortButton>

          <SortButton
            aria-label='sort'
            className='w-full'
            disabled={inProgress}
            onClick={sort}
          >
            Sort
          </SortButton>
        </div>
      </div>
      {/* Preview */}
      <div className='card-shadow border-text my-5 h-96 rounded border-4 bg-accent'>
        <div className='h-full flex-column'>
          <div className='border-text border-b-4 bg-white py-3 text-center text-lg' />
          <div className='flex h-full' style={{ transform: 'rotateX(180deg)' }}>
            {arr.map((item, idx) => (
              <div
                className={cn('w-32', {
                  'border-text border-2 border-t-0 bg-rose-500':
                    current === idx,
                  'border bg-white': current !== idx,
                })}
                id={`arr_${item}_${idx}`}
                key={`${item}_${idx}`}
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
