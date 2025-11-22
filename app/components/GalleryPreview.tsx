"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const galleryImages = [
  {
    src: "/images/gallery/01.png",
    alt: "Architecture Timini",
    className: "col-span-1 md:col-span-2 row-span-2 h-96 md:h-full",
  },
  {
    src: "/images/rooms/13.png",
    alt: "Détails Intérieurs",
    className: "col-span-1 row-span-1 h-64",
  },
  {
    src: "/images/gallery/18.png",
    alt: "Piscine",
    className: "col-span-1 row-span-1 h-64",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
              Inspiration
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Galerie Photos
            </h2>
          </div>
          <Link href="/gallery">
            <Button variant="outline" className="rounded-full px-8 gap-2 group">
              Voir toute la galerie
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[600px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
