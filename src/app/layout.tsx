import '@/app/globals.css';
import Providers from '@/app/providers';
import Navbar from '@/shared/components/Navbar';
import { Metadata } from 'next';
import { Container } from 'postcss';
// import {Inter} from 'next/font/google'

// const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Cart India',
  description: 'All concepts clubbed together here'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
      // className={inter.className}
      >
        {/* <Container> */}
        <Providers>
          <Navbar />
          {children}
        </Providers>
        {/* </Container> */}
      </body>
    </html>
  );
}
