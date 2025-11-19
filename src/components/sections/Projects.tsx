"use client";

import { motion } from "framer-motion";
import { GravityContainer } from "@/components/effects/GravityContainer";
import { ExternalLink, Github, Lock, Server, Activity } from "lucide-react";

const projects = [
    {
        title: "Suricata IDS Home Lab",
        description: "A multi-node virtual lab for real-time attack analysis. Detected brute-force and malware. Integrated with Wazuh for a centralized SIEM.",
        tags: ["Suricata", "Wazuh", "IDS/IPS", "Virtualization"],
        icon: Activity,
        links: {
            github: "https://github.com/tanishhhhh",
            demo: "#",
        },
    },
    {
        title: "Splunk SIEM Dashboard",
        description: "Interactive dashboard for Apache web server logs. Visualized traffic, requests, and 4xx/5xx errors using custom SPL queries.",
        tags: ["Splunk", "SPL", "Log Analysis", "Apache"],
        icon: Server,
        links: {
            github: "https://github.com/tanishhhhh",
            demo: "#",
        },
    },
    {
        title: "Keylogger (POC)",
        description: "Python-based proof-of-concept using pynput to demonstrate vulnerabilities. Features automated email-based data exfiltration.",
        tags: ["Python", "Malware Analysis", "Ethical Hacking"],
        icon: Lock,
        links: {
            github: "https://github.com/tanishhhhh",
            demo: "#",
        },
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-cyber-green">/</span> Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing practical applications of cybersecurity concepts and development skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <GravityContainer key={index} floatDuration={8 + index} floatDistance={5}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-cyber-green/50 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-lg bg-white/5 text-cyber-green group-hover:bg-cyber-green group-hover:text-black transition-colors">
                                        <project.icon size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-mono text-cyber-green/80 bg-cyber-green/10 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </GravityContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};
