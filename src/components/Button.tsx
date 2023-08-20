import classNames from 'classnames';

interface IButton extends React.ComponentProps<'button'> {
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<IButton> = ({
  disabled,
  loading,
  fullWidth,
  children,
  className = '',
  ...rest
}) => (
  <button
    className={classNames(`btn ${className}`, {
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
