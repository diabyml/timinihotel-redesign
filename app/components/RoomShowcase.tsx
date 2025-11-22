"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";

const rooms = [

  // {
  //   id: 2,
  //   title: "Chambre",
  //   description: "Une chambre élégante et confortable pour un séjour paisible au cœur de Ségou.",
  //   price: "35.000 FCFA",
  //   image: "/images/rooms/13.png",
  // },
  {
    id: 3,
    title: "Chambre",
    description: "Une chambre élégante et confortable pour un séjour paisible au cœur de Ségou.",
    price: "35.000 FCFA",
    image: "/images/rooms/24.png",
  },
  {
    id: 1,
    title: "Sale Conference",
    description: "Espaces modernes pour vos événements professionnels.", price: "0.000 FCFA",
    image: "/images/rooms/08.png",
  },
];

export default function RoomShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="rooms" className="relative bg-background">
      {/* Mobile Layout */}
      <div className="block md:hidden py-20 px-4">
        <div className="container mx-auto space-y-16">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
              Collection Exclusive
            </span>
            <h2 className="text-4xl font-black text-foreground">
              Nos Chambres
            </h2>
          </div>

          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl mb-6">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-foreground">{room.title}</h3>
                  <span className="text-xl font-light text-primary">{room.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {room.description}
                </p>
                <Link href="/contact" className="inline-block pt-2">
                  <Button className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 w-full">
                    Réserver
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block sticky top-0 h-screen flex items-center overflow-hidden">
        {rooms.map((room, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useTransform(
            scrollYProgress,
            [index / rooms.length, (index + 1) / rooms.length],
            ["0%", "-100%"]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(
            scrollYProgress,
            [index / rooms.length, (index + 1) / rooms.length],
            [1, 0.9]
          );

          return (
            <motion.div
              key={room.id}
              style={{
                y: index === rooms.length - 1 ? "0%" : y,
                zIndex: rooms.length - index,
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-background"
            >
              <div className="absolute inset-0">
                <motion.div style={{ scale }} className="w-full h-full relative">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </motion.div>
              </div>

              <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary uppercase tracking-widest font-medium mb-4 block"
                  >
                    Collection Exclusive
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-black mb-6"
                  >
                    {room.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed"
                  >
                    {room.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-6"
                  >
                    <span className="text-3xl font-light">{room.price}</span>
                    <Link href="/contact">
                      <Button className="rounded-full px-8 bg-white text-black hover:bg-white/90">
                        Réserver
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Spacer to allow scrolling through the sticky section */}
      <div className="hidden md:block" style={{ height: `${rooms.length * 100}vh` }} />
    </section>
  );
}
