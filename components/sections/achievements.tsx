"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Crown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const achievements = [
    {
        icon: Crown,
        title: "World Record Holder",
        description: "310 kg Weighted Plank - 12 Seconds",
        color: "text-gold",
        bg: "bg-gold/10",
    },
    {
        icon: Trophy,
        title: "National Champion",
        description: "Gold Medalist - Indian Deadlift Federation",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
    },
    {
        icon: Star,
        title: "National Icon 2023",
        description: "Awarded for Excellence in Fitness",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        icon: Award,
        title: "Mr. World Superhero",
        description: "Title Holder & Forever Star India’s Super Hero",
        color: "text-red-400",
        bg: "bg-red-400/10",
    }
];

const honors = [
    "Former World Record: 271 kg Weighted Plank",
    "Best Health & Fitness Coach Award 2024",
    "Achievers in Health & Fitness – Firozabad",
    "Honored at Forever Business Award 2024",
    "National Player Representing India"
];

export function Achievements() {
    return (
        <section id="achievements" className="py-24 bg-white relative overflow-hidden">
            {/* Background Noise/Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-army-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10">
                <SectionHeading
                    title="Hall of Fame"
                    subtitle="Records & Honors"
                    center
                    className="text-black"
                />

                {/* Major Achievements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            whileHover="hover"
                            variants={{
                                hover: {
                                    y: -15,
                                    scale: 1.05,
                                    zIndex: 50,
                                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                                }
                            }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                            viewport={{ once: true }}
                            className="bg-off-white border border-black/5 p-6 rounded-xl hover:border-gold transition-colors group shadow-sm relative"
                        >
                            <motion.div
                                className={`h-14 w-14 rounded-full ${item.bg} flex items-center justify-center mb-4 transition-colors duration-300`}
                                variants={{
                                    hover: { rotate: 360, scale: 1.1 }
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <item.icon className={`h-8 w-8 ${item.color}`} />
                            </motion.div>
                            <h3 className="text-xl font-heading font-bold text-black mb-2">{item.title}</h3>
                            <p className="text-gray-800 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed List */}
                <div className="bg-sand-light/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-black/5 mx-auto max-w-4xl shadow-lg">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-gold mb-6 md:mb-8 text-center uppercase tracking-wider">More Distinctions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8">
                        {honors.map((honor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.05) }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-colors"
                            >
                                <Award className="h-5 w-5 text-army-green shrink-0" />
                                <span className="text-gray-900 font-medium">{honor}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
