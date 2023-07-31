import { Raleway } from 'next/font/google';
import Footer from 'app/Footer';

import Container from 'src/components/Container';
import { AppConfig } from 'src/config/AppConfig';

import '../src/styles/global.css';

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
    <html lang={AppConfig.locale} data-theme='dark'>
      <body className={`${raleway.variable} font-sans`}>
        <div className='flex min-h-screen flex-col justify-between'>
          <div>
            {/* Todo: Add header */}
            {/* <Header /> */}
            <Container className='py-10'>{children}</Container>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
