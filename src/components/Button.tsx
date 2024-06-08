import { cn } from '@/utils';

interface ButtonProps extends React.ComponentProps<'button'> {
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  disabled,
  loading,
  fullWidth,
  children,
  className = '',
  ...rest
}: ButtonProps) => (
  <button
    className={cn(
      'btn',
      { 'btn-disabled': disabled, 'btn-block': fullWidth },
      className,
    )}
    {...rest}
  >
    {/* spinner */}
    {loading ? <span className='loading loading-spinner' /> : null}
    {children}
  </button>
);
