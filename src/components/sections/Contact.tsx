"use client";

import { motion } from "framer-motion";
import { GravityContainer } from "@/components/effects/GravityContainer";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactLinks = [
    {
        label: "tnshparab@gmail.com",
        href: "mailto:tnshparab@gmail.com",
        icon: Mail,
    },
    {
        label: "+91 8655860905",
        href: "tel:+918655860905",
        icon: Phone,
    },
    {
        label: "linkedin.com/in/tanish-parab",
        href: "https://linkedin.com/in/tanish-parab",
        icon: Linkedin,
    },
    {
        label: "github.com/tanishhhhh",
        href: "https://github.com/tanishhhhh",
        icon: Github,
    },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-20 relative border-t border-white/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-electric-purple">/</span> Get In Touch
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Open to cybersecurity roles, collaborations, and interesting conversations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {contactLinks.map((link, index) => (
                        <GravityContainer key={index} floatDuration={5 + index} floatDistance={4}>
                            <motion.a
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyber-green/50 hover:bg-white/10 transition-all group"
                            >
                                <link.icon className="w-6 h-6 text-gray-400 group-hover:text-cyber-green transition-colors" />
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors text-center break-all">
                                    {link.label}
                                </span>
                            </motion.a>
                        </GravityContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};
