import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative rounded-3xl bg-neutral-900/50 border border-white/5 p-6 md:p-12 overflow-hidden hover:bg-neutral-900/80 transition-all duration-500">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${project.color || 'from-blue-500/20 to-purple-500/20'} opacity-0 group-hover:opacity-10 rounded-full blur-[80px] transition-all duration-700 pointer-events-none`} />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start">
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest px-2 py-1 rounded border border-white/5 bg-white/5">
                                    Project {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                </span>
                                <div className="h-[1px] flex-1 bg-white/5" />
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                                {project.title}
                            </h3>
                        </div>

                        <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                            {project.description}
                        </p>

                        <ul className="space-y-2">
                            {project.features && project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-neutral-500">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors duration-300" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 text-xs font-medium text-neutral-400 bg-white/5 rounded-full border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex md:flex-col gap-4">
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-4 rounded-full bg-white/5 border border-white/5 text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                            title="View Code"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="p-4 rounded-full bg-white/5 border border-white/5 text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                            title="Live Demo"
                        >
                            <ArrowUpRight size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-transparent relative z-10">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row-reverse items-end justify-between gap-6 border-b border-white/5 pb-8"
                >
                    <div className="text-right">
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                            Selected
                            <span className="block text-neutral-600">Works.</span>
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm text-lg font-light leading-relaxed md:text-left">
                        A curated collection of web & mobile applications built for performance and scalability.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
