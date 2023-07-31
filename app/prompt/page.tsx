'use client';

import { useState } from 'react';
import {
  generateMessage,
  getRandomBetweenRange,
  LETTER_RANGE,
} from 'app/prompt/utils';
import classNames from 'classnames';

import Typography from 'src/components/Typography';

const Prompt: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [visibleText, setVisibleText] = useState('');

  const showPrompt = () => {
    const message = generateMessage();
    const interval = setInterval(() => {
      setVisibleText((prev) => {
        // check if prompt over
        if (prev.length >= message.length) {
          clearInterval(interval);
          setMessages([...messages, prev]);
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
  };

  return (
    <div className='flex-center flex-col'>
      <div className='my-10 text-4xl font-semibold text-primary-content'>
        CatGPT
      </div>
      <Typography variant='subTitle2' className='text-accent'>
        <p>Purrfect Conversations!</p>
      </Typography>
      <div className='my-10 flex h-96 w-full flex-col-reverse justify-between overflow-y-scroll rounded-lg bg-base-200 p-10'>
        <div className='my-10 flex flex-col gap-4'>
          {messages?.map((message, idx) => (
            <div key={`${message}_${idx}`}>{message}</div>
          ))}
          <span className='flex items-center'>
            {visibleText}
            {/* cursor */}
            <div className='h-full w-0.5 bg-info' />
          </span>
        </div>
      </div>
      <button
        className={classNames('btn-primary btn-block btn', {
          'btn-disabled': visibleText,
        })}
        onClick={showPrompt}
      >
        {/* spinner */}
        <span
          className={classNames({ 'loading loading-spinner': visibleText })}
        />
        Generate
      </button>
    </div>
  );
};

export default Prompt;
