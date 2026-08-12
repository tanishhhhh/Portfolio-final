"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Cybersecurity Engineer Intern",
        company: "Iraje Software, Mumbai",
        period: "Feb 2026 – Aug 2026",
        description: [
            "Conducted vulnerability assessments and penetration testing (VAPT) on enterprise PAM and EPM solutions.",
            "Tested API endpoints, session management, and access control mechanisms against OWASP Top 10 vectors.",
            "Prepared detailed technical reports and executive summaries with CVSS scores and remediation guidance.",
        ],
        tech: ["VAPT", "OWASP Top 10", "Burp Suite", "PAM/EPM", "CVSS"],
    },
    {
        title: "Cybersecurity Intern",
        company: "InternsElite",
        period: "Internship",
        description: [
            "Executed penetration tests using Burp Suite and Nmap.",
            "Performed manual and automated security assessments to identify vulnerabilities.",
            "Collaborated with the team to patch security loopholes.",
        ],
        tech: ["Burp Suite", "Nmap", "Penetration Testing"],
    },
    {
        title: "Virtual Experience Program",
        company: "Mastercard",
        period: "Virtual",
        description: [
            "Analyzed employee engagement with security protocols.",
            "Crafted phishing simulation campaigns to reduce click-through rates.",
            "Proposed security awareness training improvements.",
        ],
        tech: ["Phishing Simulation", "Security Awareness", "Data Analysis"],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-electric-purple">/</span> Experience
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-green/50 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-2 border-cyber-green rounded-full -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

                                {/* Content */}
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                        <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <div className="flex items-center gap-2 text-cyber-green font-mono text-sm">
                                                <Briefcase size={14} />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                                <Calendar size={12} />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        <ul className={`space-y-2 mb-4 text-gray-300 text-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            {exp.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs text-electric-purple bg-electric-purple/10 px-2 py-1 rounded border border-electric-purple/20"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
