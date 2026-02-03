import Link from "next/link";
import { Instagram, Smartphone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] border-t border-white/10 pt-16 pb-8 text-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                            RinkleFit<span className="text-gold">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elite Indian Army Soldier, National Fitness Icon, and award-winning Health & Fitness Coach tailored for your success.
                        </p>
                        <div className="pt-2">
                            <span className="block text-gold font-heading text-lg font-bold">
                                "Your FITNESS is my SUCCESS"
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-lg font-bold uppercase text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Me", href: "#about" },
                                { name: "Achievements", href: "#achievements" },
                                { name: "Training", href: "#training" },
                                { name: "Video Gallery", href: "#gallery" },
                                { name: "Client Reviews", href: "#testimonials" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading text-lg font-bold uppercase text-white mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-gold shrink-0" />
                                <span>Uttar Pradesh, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Smartphone className="h-5 w-5 text-gold shrink-0" />
                                <a href="tel:+919997500908" className="hover:text-gold transition-colors">+91 9997500908</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="h-5 w-5 text-gold shrink-0" />
                                <a href="mailto:contact@shivendrapachauri.com" className="hover:text-gold transition-colors">
                                    Contact via WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-heading text-lg font-bold uppercase text-white mb-6">Follow Me</h3>
                        <a
                            href="https://www.instagram.com/rinklefit?igsh=MWRuNHNiNXFyczR1bQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 text-white"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                        &copy; {new Date().getFullYear()} RinkleFit. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs">Designed with discipline & code.</p>
                </div>
            </Container>
        </footer>
    );
}
