'use client';

import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appStoreUrl = 'https://apps.apple.com/us/app/baila-dance-tracker/id6759945813';

  return (
    <div className="]">
      <main className="min-h-screen text-center text-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src="/logo.png" alt="Dancer" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl font-bold text-black">Seize the Dance!</h1>
          <div className="mt-6 px-5 space-y-4 sm:w-full lg:w-1/2 text-left text-lg leading-relaxed text-black">
            <p>
              <span className="font-bold italic text-2xl">Baila!</span> is a mobile app designed for dance enthusiasts of all levels and styles —
              whether you're dancing solo in your living room, attending a ballroom class, taking a Zumba session, or enjoying a social dance event.
            </p>

            <div>
              <p>The app lets users log their dance activity, including:</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-base">
                <li><strong>Type of event:</strong> lesson, social dance, rehearsal, or spontaneous dancing</li>
                <li><strong>Dance style:</strong> freestyle, salsa, swing, line dance, Zumba, etc.</li>
                <li><strong>Music source:</strong> DJ, live band, personal playlist, speaker, etc.</li>
              </ul>
            </div>

            <p>
              Users can track their experiences through a <strong>visual dance journal</strong>, build a personal record over time, and follow or be followed by other dancers in the community.
            </p>

            <p>
              Social features let users give and receive <strong>"kudos"</strong> on dance activity — promoting engagement, exposure to new styles, and personal growth through movement.
            </p>

            <p className="font-semibold text-purple-700">
              Baila! celebrates the joy of dance while helping users stay motivated, connected, and inspired by their progress and the vibrant community around them.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl bg-black px-6 py-3 text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
              aria-label="Download Baila on the App Store"
            >
              <span className="flex flex-col text-left leading-tight">
                <span className="text-xs uppercase tracking-wide text-gray-300">Download on the</span>
                <span className="text-lg font-semibold">App Store</span>
              </span>
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-2xl bg-purple-700 text-white font-semibold shadow-md hover:bg-purple-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </main>

      <WaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
