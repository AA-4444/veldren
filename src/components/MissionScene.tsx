import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const titleWords = [
  "We",
  "Design",
  "&",
  "Build",
  "Digital",
  "Products",
  "Websites,",
  "Brands",
  "&",
  "Interfaces.",
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const wordVariants = {
  hidden: {
    y: "100%",
    rotateX: -80,
    opacity: 0,
    transformPerspective: 800,
  },
  visible: (index: number) => ({
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
      delay: index * 0.12,
      ease: EASE,
    },
  }),
};

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

export const MissionScene = () => {
  return (
    <div
      className="
        relative w-full 
        min-h-screen
        md:h-full
        bg-background 
        flex md:items-center
      "
    >
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-0">
        {/* ВЕСЬ контент управляется одним initial/animate */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ---------- TITLE (по словам) ---------- */}
          <div className="mb-12 md:mb-24">
            {titleWords.map((word, index) => (
              <div key={index} className="overflow-hidden inline-block mr-2">
                <motion.span
                  variants={wordVariants}
                  custom={index}
                  className="
                    text-4xl 
                    md:text-hero
                    font-bold 
                    uppercase 
                    text-foreground 
                    tracking-tight 
                    inline-block
                  "
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          {/* ---------- TWO COLUMNS ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
            {/* left */}
            <motion.div variants={blockVariants}>
              <h3 className="text-label mb-4">Mission</h3>
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                We create high-end digital experiences through the fusion of
                design, engineering, and interaction. Our mission is to craft
                premium products with clarity, precision and emotion.
              </p>
            </motion.div>

            {/* right */}
            <motion.div variants={blockVariants}>
              <h3 className="text-label mb-4">Goal</h3>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Our goal is to elevate brands with digital products that perform
                beautifully and feel intentional at every interaction.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-4">
                We transform ideas into scalable systems — expressive, fast and
                emotionally resonant across all platforms.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};