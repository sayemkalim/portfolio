import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Scale vertical line based on scroll
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div ref={containerRef} className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Experience</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
                        My journey in the tech industry, contributing to <span className="text-white">high-impact projects</span>.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line Container */}
                    <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block">
                        {/* Animated Line Progress - Minimal white gradient */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-neutral-500 to-white"
                        />
                    </div>

                    <div className="space-y-16">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot - White/Gray minimal */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center -translate-x-1/2 z-10 hidden md:flex shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                                </div>

                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass-card p-8 rounded-2xl md:inline-block text-left w-full hover:border-white/20 transition-all group bg-neutral-900/40"
                                    >
                                        <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
                                            <h3 className="text-xl font-bold text-white group-hover:text-neutral-300 transition-colors">{exp.role}</h3>
                                            <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-neutral-400 border border-white/5">
                                                {exp.duration}
                                            </span>
                                        </div>

                                        <h4 className="text-lg text-neutral-200 mb-4 font-medium">{exp.company}</h4>
                                        <p className="text-neutral-400 leading-relaxed font-light">
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
