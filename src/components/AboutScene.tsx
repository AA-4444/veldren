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
    role: "Creative Developer",
    quote: "We believe in precision and empathy in equal measure.",
    image: oleksii,
  },
  {
    name: "Sofia Matuhkina",
    role: "Producer & Partner",
    quote: "Every detail matters — rhythm, type, proportion.",
    image: sofia,
  },
];

export const AboutScene = () => {
  const spacedText = (text: string) => text.split("").join("  ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <div className="relative h-full w-full bg-background overflow-y-auto">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed max-w-5xl text-spaced">
            {spacedText(
              "What we make reflects our method; who we are shapes our intent."
            )}
          </h2>
        </motion.div>

        <div className="border-t border-border mb-16" />

        {/* Who We Are */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-section-title text-foreground mb-12 text-spaced"
          >
            {spacedText("Who We Are")}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                We are a creative development studio shaping digital work where
                clarity meets intensity — merging design, engineering, and
                motion into experiences that feel alive.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-label mb-4">Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We approach every project as a system — where clarity, rhythm,
                  and motion define how ideas take shape. We design not just for
                  screens, but for the way people feel and interact.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our process blends conceptual thinking with technical
                  precision, turning stories into digital experiences that live
                  across time and media.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Founders */}
          <motion.div variants={itemVariants}>
            <h3 className="text-label mb-8">Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder) => (
                <motion.div key={founder.name} variants={itemVariants}>
                  <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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

          {/* Collaboration */}
          <motion.div variants={itemVariants} className="mt-24">
            <h3 className="text-label mb-6">Collaboration</h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              We work with founders, cultural institutions and creative brands
              to design digital systems with clarity and emotion.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mt-4">
              Whether you're building a new brand, rethinking your identity or
              crafting your digital presence — we help translate vision into
              form, movement and code.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@veldren.com
              </a>
              <a
                href="#"
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
    </div>
  );
};