import { motion } from "framer-motion";

import oleksii from "@/assets/2.png";
import sofia from "@/assets/1.png";

interface Founder {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const founders: Founder[] = [
  {
    name: "Oleksii Zarytskyi",
    role: "Full-Stack Developer",
    quote: "The best UI is one you never think about.",
    image: oleksii,
  },
  {
    name: "Sofia Matuhkina",
    role: "Designer & Partner",
    quote: "Design builds emotion; motion gives it a voice.",
    image: sofia,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
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

export const AboutScene = () => {
  const spacedText = (text: string) => text.split("").join("  ");

  return (
    <motion.div
      className="
        relative w-full bg-background 
        min-h-screen              
        md:min-h-0 md:h-full      
        overflow-visible 
        md:overflow-y-auto        
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed max-w-5xl text-spaced">
            {spacedText(
              "We design live digital systems where motion, structure and code stay in sync."
            )}
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t border-border mb-16"
        />

        <div>
          <motion.h2
            variants={itemVariants}
            className="text-section-title text-foreground mb-12 text-spaced"
          >
            {spacedText("Who We Are")}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
          >
            <div>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                VELDREN is a digital product and web studio focused on sharp,
                motion-driven experiences. We design and build custom landing
                pages, portfolio sites and e-commerce interfaces that feel
                precise, fast and intentional — from the first frame to the last
                line of code.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-label mb-4">Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We treat every project as a system — content, layout,
                  animation and performance are designed together. Interfaces
                  are stripped of noise, typography carries the tone, and motion
                  reinforces structure instead of distracting from it.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our work spans marketing sites, product pages and e-commerce
                  flows, but the goal stays the same: build digital surfaces
                  that load fast, feel premium and translate your brand into a
                  clear, cohesive product experience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-label mb-8">Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  variants={itemVariants}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="relative overflow-hidden mb-6 aspect-[4/5]"
                    variants={itemVariants}
                  >
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h4 className="text-lg font-medium text-foreground mb-1">
                    {founder.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {founder.role}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "{founder.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-24"
          >
            <h3 className="text-label mb-6">Collaboration</h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              We collaborate with founders, studios and brands that care about
              how their product feels — not just how it looks. From early
              concept and UX structure to final animations and deployment, we
              stay close to the build, not just the slides.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mt-4">
              Whether you need a launch-ready landing page, a long-living
              marketing site or a tailored e-commerce experience, we help turn
              your product story into a clear digital system — designed in Figma,
              engineered in React, refined in motion.
            </p>
          </motion.div>
        </div>

        <motion.footer
          variants={itemVariants}
          className="mt-32 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                VELDREN
              </h2>
              <p className="text-sm text-muted-foreground">
                © 2024 All rights reserved
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a
                href="mailto:hello@veldren.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@veldren.com
              </a>
              <a
                href="mailto:info@veldren.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                info@veldren.com
              </a>
              <a
                href="https://t.me/uu_4444"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};