import { Raleway } from 'next/font/google';
import Footer from 'app/Footer';
import Header from 'app/Header';

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
    <html lang={AppConfig.locale}>
      <body className={`${raleway.variable} font-sans`}>
        <div className='flex min-h-screen flex-col justify-between'>
          <Container>
            {/* Todo: Add header */}
            <Header />
            {children}
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
