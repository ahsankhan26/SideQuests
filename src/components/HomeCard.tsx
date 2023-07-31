import Link from 'next/link';

interface IHomeCard {
  title: string;
  href: string;
}

export const HomeCard: React.FC<IHomeCard> = ({ title, href }) => {
  return (
    <Link href={href}>
      <div className='card bg-primary shadow-xl'>
        <div className='flex-center card-body'>
          <h2 className='card-title'>{title}</h2>
        </div>
      </div>
    </Link>
  );
};
