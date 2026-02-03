"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section id="about" className="py-24 bg-dark-grey relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden border-2 border-gold/20 shadow-2xl">
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10" />
                            {/* Placeholder for Shivendra's Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070&auto=format&fit=crop"
                                alt="Shivendra Pachauri"
                                className="object-cover h-full w-full grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-army-green/20 -z-10 rounded-full blur-2xl" />
                        <div className="absolute -top-6 -left-6 h-32 w-32 bg-gold/20 -z-10 rounded-full blur-2xl" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading
                            title="The Warrior Behind The Fitness"
                            subtitle="Get To Know Me"
                        />

                        <div className="space-y-6 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                <span className="text-gold font-bold">Shivendra Pachauri</span> is not just a fitness trainer; he is an elite <span className="text-white font-bold">Indian Army Soldier</span> and a National Fitness Icon. With over 10 years of experience pushing the human body to its limits, Shivendra embodies discipline, resilience, and strength.
                            </p>

                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-gold">
                                <p className="italic text-white font-medium">
                                    "Age is just a number. At 40, I continue to break records and redefine what's possible."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div>
                                    <h4 className="text-gold font-heading text-xl font-bold mb-2">My Mission</h4>
                                    <p className="text-sm">To inspire India's youth to adopt fitness, discipline, and a healthy lifestyle through military-grade training.</p>
                                </div>
                                <div>
                                    <h4 className="text-gold font-heading text-xl font-bold mb-2">Philosophy</h4>
                                    <p className="text-sm">"Eat healthy, live healthy." Consistency and mindset are the keys to unlocking elite performance.</p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button variant="army" size="lg">
                                    Read Full Bio
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
