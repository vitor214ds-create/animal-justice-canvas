import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Shield,
  Scale,
  Stethoscope,
  Heart,
  Building2,
  Plane,
  Users,
  Briefcase,
  Landmark,
  GraduationCap,
} from "lucide-react";

const areas = [
  { icon: Shield, title: "Maus-tratos e Direito Animal Criminal", desc: "Representação jurídica em casos de crueldade, abandono e violência contra animais, com atuação firme e técnica." },
  { icon: Scale, title: "Responsabilidade Civil", desc: "Ações de indenização por danos morais e materiais decorrentes de situações envolvendo animais." },
  { icon: Stethoscope, title: "Negligência Veterinária e Serviços Pet", desc: "Responsabilização por erros veterinários, falhas em petshops, hotéis e serviços relacionados." },
  { icon: Heart, title: "Família Multiespécie", desc: "Guarda, visitação e questões familiares envolvendo animais de estimação em separações e divórcios." },
  { icon: Building2, title: "Animais em Condomínios e Vizinhança", desc: "Conflitos condominiais e de vizinhança envolvendo animais, com mediação e ação judicial quando necessário." },
  { icon: Plane, title: "Embarque e Transporte de Animais", desc: "Orientação e atuação jurídica em questões de transporte aéreo, terrestre e internacional de animais." },
  { icon: Users, title: "Assessoria para ONGs e Protetores", desc: "Suporte jurídico especializado para organizações e protetores independentes de animais." },
  { icon: Briefcase, title: "Consultoria Preventiva para Empresas Pet", desc: "Análise jurídica preventiva para empresas do setor pet, clínicas e estabelecimentos." },
  { icon: Landmark, title: "Políticas Públicas, Advocacy e Atuação Coletiva", desc: "Participação em políticas públicas e ações coletivas para avanço dos direitos animais." },
  { icon: GraduationCap, title: "Palestras, Cursos e Formação", desc: "Formação e capacitação em Direito Animal para profissionais, estudantes e instituições." },
];

export default function AreasSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="areas" className="relative py-24 lg:py-32 bg-primary grain-overlay overflow-hidden">
      {/* Decorative paw */}
      <svg className="absolute bottom-10 left-10 w-32 h-32 text-primary-foreground/5 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="65" rx="22" ry="28" />
        <ellipse cx="25" cy="30" rx="10" ry="14" transform="rotate(-20 25 30)" />
        <ellipse cx="75" cy="30" rx="10" ry="14" transform="rotate(20 75 30)" />
        <ellipse cx="15" cy="55" rx="8" ry="12" transform="rotate(-30 15 55)" />
        <ellipse cx="85" cy="55" rx="8" ry="12" transform="rotate(30 85 55)" />
      </svg>

      <div ref={ref} className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Especialidades
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-primary-foreground leading-tight">
            Áreas de Atuação
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-400 card-hover cursor-default"
            >
              <area.icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-2 leading-snug">
                {area.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
