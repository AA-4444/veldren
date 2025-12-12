import { motion } from "framer-motion";
import heroVideo from "@/assets/hourse.mp4";

const WordsLine = ({
  text,
  startDelay,
}: {
  text: string;
  startDelay: number;
}) => {
  const words = text.split(" ");
  const step = 0.18;

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: startDelay + index * step,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

const StaircaseReveal = ({
  videoSrc,
  startDelay = 0,
}: {
  videoSrc: string;
  startDelay?: number;
}) => {
  const strips = 6;
  const stripHeight = 100 / strips;

  return (
    <div className="relative w-full h-full overflow-hidden z-0">
      {/* base video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* black strips */}
      {Array.from({ length: strips }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 1.2,
            delay: startDelay + 0.1 + index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute left-0 w-full bg-background will-change-transform"
          style={{
            top: `${index * stripHeight - 1}%`,
            height: `calc(${stripHeight}% + 3%)`,
          }}
        />
      ))}

      {/* glitch overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0] }}
        transition={{
          duration: 3,
          delay: startDelay + 2,
          repeat: Infinity,
          repeatDelay: 6,
        }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-transparent to-blue-500/30 mix-blend-overlay pointer-events-none z-10"
      />
    </div>
  );
};

export const HeroScene = () => {
  const videoSrc = heroVideo;

  const VIDEO_START_DELAY = 2.2;
  const LOGO_START_DELAY = 3.9;

  return (
    <div className="relative h-full w-full bg-background overflow-hidden">
      {/* mobile video */}
      <div className="absolute inset-0 z-0 md:hidden">
        <StaircaseReveal videoSrc={videoSrc} startDelay={VIDEO_START_DELAY} />
      </div>

      {/* left column text */}
      <div className="w-full md:w-[30%] h-full bg-transparent md:bg-background flex flex-col justify-end relative z-20">
        <div className="px-4 md:px-8 pb-12 md:pb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-tight leading-tight mb-6">
            <WordsLine text="A DIGITAL PRODUCT" startDelay={0.6} />
            <br />
            <WordsLine text="DESIGN &" startDelay={1.2} />
            <br />
            <WordsLine text="DEVELOPMENT" startDelay={1.6} />
            <br />
            <WordsLine text="STUDIO." startDelay={2.0} />
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground/40 uppercase tracking-tight leading-tight">
            <WordsLine text="SHARP," startDelay={2.6} />
            <br />
            <WordsLine text="INTENTIONAL" startDelay={3.0} />
            <br />
            <WordsLine text="DIGITAL." startDelay={3.4} />
          </h3>
        </div>
      </div>

      {/* desktop video (70%) */}
      <div className="hidden md:block absolute right-0 top-0 w-[70%] h-full z-10">
        <StaircaseReveal videoSrc={videoSrc} startDelay={VIDEO_START_DELAY} />
      </div>

      {/* logo last */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: LOGO_START_DELAY,
        }}
        className="absolute top-6 md:top-8 left-0 w-full z-40 px-4 md:px-8"
      >
       <h1
         className="
           text-[15vw] md:text-[12vw]
           font-black
           text-foreground
           tracking-[-0.04em]
           leading-none
           will-change-transform
         "
       >
         VELDREN
       </h1>
      </motion.div>
    </div>
  );
};
