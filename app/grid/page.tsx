import type { Metadata } from 'next';
import Grid from 'app/grid/(Components)/Grid';

import { Hero } from '@/components';

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
