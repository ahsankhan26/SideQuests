import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { Hero } from '@/components';

import './(Components)/styles.css';

export const metadata: Metadata = {
  title: 'CSS FlexBox Visualisation - SideQuest',
  description: 'CSS Flexbox Visualisation and Code Generator',
};

const FlexBox = dynamic(() => import('app/flex/(Components)/Flexbox'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Flex: React.FC = () => {
  return (
    <div>
      <Hero
        subtitle='Visualisation for understanding CSS Flexbox'
        title='Flexbox Visualisation'
      />
      <FlexBox />
    </div>
  );
};

export default Flex;
