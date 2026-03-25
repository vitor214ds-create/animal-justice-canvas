import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImage from "@/assets/about-image.jpg";

const highlights = [
  "Atuação 100% focada em Direito Animal",
  "Experiência com casos reais e complexos",
  "Estratégia jurídica voltada à responsabilização efetiva",
  "Atuação rápida em casos urgentes",
  "Comunicação direta, sem juridiquês",
  "Atendimento humano com técnica jurídica forte",
];

const impactPhrases = [
  "Quando um animal sofre, isso não é pequeno — é jurídico.",
  "A dor pela perda de um animal merece resposta.",
  "Negligência tem consequência.",
  "Seu caso merece ser levado a sério.",
  "Direito Animal não é detalhe. É responsabilidade.",
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle paw decorative */}
      <svg className="absolute top-10 right-20 w-40 h-40 text-sand/15 rotate-45" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="65" rx="22" ry="28" />
        <ellipse cx="25" cy="30" rx="10" ry="14" transform="rotate(-20 25 30)" />
        <ellipse cx="75" cy="30" rx="10" ry="14" transform="rotate(20 75 30)" />
        <ellipse cx="15" cy="55" rx="8" ry="12" transform="rotate(-30 15 55)" />
        <ellipse cx="85" cy="55" rx="8" ry="12" transform="rotate(30 85 55)" />
      </svg>

      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Conexão emocional entre humanos e animais"
                className="w-full h-[450px] lg:h-[550px] object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
              Sobre a atuação
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-foreground mb-8 leading-tight">
              Advocacia com propósito{" "}
              <span className="text-accent italic">e técnica</span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed mb-10">
              <p>
                Sou Isabella Godoy Danesi, advogada com atuação focada na defesa
                dos direitos dos animais.
              </p>
              <p>
                Atuo em casos que envolvem dor real: perda, negligência,
                maus-tratos e conflitos que muitas vezes não são tratados com a
                seriedade que deveriam.
              </p>
              <p>
                Minha missão é clara: garantir que cada caso seja tratado com a
                relevância jurídica e o respeito que a vida animal merece.
              </p>
              <p>
                Trabalho com estratégia, técnica e posicionamento firme, buscando
                não apenas soluções jurídicas, mas responsabilização efetiva e
                justiça.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {highlights.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-primary/5 border border-primary/10 card-hover"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-foreground font-body">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Impact phrases */}
        <div className="relative py-12">
          <div className="premium-divider mb-12" />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {impactPhrases.map((phrase, i) => (
              <motion.p
                key={phrase}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                className="text-lg lg:text-xl font-serif italic text-primary/80 text-center"
              >
                "{phrase}"
              </motion.p>
            ))}
          </div>
          <div className="premium-divider mt-12" />
        </div>
      </div>
    </section>
  );
}
