"use client";

import { motion } from "framer-motion";
import { Wifi, Utensils, Wind, Car, Coffee, MapPin, Star, Moon, Waves, Users } from "lucide-react";
const experiences = [
  {
    title: "Restaurant",
    description: "Une fusion audacieuse de saveurs maliennes et de techniques modernes.",
    icon: Utensils,
    colSpan: "md:col-span-2",
    bg: "bg-white shadow-xl shadow-stone-200/50",
  },
  {
    title: "Salles de Conférence",
    description: "Espaces modernes pour vos événements professionnels.",
    icon: Users,
    colSpan: "md:col-span-1",
    bg: "bg-secondary/50",
  },
  {
    title: "Excursions",
    description: "Découvrez Ségou.",
    icon: MapPin,
    colSpan: "md:col-span-1",
    bg: "bg-secondary/50",
  },
  {
    title: "Piscine Extérieure",
    description: "Profitez de notre magnifique piscine pour vous détendre sous le soleil malien.",
    icon: Waves,
    colSpan: "md:col-span-2",
    bg: "bg-white shadow-xl shadow-stone-200/50",
  },

];

export default function Experience() {
  return (
    <section id="experiences" className="py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            Immersion
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            L&apos;Expérience Timini
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Bien plus qu&apos;un hôtel, une destination à part entière.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.colSpan} ${item.bg} p-10 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
