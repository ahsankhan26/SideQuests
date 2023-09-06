interface ISelect extends React.ComponentProps<'select'> {
  title: string;
  children?: React.ReactNode;
}

const MenuTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className='text-lg font-semibold'>{children}</h4>
);

export const Select: React.FC<ISelect> = ({ title, children, ...rest }) => (
  <div>
    <MenuTitle>{title}</MenuTitle>
    <select
      className='button-shadow select-bordered select w-full rounded-none border-4 border-[#1E1E1E] bg-white'
      {...rest}
    >
      {children}
    </select>
  </div>
);
