"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSpotlight() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-secondary/30" id="spotlight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            L&apos;Essence de Timini
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Une Invitation au Voyage
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src="/images/gallery/02.png"
                  alt="Video Cover"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/40">
                      <Play size={32} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/v30j4ry3oG8?autoplay=1"
              title="Timini Hotel Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
