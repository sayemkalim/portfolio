import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
    // Flatten skills for a continuous marquees
    const allSkills = SKILLS.flatMap(cat => cat.items);
    const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2));
    const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2));

    const Marquee = ({ items, direction = 'left', speed = 100 }) => {
        return (
            <div className="flex overflow-hidden whitespace-nowrap mask-linear-fade">
                <motion.div
                    initial={{ x: direction === 'left' ? 0 : '-50%' }}
                    animate={{ x: direction === 'left' ? '-50%' : 0 }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed
                    }}
                    className="flex gap-8 md:gap-16 py-4"
                >
                    {[...items, ...items, ...items, ...items].map((skill, i) => (
                        <span key={i} className="text-4xl md:text-7xl font-bold text-neutral-800 hover:text-white transition-colors duration-500 cursor-default tracking-tighter">
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        );
    };

    return (
        <section id="skills" className="py-32 bg-transparent relative z-10 overflow-hidden">
            <div className="container-custom mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">SKILLS</h2>
                </motion.div>
            </div>

            <div className="space-y-4 md:space-y-8">
                {/* Minimalist Marquee Style - GSAP feel */}
                <Marquee items={firstRow} direction="left" speed={100} />
                <Marquee items={secondRow} direction="right" speed={100} />
            </div>
        </section>
    );
};

export default Skills;
