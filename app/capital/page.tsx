import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { Hero } from '@/components';

import './(Components)/styles.css';

export const metadata: Metadata = {
  title: 'Capital Guess Game - SideQuest',
  description: 'Match the country and its capital',
};

const CountryCapitalGame = dynamic(
  () => import('app/capital/(Components)/CountryCapitalGame'),
  { loading: () => <p>Loading...</p>, ssr: false },
);

const Page: React.FC = () => (
  <div>
    <Hero
      subtitle='Select the country and its capital, game ends when no options left'
      title='Country Capital Game'
    />
    <CountryCapitalGame />
  </div>
);

export default Page;
