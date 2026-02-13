"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white text-primary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative h-[500px]"
                    >
                        <Image
                            src="/images/img26.jpeg" // Using the last image (gallery-5) for About
                            alt="About Timeless Modest Wear"
                            fill
                            className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Our Story</h2>
                        <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
                            <p>
                                Welcome to <span className="font-semibold text-accent">TIMELESS</span>, where modesty meets modern elegance.
                                Born from a passion for refined aesthetics, we curate pieces that empower women to express their style with grace and confidence.
                            </p>
                            <p>
                                Our collection is inspired by the serene landscapes of Indonesia and the quiet strength of the modern Muslimah.
                                Each piece is designed to be versatile, comfortable, and enduring—transcending fleeting trends.
                            </p>
                            <p>
                                Whether you are strolling along the beach or navigating the city, our wear moves with you,
                                offering a silhouette of understated luxury.
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="h-[1px] w-20 bg-accent mb-4" />
                            <p className="font-serif italic text-xl">"Modesty is the highest elegance."</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
