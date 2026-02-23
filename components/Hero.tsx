"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.5, ease: "power2.out" }
            )
                .fromTo(
                    textRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                    "-=0.5"
                )
                .fromTo(
                    subTextRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                    "-=0.8"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner.png"
                    alt="Timeless Modest Wear Background"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30" /> {/* Overlay using Tailwind opacity */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                <h1
                    ref={textRef}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter mb-6"
                >
                    IN BETWEEN MOMENTS
                </h1>

                <p
                    ref={subTextRef}
                    className="text-lg md:text-xl font-light tracking-[0.2em] uppercase max-w-2xl text-balance leading-relaxed"
                >
                    somewhere between chaos and calm,
                    late nights and quiet mornings,
                    i found a feeling that feels like you
                </p>

                <p className="mt-6 text-sm md:text-base font-light tracking-widest opacity-80 italic">
                    not everything needs a name to be real
                </p>

                <i>and maybe this is how something beautiful begins</i>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
                <span className="text-sm tracking-widest uppercase">Scroll</span>
            </div>
        </section>
    );
}
