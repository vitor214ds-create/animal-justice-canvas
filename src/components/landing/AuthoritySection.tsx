import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Instagram, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const professional = [
  "Advogada há mais de 8 anos – OAB/PR 94.604",
  "Atuação em todo o Brasil",
  "Professora de Direito da Universidade Anhanguera",
  "Professora da Pós-Graduação em Direito Animal da Escola de Justiça do Paraná",
  "Conciliadora judicial do Juizado Especial Criminal e Cível",
  "Palestrante",
  'Autora do livro "Direito Animal Descomplicado: guia prático para atuar na proteção dos animais"',
];

const formation = [
  "Mestre em Direitos Humanos e Políticas Públicas – PUC-PR",
  "Especialista em Direito Ambiental (em andamento) – Anhanguera",
  "Especialista em Direito Processual Civil Contemporâneo – Anhanguera",
  "Especialista em Administração Pública – PUC-MG",
  "Especialista em Prática Forense em Processo Penal – UEPG",
  "Mediadora e Conciliadora Judicial e Extrajudicial – Centro de Mediadores",
  "Graduada em Direito – PUC-PR",
];

const institutional = [
  "Presidente da Comissão de Defesa e Proteção dos Animais – OAB Ponta Grossa",
  "Vice-Presidente do Direito Animal Brasil",
  "Coordenadora Regional PR – Associação Nacional dos Advogados Animalistas",
  "Conselheira Titular do Conselho Municipal de Proteção dos Animais",
  "Pesquisadora do grupo Zoopolis – UFPR",
  "Autora de artigos em livros e revistas jurídicas",
  "Membro voluntária da ONG Gaia Libertas",
];

const links = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/prof.igd.advogada?igsh=MWNhN3YwamJ1dzF2bA%3D%3D&utm_source=qr" },
  { icon: FileText, label: "Currículo Lattes", href: "https://lattes.cnpq.br/9597152909022356" },
  { icon: BookOpen, label: "Ebook", href: "https://chk.eduzz.com/Q9N544BK01" },
];

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AuthoritySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="autoridade" className="relative py-24 lg:py-32 overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Credibilidade
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-foreground leading-tight">
            Currículo e Autoridade Profissional
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-12"
        >
          <ListBlock title="Atuação Profissional" items={professional} />
          <ListBlock title="Formação Acadêmica" items={formation} />
          <ListBlock title="Atuação Institucional" items={institutional} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link) => (
            <Button key={link.label} variant="outline-premium" size="lg" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
