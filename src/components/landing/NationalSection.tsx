import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Headphones, Target, MessageSquare, Shield } from "lucide-react";

const features = [
  { icon: Globe, label: "Atendimento on-line" },
  { icon: Target, label: "Atuação especializada" },
  { icon: Headphones, label: "Acompanhamento próximo" },
  { icon: MessageSquare, label: "Linguagem acessível" },
  { icon: Shield, label: "Estratégia jurídica firme" },
];

export default function NationalSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Alcance nacional
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
            Atendimento em todo o Brasil
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Com a facilidade da tecnologia e do processo eletrônico, o
            atendimento pode ser realizado de forma on-line em todo o território
            nacional, com linguagem clara, proximidade e orientação estratégica
            em cada caso.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-primary/5 border border-primary/10 card-hover"
            >
              <f.icon className="h-5 w-5 text-accent" />
              <span className="font-body text-foreground font-medium">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
