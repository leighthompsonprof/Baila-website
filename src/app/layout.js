import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Baila',
  description: 'Your dance app landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-200 text-white min-h-screen flex flex-col`}
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