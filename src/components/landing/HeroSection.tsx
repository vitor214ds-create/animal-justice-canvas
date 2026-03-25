import { motion } from "framer-motion";
import { MessageCircle, Shield, MapPin, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const WHATSAPP_URL =
  "https://wa.me/5542999678769?text=Ol%C3%A1%2C%20tudo%20bem%3F%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20";

const badges = [
  { icon: Shield, label: "Especialização em Direito Animal" },
  { icon: Scale, label: "Maus-tratos, guarda, responsabilidade civil e óbito animal" },
  { icon: MapPin, label: "Atendimento em todo o Brasil" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-sand/30" />

      {/* Decorative paw prints */}
      <svg className="absolute top-20 right-10 w-24 h-24 text-sand/30 rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="65" rx="22" ry="28" />
        <ellipse cx="25" cy="30" rx="10" ry="14" transform="rotate(-20 25 30)" />
        <ellipse cx="75" cy="30" rx="10" ry="14" transform="rotate(20 75 30)" />
        <ellipse cx="15" cy="55" rx="8" ry="12" transform="rotate(-30 15 55)" />
        <ellipse cx="85" cy="55" rx="8" ry="12" transform="rotate(30 85 55)" />
      </svg>
      <svg className="absolute bottom-32 left-8 w-16 h-16 text-primary/10 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="65" rx="22" ry="28" />
        <ellipse cx="25" cy="30" rx="10" ry="14" transform="rotate(-20 25 30)" />
        <ellipse cx="75" cy="30" rx="10" ry="14" transform="rotate(20 75 30)" />
        <ellipse cx="15" cy="55" rx="8" ry="12" transform="rotate(-30 15 55)" />
        <ellipse cx="85" cy="55" rx="8" ry="12" transform="rotate(30 85 55)" />
      </svg>

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sand bg-sand/20 text-muted-foreground text-sm font-body mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              Isabella Godoy Danesi · Advogada
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-[1.1] tracking-tight text-foreground mb-6"
            >
              Defesa jurídica para quem ama seu animal{" "}
              <span className="text-accent italic">como família</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-xl"
            >
              Advogada especialista em Direito Animal, com atuação em casos de
              maus-tratos, guarda, negligência veterinária e indenizações.
              Atendimento em todo o Brasil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com a advogada agora
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 text-sm text-foreground/80 font-body"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Isabella Godoy Danesi - Advogada especialista em Direito Animal"
                className="w-full h-[500px] lg:h-[650px] object-cover"
                width={1280}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
            {/* Floating accent element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
}
