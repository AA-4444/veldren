import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

const services: Service[] = [
  {
    id: "signature-landing",
    title: "SIGNATURE LANDING PAGES",
    description:
      "We design and build high-impact landing pages for launches, campaigns, and products. Cinematic motion, bold layouts, and clear narrative that make people actually want to scroll.",
    items: [
      {
        title: "Story-Driven Structure",
        description:
          "From hero to CTA, every block is built around a clear story and user flow.",
      },
      {
        title: "Framer Motion & Microinteractions",
        description:
          "Subtle motion that guides attention and feels premium, never noisy.",
      },
      {
        title: "Scroll & Reveal Systems",
        description:
          "Sections that reveal progressively and keep users engaged to the end.",
      },
      {
        title: "Launch & Campaign Pages",
        description:
          "Landing pages for product drops, features, events, and brand moments.",
      },
      {
        title: "Conversion-Focused Layouts",
        description:
          "Design that balances aesthetics with clear calls to action and next steps.",
      },
      {
        title: "Responsive Design",
        description:
          "Layouts calibrated separately for desktop, tablet, and mobile states.",
      },
    ],
  },
  {
    id: "brand-sites",
    title: "BRAND & PRODUCT WEBSITES",
    description:
      "Flagship sites that define how your brand looks and feels online. Precise typography, thoughtful grids, and motion that ties everything into a coherent system.",
    items: [
      {
        title: "Visual Direction for Web",
        description:
          "Foundations for type, color, motion, and layout that feel uniquely yours.",
      },
      {
        title: "Modular Page Architecture",
        description:
          "Flexible sections and templates that can scale with new pages and content.",
      },
      {
        title: "Case Study & Work Templates",
        description:
          "Layouts tailored for showcasing projects, clients, and outcomes.",
      },
      {
        title: "Editorial & Long-Form Pages",
        description:
          "Article and storytelling layouts designed for deep reading and focus.",
      },
      {
        title: "Art Direction for Imagery",
        description:
          "Guidance for photography, 3D, and video so everything feels consistent.",
      },
      {
        title: "Design Handoff for Dev",
        description:
          "Clean structure, states, and specs to make implementation predictable.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-COMMERCE EXPERIENCES",
    description:
      "Shop experiences that feel as crafted as the brand itself. From product cards to checkout, we focus on clarity, speed, and visual character.",
    items: [
      {
        title: "Product Listing & Cards",
        description:
          "Layouts for collections, drops, and catalogs with strong hierarchy.",
      },
      {
        title: "Product Detail Pages",
        description:
          "Pages that spotlight imagery, storytelling, and clear purchase paths.",
      },
      {
        title: "Cart & Checkout Flows",
        description:
          "Frictionless microflows that focus on trust, clarity, and speed.",
      },
      {
        title: "Merch & Drop Pages",
        description:
          "Special layouts for limited releases, collaborations, and seasonal edits.",
      },
      {
        title: "Content + Commerce Blends",
        description:
          "Editorial sections living next to product, not behind another click.",
      },
      {
        title: "Motion for State Changes",
        description:
          "Subtle feedback for add-to-cart, filters, and transitions between views.",
      },
    ],
  },
  {
    id: "product-ui",
    title: "DIGITAL PRODUCT & UI DESIGN",
    description:
      "Interface design for dashboards, tools, and SaaS products with a focus on clarity, rhythm, and ease of use.",
    items: [
      {
        title: "Information Architecture",
        description:
          "Structuring navigation, screens, and flows so users never feel lost.",
      },
      {
        title: "Design Systems & Libraries",
        description:
          "Reusable components, tokens, and patterns that keep teams in sync.",
      },
      {
        title: "Stateful UI & Edge Cases",
        description:
          "Empty states, errors, loading, and edge scenarios designed with care.",
      },
      {
        title: "Data Visualization",
        description:
          "Charts and dashboards that surface signal without visual noise.",
      },
      {
        title: "Interaction & Motion Specs",
        description:
          "Guidelines for hover, tap, focus, and transitions inside the product.",
      },
      {
        title: "Multi-Platform Layouts",
        description:
          "Web-first, but built to extend to mobile and tablet when needed.",
      },
    ],
  },
  {
    id: "design-language",
    title: "WEB DESIGN LANGUAGE",
    description:
      "The underlying design language that makes your site feel coherent everywhere: type, motion, layout, and component logic working as one system.",
    items: [
      {
        title: "Typography Systems",
        description:
          "Display, body, and utility styles with clear roles and scale for the web.",
      },
      {
        title: "Color & Theming",
        description:
          "Light/dark palettes, semantic colors, and usage rules across pages.",
      },
      {
        title: "Grid & Layout Rules",
        description:
          "Baseline grids, spacing scales, and breakpoints that hold everything together.",
      },
      {
        title: "Component Patterns",
        description:
          "Buttons, cards, navigation, and forms designed as a unified family.",
      },
      {
        title: "Motion Principles",
        description:
          "Timing, easing, and choreography so interactions feel consistent everywhere.",
      },
      {
        title: "Web Style Guide",
        description:
          "A living guide that documents how the brand shows up across the site.",
      },
    ],
  },
];


const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const TITLE_WORDS = ["What", "We", "Do"];

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

export const ServicesScene = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="relative h-full w-full bg-background overflow-y-auto">
      <motion.section
        className="w-full bg-background"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-12">
          {/* word-by-word TITLE */}
          <motion.div
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="mb-8"
          >
            {TITLE_WORDS.map((word, index) => (
              <div key={index} className="overflow-hidden inline-block mr-3">
                <motion.span
                  variants={titleWordVariants}
                  className="
                    text-[16vw] md:text-[7vw] 
                    leading-none font-black 
                    text-foreground inline-block
                  "
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>

          
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed"
          >
            We design and build expressive websites — from cinematic landing
            pages to commerce and product interfaces. Motion, layout, and
            visual language are treated as one system to make your brand feel
            sharp, modern, and precise online.
          </motion.p>
        </div>

        <div className="w-full border-t border-border">
          {services.map((service, index) => {
            const isOpen = openId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-border bg-background relative overflow-hidden"
              >
                {/* animated fill */}
                <motion.div
                  className="absolute inset-0 bg-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* header row */}
                <button
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className="w-full py-6 md:py-8 px-6 md:px-10 lg:px-16 flex items-center justify-between text-left relative z-10"
                >
                  <span
                    className={`text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-background" : "text-foreground"
                    }`}
                  >
                    {service.title}
                  </span>
                  {isOpen ? (
                    <Minus className="w-6 h-6 text-background transition-colors duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-foreground transition-colors duration-300" />
                  )}
                </button>

                {/* content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="pb-10 md:pb-14 px-6 md:px-10 lg:px-16">
                        <p className="max-w-3xl mb-10 text-sm md:text-base lg:text-base leading-relaxed text-background/80">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                          {service.items.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <h4 className="font-semibold mb-1 text-sm md:text-base text-background">
                                {item.title}
                              </h4>
                              <p className="text-sm leading-relaxed text-background/70">
                                {item.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};