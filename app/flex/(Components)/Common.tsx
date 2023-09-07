interface IRadio extends React.ComponentProps<'input'> {
  label: string;
}

export const MenuTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h4 className='text-lg font-semibold'>{children}</h4>;

export const Radio: React.FC<IRadio> = ({ name, label, ...rest }) => (
  <div className='form-control'>
    <label className='flex-center cursor-pointer gap-2 text-sm'>
      <input
        className='radio radio-xs border-2 border-black'
        name={name ?? label}
        type='radio'
        {...rest}
      />
      <span className='text-xs'>{label}</span>
    </label>
  </div>
);
