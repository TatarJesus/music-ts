import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProviders from '@/components/AppProviders/AppProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

import { Layout, Menu, MenuProps } from 'antd';
import Foot from '@/components/Foot';
import Main from '@/components/Main';

const layoutStyle = {
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  margin: 0,
  padding: 0,
  display: 'flex',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <Layout style={layoutStyle}>
            <Main>{children}</Main>
            <Foot />
          </Layout>
        </AppProviders>
      </body>
    </html>
  );
}
