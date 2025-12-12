import { useMemo, useRef } from "react";
import { ScrollScenes } from "@/components/ScrollScenes";
import { HeroScene } from "@/components/HeroScene";
import { MissionScene } from "@/components/MissionScene";
import { WorksScene } from "@/components/WorksScene";
import { ServicesScene } from "@/components/ServicesScene";
import { AboutScene } from "@/components/AboutScene";

const Index = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const sceneIndexById = useMemo(
    () => ({
      home: 0,
      mission: 1,
      works: 2,
      services: 3,
      about: 4,
    }),
    []
  );

  const scrollToScene = (id: keyof typeof sceneIndexById) => {
    const el = scrollerRef.current;
    if (!el) return;

    const total = Object.keys(sceneIndexById).length;
    const idx = sceneIndexById[id];

    const rect = el.getBoundingClientRect();
    const pageTop = window.scrollY + rect.top;

    const height = el.offsetHeight; // = total * 100vh (или multiplier)
    const step = height / total;

    window.scrollTo({
      top: pageTop + idx * step,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-background min-h-screen">
      <div ref={scrollerRef}>
        <ScrollScenes>
          <HeroScene />
          <MissionScene />
          <WorksScene />
          <ServicesScene />
          <AboutScene scrollToScene={scrollToScene} />
        </ScrollScenes>
      </div>
    </main>
  );
};

export default Index;