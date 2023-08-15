'use client';

import { useMemo, useState } from 'react';
import { SelectInput } from 'app/grid/(Components)/Common';
import {
  getColEnd,
  getColSpan,
  getColStart,
  getGridCols,
  getGridGap,
  IAdvanceConfiguration,
  IConfiguration,
} from 'app/grid/(Components)/utils';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';
import classNames from 'classnames';

import { Hero } from '@/components';

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
    const temp = advanceConfiguration[index - 1] || {};

    type ParamKeys = keyof typeof val;
    (Object.keys(val) as ParamKeys[]).forEach((key) => {
      const value = val[key];
      if (value !== undefined) {
        // @ts-expect-error type assertion
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
            titleClassName='bg-[#22a094]'
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
            titleClassName='bg-[#91a8ed]'
            values={[0, 1, 2, 3, 4, 5]}
          />
          {/* Advance */}
          <div className='button-shadow collapse-arrow collapse rounded-none border-4 border-[#1E1E1E] bg-white'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              Advance Settings
            </div>
            <div className='collapse-content flex flex-col gap-2'>
              {/* Column Span */}
              <div className='collapse'>
                <input type='checkbox' />
                <div className='collapse-title underline'>Column Span</div>
                <div className='collapse-content'>
                  <SelectInput
                    items={items}
                    name='Span'
                    onChange={(e, item) => {
                      const { value } = e.target;
                      const isNaN = Number.isNaN(Number(value));
                      const val = isNaN && value === 'full' ? 'full' : 'auto';
                      handleAdvanceConfigurationChange(
                        {
                          colSpan: Number.isNaN(Number(value))
                            ? val
                            : Number(value),
                        },
                        item,
                      );
                    }}
                  />
                </div>
              </div>

              {/* Column Start */}
              <div className='collapse'>
                <input type='checkbox' />
                <div className='collapse-title underline'>Column Start</div>
                <div className='collapse-content'>
                  <SelectInput
                    items={items}
                    name='Start'
                    onChange={(e, item) => {
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
                  />
                </div>
              </div>

              {/* Column End */}
              <div className='collapse'>
                <input type='checkbox' />
                <div className='collapse-title underline'>Column End</div>
                <div className='collapse-content'>
                  <SelectInput
                    items={items}
                    name='End'
                    onChange={(e, item) => {
                      const { value } = e.target;
                      handleAdvanceConfigurationChange(
                        {
                          colEnd: Number.isNaN(Number(value))
                            ? 'auto'
                            : Number(value),
                        },
                        item,
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='button-shadow bg-stone-200 p-5 md:col-span-4 lg:col-span-5'>
          <div
            className={classNames(
              'grid',
              getGridCols(configuration.columns),
              getGridGap(configuration.gap),
            )}
          >
            {items.map((item, idx) => {
              const colSpan = advanceConfiguration[idx]?.colSpan;
              const colStart = advanceConfiguration[idx]?.colStart;
              const colEnd = advanceConfiguration[idx]?.colEnd;
              return (
                <div
                  className={classNames(
                    'flex-center h-32 animate-fade bg-fuchsia-700 py-5 text-2xl font-semibold transition animate-once hover:bg-fuchsia-800',
                    getColSpan(colSpan),
                    getColStart(colStart),
                    getColEnd(colEnd),
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
