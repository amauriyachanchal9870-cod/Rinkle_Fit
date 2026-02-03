"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading
                            title="Join The Ranks"
                            subtitle="Start Your Journey"
                        />
                        <p className="text-gray-400 mb-8 max-w-md">
                            Ready to transform your physique and mindset? Contact me today for personalized training programs and consultation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-sm">Call / WhatsApp</h4>
                                    <a href="tel:+919997500908" className="text-gray-400 hover:text-white transition-colors">+91 9997500908</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-sm">Follow on Instagram</h4>
                                    <a href="https://www.instagram.com/rinklefit?igsh=MWRuNHNiNXFyczR1bQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">@rinkelfit</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-sm">Training Center</h4>
                                    <span className="text-gray-400">Uttar Pradesh, India</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-dark-grey border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Instagram className="h-48 w-48 text-white" />
                        </div>

                        <h3 className="text-3xl font-heading font-bold text-white mb-6 uppercase relative z-10">
                            Transform <br />
                            <span className="text-gold">Today</span>
                        </h3>

                        <p className="text-gray-300 mb-8 relative z-10">
                            Stop waiting for the perfect moment. The perfect moment is now.
                            Join thousands of others who have redefined their limits.
                        </p>

                        <Button variant="gold" size="lg" className="w-full text-base font-bold relative z-10" asChild>
                            <a href="https://wa.me/919997500908" target="_blank" rel="noopener noreferrer">
                                Message on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
