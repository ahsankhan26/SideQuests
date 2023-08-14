'use client';

import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';
import {
  generateMessage,
  getRandomBetweenRange,
  LETTER_RANGE,
} from 'app/prompt/utils';

import { Hero } from '@/components';
import Input from '@/components/Input';

interface IForm {
  message: string;
}

const Prompt: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<IForm>({
    defaultValues: {
      message: '',
    },
  });

  const [messages, setMessages] = useState<string[]>([]);
  const [visibleText, setVisibleText] = useState('');

  const showPrompt = ({ messagesArr }: { messagesArr: string[] }) => {
    return new Promise<void>((resolve) => {
      const message = generateMessage();
      const interval = setInterval(() => {
        setVisibleText((prev) => {
          // check if prompt over
          if (prev.length >= message.length) {
            clearInterval(interval);
            resolve();
            setMessages([...messagesArr, prev]);
            return '';
          }
          // set new value continuing prev value length
          const textToSet = `${prev}${message.slice(
            prev.length,
            prev.length + getRandomBetweenRange(LETTER_RANGE),
          )}`;
          return textToSet;
        });
      }, 100);
    });
  };

  const newPrompt: SubmitHandler<IForm> = async ({ message }) => {
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    reset();
    await showPrompt({ messagesArr: updatedMessages });
    const input: HTMLInputElement | null = document.querySelector('#message');
    input?.focus();
  };

  return (
    <div>
      <Hero subtitle='Purrfect Conversations!' title='CatGPT' />
      <div className='flex-center flex-col'>
        <div className='my-10 flex h-96 w-full flex-col-reverse justify-between overflow-y-scroll rounded-lg bg-base-200 p-10'>
          <div className='my-10 flex flex-col gap-4 '>
            {messages?.map((message, idx) => (
              <div
                className='even:text-primary-content'
                key={`${message}_${idx}`}
              >
                {message}
              </div>
            ))}
            <span className='flex items-center text-primary-content'>
              {visibleText}
              <div className='h-full w-0.5 bg-info' /> {/* cursor */}
            </span>
          </div>
        </div>

        <form className='contents' onSubmit={handleSubmit(newPrompt)}>
          <Controller
            control={control}
            name='message'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                disabled={!!visibleText}
                error={error?.message}
                icon={<AiOutlineSend />}
                iconDisabled={!!visibleText}
                id='message'
                onChange={onChange}
                placeholder='Send a message'
                value={value}
              />
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
        </form>
      </div>
    </div>
  );
};

export default Prompt;
