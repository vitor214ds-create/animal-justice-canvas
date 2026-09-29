import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Instagram, Menu, X } from "lucide-react";

const INSTAGRAM = "https://www.instagram.com/carapinadrone/";

const chapters = [
  {
    at: 0.035,
    index: "00",
    eyebrow: "CARAPINA DRONE",
    title: <>O campo visto de <em>outro nível.</em></>,
    body: "Tecnologia aérea para transformar operações no campo em movimentos mais precisos, ágeis e inteligentes.",
    align: "left",
  },
  {
    at: 0.255,
    index: "01",
    eyebrow: "PLANEJAMENTO",
    title: <>Antes de voar, <em>cada detalhe conta.</em></>,
    body: "A operação começa com leitura do cenário, definição da área e estratégia de voo. O drone entra em campo com um objetivo claro: executar com precisão.",
    align: "right",
  },
  {
    at: 0.485,
    index: "02",
    eyebrow: "TECNOLOGIA",
    title: <>Engenharia que trabalha <em>peça por peça.</em></>,
    body: "Propulsão, controle, tanque, sensores e sistema de aplicação funcionam em conjunto. No scroll, o equipamento se revela por dentro — e a tecnologia deixa de ser promessa para virar processo.",
    align: "left",
  },
  {
    at: 0.705,
    index: "03",
    eyebrow: "APLICAÇÃO",
    title: <>Chegar onde importa. <em>Aplicar onde precisa.</em></>,
    body: "O drone leva a operação até áreas estratégicas sem depender do mesmo deslocamento de máquinas terrestres em todos os pontos, ampliando possibilidades no manejo.",
    align: "right",
  },
  {
    at: 0.91,
    index: "04",
    eyebrow: "CARAPINA DRONE",
    title: <>Tecnologia que desmonta o problema — <em>e monta a solução.</em></>,
    body: "Do planejamento ao voo, a Carapina Drone conecta tecnologia e campo com uma experiência profissional, visual e orientada à execução.",
    align: "left",
  },
];

const advantages = [
  {
    n: "01",
    title: "Aplicação por drone",
    text: "Operações aéreas pensadas para levar tecnologia ao manejo com precisão de rota e agilidade de execução.",
  },
  {
    n: "02",
    title: "Acesso estratégico",
    text: "Uma alternativa para áreas em que a mobilidade terrestre pode ser limitada, trabalhosa ou pouco conveniente.",
  },
  {
    n: "03",
    title: "Visão operacional",
    text: "Planejamento visual, leitura de área e acompanhamento mais claro do que está sendo executado em campo.",
  },
  {
    n: "04",
    title: "Tecnologia aplicada",
    text: "Equipamento, controle e processo integrados para transformar o voo em uma etapa objetiva da operação.",
  },
];

const steps = [
  ["01", "Entender a área", "O primeiro passo é compreender o cenário, o objetivo da operação e as condições do local."],
  ["02", "Planejar o voo", "Rota, área e execução são organizadas antes do início da operação."],
  ["03", "Executar com precisão", "O drone entra em campo com o plano definido e operação acompanhada."],
  ["04", "Registrar e evoluir", "A experiência de cada operação ajuda a tornar os próximos trabalhos ainda mais consistentes."],
];

function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="logo-mark">
      <path d="M12 22h13l7 7 7-7h13" />
      <path d="M12 42h13l7-7 7 7h13" />
      <circle cx="12" cy="22" r="4" />
      <circle cx="52" cy="22" r="4" />
      <circle cx="12" cy="42" r="4" />
      <circle cx="52" cy="42" r="4" />
      <path d="M26 29h12v6H26z" />
    </svg>
  );
}

function ScrollExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [assetError, setAssetError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const FRAME_COUNT = 80;
    const COLS = 8;
    const ROWS = 10;
    const FRAME_W = 320;
    const FRAME_H = 180;
    const sprite = new Image();
    let loaded = 0;
    let target = 0;
    let rendered = 0;
    let raf = 0;
    let disposed = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      draw(Math.round(rendered));
    };

    const draw = (index: number) => {
      if (!sprite.complete || !sprite.naturalWidth) return;
      const frame = Math.max(0, Math.min(FRAME_COUNT - 1, index));
      const sx = (frame % COLS) * FRAME_W;
      const sy = Math.floor(frame / COLS) * FRAME_H;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / FRAME_W, ch / FRAME_H);
      const w = FRAME_W * scale;
      const h = FRAME_H * scale;
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(sprite, sx, sy, FRAME_W, FRAME_H, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const measure = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      target = (reduced ? Math.round(p * 10) / 10 : p) * (FRAME_COUNT - 1);
      setProgress((old) => Math.abs(old - p) > 0.002 ? p : old);
    };

    const tick = () => {
      rendered += (target - rendered) * (reduced ? 1 : 0.18);
      if (Math.abs(target - rendered) < 0.01) rendered = target;
      draw(Math.round(rendered));
      raf = requestAnimationFrame(tick);
    };

    sprite.decoding = "async";
    sprite.onload = () => {
      if (disposed) return;
      draw(0);
      setReady(true);
    };
    sprite.onerror = async () => {
      if (disposed) return;
      try {
        const response = await fetch("/video/chunk-00.txt");
        if (!response.ok) throw new Error("fallback indisponível");
        const base64 = (await response.text()).trim();
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
        const fallbackUrl = URL.createObjectURL(new Blob([bytes], { type: "video/mp4" }));
        const video = document.createElement("video");
        video.muted = true;
        video.playsInline = true;
        video.preload = "auto";
        video.src = fallbackUrl;
        video.addEventListener("loadedmetadata", () => {
          const seekFallback = () => {
            const rect = section.getBoundingClientRect();
            const travel = Math.max(1, section.offsetHeight - window.innerHeight);
            const p = Math.min(1, Math.max(0, -rect.top / travel));
            if (Number.isFinite(video.duration)) video.currentTime = p * Math.max(0, video.duration - 0.04);
          };
          video.addEventListener("seeked", () => {
            if (!canvas.width) resize();
            const cw = canvas.width, ch = canvas.height;
            const scale = Math.max(cw / video.videoWidth, ch / video.videoHeight);
            const w = video.videoWidth * scale, h = video.videoHeight * scale;
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, cw, ch);
            ctx.drawImage(video, (cw - w) / 2, (ch - h) / 2, w, h);
            setReady(true);
          });
          window.addEventListener("scroll", seekFallback, { passive: true });
          seekFallback();
        }, { once: true });
      } catch {
        setAssetError(true);
      }
    };
    sprite.src = "/media/carapina-sequence.avif";

    resize();
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const activeChapter = useMemo(() => {
    let best = 0;
    let distance = Infinity;
    chapters.forEach((chapter, index) => {
      const d = Math.abs(progress - chapter.at);
      if (d < distance) { best = index; distance = d; }
    });
    return best;
  }, [progress]);

  return (
    <section ref={sectionRef} id="inicio" className="scroll-story" aria-label="Experiência Carapina Drone controlada pelo scroll">
      <div className="story-sticky">
        <canvas ref={canvasRef} className={"story-canvas " + (ready ? "is-ready" : "")} aria-hidden="true" />
        <div className="video-vignette" />
        <div className="story-glow" />
        {assetError && <div className="asset-fallback" aria-hidden="true"><LogoMark /></div>}

        <div className="story-scenes">
          {chapters.map((chapter, index) => {
            const distance = Math.abs(progress - chapter.at);
            const opacity = Math.max(0, Math.min(1, 1 - distance / 0.115));
            const y = Math.max(-22, Math.min(22, (progress - chapter.at) * -140));
            return (
              <article key={chapter.index} className={"story-copy story-copy--" + chapter.align + " " + (activeChapter === index ? "is-active" : "")}
                style={{ opacity, transform: `translate3d(0, ${y}px, 0)` }} aria-hidden={opacity < 0.08}>
                <div className="story-kicker"><span>{chapter.index}</span>{chapter.eyebrow}</div>
                <h1 className={index === 0 ? "story-title story-title--hero" : "story-title"}>{chapter.title}</h1>
                <p>{chapter.body}</p>
                {index === 0 && <div className="hero-actions">
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="button button--solid">Falar no Instagram <ArrowUpRight size={16} /></a>
                  <a href="#tecnologia" className="button button--ghost">Conhecer a operação</a>
                </div>}
              </article>
            );
          })}
        </div>

        <div className="story-footerline" aria-hidden="true">
          <span>ROLE PARA CONTROLAR O VOO</span>
          <div className="story-progress"><i style={{ transform: "scaleX(" + progress + ")" }} /></div>
          <span>{String(activeChapter).padStart(2, "0")} / 04</span>
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.background = "#050606";
    document.body.style.background = "#050606";
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)} aria-label="Carapina Drone - início">
          <LogoMark />
          <span><strong>CARAPINA</strong><small>DRONE</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#tecnologia">Tecnologia</a>
          <a href="#vantagens">Operação</a>
          <a href="#processo">Como funciona</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
        </nav>

        <a className="nav-cta" href={INSTAGRAM} target="_blank" rel="noreferrer">
          Solicitar contato <ArrowUpRight size={15} />
        </a>

        <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={"mobile-menu " + (menuOpen ? "is-open" : "")} aria-hidden={!menuOpen}>
        <a href="#tecnologia" onClick={() => setMenuOpen(false)}>Tecnologia</a>
        <a href="#vantagens" onClick={() => setMenuOpen(false)}>Operação</a>
        <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Instagram</a>
      </div>

      <ScrollExperience />

      <main>
        <section id="tecnologia" className="section section--intro">
          <div className="section-label"><span>01</span> TECNOLOGIA NO CAMPO</div>
          <div className="intro-grid">
            <h2>Não é só colocar um drone no ar. É fazer a tecnologia <em>trabalhar com propósito.</em></h2>
            <div className="intro-copy">
              <p>A Carapina Drone apresenta uma proposta visual e operacional ligada ao uso de drones no campo. O foco é unir planejamento, equipamento e execução em uma experiência mais precisa e moderna.</p>
              <p>O site transforma essa ideia em narrativa: você acompanha o equipamento, vê sua construção por dentro e entende como cada parte participa da operação.</p>
              <a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer">Ver @carapinadrone <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              <span>PRECISÃO AÉREA</span><i />
              <span>TECNOLOGIA NO CAMPO</span><i />
              <span>OPERAÇÃO INTELIGENTE</span><i />
              <span>CARAPINA DRONE</span><i />
              <span>PRECISÃO AÉREA</span><i />
              <span>TECNOLOGIA NO CAMPO</span><i />
              <span>OPERAÇÃO INTELIGENTE</span><i />
              <span>CARAPINA DRONE</span><i />
            </div>
          </div>
        </section>

        <section id="vantagens" className="section section--cards">
          <div className="section-head">
            <div className="section-label"><span>02</span> OPERAÇÃO</div>
            <h2>Mais visão. Mais controle. <em>Mais possibilidades.</em></h2>
            <p>Uma operação aérea bem planejada amplia o repertório de quem precisa trabalhar o campo com tecnologia e leitura de cenário.</p>
          </div>

          <div className="advantage-grid">
            {advantages.map((item) => (
              <article className="advantage-card" key={item.n}>
                <div className="card-top"><span>{item.n}</span><i /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="card-crosshair" aria-hidden="true"><b /><b /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement" aria-label="Manifesto Carapina Drone">
          <div className="statement-rings" aria-hidden="true"><i /><i /><i /></div>
          <p>TECNOLOGIA É MEIO.</p>
          <h2>O objetivo continua sendo o mesmo: <em>fazer o campo avançar.</em></h2>
          <span>CARAPINA DRONE · TECNOLOGIA AÉREA</span>
        </section>

        <section id="processo" className="section section--process">
          <div className="section-head section-head--split">
            <div>
              <div className="section-label"><span>03</span> COMO FUNCIONA</div>
              <h2>Do primeiro contato ao <em>voo.</em></h2>
            </div>
            <p>Uma sequência simples e objetiva para transformar necessidade em operação.</p>
          </div>

          <div className="process-list">
            {steps.map(([n, title, text]) => (
              <article className="process-row" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight className="process-arrow" size={22} />
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-orbit" aria-hidden="true"><i /><i /></div>
          <div className="section-label"><span>04</span> VAMOS CONVERSAR</div>
          <h2>Seu próximo voo começa com <em>uma mensagem.</em></h2>
          <p>Conheça os trabalhos, acompanhe os conteúdos e fale diretamente com a Carapina Drone pelo perfil oficial no Instagram.</p>
          <a className="button button--solid button--large" href={INSTAGRAM} target="_blank" rel="noreferrer">
            <Instagram size={19} /> Abrir @carapinadrone <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand brand--footer" href="#inicio"><LogoMark /><span><strong>CARAPINA</strong><small>DRONE</small></span></a>
        <p>Tecnologia aérea aplicada ao campo.</p>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={16} /> @carapinadrone</a>
        <span>© 2026 CARAPINA DRONE</span>
      </footer>
    </div>
  );
};

export default Index;
