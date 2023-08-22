'use client';

import { useState } from 'react';
import classNames from 'classnames';

interface IRangeInput extends React.ComponentProps<'input'> {
  title: string;
  titleClassName?: string;
  values?: string[] | number[];
  fullWidth?: boolean;
  range?: [number, number];
}

const RangeInput: React.FC<IRangeInput> = ({
  title,
  values,
  range,
  min = range?.[0] ?? '1',
  max = range?.[1] ?? values?.length,
  defaultValue = 1,
  titleClassName = '',
  fullWidth,
  onChange,
  ...rest
}) => {
  const [currentVal, setCurrentVal] = useState('');
  return (
    <fieldset
      className={classNames(
        'button-shadow w-full border-4 border-[#1E1E1E] bg-white',
        { 'lg:w-60': !fullWidth },
      )}
    >
      <div className='flex flex-col gap-2'>
        <div
          className={`border-text border-b-4 border-[#1E1E1E] text-center text-lg font-semibold uppercase ${
            titleClassName || 'bg-[#97E36A]'
          }`}
        >
          {title}
        </div>
        <div className='px-5 py-1'>
          <input
            className='w-full cursor-pointer accent-[#D45CC0]'
            defaultValue={defaultValue}
            max={max}
            min={min}
            onChange={(e) => {
              setCurrentVal(e.target.value.toString());
              if (onChange) {
                onChange(e);
              }
            }}
            type='range'
            {...rest}
          />
          <div aria-hidden='true' className='flex justify-between px-1'>
            {range ? (
              <>
                <span>{range[0]}</span>
                <span className='font-semibold underline underline-offset-4'>
                  {currentVal}
                </span>
                <span>{range[1]}</span>
              </>
            ) : null}
            {values?.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default RangeInput;
