"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Droplets, Wind } from "lucide-react";

export default function Sustainability() {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
              Éco-Responsabilité
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground">
              L&apos;Énergie Verte au Cœur de Timini
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Notre engagement envers le développement durable se reflète dans chaque aspect de notre établissement.
              Grâce à notre système de forage, nous garantissons une eau pure et abondante, tandis que notre
              système de chauffage de l&apos;eau sanitaire et notre climatisation optimisée assurent un confort
              absolu tout en réduisant notre empreinte carbone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sun size={24} />
                </div>
                <h3 className="font-bold text-foreground">Solaire</h3>
                <p className="text-sm text-muted-foreground">Panneaux solaires</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Droplets size={24} />
                </div>
                <h3 className="font-bold text-foreground">Eau Pure</h3>
                <p className="text-sm text-muted-foreground">Forage & Filtration</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Wind size={24} />
                </div>
                <h3 className="font-bold text-foreground">Climatisation</h3>
                <p className="text-sm text-muted-foreground">Optimisée & Économe</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/sustainability-solar.jpg"
              alt="Timini Hotel Solar Panels and Green Energy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-medium text-lg">
                Une vision durable pour un tourisme responsable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
