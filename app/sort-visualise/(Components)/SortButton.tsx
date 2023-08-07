interface IButton extends React.ComponentProps<'button'> {
  className?: string;
}

const SortButton: React.FC<IButton> = ({
  className = '',
  children,
  ...rest
}) => (
  <button
    type='button'
    {...rest}
    className={`button-shadow rounded border-4 border-[#1E1E1E] bg-[#D45CC0] px-6 py-2.5 text-2xl font-medium uppercase leading-tight text-white transition duration-150 ease-in-out active:scale-105 enabled:hover:rotate-1 enabled:hover:bg-[#D45CC0]/80 disabled:opacity-50 enabled:md:hover:rotate-6 ${className}`}
  >
    {children}
  </button>
);

export default SortButton;
