import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shyan Roy Choudhury',
  description: 'shyan.xyz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white`}>
        <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="sm:flex w-full justify-center">
            <Navbar />
            <div className="flex-1 mt-8 sm:mt-0 sm:ml-8">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
