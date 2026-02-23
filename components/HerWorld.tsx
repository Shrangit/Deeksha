"use client";

import { motion } from "framer-motion";
import TravelMap from "@/components/TravelMap";

export default function HerWorld() {
  return (
    <section id="her-world" className="py-24 bg-background text-primary overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Her World
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            The world isn’t just a place for her — it’s a collection of
            memories, connections, and stories she gathers with every step.
          </p>
        </motion.div>

        {/* 🌍 Map Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <TravelMap />
        </motion.div>

        {/* ✨ Caption */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 mt-10 italic"
        >
          She doesn’t just travel the world… she leaves a little of her soul in every place she visits 🌍✨
        </motion.p>

      </div>
      <TravelMap/>
    </section>
  );
}