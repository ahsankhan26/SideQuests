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
    className={cn(`btn ${className}`, {
      'btn-disabled': disabled,
      'btn-block': fullWidth,
    })}
    {...rest}
  >
    {/* spinner */}
    {loading ? <span className='loading loading-spinner' /> : null}
    {children}
  </button>
);
