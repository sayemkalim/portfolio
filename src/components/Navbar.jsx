import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Github, Code2 } from 'lucide-react';
import { PROFILE } from '../constants';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent py-4'}`}>
            <div className="container-custom flex items-center justify-between h-16">
                <Link to="hero" smooth={true} className="cursor-pointer font-heading font-bold text-xl flex items-center gap-2">
                    <Code2 className="text-white" />
                    <span>Sayem<span className="text-neutral-500">.</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            offset={-70}
                            className="text-sm font-medium text-text-muted hover:text-white transition-colors cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4 bg-neutral-900/90 backdrop-blur-xl">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    offset={-70}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium text-text-muted hover:text-white cursor-pointer block py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
