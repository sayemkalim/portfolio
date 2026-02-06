import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    // Parallax
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Stagger container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="absolute inset-0 bg-black">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 bg-black"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '90px 90px',
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    }}
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
                    {/* The Gradient Blob - Off-White / Silver */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 via-stone-300 to-white rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                </div>
                {/* Noise overlay for texture */}
                <div className="absolute inset-0 bg-black/20 z-0" />
            </div>

            <div className="container-custom text-center relative z-10">
                <motion.div
                    style={{ y: yText, opacity }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Available for work
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-white mix-blend-overlay">
                        Building <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            Digital Future
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-neutral-400 max-w-xl mx-auto mb-12 font-light leading-relaxed">
                        {PROFILE.summary}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="projects" smooth={true} offset={-70}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-white text-black rounded-full text-base font-medium transition-all hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]"
                            >
                                View Projects
                                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </motion.button>
                        </Link>

                        <a href={PROFILE.resumeLink} target="_blank" rel="noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 text-white rounded-full text-base font-medium transition-colors hover:text-neutral-300 border border-white/20 hover:bg-white/5"
                            >
                                Download Resume
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
