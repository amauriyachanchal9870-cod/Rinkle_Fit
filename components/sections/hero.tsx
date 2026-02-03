"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 bg-fixed" />
                {/* Camo pattern overlay or texture could go here */}
            </div>

            <Container className="relative z-20 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-[1px] w-12 bg-gold" />
                        <span className="text-gold font-bold uppercase tracking-widest text-sm">
                            Indian Army Soldier & Fitness Icon
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase leading-tight mb-6 md:mb-8"
                    >
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Fitness</span>
                        <br />
                        Is My <span className="text-outline-white">Success</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
                    >
                        Train with a World Record Holder. Experience elite-level coaching in Strength, Endurance, and Calisthenics.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button variant="gold" size="lg" className="text-base font-bold" asChild>
                            <Link href="#contact">
                                Start Training <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="text-base text-white border-white/20 hover:bg-white/10 hover:text-white" asChild>
                            <Link href="#achievements">
                                View Achievements
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16 flex items-center gap-8 md:gap-12"
                    >
                        <div className="flex items-center gap-3 text-white/80">
                            <Trophy className="h-8 w-8 text-gold" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">310kg</span>
                                <span className="text-xs uppercase tracking-wider">Plank Record</span>
                            </div>
                        </div>
                        <div className="h-10 w-[1px] bg-white/10" />
                        <div className="flex items-center gap-3 text-white/80">
                            <Medal className="h-8 w-8 text-gold" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">10+</span>
                                <span className="text-xs uppercase tracking-wider">Years Exp.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
