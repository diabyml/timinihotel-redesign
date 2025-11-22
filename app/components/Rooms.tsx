"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

const rooms = [
  {
    title: "Chambre Standard",
    description: "Un cocon de confort pour vos séjours d'affaires ou de courte durée.",
    price: "45.000 FCFA",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop", // Placeholder
  },
  {
    title: "Suite Junior",
    description: "Espace et élégance avec un coin salon pour plus de détente.",
    price: "75.000 FCFA",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", // Placeholder
  },
  {
    title: "Suite Présidentielle",
    description: "Le summum du luxe avec vue panoramique et services exclusifs.",
    price: "120.000 FCFA",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop", // Placeholder
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Chambres & Suites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des espaces conçus pour la sérénité, alliant matériaux locaux et design contemporain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">{room.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">
                  {room.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-primary font-bold text-lg">{room.price} <span className="text-xs font-normal text-muted-foreground">/ nuit</span></span>
                  <Button variant="outline" size="sm">Voir détails</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
