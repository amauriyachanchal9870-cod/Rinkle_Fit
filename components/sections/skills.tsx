"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, Heart, Swords, Zap, Timer } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const skills = [
    { name: "Strength Coaching", icon: Dumbbell },
    { name: "Deadlift Specialist", icon: Activity },
    { name: "Calisthenics", icon: Zap },
    { name: "Army Physical Training", icon: Swords },
    { name: "Functional Training", icon: Heart },
    { name: "Athletic Performance", icon: Timer },
];

export function Skills() {
    return (
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none" />

            <Container className="relative z-10">
                <SectionHeading
                    title="Elite Specializations"
                    subtitle="What I Train"
                    className="text-white"
                />

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                bounce: 0.4
                            }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(212, 175, 55, 0.15)",
                                borderColor: "rgba(212, 175, 55, 0.5)"
                            }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-6 md:p-10 rounded-xl border border-white/10 flex flex-col items-center text-center gap-4 transition-all cursor-default group backdrop-blur-sm"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <skill.icon className="h-12 w-12 text-gold relative z-10 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-heading font-bold text-white text-lg md:text-xl uppercase tracking-wide group-hover:text-gold transition-colors">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
