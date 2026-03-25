import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import emotionalImage from "@/assets/emotional-bond.jpg";

const WHATSAPP_URL =
  "https://wa.me/5542999678769?text=Ol%C3%A1%2C%20tudo%20bem%3F%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20";

const phrases = [
  "Sabemos que seu animal é parte da sua família.",
  "Você não precisa enfrentar essa situação sozinho.",
  "Defendemos juridicamente quem não pode se defender.",
];

export default function EmotionalSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={emotionalImage}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-forest-deep/90" />
      </div>

      {/* Paw watermark */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-primary-foreground/5" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="65" rx="22" ry="28" />
        <ellipse cx="25" cy="30" rx="10" ry="14" transform="rotate(-20 25 30)" />
        <ellipse cx="75" cy="30" rx="10" ry="14" transform="rotate(20 75 30)" />
        <ellipse cx="15" cy="55" rx="8" ry="12" transform="rotate(-30 15 55)" />
        <ellipse cx="85" cy="55" rx="8" ry="12" transform="rotate(30 85 55)" />
      </svg>

      <div ref={ref} className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {phrases.map((phrase, i) => (
            <motion.p
              key={phrase}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="text-2xl lg:text-4xl font-serif font-light text-primary-foreground leading-relaxed italic"
            >
              "{phrase}"
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8"
          >
            <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com a advogada
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
