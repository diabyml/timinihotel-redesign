"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import { Button } from "../components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SmoothScroll>
        <Navbar />

        <section className="pt-32 pb-10 px-4 min-h-screen flex flex-col">
          <div className="container mx-auto flex-grow grid lg:grid-cols-2 gap-8 h-full">

            {/* Left Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center p-8 md:p-12 bg-secondary/30 rounded-3xl"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
                Contactez-nous
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-8">
                Réservez votre séjour
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-lg">
                Notre équipe est à votre disposition pour organiser votre venue et répondre à toutes vos questions.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Téléphone</h3>
                    <p className="text-muted-foreground">+223 74 47 40 40</p>
                    <p className="text-muted-foreground">+223 76 45 11 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Email</h3>
                    <p className="text-muted-foreground">timinihotel@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Adresse</h3>
                    <p className="text-muted-foreground">ATT Bougou Sud Extension, Ségou, Mali</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full text-lg px-8 w-full sm:w-auto"
                  onClick={() => window.open('tel:+22374474040')}
                >
                  Appeler maintenant
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-8 w-full sm:w-auto group"
                  onClick={() => window.open('mailto:timinihotel@gmail.com')}
                >
                  Envoyer un message
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.676626639656!2d-6.266667!3d13.433333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe45610000000001%3A0x0!2sS%C3%A9gou%2C%20Mali!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>

          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
