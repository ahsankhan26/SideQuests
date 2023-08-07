import Visualiser from 'app/sort-visualise/(Components)/Visualise';

import { Hero } from '@/components';

const SortVisualise: React.FC = () => (
  <div>
    <Hero
      title='Sort Visualise'
      subtitle='It illustrates the very famous Bubble Sort, trust me'
    />
    <Visualiser />
  </div>
);

export default SortVisualise;
