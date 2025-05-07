
import Image from "next/image";
export default function Home() {
  return (
    <div className="]">
      <main className=" min-h-screen text-center ">
      <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img src="/logo.png" alt="Dancer" className="w-full max-w-md rounded-lg" />
      </div>
        <h1 className="text-4xl font-bold">Seize the Dance!</h1>
        <p className="mt-4 px-5 sm:w-full lg:w-1/2">  <span className="font-bold italic text-xl">Baila!</span> is a mobile app designed for dance enthusiasts of all levels and styles—whether they are dancing solo in their living room, attending a ballroom class, participating in a Zumba session, or enjoying a social dance event. The app allows users to log their dance activity, including the type of event (e.g., lesson, social dance, rehearsal, spontaneous dancing), the style of dance (e.g., freestyle, salsa, swing, line dance, Zumba), and the music source (e.g., DJ, live band, personal playlist on speaker, etc.).

Users can track their dance experiences through a visual journal, build a record of their participation over time, and follow or be followed by other dancers in the community. The social features enable users to give and receive "kudos" on dance activity, promoting community engagement, exposure to new dance styles, and personal growth through movement.

The goal of Baila! is to support and celebrate the joy of dancing, while helping users stay motivated, connected, and inspired by their progress and the community around them</p>
        
        </div>
      </main>
   

    </div>
  );
}
