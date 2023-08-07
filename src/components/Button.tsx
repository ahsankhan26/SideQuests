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
  ...rest
}) => (
  <button
    className={classNames('btn-primary btn', {
      'btn-disabled': disabled,
      'btn-block': fullWidth,
    })}
    {...rest}
  >
    {/* spinner */}
    <span className={classNames({ 'loading loading-spinner': loading })} />
    {children}
  </button>
);
