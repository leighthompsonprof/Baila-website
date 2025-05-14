'use client';

import Image from "next/image";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="]">
      <main className=" min-h-screen text-center ">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-40 h-40">
            <img src="/logo.png" alt="Dancer" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl font-bold">Seize the Dance!</h1>
          <div className="mt-6 px-5 space-y-4 sm:w-full lg:w-1/2 text-left text-lg leading-relaxed">
            <p>
              <span className="font-bold italic text-2xl">Baila!</span> is a mobile app designed for dance enthusiasts of all levels and styles —
              whether you're dancing solo in your living room, attending a ballroom class, taking a Zumba session, or enjoying a social dance event.
            </p>

            <div>
              <p>The app lets users log their dance activity, including:</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-base">
                <li><strong>Type of event:</strong> lesson, social dance, rehearsal, or spontaneous dancing</li>
                <li><strong>Dance style:</strong> freestyle, salsa, swing, line dance, Zumba</li>
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

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-2xl bg-purple-700 text-white font-semibold shadow-md hover:bg-purple-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Join the Waitlist
          </button>
        </div>
      </main>

      <WaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
