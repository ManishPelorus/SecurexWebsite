"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";


function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as any,
            },
        }),
    };

    return (
        <div className="relative min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0030FF]/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            {/* Decorative SecureX X logo — background texture on right side */}
            {/* Hidden below md (768px). Smaller on tablet, full size on desktop. */}
            <div
                className="hero-decorative-x absolute z-[1] pointer-events-none hidden md:block"
                style={{
                    top: '50%',
                    transform: 'translateY(-50%) rotate(-18deg)',
                    opacity: 0.15,
                }}
            >
                <img
                    src="/images/logo/Securexlogo.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                    draggable={false}
                />
            </div>

            {/* Responsive sizing for the decorative X via a style tag with media queries */}
            <style>{`
                .hero-decorative-x {
                    right: -18%;
                    width: clamp(280px, 40vw, 400px);
                    height: clamp(280px, 40vw, 400px);
                }
                @media (min-width: 1024px) {
                    .hero-decorative-x {
                        right: -12%;
                        width: clamp(400px, 55vw, 850px);
                        height: clamp(400px, 55vw, 850px);
                    }
                }
            `}</style>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full text-left">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 sm:mb-6 md:mb-12"
                    >
                        {/* <Circle className="h-2 w-2 fill-rose-500/80" /> */}
                        {/* <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span> */}
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-full md:max-w-[70%]"
                    >
                        <h1
                            className="font-normal mb-4 sm:mb-6 md:mb-8 tracking-tight"
                            style={{
                                fontSize: 'clamp(2rem, 7vw + 0.5rem, 7.8rem)',
                                lineHeight: 1.05,
                            }}
                        >
                            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-linear-to-r from-[#0030FF] via-white/90 to-rose-300 "
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-full md:max-w-[60%]"
                    >
                        <p
                            className="text-white/40 mb-6 sm:mb-8 leading-relaxed font-light tracking-wide"
                            style={{
                                fontSize: 'clamp(0.95rem, 1.2vw + 0.3rem, 1.4rem)',
                            }}
                        >
                            A premier Make-in-India
                            cybersecurity firm that protects organisations
                            from digital threats.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade to blend with next sections */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background-base to-transparent pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
