import { HomeCard } from 'src/components/HomeCard';
import { homeCards } from 'src/constants/common';

const Home: React.FC = () => {
  return (
    <div className='py-24 px-6 text-center text-primary-content'>
      <h1 className='mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
        SideQuests
      </h1>
      {/* Cards */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {homeCards.map((item) => (
          <HomeCard key={item.name} title={item.name} href={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Home;
