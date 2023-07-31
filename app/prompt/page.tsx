'use client';

import { useState } from 'react';

import Typography from 'src/components/Typography';

const RANDOM_LETTER_RANGE: [number, number] = [3, 10];

const getRandomBetweenRange = (range: [number, number]) =>
  Math.floor(Math.random() * (range[1] - range[0]) + range[0]);

const Prompt: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [visibleText, setVisibleText] = useState('');

  const originalText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia fugit doloremque quaerat sit tenetur, magnam autem vel, accusantium ipsam ad facilis corporis! Natus, ea? Fugiat quisquam odio numquam exercitationem?';

  const showPrompt = () => {
    const interval = setInterval(() => {
      setVisibleText((prev) => {
        // check if prompt over
        if (prev.length >= originalText.length) {
          clearInterval(interval);
          setMessages([...messages, prev]);
          return '';
        }
        // set new value continuing prev value length
        const textToSet = `${prev}${originalText.slice(
          prev.length,
          prev.length + getRandomBetweenRange(RANDOM_LETTER_RANGE),
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
        <p>Unleash the Purrfect Conversations!</p>
      </Typography>
      <div>
        <div className='my-10 flex flex-col gap-4'>
          {messages?.map((message, idx) => (
            <div key={`${message}_${idx}`}>{message}</div>
          ))}
          <span>{visibleText}</span>
        </div>
      </div>

      <button className='btn-primary btn' onClick={showPrompt}>
        Start
      </button>
    </div>
  );
};

export default Prompt;
