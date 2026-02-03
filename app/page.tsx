import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { VideoGallery } from "@/components/sections/video-gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <VideoGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
