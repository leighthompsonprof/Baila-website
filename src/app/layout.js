import './globals.css';
import { Inter } from 'next/font/google';

import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
export const metadata = {
  title: 'Baila',
  description: 'Your dance app landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`  font-sans antialiased bg-purple-200  min-h-screen flex flex-col`}
      >
        {/* Header */}
        <header className="w-full bg-purple-300 flex items-center justify-between px-6 py-4">
        
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Baila Logo"
              width={40}
              height={40}
              className="transition duration-300 hover:invert cursor-pointer"
            />
          </Link>
          <h1 className="text-xl font-bold">Baila</h1>
        </header>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="w-full mt-10 py-6 bg-violet-600 text-sm">
  <div className="max-w-5xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between px-6">
    <div className="flex space-x-4 mb-4 sm:mb-0">
      <a href="/terms" className="hover:underline">
        Terms & Conditions
      </a>
      <a href="/privacy" className="hover:underline">
        Privacy Policy
      </a>
    </div>
    <p className="text-center sm:text-right">
      © {new Date().getFullYear()} Baila. All rights reserved.
    </p>
  </div>
</footer>
      </body>
    </html>
  );
}