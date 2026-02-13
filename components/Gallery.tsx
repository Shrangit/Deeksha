"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const baseImages = [
    { src: "/images/img1.jpeg", alt: "Elegant Abaya Detail" },
    { src: "/images/img2.jpeg", alt: "Modern Modest Look" },
    { src: "/images/img7.jpeg", alt: "Beachside Modesty" },
    { src: "/images/img4.jpeg", alt: "Nature Vibes" },
    { src: "/images/img5.jpeg", alt: "Timeless Elegance" }, // Assuming this exists based on About.tsx
    { src: "/images/img6.jpeg", alt: "Serene Atmosphere" },
];

// Create 16 images by repeating the base ones
const images = Array.from({ length: 6 }).map((_, i) => ({
    ...baseImages[i % baseImages.length],
    id: i,
    span: i % 2 === 0 || i % 3 === 0 ? "row-span-2" : "row-span-1", // Dynamic spanning
}));

const GalleryItem = ({ src, alt, span, index }: { src: string; alt: string; span: string; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
            className={`relative group overflow-hidden rounded-xl break-inside-avoid mb-6 ${span === 'row-span-2' ? 'aspect-[3/5]' : 'aspect-[3/4]'} `}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-white font-serif text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{alt}</p>
            </div>
        </motion.div>
    );
};

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 px-4 bg-background">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent uppercase tracking-widest text-sm font-semibold">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mt-3 mb-6">Visual Journey</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 font-light">
                        Explore our curated moments of style, grace, and timeless beauty.
                    </p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, idx) => (
                        <GalleryItem key={img.id} src={img.src} alt={img.alt} span={img.span} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
