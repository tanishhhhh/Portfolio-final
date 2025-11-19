"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
    "Google Cybersecurity Certificate (Coursera)",
    "Google Cloud Security Certificate (Coursera)",
    "TryHackMe - Advent of Cyber Event",
];

export const Certifications = () => {
    return (
        <section className="py-20 relative border-t border-white/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                        <Award className="text-electric-purple" /> Certifications
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-electric-purple/50 hover:text-white transition-colors cursor-default"
                        >
                            {cert}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
