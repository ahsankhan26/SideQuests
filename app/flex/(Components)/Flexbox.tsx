'use client';

import { useMemo, useState } from 'react';
import { Select } from 'app/flex/(Components)/Common';
import {
  DIRECTION,
  getFlexGap,
  IConfiguration,
  JUSTIFY_CONTENT,
  WIDTH,
  WRAP,
} from 'app/flex/(Components)/utils';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';
import classNames from 'classnames';

const Flexbox: React.FC = () => {
  const [configuration, setConfiguration] = useState<IConfiguration>({
    itemCount: 5,
    gap: 2,
    wrap: WRAP.WRAP,
    width: WIDTH.FIXED,
    direction: DIRECTION.ROW,
    justifyContent: JUSTIFY_CONTENT.START,
  });

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
        // @ts-expect-error type assertion
        temp[key] = value;
      }
    });
    setConfiguration(temp);
  };

  console.log(configuration);

  return (
    <div className='grid min-h-[36rem] w-full grid-cols-1 gap-5 rounded-md text-black md:grid-cols-7 lg:grid-cols-8'>
      {/* LEFT */}
      <div className='button-shadow flex flex-col gap-5 bg-stone-200 p-5 md:col-span-3'>
        <RangeInput
          aria-label='Count'
          fullWidth
          onChange={(e) =>
            handleConfigurationChange({ itemCount: Number(e.target.value) })
          }
          range={[1, 15]}
          title='Count'
          titleClassName='bg-[#ff91e7]'
          value={configuration.itemCount}
        />
        {/* Width */}
        <Select
          onChange={(e) => {
            const value = e.target.value as WIDTH;
            handleConfigurationChange({ width: value });
          }}
          title='Width'
          value={configuration.width}
        >
          <option value={WIDTH.AUTO}>Auto</option>
          <option value={WIDTH.FIXED}>Fixed</option>
          <option value={WIDTH.FULL}>Full</option>
        </Select>
        {/* Wrap */}
        <Select
          onChange={(e) => {
            const value = e.target.value as WRAP;
            handleConfigurationChange({ wrap: value });
          }}
          title='Wrap'
          value={configuration.wrap}
        >
          <option value={WRAP.NOWRAP}>No Wrap</option>
          <option value={WRAP.WRAP}>Flex Wrap</option>
          <option value={WRAP.WRAP_REVERSED}>Flex Wrap Reversed</option>
        </Select>
        {/* Direction */}
        <Select
          onChange={(e) => {
            const value = e.target.value as DIRECTION;
            handleConfigurationChange({ direction: value });
          }}
          title='Flex Direction'
          value={configuration.direction}
        >
          <option value={DIRECTION.ROW}>Row</option>
          <option value={DIRECTION.ROW_REVERSE}>Row Reversed</option>
          <option value={DIRECTION.COLUMN}>Column</option>
          <option value={DIRECTION.COLUMN_REVERSE}>Column Reversed</option>
        </Select>
        {/* Justify Content */}
        <Select
          onChange={(e) => {
            const value = e.target.value as JUSTIFY_CONTENT;
            handleConfigurationChange({ justifyContent: value });
          }}
          title='Justify Content'
          value={configuration.justifyContent}
        >
          <option value={JUSTIFY_CONTENT.START}>Start</option>
          <option value={JUSTIFY_CONTENT.END}>End</option>
          <option value={JUSTIFY_CONTENT.CENTER}>Center</option>
          <option value={JUSTIFY_CONTENT.BETWEEN}>Between</option>
          <option value={JUSTIFY_CONTENT.EVENLY}>Evenly</option>
          <option value={JUSTIFY_CONTENT.AROUND}>Around</option>
        </Select>
      </div>
      {/* RIGHT */}
      <div className='button-shadow bg-stone-200 p-5 md:col-span-4 lg:col-span-5'>
        <div
          className={classNames(
            `flex transition-all duration-500 ease-in-out ${configuration.direction} ${configuration.wrap} ${configuration.justifyContent}`,
            getFlexGap(configuration.gap),
          )}
          id='grid'
        >
          {items.map((item) => {
            return (
              <div
                className={classNames(
                  `flex h-32 animate-fade items-center justify-center bg-fuchsia-700 text-2xl font-semibold transition-all duration-500 ease-in-out animate-once hover:bg-fuchsia-800 ${configuration.width}`,
                  // getWidth(configuration.width),
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
  );
};

export default Flexbox;
