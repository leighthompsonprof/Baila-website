// pages/thanks.js
import Link from 'next/link';

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">🎉 You're on the list!</h1>
      <p className="text-lg mb-6">
        Thanks for joining the Baila waitlist. We'll keep you posted with updates.
      </p>
      <Link href="/">
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
