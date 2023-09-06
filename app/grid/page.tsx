import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { Hero } from '@/components';

const Grid = dynamic(() => import('app/grid/(Components)/Grid'), {
  loading: () => <p>Loading ...</p>,
});

export const metadata: Metadata = {
  title: 'Grid Visualise - SideQuests',
  description: 'CSS Grid Visualisation and Code Generator',
};

const GridFlex: React.FC = () => (
  <div>
    <Hero
      subtitle='Visualisation for understanding CSS Grid'
      title='CSS Grid'
    />
    <Grid />
  </div>
);

export default GridFlex;
