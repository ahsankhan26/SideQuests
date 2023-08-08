interface IRangeInput extends React.ComponentProps<'input'> {
  title: string;
  titleClassName?: string;
  values: string[] | number[];
}

const RangeInput: React.FC<IRangeInput> = ({
  title,
  values,
  min = '1',
  max = values.length,
  defaultValue = 1,
  titleClassName = '',
  ...rest
}) => (
  <fieldset className='button-shadow w-full border-4 border-[#1E1E1E] bg-white lg:w-60'>
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
          type='range'
          className='w-full accent-[#D45CC0]'
          min={min}
          max={max}
          defaultValue={defaultValue}
          {...rest}
        />
        <div aria-hidden='true' className='flex justify-between px-1'>
          {values.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>
    </div>
  </fieldset>
);

export default RangeInput;
