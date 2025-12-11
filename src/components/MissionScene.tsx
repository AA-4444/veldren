import { motion } from "framer-motion";

export const MissionScene = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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
    <div
      className="
        relative w-full 
        min-h-screen        /* MOBILE — секция всегда полностью видима */
        md:h-full          /* DESKTOP — как было */
        bg-background 
        flex md:items-center   /* центрируем только на desktop */
      "
    >
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl"
        >
          {/* Заголовок */}
          <motion.h2
            variants={itemVariants}
            className="
              text-4xl 
              md:text-hero 
              font-bold 
              uppercase 
              text-foreground 
              tracking-tight 
              leading-tight 
              mb-12 md:mb-24
            "
          >
            We Design & Build Digital Products
            {/* Мобильная перенос строки */}
            <br className="block md:hidden" />

            <span className="opacity-70 ml-0 md:ml-4 block md:inline">
              Websites, Brands & Interfaces.
            </span>
          </motion.h2>

          {/* Две колонки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
            <motion.div variants={itemVariants}>
              <h3 className="text-label mb-4">Mission</h3>
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                We create high-end digital experiences through the fusion of design,
                engineering, and interaction. Our mission is to craft websites and
                products that feel intuitive, modern, and unmistakably premium.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-label mb-4">Goal</h3>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Our goal is to elevate brands with digital products that are both
                beautiful and functional — built with intention and long-term clarity.
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