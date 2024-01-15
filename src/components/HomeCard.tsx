import Link from 'next/link';

interface IHomeCard {
  title: string;
  href: string;
}

export const HomeCard: React.FC<IHomeCard> = ({ title, href }) => (
  <Link href={href} target={href?.includes('https') ? '_blank' : undefined}>
    <div className='card h-full bg-primary shadow-xl transition hover:bg-primary-focus'>
      <div className='card-body flex-center'>
        <h2 className='card-title'>{title}</h2>
      </div>
    </div>
  </Link>
);
