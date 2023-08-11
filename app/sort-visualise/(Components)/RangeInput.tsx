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
  min = range?.[0] ?? values?.[0] ?? '1',
  max = values?.length ?? range?.[1],
  defaultValue = 1,
  titleClassName = '',
  fullWidth,
  ...rest
}) => (
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
          className='w-full accent-[#D45CC0]'
          defaultValue={defaultValue}
          max={max}
          min={min}
          type='range'
          {...rest}
        />
        <div aria-hidden='true' className='flex justify-between px-1'>
          {range?.map((value) => (
            <span key={value}>{value}</span>
          ))}
          {values?.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>
    </div>
  </fieldset>
);

export default RangeInput;
