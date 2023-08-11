'use client';

import { useState } from 'react';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';
import classNames from 'classnames';

import { Hero } from '@/components';

const GridFlex: React.FC = () => {
  const [itemCount, setItemCount] = useState(15);
  return (
    <div>
      <Hero
        subtitle='Visualisation for understanding CSS Grid'
        title='CSS Grid'
      />
      <div className='grid min-h-[36rem] w-full grid-cols-1 gap-5 rounded-md bg-stone-100 p-5 text-black md:grid-cols-6'>
        <div className='button-shadow flex flex-col gap-5 bg-stone-200 p-5 md:col-span-2'>
          <RangeInput
            aria-label='Count'
            defaultValue={itemCount}
            fullWidth
            onChange={(e) => setItemCount(Number(e.target.value))}
            range={[1, 15]}
            title='Count'
            titleClassName='bg-[#ff91e7]'
          />
          <RangeInput
            aria-label='Count'
            defaultValue={itemCount}
            fullWidth
            onChange={(e) => setItemCount(Number(e.target.value))}
            range={[1, 15]}
            title='Count'
            titleClassName='bg-[#ff91e7]'
          />
        </div>

        <div className='rounded-md bg-stone-200 p-5 md:col-span-4'>
          {/* Configurable */}
          <div
            className={classNames('grid gap-3', {
              'grid-cols-3': true,
            })}
          >
            {new Array(itemCount)
              .fill(0)
              .map((_, idx) => idx)
              ?.map((item) => (
                <div
                  className='flex-center h-32 animate-fade rounded-md bg-pink-500 py-5 text-2xl font-semibold transition animate-once hover:bg-pink-600'
                  key={item}
                >
                  {item + 1}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridFlex;
