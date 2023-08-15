import Link from 'next/link';

const Header: React.FC = () => (
  <nav className='flex items-center justify-between gap-5 py-5'>
    <Link className='font-semibold' href='/'>
      SideQuests
    </Link>
  </nav>
);

export default Header;
