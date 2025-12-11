import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import wengyVideo from "@/assets/wengy.mov";
import spingImg from "@/assets/sping.png";
import nikeVideo from "@/assets/nike.mp4";
import avaImg from "@/assets/ava.png";
import oleksiiVideo from "@/assets/oleksii.mov";
import portfolioImg from "@/assets/portfolio.png";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
}

const works: WorkItem[] = [
  {
    id: 1,
    title: "Wengy",
    description: "Wengy is marketing agency website",
    tags: ["Motion Design", "Web Development"],
    video: wengyVideo,
  },
  {
    id: 2,
    title: "Sping.tech",
    description: "Sping.tech website for IT IGaming studio ",
    tags: ["Web Developmetn"],
    image: spingImg,
  },
  {
    id: 3,
    title: "Air 1000",
    description: "Website inspired by niek pair air max 1000",
    tags: ["Motion Design", "Web Development"],
    video: nikeVideo,
  },
  {
    id: 4,
    title: "Ava 100",
    description: "Real Estate Agency website",
    tags: ["Web Development"],
    image: avaImg,
  },
  {
    id: 5,
    title: "Zarytskyi",
    description: "Portfolio website created with Next.js and Framer Motion.",
    tags: ["Web Development", "Motion Design"],
    video: oleksiiVideo,
  },
  {
    id: 6,
    title: "Moly Blake",
    description: "Portfolio design.",
    tags: ["Design", "Figma"],
    image: portfolioImg,
  },
];


const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const TITLE_WORDS = ["Selected", "Works"];

const titleContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const titleWordVariants = {
  hidden: {
    y: "100%",
    rotateX: -80,
    opacity: 0,
    transformPerspective: 800,
  },
  visible: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: EASE,
    },
  },
};

export const WorksScene = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showPanel, setShowPanel] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleContactClick = () => {
    window.location.href = "mailto:zarytskyi4444@gmail.com";
  };

  return (
    <div
      className="
        relative w-full bg-background 
        min-h-screen             
        md:min-h-0 md:h-full      
        overflow-hidden 
        md:overflow-visible md:overflow-y-auto
      "
    >
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-24">
        {/* divider */}
        <div className="border-t border-border mb-6 md:mb-12" />

       
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 md:mb-20"
        >
          {TITLE_WORDS.map((word, index) => (
            <div key={index} className="overflow-hidden inline-block mr-2">
              <motion.span
                variants={titleWordVariants}
                className="
                  text-[13vw] md:text-[10vw] 
                  leading-none font-black tracking-tight 
                  text-foreground inline-block
                "
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-card"
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* media */}
              <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect-auto">
                {work.video ? (
                  <motion.video
                    src={work.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="block w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === work.id ? 1.03 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onLoadedMetadata={(e) => {
                      const video = e.currentTarget;
                      if (video.paused) {
                        video.play().catch(() => {});
                      }
                    }}
                    onClick={(e) => {
                      const video = e.currentTarget;
                      if (video.paused) {
                        video.play().catch(() => {});
                      } else {
                        video.pause();
                      }
                    }}
                  />
                ) : (
                  work.image && (
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="block w-full h-full object-cover"
                      animate={{
                        scale: hoveredId === work.id ? 1.03 : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  )
                )}
              </div>

              {/* tags */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 flex flex-wrap gap-2 z-20">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs text-white bg-black/40 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* bottom info */}
              <div className="absolute left-0 right-0 bottom-0 z-20 bg-black/55 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3">
                <h3 className="text-xs md:text-sm font-semibold text-white">
                  {work.title}
                </h3>
                <p className="mt-1 text-[9px] md:text-[11px] leading-snug text-white/80 line-clamp-3">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 md:mt-16 text-center"
        >
          <button
            onClick={() => setShowPanel((prev) => !prev)}
            className="px-6 md:px-8 py-3 md:py-4 border border-foreground text-foreground text-xs md:text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View All Work
          </button>
        </motion.div>

        {/* panel */}
        <AnimatePresence>
          {showPanel && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="
                mt-6 md:mt-10
                mx-auto
                max-w-xl
                border border-border bg-card/90 backdrop-blur-md
                px-5 md:px-8 py-5 md:py-7
                text-left
              "
            >
              <h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground mb-3">
                PROJECT INQUIRIES
              </h3>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-4">
                If you’d like to see more case studies or discuss a new product,
                brand website or e-commerce build — share a short note about
                your project, timeline and scope.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-5">
                We typically respond within 24 hours with next steps and,
                if needed, a time for a quick call.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleContactClick}
                  className="px-4 md:px-6 py-2 border border-foreground text-foreground text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Contact us
                </button>
                <span className="text-[11px] md:text-xs text-muted-foreground self-center">
                  or email directly — zarytskyi4444@gmail.com
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};