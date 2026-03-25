import { Instagram, ExternalLink, BookOpen, FileText, MessageCircle } from "lucide-react";

const links = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/prof.igd.advogada?igsh=MWNhN3YwamJ1dzF2bA%3D%3D&utm_source=qr" },
  { icon: FileText, label: "Currículo Lattes", href: "https://lattes.cnpq.br/9597152909022356" },
  { icon: BookOpen, label: "Ebook", href: "https://chk.eduzz.com/Q9N544BK01" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5542999678769?text=Ol%C3%A1%2C%20tudo%20bem%3F%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif font-semibold text-primary-foreground mb-2">
            Isabella Godoy Danesi
          </h3>
          <p className="text-primary-foreground/60 font-body text-sm">
            Advogada especialista em Direito Animal · Atendimento em todo o Brasil
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors font-body text-sm"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>

        <div className="premium-divider mb-8" />

        <p className="text-center text-primary-foreground/30 font-body text-xs">
          © {new Date().getFullYear()} Isabella Godoy Danesi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
