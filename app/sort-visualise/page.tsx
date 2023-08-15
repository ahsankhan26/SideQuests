import Visualiser from 'app/sort-visualise/(Components)/Visualise';

import { Hero } from '@/components';

const SortVisualise: React.FC = () => (
  <div>
    <Hero
      subtitle='It illustrates the very famous Bubble Sort, trust me'
      title='Sort Visualise'
    />
    <div className='bg-[#FFDCA8] p-5 text-[#1E1E1E]'>
      <Visualiser />
    </div>
  </div>
);

export default SortVisualise;
