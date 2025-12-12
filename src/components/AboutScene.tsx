import { motion } from "framer-motion";

import oleksii from "@/assets/2.png";
import sofia from "@/assets/1.png";
import borislav from "@/assets/borislav.png";
import { Link } from "react-router-dom";

interface Founder {
  name: string;
  role: string;
  quote: string;
  image: string;
}

type SceneId = "home" | "mission" | "works" | "services" | "about";

export const AboutScene = ({
  scrollToScene,
}: {
  scrollToScene?: (id: SceneId) => void;
}) => {
  const founders: Founder[] = [
    {
      name: "Oleksii Zarytskyi",
      role: "Founder,Full-Stack Developer",
      quote: "The best UI is one you never think about.",
      image: oleksii,
    },
    {
      name: "Sofia Matuhkina",
      role: "Designer & Partner",
      quote: "Design builds emotion; motion gives it a voice.",
      image: sofia,
    },
    {
      name: "Boryslav Kyselov",
      role: "CEO",
      quote: "Design builds emotion; motion gives it a voice.",
      image: borislav,
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

  const spacedText = (text: string) => text.split("").join("  ");

  const navItems: { label: string; id: SceneId }[] = [
    { label: "Home", id: "home" },
    { label: "Mission", id: "mission" },
    { label: "Works", id: "works" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
  ];

  return (
    <div
      id="about"
      className="
        relative w-full bg-background
        min-h-screen
        md:min-h-0 md:h-full
        overflow-visible
        md:overflow-y-auto
        flex flex-col
      "
    >
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed max-w-5xl text-spaced"
          >
            {spacedText(
              "We design live digital systems where motion, structure and code stay in sync."
            )}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-border mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
                  We treat every project as a system — content, layout, animation
                  and performance are designed together. Interfaces are stripped
                  of noise, typography carries the tone, and motion reinforces
                  structure instead of distracting from it.
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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8"
        >
          <motion.h3 variants={itemVariants} className="text-label mb-8">
            Founders
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={itemVariants}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.1,
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24"
        >
          <h3 className="text-label mb-6">Collaboration</h3>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            We collaborate with founders, studios and brands that care about how
            their product feels — not just how it looks.
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mt-4">
            Whether you need a launch-ready landing page or a full digital
            system, we help turn your story into a clear, modern, structured
            experience.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <button
            onClick={() =>
              (window.location.href = "mailto:zarytskyi4444@gmail.com")
            }
            className="
              px-8 py-4
              border border-foreground
              text-foreground
              text-xs md:text-sm
              uppercase tracking-[0.2em]
              hover:bg-foreground hover:text-background
              transition-all duration-300
            "
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      <motion.footer
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-auto w-full"
      >
        <div className="w-full border-t border-border/70">
          <div className="container mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-8 md:pb-10">
            <div className="mb-20 md:mb-14">
              <div className="text-sm md:text-base font-semibold tracking-tight text-foreground uppercase">
                VELDREN
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start mb-20 md:mb-32">
              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
                  Navigation
                </div>
                <nav className="space-y-2">
                  {navItems.map((l) => (
                    <button
                      key={l.label}
                      type="button"
                      onClick={() => scrollToScene?.(l.id)}
                      className="block w-full text-left text-3xl md:text-4xl leading-[1.05] tracking-tight text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
                  Socials
                </div>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-3xl md:text-4xl leading-[1.05] tracking-tight text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="hidden md:block md:col-span-1 relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l border-border/70" />
              </div>

              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
                  Contact
                </div>

                <a
                  href="mailto:zarytskyi4444@gmail.com"
                  className="block text-xl md:text-2xl leading-tight text-foreground/70 hover:text-foreground transition-colors break-all"
                >
                  hello@veldren.com
                </a>

                <a
                  href="https://t.me/uu_4444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-xl md:text-2xl leading-tight text-foreground/70 hover:text-foreground transition-colors"
                >
                  Telegram
                </a>
              </div>

              <div className="md:col-span-2">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
                  Location
                </div>
                <div className="text-xl md:text-2xl leading-tight text-foreground/70">
                  Kyiv
                  <br />
                  02000
                </div>
              </div>
            </div>

         <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
         <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
           © {new Date().getFullYear()} VELDREN
         </div>
          
            <div className="flex gap-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Legal
              </a>
            </div>
          </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};