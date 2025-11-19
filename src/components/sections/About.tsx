"use client";

import { motion } from "framer-motion";
import { GravityContainer } from "@/components/effects/GravityContainer";
import { BookOpen, Code, Shield, Terminal } from "lucide-react";

const education = [
    {
        degree: "M.Sc. Computer Science",
        school: "Somaiya School of Basic and Applied Sciences",
        score: "CGPA 9.45",
        year: "Present",
    },
    {
        degree: "B.Sc. (Hons.) Computer Science",
        school: "Somaiya School of Basic and Applied Sciences",
        score: "CGPA 8.66",
        year: "Graduated",
    },
];

const skills = [
    {
        category: "Languages",
        items: ["Python", "Java", "C++", "JavaScript"],
        icon: Code,
    },
    {
        category: "Security Tools",
        items: ["Nmap", "Wireshark", "Nessus", "Metasploit", "Burp Suite"],
        icon: Shield,
    },
    {
        category: "SIEM & Analysis",
        items: ["Splunk", "Wazuh", "Log Analysis", "Incident Response"],
        icon: Terminal,
    },
    {
        category: "Core Concepts",
        items: ["OWASP Top 10", "Linux Administration", "Firewalls", "Networking"],
        icon: BookOpen,
    },
];

export const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-cyber-green">/</span> About Me
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Passionate about securing digital infrastructures and analyzing threats.
                        Combining academic excellence with practical cybersecurity skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-mono font-bold mb-6 flex items-center gap-2">
                            <BookOpen className="text-electric-purple" /> Education
                        </h3>
                        {education.map((edu, index) => (
                            <GravityContainer key={index} floatDuration={6 + index} floatDistance={5}>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-electric-purple/50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                        <span className="text-xs font-mono text-electric-purple px-2 py-1 rounded bg-electric-purple/10">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mb-2">{edu.school}</p>
                                    <p className="text-sm text-gray-500 font-mono">{edu.score}</p>
                                </div>
                            </GravityContainer>
                        ))}
                    </div>

                    {/* Skills Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-mono font-bold mb-6 flex items-center gap-2">
                            <Shield className="text-cyber-green" /> Competencies
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <GravityContainer key={index} floatDuration={5 + index} floatDistance={3}>
                                    <div className="h-full p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyber-green/50 transition-colors group">
                                        <skill.icon className="w-8 h-8 text-gray-500 group-hover:text-cyber-green mb-4 transition-colors" />
                                        <h4 className="font-bold text-white mb-2">{skill.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </GravityContainer>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
