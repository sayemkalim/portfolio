import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const customHandleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for your message! This is a demo form.');
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-transparent relative z-10">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
                        Have a project in mind or want to discuss <span className="text-white">modern tech</span>? Let's connect.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-center gap-6"
                    >
                        <div className="glass-card p-6 rounded-2xl flex items-center gap-4 bg-neutral-900/40 hover:bg-neutral-900/60 border-white/5 flex-1 min-w-[300px]">
                            <div className="p-3 bg-white/5 rounded-full text-white">
                                <Mail size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-sm text-neutral-500 mb-1">Email</h3>
                                <a href={`mailto:${PROFILE.email}`} className="text-lg font-semibold hover:text-white text-neutral-200 transition-colors">
                                    {PROFILE.email}
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center gap-4 bg-neutral-900/40 hover:bg-neutral-900/60 border-white/5 flex-1 min-w-[300px]">
                            <div className="p-3 bg-white/5 rounded-full text-white">
                                <Linkedin size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-sm text-neutral-500 mb-1">LinkedIn</h3>
                                <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-white text-neutral-200 transition-colors">
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center gap-4 bg-neutral-900/40 hover:bg-neutral-900/60 border-white/5 flex-1 min-w-[300px]">
                            <div className="p-3 bg-white/5 rounded-full text-white">
                                <Github size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-sm text-neutral-500 mb-1">GitHub</h3>
                                <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-white text-neutral-200 transition-colors">
                                    View Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
