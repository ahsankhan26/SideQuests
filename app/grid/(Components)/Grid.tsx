'use client';

import { useMemo, useState } from 'react';
import Highlight from 'react-highlight';
import { FiClipboard } from 'react-icons/fi';
import classNames from 'classnames';
import { LayoutGroup, motion } from 'framer-motion';

import { SelectInput } from 'app/grid/(Components)/Common';
import { initialConfiguration } from 'app/grid/(Components)/constants';
import {
  getColEnd,
  getColSpan,
  getColStart,
  getGridCols,
  getGridGap,
  IAdvanceConfiguration,
  IConfiguration,
  prettifiedHtmlString,
} from 'app/grid/(Components)/utils';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';

import { Button } from '@/components';
import { copyToClipboard } from '@/utils';

const Grid: React.FC = () => {
  const [showCode, setShowCode] = useState(false);
  const [codeText, setCodeText] = useState('');
  const [configuration, setConfiguration] =
    useState<IConfiguration>(initialConfiguration);
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

  const toggleCode = () => {
    setShowCode(!showCode);
    if (!showCode) {
      const outerHtml = document?.querySelector('#grid')?.outerHTML;
      const code = prettifiedHtmlString(outerHtml ?? '');
      setCodeText(code);
    }
  };
  return (
    <div className='grid min-h-[36rem] w-full grid-cols-1 gap-5 rounded-md text-black md:grid-cols-7 lg:grid-cols-8'>
      {/* LEFT */}
      <div className='button-shadow gap-5 bg-stone-200 p-5 flex-column md:col-span-3'>
        <RangeInput
          aria-label='Count'
          disabled={showCode}
          fullWidth
          onChange={(e) =>
            handleConfigurationChange({ itemCount: Number(e.target.value) })
          }
          range={[1, 15]}
          title='Count'
          titleClassName='bg-[#ff91e7]'
          value={configuration.itemCount}
        />
        <RangeInput
          aria-label='Columns'
          disabled={showCode}
          fullWidth
          onChange={(e) =>
            handleConfigurationChange({ columns: Number(e.target.value) })
          }
          range={[1, 12]}
          title='Columns'
          titleClassName='bg-[#22a094]'
          value={configuration.columns}
        />
        <RangeInput
          aria-label='Gap'
          disabled={showCode}
          fullWidth
          max={'5'}
          min={'0'}
          onChange={(e) =>
            handleConfigurationChange({ gap: Number(e.target.value) })
          }
          title='Gap'
          titleClassName='bg-[#91a8ed]'
          value={configuration.gap}
          values={[0, 1, 2, 3, 4, 5]}
        />
        {/* Advance */}
        <div className='button-shadow collapse-arrow collapse rounded-none border-4 border-[#1E1E1E] bg-white'>
          <input aria-label='Advance Settings' type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Advance Settings
          </div>
          <div className='collapse-content gap-2 flex-column'>
            {/* Column Span */}
            <div className='collapse'>
              <input aria-label='Column Span' type='checkbox' />
              <div className='collapse-title underline'>Column Span</div>
              <div className='collapse-content'>
                <SelectInput
                  disabled={showCode}
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
              <input aria-label='Column Start' type='checkbox' />
              <div className='collapse-title underline'>Column Start</div>
              <div className='collapse-content'>
                <SelectInput
                  disabled={showCode}
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
              <input aria-label='Column End' type='checkbox' />
              <div className='collapse-title underline'>Column End</div>
              <div className='collapse-content'>
                <SelectInput
                  disabled={showCode}
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

        {/* Reset Button */}
        <Button
          className='button-shadow btn-accent rounded-none'
          disabled={showCode}
          onClick={() => {
            setConfiguration(initialConfiguration);
            setAdvanceConfiguration([]);
          }}
        >
          Reset
        </Button>

        {/* Generate Button */}
        <label className='button-shadow swap btn-primary btn rounded-none'>
          <input onClick={toggleCode} type='checkbox' />
          <div className='swap-off'>Generate Code</div>
          <div className='swap-on'>Preview</div>
        </label>
      </div>

      {/* RIGHT */}
      <div className='button-shadow bg-stone-200 p-5 md:col-span-4 lg:col-span-5'>
        {!showCode ? (
          <motion.div
            className={classNames(
              'grid',
              getGridCols(configuration.columns),
              getGridGap(configuration.gap),
            )}
            id='grid'
            layout
          >
            <LayoutGroup>
              {items.map((item, idx) => {
                const colSpan = advanceConfiguration[idx]?.colSpan;
                const colStart = advanceConfiguration[idx]?.colStart;
                const colEnd = advanceConfiguration[idx]?.colEnd;
                return (
                  <motion.div
                    className={classNames(
                      'flex h-32 items-center justify-center bg-fuchsia-700 text-2xl font-semibold hover:bg-fuchsia-800',
                      getColSpan(colSpan),
                      getColStart(colStart),
                      getColEnd(colEnd),
                    )}
                    key={item}
                    layout
                  >
                    {item}
                  </motion.div>
                );
              })}
            </LayoutGroup>
          </motion.div>
        ) : (
          <div className='relative h-full'>
            <div
              className='tooltip-primary tooltip absolute right-2 top-2'
              data-tip='Copy to clipboard'
            >
              <Button
                className='btn-primary btn-sm'
                onClick={() => copyToClipboard(codeText)}
              >
                <FiClipboard />
              </Button>
            </div>
            <Highlight className='grid-code html h-full'>{codeText}</Highlight>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grid;
