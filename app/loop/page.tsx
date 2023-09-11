import dynamic from 'next/dynamic';

import { Hero } from '@/components';

const Loop = dynamic(() => import('app/loop/(Components)/Loop'), {
  loading: () => <p>Loading ...</p>,
});

const LoopText: React.FC = () => (
  <div>
    <Hero subtitle='This gets annoying very quickly' title='Text Repeat' />
    <Loop />
  </div>
);

export default LoopText;
