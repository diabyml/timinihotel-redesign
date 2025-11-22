"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Wind, Sun, Waves, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SmoothScroll>
        <Navbar />

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
                Notre Histoire
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
                L&apos;Esprit Timini
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Section 1: History (Text Left, Image Right) */}
        <section className="py-20 px-4 overflow-hidden">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Notre Engagement depuis 2024
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Fondé en 2024, TIMINI HÔTEL est né de la vision de créer un établissement qui allie le confort moderne à l&apos;hospitalité traditionnelle malienne. Notre nom, &quot;TIMINI&quot;, qui signifie &quot;agréable&quot; en bambara, incarne notre engagement à offrir un séjour harmonieux, où confort et bien-être se mêlent à un service d&apos;exception.
                  </p>
                  <p>
                    Situé au cœur de Ségou, notre hôtel est devenu un symbole de l&apos;hospitalité malienne, accueillant des voyageurs du monde entier et leur offrant une expérience unique mêlant confort moderne et traditions locales.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px] w-full"
              >
                <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/images/gallery/01.png"
                    alt="Timini Architecture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-xl border-8 border-background z-20">
                  <Image
                    src="/images/gallery/03.png"
                    alt="Timini Gardens"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Ecology (Image Left, Text Right) */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
              >
                <Image
                  src="/images/sustainability.jpg"
                  alt="Timini Solar Panels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-medium text-lg">
                    Technologie et nature en harmonie.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Notre Engagement Écologique
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  À TIMINI HÔTEL, nous nous engageons à préserver l&apos;environnement tout en offrant un confort exceptionnel. Notre établissement est conçu pour être entièrement autonome en énergie, combinant technologies modernes et pratiques durables.
                </p>

                <ul className="space-y-6">
                  {[
                    { icon: Droplets, text: "Système de forage pour une eau pure et abondante" },
                    { icon: Zap, text: "Chauffage de l'eau sanitaire éco-énergétique" },
                    { icon: Wind, text: "Climatisation optimisée pour un confort responsable" },
                    { icon: Sun, text: "Éclairage éco-énergétique dans tous les espaces" },
                    { icon: Waves, text: "Piscine entretenue de manière durable" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <item.icon size={20} />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
