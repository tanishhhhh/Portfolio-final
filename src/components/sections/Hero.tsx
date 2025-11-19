"use client";

import { motion } from "framer-motion";
import { GravityContainer } from "@/components/effects/GravityContainer";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <ParticleBackground />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <GravityContainer floatDuration={4} floatDistance={15} gravityStrength={20}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 inline-block px-4 py-1.5 rounded-full border border-cyber-green/30 bg-cyber-green/10 text-cyber-green text-sm font-mono"
                        >
                            System Online // Ready for Access
                        </motion.div>
                    </GravityContainer>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
                    >
                        TANISH PARAB
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light"
                    >
                        Cybersecurity Specialist <span className="text-electric-purple">|</span> M.Sc. Computer Science Student
                    </motion.p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <GravityContainer floatDuration={5} floatDistance={5}>
                            <a
                                href="#projects"
                                className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold rounded overflow-hidden transition-all hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-cyber-green translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-2 group-hover:text-black z-10">
                                    View Work <ArrowRight size={18} />
                                </span>
                            </a>
                        </GravityContainer>

                        <GravityContainer floatDuration={6} floatDistance={5} className="delay-100">
                            <a
                                href="https://linkedin.com/in/tanish-parab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded font-bold text-white hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
                            >
                                Contact Me <Mail size={18} />
                            </a>
                        </GravityContainer>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
};
