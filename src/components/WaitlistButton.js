'use client';

import { useEffect, useState } from 'react';

export default function WaitlistButton() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if Kit.com is loaded
    const checkKit = () => {
      if (window.kit) {
        setIsReady(true);
        return true;
      }
      return false;
    };

    // Initial check
    if (checkKit()) return;

    // Set up an observer to watch for script load
    const observer = new MutationObserver((mutations) => {
      if (checkKit()) {
        observer.disconnect();
      }
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (window.kit) {
      window.kit.open('81755b57c1');
    }
  };

  return (
    <button 
      className="px-6 py-3 rounded-2xl bg-purple-700 text-white font-semibold shadow-md hover:bg-purple-800 transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      type="button"
      onClick={handleClick}
      disabled={!isReady}
    >
      {isReady ? 'Join the Waitlist' : 'Loading...'}
    </button>
  );
} 