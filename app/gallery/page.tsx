"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const allImages = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/gallery/${String(i + 1).padStart(2, "0")}.png`,
  aspect: "aspect-[4/3]",
}));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <SmoothScroll>
        <Navbar />

        <section className="pt-40 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
                Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
                L&apos;Esprit Timini
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une immersion visuelle dans notre univers, où chaque détail raconte une histoire.
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {allImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group"
                >
                  <div className={`relative w-full ${img.aspect}`}>
                    <Image
                      src={img.src}
                      alt="Timini Hotel Gallery"
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
