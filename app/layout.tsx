import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import Footer from 'app/Footer';
import Header from 'app/Header';

import Container from '@/components/Container';

import '../src/styles/global.css';

export const metadata: Metadata = {
  title: 'SideQuests',
  description: 'Side projects and experiments',
};

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${raleway.variable} font-sans`}>
        <div className='min-h-screen justify-between flex-column'>
          <Container>
            {/* Todo: Add header */}
            <NextTopLoader shadow={false} showSpinner={false} />
            <Header />
            {children}
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
