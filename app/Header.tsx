import Link from 'next/link';

const Header: React.FC = () => (
  <nav className='flex items-center justify-between gap-5 py-5'>
    <Link href='/' className='font-semibold'>
      SideQuests
    </Link>
  </nav>
);

export default Header;
