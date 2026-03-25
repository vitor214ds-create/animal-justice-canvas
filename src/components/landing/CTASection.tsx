import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5542999678769?text=Ol%C3%A1%2C%20tudo%20bem%3F%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-primary grain-overlay overflow-hidden">
      {/* Decorative */}
      <svg className="absolute top-10 right-10 w-24 h-24 text-primary-foreground/5 rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="65" rx="22" ry="28" />
        <ellipse cx="25" cy="30" rx="10" ry="14" transform="rotate(-20 25 30)" />
        <ellipse cx="75" cy="30" rx="10" ry="14" transform="rotate(20 75 30)" />
        <ellipse cx="15" cy="55" rx="8" ry="12" transform="rotate(-30 15 55)" />
        <ellipse cx="85" cy="55" rx="8" ry="12" transform="rotate(30 85 55)" />
      </svg>

      <div ref={ref} className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
            Seu caso merece ser{" "}
            <span className="text-accent italic">levado a sério.</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body leading-relaxed mb-10">
            Se você está enfrentando uma situação de maus-tratos, negligência,
            guarda, morte, desaparecimento ou qualquer conflito envolvendo seu
            animal, fale agora com uma advogada especialista em Direito Animal.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com a advogada agora
              </a>
            </Button>
          </div>

          <a
            href="mailto:isagdanesi@hotmail.com"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body text-sm"
          >
            <Mail className="h-4 w-4" />
            isagdanesi@hotmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
