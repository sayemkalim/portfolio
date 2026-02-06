import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../constants';

const TechStack = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Helper to get simple icon slug
    const getIconSlug = (name) => {
        const map = {
            'React.js': 'react',
            'Next.js': 'nextdotjs',
            'TypeScript': 'typescript',
            'Tailwind CSS': 'tailwindcss',
            'Framer Motion': 'framer',
            'Redux': 'redux',
            'Node.js': 'nodedotjs',
            'Express.js': 'express',
            'REST APIs': 'fastapi',
            'Authentication (JWT, OAuth)': 'jsonwebtokens',
            'React Native': 'react',
            'Expo': 'expo',
            'Mobile UI/UX': 'materialdesign',
            'MongoDB': 'mongodb',
            'Firebase': 'firebase',
            'Mongoose': 'mongoose',
            'Git & GitHub': 'github',
            'Swagger': 'swagger',
            'Postman': 'postman',
            'Vite': 'vite',
            'VS Code': 'visualstudiocode'
        };
        return map[name] || 'javascript';
    };

    const allSkills = SKILLS.flatMap(category => category.items);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <section ref={containerRef} className="py-32 relative z-10 overflow-hidden">
            {/* Background blur spot for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none" />

            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Full Tech Stack</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        The comprehensive toolkit I use to bring <span className="text-white font-medium">ideas to life</span>.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
                >
                    {allSkills.map((skill, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.15)",
                                transition: { duration: 0.2 }
                            }}
                            className="flex items-center gap-3 px-6 py-3.5 bg-neutral-900/40 border border-white/5 rounded-full text-base md:text-lg text-neutral-300 backdrop-blur-sm cursor-default group"
                        >
                            <img
                                src={`https://cdn.simpleicons.org/${getIconSlug(skill)}/white`}
                                alt=""
                                className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                            />
                            <span className="group-hover:text-white transition-colors duration-300">{skill}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
