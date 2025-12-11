import { ScrollScenes } from "@/components/ScrollScenes";
import { HeroScene } from "@/components/HeroScene";
import { MissionScene } from "@/components/MissionScene";
import { WorksScene } from "@/components/WorksScene";
import { ServicesScene } from "@/components/ServicesScene";
import { AboutScene } from "@/components/AboutScene";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <ScrollScenes>
        <HeroScene />
        <MissionScene />
        <WorksScene />
        <ServicesScene />
        <AboutScene />
      </ScrollScenes>
    </main>
  );
};

export default Index;
