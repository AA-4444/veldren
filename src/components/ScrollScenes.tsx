import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  useRef,
  ReactNode,
  Children,
  useEffect,
  useState,
} from "react";

interface ScrollScenesProps {
  children: ReactNode;
}

interface SceneProps {
  children: ReactNode;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const Scene = ({ children, index, total, scrollYProgress }: SceneProps) => {
  const sceneStart = index / total;
  const sceneEnd = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const y = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sceneEnd * 0.8, sceneEnd]
      : isLast
      ? [sceneStart - 0.05, sceneStart, 1]
      : [sceneStart - 0.05, sceneStart, sceneEnd * 0.9, sceneEnd],
    isFirst
      ? ["0%", "0%", "-100%"]
      : isLast
      ? ["100%", "0%", "0%"]
      : ["100%", "0%", "0%", "-100%"]
  );

  const scale = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sceneEnd * 0.8, sceneEnd]
      : isLast
      ? [sceneStart - 0.05, sceneStart, 1]
      : [sceneStart - 0.05, sceneStart, sceneEnd * 0.9, sceneEnd],
    isFirst
      ? [1, 1, 0.95]
      : isLast
      ? [0.9, 1, 1]
      : [0.9, 1, 1, 0.95]
  );

  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sceneEnd * 0.7, sceneEnd]
      : isLast
      ? [sceneStart - 0.02, sceneStart + 0.02, 1]
      : [sceneStart - 0.02, sceneStart + 0.02, sceneEnd * 0.85, sceneEnd],
    isFirst
      ? [1, 1, 0]
      : isLast
      ? [0, 1, 1]
      : [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: total - index,
      }}
      className="absolute inset-0 w-full h-full will-change-transform"
    >
      <div className="w-full h-full">{children}</div>
    </motion.div>
  );
};

const ScrollScenesCore = ({
  children,
  heightMultiplier = 1,
}: {
  children: ReactNode;
  heightMultiplier?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childArray = Children.toArray(children);
  const total = childArray.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${total * 100 * heightMultiplier}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {childArray.map((child, index) => (
          <Scene
            key={index}
            index={index}
            total={total}
            scrollYProgress={scrollYProgress}
          >
            {child}
          </Scene>
        ))}
      </div>
    </div>
  );
};

export const ScrollScenes = ({ children }: ScrollScenesProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const childArray = Children.toArray(children);

  // Индекс WorksScene:
  // 0: HeroScene
  // 1: MissionScene
  // 2: WorksScene
  // 3: ServicesScene
  // 4: AboutScene
  const WORKS_INDEX = 2;

  if (isMobile) {
    const beforeWorks = childArray.slice(0, WORKS_INDEX); // Hero, Mission
    const fromWorks = childArray.slice(WORKS_INDEX);      // Works и всё после

    return (
      <>
        {/* первые сцены со ScrollScenes */}
        <ScrollScenesCore heightMultiplier={1.3}>
          {beforeWorks}
        </ScrollScenesCore>

        {/* Works + Services + About — обычный скролл */}
        <div className="w-full bg-background">
          {fromWorks.map((child, idx) => (
            <div key={idx} className="w-full">
              {child}
            </div>
          ))}
        </div>
      </>
    );
  }

  // десктоп — ровно как раньше: ВСЁ в ScrollScenes, multiplier = 1
  return <ScrollScenesCore heightMultiplier={1}>{children}</ScrollScenesCore>;
};