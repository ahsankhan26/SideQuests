import { AiOutlineWarning } from 'react-icons/ai';
import classNames from 'classnames';

interface IInput extends React.ComponentProps<'input'> {
  error?: string;
  icon?: React.ReactNode;
  iconDisabled?: boolean;
}

export const Input: React.FC<IInput> = ({
  type = 'text',
  className = '',
  icon,
  error,
  iconDisabled,
  ...rest
}) => (
  <div className='w-full'>
    <div className='relative w-full'>
      {icon ? (
        <button
          aria-label='send-message'
          className={classNames('absolute inset-y-0 right-3 my-auto', {
            'opacity-50': iconDisabled,
          })}
          disabled={iconDisabled}
          type='submit'
        >
          {icon}
        </button>
      ) : null}
      <input
        className={classNames(
          `input-bordered input w-full placeholder:text-sm ${className}`,
          { 'input-error': !!error },
        )}
        type={type}
        {...rest}
      />
    </div>
    {error ? (
      <p className='mt-2 flex items-center gap-2 text-sm text-error'>
        <AiOutlineWarning />
        {error}
      </p>
    ) : null}
  </div>
);
