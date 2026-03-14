"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from 'framer-motion';

// Usaremos nombres limpios y minimalistas en lugar de emojis
const technologies = [
    "REACT", "NEXT.JS", "NODE.JS", "TYPESCRIPT", "PYTHON", "TENSORFLOW", "AWS", "DOCKER", "RUST", "GO", "KUBERNETES", "GRAPHQL"
];

export default function TechCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]
    );

    return (
        <section className="relative z-10 w-full overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h3 className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-[#cca660] opacity-80 mb-4">Integraciones & Stack Abierto</h3>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#cca660] to-transparent mx-auto opacity-50" />
            </motion.div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y items-center">
                    {/* Renderizamos doble array para que el scroll infinito se vea continuo */}
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div 
                            key={index} 
                            className="flex-[0_0_auto] min-w-0 mr-16 md:mr-32"
                        >
                            <div className="text-2xl md:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 transition-all duration-500 hover:from-white/80 hover:to-white/40 cursor-default select-none uppercase">
                                {tech}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Sombras absolutas mas profundas para fundir el borde */}
            <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
        </section>
    );
}
