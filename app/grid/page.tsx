'use client';

import { useMemo, useState } from 'react';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';
import classNames from 'classnames';

import { Hero } from '@/components';

interface IConfiguration {
  itemCount: number;
  columns: number;
  gap: number;
}

interface IAdvanceConfiguration {
  colSpan?: number | 'auto';
  colStart?: number | 'auto';
}

const GridFlex: React.FC = () => {
  const [configuration, setConfiguration] = useState<IConfiguration>({
    itemCount: 6,
    columns: 3,
    gap: 2,
  });
  const [advanceConfiguration, setAdvanceConfiguration] = useState<
    IAdvanceConfiguration[]
  >([]);

  const items = useMemo(
    () => new Array(configuration.itemCount).fill(0).map((_, idx) => idx + 1),
    [configuration.itemCount],
  );

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

  const handleAdvanceConfigurationChange = (
    val: Partial<IAdvanceConfiguration>,
    index: number,
  ) => {
    const duplicateArr = [...advanceConfiguration];
    const temp = advanceConfiguration[index - 1] ?? {};

    type ParamKeys = keyof typeof val;
    (Object.keys(val) as ParamKeys[]).forEach((key) => {
      const value = val[key];
      if (value !== undefined) {
        temp[key] = value;
      }
    });
    if (temp) {
      duplicateArr[index - 1] = temp;
      setAdvanceConfiguration(duplicateArr);
    }
  };

  return (
    <div>
      <Hero
        subtitle='Visualisation for understanding CSS Grid'
        title='CSS Grid'
      />
      <div className='grid min-h-[36rem] w-full grid-cols-1 gap-5 rounded-md text-black md:grid-cols-7 lg:grid-cols-8'>
        {/* LEFT */}
        <div className='button-shadow flex flex-col gap-5 bg-stone-200 p-5 md:col-span-3'>
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
          {/* Advance */}
          <div className='button-shadow collapse-arrow collapse rounded-none border-4 border-[#1E1E1E] bg-white'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              Advance Settings
            </div>
            <div className='collapse-content flex flex-col gap-2'>
              <div className='font-semibold underline'>Column Span</div>
              {items.map((item) => (
                <div
                  className='flex-center gap-2 text-xs font-semibold'
                  key={item}
                >
                  <div>{item}</div>
                  <select
                    className='select-bordered select w-full bg-white'
                    onChange={(e) => {
                      const { value } = e.target;
                      handleAdvanceConfigurationChange(
                        {
                          colSpan: Number.isNaN(Number(value))
                            ? 'auto'
                            : Number(value),
                        },
                        item,
                      );
                    }}
                  >
                    <option value='auto'>Auto</option>
                    <option value={1}>Span 1</option>
                    <option value={2}>Span 2</option>
                    <option value={3}>Span 3</option>
                    <option value={4}>Span 4</option>
                    <option value={5}>Span 5</option>
                    <option value={6}>Span 6</option>
                    <option value={7}>Span 7</option>
                    <option value={8}>Span 8</option>
                    <option value={9}>Span 9</option>
                    <option value={10}>Span 10</option>
                    <option value={11}>Span 11</option>
                    <option value={12}>Span 12</option>
                  </select>
                </div>
              ))}
              <div className='font-semibold underline'>Column Start</div>
              {items.map((item) => (
                <div
                  className='flex-center gap-2 text-xs font-semibold'
                  key={item}
                >
                  <div>{item}</div>
                  <select
                    className='select-bordered select w-full bg-white'
                    onChange={(e) => {
                      const { value } = e.target;
                      handleAdvanceConfigurationChange(
                        {
                          colStart: Number.isNaN(Number(value))
                            ? 'auto'
                            : Number(value),
                        },
                        item,
                      );
                    }}
                  >
                    <option value='auto'>Auto</option>
                    <option value={1}>Start 1</option>
                    <option value={2}>Start 2</option>
                    <option value={3}>Start 3</option>
                    <option value={4}>Start 4</option>
                    <option value={5}>Start 5</option>
                    <option value={6}>Start 6</option>
                    <option value={7}>Start 7</option>
                    <option value={8}>Start 8</option>
                    <option value={9}>Start 9</option>
                    <option value={10}>Start 10</option>
                    <option value={11}>Start 11</option>
                    <option value={12}>Start 12</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='button-shadow bg-stone-200 p-5 md:col-span-4 lg:col-span-5'>
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
            {items.map((item, idx) => {
              const colSpan = advanceConfiguration[idx]?.colSpan;
              const colStart = advanceConfiguration[idx]?.colStart;
              return (
                <div
                  className={classNames(
                    'flex-center h-32 animate-fade bg-pink-500 py-5 text-2xl font-semibold transition animate-once hover:bg-pink-600',
                    {
                      'col-auto': colSpan === 'auto',
                      'col-span-1': colSpan === 1,
                      'col-span-2': colSpan === 2,
                      'col-span-3': colSpan === 3,
                      'col-span-4': colSpan === 4,
                      'col-span-5': colSpan === 5,
                      'col-span-6': colSpan === 6,
                      'col-span-7': colSpan === 7,
                      'col-span-8': colSpan === 8,
                      'col-span-9': colSpan === 9,
                      'col-span-10': colSpan === 10,
                      'col-span-11': colSpan === 11,
                      'col-span-12': colSpan === 12,
                    },
                    {
                      'col-auto': colStart === 'auto',
                      'col-start-2': colStart === 2,
                      'col-start-3': colStart === 3,
                      'col-start-4': colStart === 4,
                      'col-start-5': colStart === 5,
                      'col-start-6': colStart === 6,
                      'col-start-7': colStart === 7,
                      'col-start-8': colStart === 8,
                      'col-start-9': colStart === 9,
                      'col-start-10': colStart === 10,
                      'col-start-11': colStart === 11,
                      'col-start-12': colStart === 12,
                    },
                  )}
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridFlex;
