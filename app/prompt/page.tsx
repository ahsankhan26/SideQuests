'use client';

import { useState } from 'react';
import {
  generateMessage,
  getRandomBetweenRange,
  LETTER_RANGE,
} from 'app/prompt/utils';

import { Button, Hero } from '@/components';

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
    <div>
      <Hero title='CatGPT' subtitle='Purrfect Conversations!' />
      <div className='flex-center flex-col'>
        <div className='my-10 flex h-96 w-full flex-col-reverse justify-between overflow-y-scroll rounded-lg bg-base-200 p-10'>
          <div className='my-10 flex flex-col gap-4'>
            {messages?.map((message, idx) => (
              <div key={`${message}_${idx}`}>{message}</div>
            ))}
            <span className='flex items-center'>
              {visibleText}
              <div className='h-full w-0.5 bg-info' /> {/* cursor */}
            </span>
          </div>
        </div>
        <Button
          disabled={!!visibleText}
          loading={!!visibleText}
          fullWidth
          onClick={showPrompt}
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default Prompt;
