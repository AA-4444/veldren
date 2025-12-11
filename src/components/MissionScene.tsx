import { motion } from "framer-motion";

export const MissionScene = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative h-full w-full bg-background flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl"
        >
          {/* Main headline */}
          <motion.h2
            variants={itemVariants}
            className="text-hero text-foreground mb-16 md:mb-24"
          >
            We Design & Build Digital Products.
            <span className="opacity-70 ml-4">
              Websites, Brands & Interfaces.
            </span>
          </motion.h2>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Mission */}
            <motion.div variants={itemVariants}>
              <h3 className="text-label mb-4">Mission</h3>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                We create high-end digital experiences through the fusion of design, engineering, and interaction.
                Our mission is to craft websites and products that feel intuitive, modern, and unmistakably premium —
                built with precision, clarity, and thoughtful detail.
              </p>
            </motion.div>

            {/* Goal */}
            <motion.div variants={itemVariants}>
              <h3 className="text-label mb-4">Goal</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our goal is to elevate brands with digital products that are both beautiful and functional.
                We focus on clean UI, purposeful UX, and engineering that performs flawlessly across all platforms.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                We aim to turn ideas into systems — scalable, durable, and designed with intention — enabling companies
                to communicate their identity through fast, expressive, and emotionally resonant digital experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};