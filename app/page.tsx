import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Blog />
        <Contact />
        <footer className="bg-primary text-white py-8 text-center">
          <p className="text-sm font-light tracking-wide">&copy; {new Date().getFullYear()} TIMELESS MODEST WEAR. All rights reserved.</p>
        </footer>
      </main>
    </SmoothScroll>
  );
}
