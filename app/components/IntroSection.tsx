"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <section className="py-20 md:py-32 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="text-primary uppercase tracking-[0.2em] text-xs md:text-sm font-medium mb-6 block">
                        À propos de Timini
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight">
                        Une Oasis de Sérénité
                    </h2>
                    <div className="w-24 h-1 bg-primary/30 mx-auto mb-8 rounded-full" />
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        Niché au cœur de la cité historique de Ségou, le Timini Hôtel est bien plus qu&apos;un simple lieu de séjour.
                        C&apos;est une rencontre entre le raffinement contemporain et l&apos;âme chaleureuse du Mali.
                        Conçu dans le respect des traditions et de l&apos;environnement, et fonctionnant en totale indépendance grâce à l&apos;énergie solaire,
                        notre établissement vous invite à vivre une expérience unique, bercée par le rythme paisible du fleuve Niger.
                    </p>
                </motion.div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
        </section>
    );
}
