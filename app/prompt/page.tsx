import type { Metadata } from 'next';

import Chat from 'app/prompt/Chat';

import { Hero } from '@/components';

export const metadata: Metadata = {
  title: 'CatGPT - SideQuests',
  description: 'Paw-some replica of ChatGPT',
};

const Prompt: React.FC = () => (
  <div>
    <Hero subtitle='Purrfect Conversations!' title='CatGPT' />
    <Chat />
  </div>
);

export default Prompt;
