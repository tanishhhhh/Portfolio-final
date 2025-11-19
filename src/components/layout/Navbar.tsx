"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/tanish-parab" },
    { icon: Github, href: "https://github.com/tanishhhhh" },
    { icon: FileText, href: "https://medium.com/@tanishhhhh" },
];

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyber-green to-electric-purple flex items-center justify-center text-black font-bold text-lg">
                    T
                </div>
                <span className="font-mono font-bold text-lg tracking-tighter">
                    TANISH PARAB
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-300 hover:text-cyber-green transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                    <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <social.icon size={20} />
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
};
