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
  <fieldset className='button-shadow border-right text-text w-full bg-white md:w-60'>
    <div className='flex flex-col gap-2'>
      <div
        className={`border-text text-text border-b-4 text-center text-lg uppercase ${
          titleClassName || 'bg-green'
        }`}
      >
        {title}
      </div>
      <div className='px-5 py-1'>
        <input
          type='range'
          className='accent-purple w-full'
          min={min}
          max={max}
          defaultValue={defaultValue}
          {...rest}
        />
        <div aria-hidden='true' className='text-text flex justify-between px-1'>
          {values.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>
    </div>
  </fieldset>
);

export default RangeInput;
