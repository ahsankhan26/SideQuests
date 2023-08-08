import Link from 'next/link';

interface IHomeCard {
  title: string;
  href: string;
}

export const HomeCard: React.FC<IHomeCard> = ({ title, href }) => (
  <Link href={href} target={href?.includes('https') ? '_blank' : undefined}>
    <div className='card bg-primary shadow-xl transition hover:bg-primary-focus'>
      <div className='flex-center card-body'>
        <h2 className='card-title'>{title}</h2>
      </div>
    </div>
  </Link>
);
