"use client";
import { sounds } from "./data";
import Sound from "./components/sound";

export default function Home() {
    return (
        <main className="w-full min-h-screen p-5 flex justify-center mt-20">
            <section className="py-10 md:py-32 h-fit grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16">
              {sounds.map((item, index) => {
                  return <Sound key={index} title={item.title} icon={item.icon} sound={item.audio} />;
              })}
            </section>
        </main>
    );
}
