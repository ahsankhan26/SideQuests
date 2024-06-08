import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { Hero } from '@/components';

export const metadata: Metadata = {
  title: 'Guess The Flag - SideQuest',
  description: 'Choose the right one from the options',
};

const GuessTheFlag = dynamic(
  () => import('app/guess-the-flag/(Components)/GuessTheFlag'),
  { loading: () => <p>Loading...</p>, ssr: false },
);

const Page = () => {
  return (
    <div>
      <Hero
        subtitle='Choose the right one from the options.'
        title='Guess The Flag'
      />
      <GuessTheFlag />
    </div>
  );
};
export default Page;
