"use client";

import { Wifi, Utensils, Wind, Car, Coffee, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const amenities = [
  { icon: Wifi, label: "Wi-Fi Haut Débit" },
  { icon: Utensils, label: "Restaurant" },
  { icon: Wind, label: "Climatisation" },
  { icon: Car, label: "Parking Sécurisé" },
  { icon: Coffee, label: "Petit-déjeuner Inclus" },
  { icon: MapPin, label: "Excursions Locales" },
];

export default function Amenities() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Services & Équipements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profitez d&apos;un confort absolu avec nos services pensés pour votre bien-être.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow text-primary">
                <item.icon size={28} />
              </div>
              <span className="font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
