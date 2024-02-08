'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FiClipboard } from 'react-icons/fi';

import { Button, Input } from '@/components';
import { copyToClipboard } from '@/utils';

interface ILoopForm {
  text: string;
  repeat: number;
}

const Loop: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<ILoopForm>({
    defaultValues: {
      text: '',
      repeat: 10,
    },
  });

  const submit: SubmitHandler<ILoopForm> = ({ text, repeat }) => {
    const repeatedText = text.repeat(repeat);
    reset({ text: repeatedText, repeat });
  };

  return (
    <div className='flex-col gap-2 flex-center'>
      <form className='contents' onSubmit={handleSubmit(submit)}>
        <Controller
          control={control}
          name='text'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div className='relative w-full'>
              <textarea
                aria-label='content'
                autoFocus
                className='textarea-bordered textarea textarea-lg w-full resize-none'
                onChange={onChange}
                rows={5}
                value={value}
              />
              <p className='text-xs text-error'>{error?.message ?? ''}</p>
              <div
                className='tooltip-primary tooltip absolute right-2 top-2'
                data-tip='Copy to clipboard'
              >
                <Button
                  aria-label='copy to clipboard'
                  className='btn-primary btn-sm'
                  onClick={() => copyToClipboard(value)}
                >
                  <FiClipboard />
                </Button>
              </div>
            </div>
          )}
          rules={{
            required: { value: true, message: 'Message cannot be empty' },
            validate: {
              checkEmptySpaces: (value: string) => {
                if (typeof value === 'string') {
                  if (!value?.trim()?.length) {
                    return 'Message cannot be empty';
                  }
                }
                return true;
              },
            },
          }}
        />
        <div className='gap-2 flex-center'>
          <Controller
            control={control}
            name='repeat'
            render={({ field: { value, onChange } }) => (
              <Input
                aria-label='repeat count'
                max={100}
                min={2}
                onChange={onChange}
                type='number'
                value={value}
              />
            )}
          />

          <Button type='submit'>Repeat</Button>
        </div>
      </form>
    </div>
  );
};

export default Loop;
