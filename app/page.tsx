import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import About from "@/components/About";
import SmoothScroll from "@/components/SmoothScroll";
import ValentineModal from "@/components/ValentineModal";
import MapLove from "@/components/MapLove";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Blog />

        {/* 🌍 HER WORLD SECTION */}
        <section className="py-20 bg-background text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Her World 🌍
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Every place she goes becomes a memory, every memory becomes a story.
          </p>

          <MapLove />
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-8 text-center">
          <p className="text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} Deeksha Voyage. All rights reserved.
          </p>
        </footer>

        <ValentineModal />
      </main>
    </SmoothScroll>
  );
}