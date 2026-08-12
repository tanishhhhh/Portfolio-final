"use client";

import { motion } from "framer-motion";
import { GravityContainer } from "@/components/effects/GravityContainer";
import { BookOpen, Code, Shield, Terminal, Monitor, Trophy } from "lucide-react";

const education = [
    {
        degree: "M.Sc. Computer Science",
        school: "Somaiya School of Basic and Applied Sciences, Mumbai",
        score: "CGPA 9.4/10",
        year: "2024 – 2026",
    },
    {
        degree: "B.Sc. (Hons.) Computer Science",
        school: "Somaiya School of Basic and Applied Sciences, Mumbai",
        score: "CGPA 8.66/10",
        year: "2021 – 2024",
    },
];

const skills = [
    {
        category: "Languages",
        items: ["Python", "Java", "SQL", "Bash", "PowerShell"],
        icon: Code,
    },
    {
        category: "Security Tools",
        items: ["Burp Suite", "Nmap", "Wireshark", "Nessus", "Metasploit", "Suricata", "OWASP ZAP"],
        icon: Shield,
    },
    {
        category: "SIEM & Monitoring",
        items: ["Splunk (SPL)", "Wazuh", "Prometheus", "Grafana", "Alertmanager"],
        icon: Terminal,
    },
    {
        category: "Systems",
        items: ["Windows Server", "Active Directory", "Linux"],
        icon: Monitor,
    },
];

const achievements = [
    { label: "Top 1% on TryHackMe", icon: Trophy },
    { label: "Bug Bounty Researcher (HackerOne)", icon: Shield },
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

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-xl font-mono font-bold mb-6 text-center flex items-center justify-center gap-2">
                        <Trophy className="text-yellow-400" /> Achievements
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {achievements.map((ach, index) => (
                            <GravityContainer key={index} floatDuration={5 + index} floatDistance={4}>
                                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-400/50 transition-colors">
                                    <ach.icon className="w-5 h-5 text-yellow-400" />
                                    <span className="text-gray-200 font-medium">{ach.label}</span>
                                </div>
                            </GravityContainer>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
