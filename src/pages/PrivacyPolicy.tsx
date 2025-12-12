import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Line = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
	initial={{ opacity: 0, y: 10 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true, amount: 0.2 }}
	transition={{ duration: 0.6, delay, ease: EASE }}
	className="border-t border-border/70 my-4"
  />
);

const Row = ({
  left,
  right,
  dim = false,
}: {
  left: string;
  right?: string;
  dim?: boolean;
}) => (
  <div className="flex items-start justify-between gap-6">
	<div
	  className={`text-xs uppercase tracking-[0.22em] ${
		dim ? "text-muted-foreground" : "text-foreground"
	  }`}
	>
	  {left}
	</div>
	{right && (
	  <div
		className={`text-xs uppercase tracking-[0.22em] text-right ${
		  dim ? "text-muted-foreground" : "text-foreground"
		}`}
	  >
		{right}
	  </div>
	)}
  </div>
);

const Bullet = ({ text }: { text: string }) => (
  <div className="flex gap-3">
	<span className="text-muted-foreground">•</span>
	<p className="text-sm leading-relaxed text-foreground/85">{text}</p>
  </div>
);

const Section = ({
  code,
  title,
  children,
  delay = 0,
}: {
  code: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
	initial={{ opacity: 0, y: 18 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true, amount: 0.2 }}
	transition={{ duration: 0.7, delay, ease: EASE }}
	className="space-y-3"
  >
	<Row left={`${code}  ${title}`} right="OK" />
	<div className="space-y-2">{children}</div>
  </motion.div>
);

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  const updated = new Date().toLocaleDateString(undefined, {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
  });

  return (
	<div className="min-h-screen w-full bg-background">
	  {/* HEADER */}
	  <div className="w-full border-b border-border/70">
		<div className="container mx-auto px-6 md:px-12 py-10 md:py-14">
		  <motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: EASE }}
			className="flex items-end justify-between gap-8"
		  >
			<div>
			  {/* BACK */}
			  <button
				onClick={() => navigate("/")}
				className="
				  text-xs uppercase tracking-[0.22em]
				  text-muted-foreground
				  hover:text-foreground
				  transition-colors
				"
			  >
				← Back to site
			  </button>

			  <div className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
				VELDREN / LEGAL
			  </div>

			  <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-foreground">
				Privacy Policy
			  </h1>
			</div>

			<div className="text-right">
			  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
				Last updated
			  </div>
			  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-foreground">
				{updated}
			  </div>
			</div>
		  </motion.div>
		</div>
	  </div>

	  {/* BODY */}
	  <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
		<div className="mx-auto w-full max-w-[720px]">
		  <motion.div
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, ease: EASE }}
			className="border border-border/70 bg-card/40 backdrop-blur-md"
		  >
			<div className="px-6 md:px-10 py-8 md:py-10 space-y-4">
			  <div className="flex items-start justify-between gap-6">
				<div>
				  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
					Receipt / Document
				  </div>
				  <div className="mt-2 text-sm text-foreground/85 leading-relaxed">
					This Privacy Policy explains what data we collect, why we
					collect it, and how you can control it.
				  </div>
				</div>
				<div className="text-right">
				  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
					Status
				  </div>
				  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-foreground">
					ACTIVE
				  </div>
				</div>
			  </div>

			  <Line />

			  <Section code="01" title="Who we are">
				<Bullet text="VELDREN is a digital product & web studio." />
				<Bullet text="If you contact us, you share information directly with us." />
			  </Section>

			  <Line />

			  <Section code="02" title="Data we collect">
				<Bullet text="Contact details you send us (email, message)." />
				<Bullet text="Basic technical and usage data if analytics are enabled." />
			  </Section>

			  <Line />

			  <Section code="03" title="How we use data">
				<Bullet text="To respond to inquiries and deliver services." />
				<Bullet text="To maintain security and performance." />
			  </Section>

			  <Line />

			  <Section code="04" title="Cookies & tracking">
				<Bullet text="Only essential cookies where required." />
				<Bullet text="Analytics cookies only if enabled." />
			  </Section>

			  <Line />

			  <Section code="05" title="Sharing">
				<Bullet text="We do not sell personal data." />
				<Bullet text="Trusted providers only for infrastructure." />
			  </Section>

			  <Line />

			  <Section code="06" title="Your rights">
				<Bullet text="Request access, correction or deletion of your data." />
				<Bullet text="Contact us to exercise your rights." />
			  </Section>

			  <Line />

			  <Section code="07" title="Contact">
				<Row left="Email" right="hello@veldren.com" dim />
				<Row left="Telegram" right="@uu_4444" dim />
			  </Section>

			  <Line />

			  {/* FOOT */}
			  <div className="pt-2">
				<div className="flex items-center justify-between gap-6">
				  <div>
					<div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
					  Total sections
					</div>
					<div className="mt-2 text-3xl md:text-4xl font-black tracking-tight text-foreground">
					  07
					</div>
				  </div>

				  <button
					onClick={() =>
					  (window.location.href =
						"mailto:hello@veldren.com?subject=Privacy%20Request")
					}
					className="
					  px-6 md:px-7 py-3
					  border border-foreground
					  text-foreground
					  text-xs md:text-sm
					  uppercase tracking-[0.22em]
					  hover:bg-foreground hover:text-background
					  transition-all duration-300
					"
				  >
					Make a request
				  </button>
				</div>

				<div className="mt-8 flex items-center justify-between gap-4 border-t border-border/70 pt-6">
				  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
					© {new Date().getFullYear()} VELDREN
				  </div>
				  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
					DOC-ID: VLDRN-PRIV-001
				  </div>
				</div>
			  </div>
			</div>
		  </motion.div>

		  <div className="mt-8 text-xs leading-relaxed text-muted-foreground max-w-[720px]">
			This document is for general informational purposes and may require
			adjustments depending on jurisdiction.
		  </div>
		</div>
	  </div>
	</div>
  );
}