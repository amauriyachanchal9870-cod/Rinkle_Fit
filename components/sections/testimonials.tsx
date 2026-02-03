"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const initialReviews = [
    {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        text: "Training with Shivendra Sir changed my life. His discipline from the Army really shows in his coaching. I lost 15kg in 3 months!",
        image: null,
    },
    {
        id: 2,
        name: "Priya Singh",
        rating: 5,
        text: "The best functional training coach. He pushes you beyond your limits. Highly recommended for anyone wanting serious results.",
        image: null,
    },
    {
        id: 3,
        name: "Vikram Malhotra",
        rating: 4,
        text: "Incredible knowledge of body mechanics. His tips on deadlift form helped me break my plateau.",
        image: null,
    }
];

export function Testimonials() {
    const [reviews, setReviews] = useState(initialReviews);
    const [currentReview, setCurrentReview] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Form State
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [reviewText, setReviewText] = useState("");

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReview = {
            id: reviews.length + 1,
            name,
            rating,
            text: reviewText,
            image: null,
        };
        setReviews([newReview, ...reviews]);
        setIsFormOpen(false);
        setCurrentReview(0);
        // Reset form
        setName("");
        setReviewText("");
        setRating(5);
    };

    // Auto-advance
    useEffect(() => {
        if (!isFormOpen) {
            const timer = setInterval(() => {
                nextReview();
            }, 5000); // 5 seconds
            return () => clearInterval(timer);
        }
    }, [currentReview, isFormOpen]);

    return (
        <section id="testimonials" className="py-24 bg-off-white relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Reviews Carousel */}
                    <div>
                        <SectionHeading
                            title="Client Success"
                            subtitle="Transformations"
                            className="text-black"
                        />

                        <div className="relative bg-white border border-black/5 shadow-xl p-6 md:p-10 rounded-3xl min-h-[300px] flex flex-col justify-center overflow-hidden">
                            {/* Decor */}
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <User className="h-24 w-24 md:h-32 md:w-32" />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentReview}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 md:h-5 md:w-5 ${i < reviews[currentReview].rating ? "text-gold fill-gold" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-900 text-lg md:text-xl font-medium italic mb-8 leading-relaxed">
                                        "{reviews[currentReview].text}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-army-green/10 flex items-center justify-center border border-army-green/20">
                                            <User className="text-army-green h-5 w-5 md:h-6 md:w-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-black font-heading uppercase font-bold text-base md:text-lg">{reviews[currentReview].name}</h4>
                                            <span className="text-[10px] md:text-xs text-gold font-bold uppercase tracking-wider">Verified Client</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress Bar / Indicators */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gold transition-all duration-[5000ms] ease-linear w-full origin-left"
                                key={currentReview} // Remount to restart animation
                                style={{ animation: !isFormOpen ? "progress 5s linear" : "none" }}
                            />
                            <style jsx>{`
                 @keyframes progress { from { width: 0%; } to { width: 100%; } }
               `}</style>
                        </div>

                        {/* External Controls for better UX */}
                        <div className="flex justify-end gap-3 mt-4">
                            <button onClick={prevReview} className="p-3 rounded-full bg-white hover:bg-gold hover:text-white transition-all text-black border border-black/10 hover:border-gold shadow-sm">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextReview} className="p-3 rounded-full bg-white hover:bg-gold hover:text-white transition-all text-black border border-black/10 hover:border-gold shadow-sm">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Submit Review CTA */}
                    <div className="flex items-center">
                        {!isFormOpen ? (
                            <div className="bg-army-green/5 border border-army-green/10 p-10 rounded-3xl w-full text-center hover:bg-army-green/10 transition-colors">
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Have a Transformation Story?</h3>
                                <p className="text-gray-600 mb-8 max-w-sm mx-auto">Share your journey and inspire others. Join the community of achievers.</p>
                                <Button variant="gold" size="lg" onClick={() => setIsFormOpen(true)} className="w-full sm:w-auto">
                                    Write a Review
                                </Button>
                            </div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white border border-black/5 shadow-xl p-8 rounded-3xl w-full"
                                onSubmit={handleSubmit}
                            >
                                <h3 className="text-xl font-heading font-bold text-gray-800 mb-6">Submit Your Review</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs uppercase text-gray-500 mb-1 font-bold">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-gray-800 focus:border-gold outline-none transition-colors focus:ring-1 focus:ring-gold"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase text-gray-500 mb-1 font-bold">Rating</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    className={`p-1 ${rating >= star ? "text-gold" : "text-gray-300"}`}
                                                >
                                                    <Star className={rating >= star ? "fill-gold" : ""} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase text-gray-500 mb-1 font-bold">Review</label>
                                        <textarea
                                            required
                                            value={reviewText}
                                            onChange={(e) => setReviewText(e.target.value)}
                                            rows={4}
                                            className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-gray-800 focus:border-gold outline-none transition-colors resize-none focus:ring-1 focus:ring-gold"
                                        />
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <Button type="submit" variant="gold" className="flex-1">Submit</Button>
                                        <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>Cancel</Button>
                                    </div>
                                </div>
                            </motion.form>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
