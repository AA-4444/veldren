import { motion } from "framer-motion";
import { useState } from "react";

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
    description:
      "Overmono is a visual experiment inspired by the duo's raw",
    tags: ["Motion Design", "Art Direction"],
    video: "src/assets/wengy.mp4",
  },
  {
    id: 2,
    title: "Sping.tech",
    description:
      "Likorn is a digital study exploring organic motion and sculptural forms.",
    tags: ["Motion Design", "Art Direction"],
    image: "src/assets/sping.png",
  },
  {
    id: 3,
    title: "Air 1000",
    description:
      "Solo Model is a stripped-down visual study focused on presence",
    tags: ["Motion Design", "Art Direction"],
    video: "src/assets/nike.mp4",
  },
  {
    id: 4,
    title: "Ava 100",
    description:
      "Ethereal Skiing is a visual experiment capturing the weightlessness and speed of movement on snow. ",
    tags: ["Motion Design", "Art Direction"],
    image: "src/assets/ava.png",
  },
  {
    id: 5,
    title: "Zarytskyi",
    description:
      "Protfolio website creted with next and frame-motion",
    tags: ["Web Development", "Motion Design"],
    video: "src/assets/oleksii.mp4",
  },
  {
    id: 6,
    title: "Moly Blake",
    description:
      "Protfolio design ",
    tags: ["Design", "Figma"],
    image: "src/assets/portfolio.png",
  },

];

export const WorksScene = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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

  const spacedText = (text: string) => text.split("").join("  ");

  return (
    
    <div className="relative h-full w-full bg-background overflow-y-auto">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Section divider */}
        <div className="border-t border-border mb-12" />

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[18vw] md:text-[10vw] leading-none font-black tracking-tight text-foreground mb-20"
        >
          Selected Works
        </motion.h2>

        {/* Works grid */}
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
            
              <div className="relative w-full overflow-hidden">
                {work.video ? (
                  <motion.video
                    src={work.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block w-full h-auto object-cover"
                    animate={{
                      scale: hoveredId === work.id ? 1.03 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ) : (
                  work.image && (
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="block w-full h-auto object-cover"
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

             
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs text-white bg-black/40 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              
              <div className="absolute left-0 right-0 bottom-0 z-20 bg-black/55 backdrop-blur-sm px-4 py-3">
                <h3 className="text-sm font-semibold text-white">
                  {work.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-white/80 line-clamp-3">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 border border-foreground text-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300">
            View All Work
          </button>
        </motion.div>
      </div>
    </div>
  );
};