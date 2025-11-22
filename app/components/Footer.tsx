import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/Button";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter text-foreground mb-6 block">
              TIMINI
            </Link>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Une expérience unique au cœur de Ségou, alliant tradition et modernité pour un séjour inoubliable.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-8 text-primary">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Réserver</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Mentions Légales</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-8 text-primary">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-muted-foreground">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>ATT Bougou Sud Extension,<br />Ségou, Mali</span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+223 74 47 40 40</span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground">
                <Mail size={20} className="text-primary shrink-0" />
                <span>timinihotel@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-8 text-primary">Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Inscrivez-vous pour recevoir nos offres exclusives.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-white/5 border border-black/10 rounded-full px-6 py-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground/50 transition-colors"
              />
              <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 shrink-0 w-12 h-12">
                <span className="sr-only">S&apos;inscrire</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Timini Hôtel. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
