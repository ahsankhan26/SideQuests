import type { Metadata } from 'next';

import Visualiser from 'app/sort-visualise/(Components)/Visualise';

import { Hero } from '@/components';

export const metadata: Metadata = {
  title: 'Sort Visualise - SideQuests',
  description: 'Sorting Visualisations',
};

const SortVisualise: React.FC = () => (
  <div>
    <Hero
      subtitle='It illustrates the very famous Bubble Sort, Trust Me!'
      title='Sort Visualise'
    />
    <div className='bg-[#FFDCA8] p-5 text-[#1E1E1E]'>
      <Visualiser />
    </div>
  </div>
);

export default SortVisualise;
