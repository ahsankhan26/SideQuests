'use client';

import { useState } from 'react';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';
import classNames from 'classnames';

import { Hero } from '@/components';

interface IConfiguration {
  itemCount: number;
  columns: number;
  gap: number;
}

const GridFlex: React.FC = () => {
  const [configuration, setConfiguration] = useState<IConfiguration>({
    itemCount: 6,
    columns: 3,
    gap: 2,
  });

  const handleConfigurationChange = (val: Partial<IConfiguration>) => {
    const temp = { ...configuration };
    type ParamKeys = keyof typeof val;
    (Object.keys(val) as ParamKeys[]).forEach((key) => {
      const value = val[key];
      if (value !== undefined) {
        temp[key] = value;
      }
    });
    setConfiguration(temp);
  };

  return (
    <div>
      <Hero
        subtitle='Visualisation for understanding CSS Grid'
        title='CSS Grid'
      />
      <div className='grid min-h-[36rem] w-full grid-cols-1 gap-5 rounded-md text-black md:grid-cols-6'>
        <div className='button-shadow flex flex-col gap-5 bg-stone-200 p-5 md:col-span-2'>
          <RangeInput
            aria-label='Count'
            defaultValue={configuration.itemCount}
            fullWidth
            onChange={(e) =>
              handleConfigurationChange({ itemCount: Number(e.target.value) })
            }
            range={[1, 15]}
            title='Count'
            titleClassName='bg-[#ff91e7]'
          />
          <RangeInput
            aria-label='Columns'
            defaultValue={configuration.columns}
            fullWidth
            onChange={(e) =>
              handleConfigurationChange({ columns: Number(e.target.value) })
            }
            range={[1, 12]}
            title='Columns'
          />
          <RangeInput
            aria-label='Gap'
            defaultValue={configuration.gap}
            fullWidth
            max={'5'}
            min={'0'}
            onChange={(e) =>
              handleConfigurationChange({ gap: Number(e.target.value) })
            }
            title='Gap'
            values={[0, 1, 2, 3, 4, 5]}
          />
        </div>

        <div className='button-shadow bg-stone-200 p-5 md:col-span-4'>
          {/* Configurable */}
          <div
            className={classNames('grid', {
              // Columns
              'grid-cols-1': configuration.columns === 1,
              'grid-cols-2': configuration.columns === 2,
              'grid-cols-3': configuration.columns === 3,
              'grid-cols-4': configuration.columns === 4,
              'grid-cols-5': configuration.columns === 5,
              'grid-cols-6': configuration.columns === 6,
              'grid-cols-7': configuration.columns === 7,
              'grid-cols-8': configuration.columns === 8,
              'grid-cols-9': configuration.columns === 9,
              'grid-cols-10': configuration.columns === 10,
              'grid-cols-11': configuration.columns === 11,
              'grid-cols-12': configuration.columns === 12,
              // Gaps
              'gap-0': configuration.gap === 0,
              'gap-1': configuration.gap === 1,
              'gap-2': configuration.gap === 2,
              'gap-3': configuration.gap === 3,
              'gap-4': configuration.gap === 4,
              'gap-5': configuration.gap === 5,
            })}
          >
            {new Array(configuration.itemCount)
              .fill(0)
              .map((_, idx) => idx)
              ?.map((item) => (
                <div
                  className='flex-center h-32 animate-fade  bg-pink-500 py-5 text-2xl font-semibold transition animate-once hover:bg-pink-600'
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
