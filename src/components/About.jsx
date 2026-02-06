import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Code2, Database, Layout, ArrowUpRight } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="relative py-32 bg-black text-white overflow-hidden">
            {/* Minimal Background Grid or Effect can go here, kept clean for now */}

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                            Passionate about <br />
                            <span className="text-white">creating impact</span> through code.
                        </h2>
                        <p className="text-lg text-neutral-400 leading-relaxed mb-6 font-light">
                            {PROFILE.about}
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed mb-8 font-light">
                            I don't just write code; I build solutions. Whether it's optimizing a React frontend for milliseconds of performance or structuring a Node.js backend for scalability, I focus on the <span className="font-medium text-white">user experience</span> and <span className="font-medium text-white">business value</span>.
                        </p>

                        <div className="flex gap-6">
                            <a href="#contact" className="inline-flex items-center text-sm font-medium text-white hover:text-neutral-300 transition-colors group">
                                Let's talk
                                <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a href={PROFILE.socials.github} className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors group">
                                View GitHub
                                <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                <Layout size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Frontend Excellence</h3>
                            <p className="text-neutral-400 leading-relaxed font-light">
                                Crafting pixel-perfect, responsive user interfaces with focused attention to detail, accessibility, and smooth animations.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors duration-300 group translate-x-0 lg:translate-x-8">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                <Database size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Backend Robustness</h3>
                            <p className="text-neutral-400 leading-relaxed font-light">
                                Building secure, scalable server-side logic, RESTful APIs, and efficient database schemas (SQL & NoSQL).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
