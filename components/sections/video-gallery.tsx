"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const videos = [
    {
        id: 1,
        title: "World Record Plank",
        category: "Records",
        poster: "https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=2070&auto=format&fit=crop",
        src: "https://assets.mixkit.co/videos/preview/mixkit-man-working-out-on-a-cross-trainer-machine-1323-large.mp4" // Placeholder
    },
    {
        id: 2,
        title: "High Intensity Training",
        category: "Training",
        poster: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        src: "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-at-the-gym-23140-large.mp4"
    },
    {
        id: 3,
        title: "Deadlift Mastery",
        category: "Strength",
        poster: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        src: "https://assets.mixkit.co/videos/preview/mixkit-man-doing-heavy-weightlifting-23136-large.mp4"
    }
];

function VideoCard({ video }: { video: typeof videos[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(videoRef, { amount: 0.5 });
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (isInView) {
            videoRef.current?.play().catch(() => { });
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    }, [isInView]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden bg-dark-grey group cursor-pointer border border-white/10"
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={video.src}
                poster={video.poster}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col justify-between p-6">
                <div className="flex justify-end">
                    <button
                        onClick={toggleMute}
                        className="p-2 bg-black/50 backdrop-blur rounded-full text-white hover:bg-gold hover:text-black transition-colors"
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </div>

                <div>
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">{video.category}</span>
                    <h3 className="text-white font-heading text-2xl font-bold uppercase">{video.title}</h3>
                </div>

                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="h-16 w-16 bg-gold/80 rounded-full flex items-center justify-center text-black backdrop-blur-sm">
                            <Play fill="currentColor" className="ml-1" />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

const Marquee = ({ children, direction = 1, speed = 20 }: { children: React.ReactNode, direction?: number, speed?: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContentWidth(containerRef.current.scrollWidth / 2); // content is duplicated
        }
    }, []);

    return (
        <div className="overflow-hidden flex w-full relative">
            <motion.div
                ref={containerRef}
                className="flex gap-6 w-max"
                animate={{
                    x: direction === 1 ? [0, -contentWidth] : [-contentWidth, 0]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed, // Adjust based on width, manual tuning usually needed or resize observer
                        ease: "linear",
                    }
                }}
            >
                {children}
                {children} {/* Duplicate for seamless loop */}
            </motion.div>
        </div>
    );
};


export function VideoGallery() {
    return (
        <section id="gallery" className="py-24 bg-black overflow-hidden">
            <Container className="mb-12">
                <SectionHeading
                    title="In Action"
                    subtitle="Training & Records"
                    className="text-white"
                />
            </Container>

            {/* Marquee Container - Full Width */}
            <div className="w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                <Marquee speed={30}>
                    <div className="flex gap-4 md:gap-6 px-3">
                        {videos.map((video) => (
                            <div key={video.id} className="w-[280px] sm:w-[350px] md:w-[400px] shrink-0">
                                <VideoCard video={video} />
                            </div>
                        ))}
                        {/* Add more diversity if needed for loop feel */}
                        {videos.map((video) => (
                            <div key={`${video.id}-dup`} className="w-[280px] sm:w-[350px] md:w-[400px] shrink-0">
                                <VideoCard video={video} />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
