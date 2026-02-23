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
                            src="/about.png" // Using the last image (gallery-5) for About
                            alt="About Timeless Modest Wear"
                            fill
                            className="object-cover object-[50%_30%] rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
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
                        <div className="space-y-6 text-[17px] font-light leading-relaxed text-gray-700">
                            <p>
  Welcome to <span className="font-semibold text-accent">Deeksha Voyage</span> — where every journey becomes a story, and every story becomes a feeling.
</p>

<p>
  She is someone who finds magic in new places and unfamiliar streets, who believes that every destination holds a piece of the heart waiting to be discovered. From quiet beaches to bustling cities, she carries a sense of wonder wherever she goes.
</p>

<p>
  Meeting new people, listening to their stories, and sharing smiles with strangers—this is what fuels her spirit. There’s a rare warmth in her presence, the kind that makes conversations feel like poetry and moments feel like memories.
</p>

<p>
  Her style reflects who she is—graceful, free, and quietly captivating. Effortless yet meaningful. Soft, yet full of strength. She doesn’t follow trends, she creates her own rhythm—just like the paths she chooses to walk.
</p>

<p>
  Whether she’s chasing sunsets by the sea or getting lost in the charm of a new city, she moves with a calm confidence and a heart open to the world.
</p>

<p className="italic">
  “She isn’t just exploring places… she’s collecting moments, stories, and souls along the way.”
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
