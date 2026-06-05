import { useEffect, useRef, useState } from "react";
import { ArrowRight, Terminal, RefreshCw, Layers, ShieldCheck, Zap } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

interface Node {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  label: string;
  id: string;
  color: string;
  size: number;
}

interface Packet {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSyncCount, setActiveSyncCount] = useState(148);

  // Dynamic simulation counter for synced documents
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSyncCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = containerRef.current?.clientWidth || 800);
    let height = (canvas.height = 400);

    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        width = canvasRef.current.width = containerRef.current.clientWidth;
        height = canvasRef.current.height = 400;
      }
    };

    window.addEventListener("resize", handleResize);

    // Nodes setup
    const nodes: Node[] = [];
    const coreNode: Node = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      label: "Synco Orchestrator v3",
      id: "core",
      color: "#108e62",
      size: 14,
    };

    const sources = [
      { label: "Slack.com", id: "slack", color: "#4A154B" },
      { label: "Notion", id: "notion", color: "#000000" },
      { label: "GitHub Core", id: "github", color: "#24292e" },
      { label: "Google Workspace", id: "gmail", color: "#EA4335" },
      { label: "Postgres Storage", id: "db", color: "#336791" },
      { label: "Jira Cloud", id: "jira", color: "#0052CC" },
    ];

    // Compute original peripheral circle layout
    sources.forEach((src, i) => {
      const angle = (i * 2 * Math.PI) / sources.length;
      const radius = Math.min(width, height) * 0.38;
      const x = width / 2 + Math.cos(angle) * radius;
      const y = height / 2 + Math.sin(angle) * radius;
      nodes.push({
        x,
        y,
        targetX: x,
        targetY: y,
        label: src.label,
        id: src.id,
        color: src.color,
        size: 8,
      });
    });

    nodes.push(coreNode);

    let packets: Packet[] = [];
    let time = 0;

    // Mouse coordinates tracker
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle connecting grid lines
      ctx.strokeStyle = "rgba(16, 142, 98, 0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Re-center core on resize
      coreNode.x = width / 2;
      coreNode.y = height / 2;

      // Update peripheral nodes with circular micro-drift and mouse gravitational pull
      nodes.forEach((n, idx) => {
        if (n.id !== "core") {
          const baseAngle = (idx * 2 * Math.PI) / sources.length;
          const radius = Math.min(width, height) * 0.38;
          
          // Organic tiny motion over time
          const driftX = Math.cos(time + idx * 1.5) * 12;
          const driftY = Math.sin(time + idx * 1.5) * 12;

          // Mouse gravity pull (attracts nodes slightly)
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let pullX = 0;
          let pullY = 0;
          if (dist < 150) {
            const pullStrength = (150 - dist) / 150 * 18;
            pullX = (dx / dist) * pullStrength;
            pullY = (dy / dist) * pullStrength;
          }

          n.targetX = width / 2 + Math.cos(baseAngle) * radius + driftX + pullX;
          n.targetY = height / 2 + Math.sin(baseAngle) * radius + driftY + pullY;

          // Lerp to target
          n.x += (n.targetX - n.x) * 0.1;
          n.y += (n.targetY - n.y) * 0.1;
        }
      });

      // 2. Draw static connections from peripheral to core
      nodes.forEach((n) => {
        if (n.id !== "core") {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(16, 142, 98, 0.18)";
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]); // dashed look imitating digital synchronization grids
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(coreNode.x, coreNode.y);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // 3. Emit random packets along the paths to signify syncing
      if (Math.random() < 0.05 && packets.length < 15) {
        const sourceNode = nodes[Math.floor(Math.random() * (nodes.length - 1))];
        packets.push({
          startX: sourceNode.x,
          startY: sourceNode.y,
          currentX: sourceNode.x,
          currentY: sourceNode.y,
          targetX: coreNode.x,
          targetY: coreNode.y,
          progress: 0,
          speed: 0.01 + Math.random() * 0.015,
          color: "#108e62",
        });
      }

      // Draw and update packets
      packets.forEach((p, idx) => {
        p.progress += p.speed;
        p.currentX = p.startX + (p.targetX - p.startX) * p.progress;
        p.currentY = p.startY + (p.targetY - p.startY) * p.progress;

        // Draw packet glowing circles
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.currentX, p.currentY, 1, p.currentX, p.currentY, 6);
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(0.3, "#108e62");
        gradient.addColorStop(1, "rgba(16, 142, 98, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(p.currentX, p.currentY, 6, 0, 2 * Math.PI);
        ctx.fill();

        // Draw glowing tail
        ctx.beginPath();
        ctx.strokeStyle = "rgba(16, 142, 98, 0.35)";
        ctx.lineWidth = 2.5;
        const tailProgress = Math.max(0, p.progress - 0.15);
        const tX = p.startX + (p.targetX - p.startX) * tailProgress;
        const tY = p.startY + (p.targetY - p.startY) * tailProgress;
        ctx.moveTo(tX, tY);
        ctx.lineTo(p.currentX, p.currentY);
        ctx.stroke();
      });

      // Filter out completed packets
      packets = packets.filter((p) => p.progress < 1);

      // 4. Draw peripheral nodes
      nodes.forEach((n) => {
        if (n.id !== "core") {
          // Glow shadow effect
          ctx.beginPath();
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(16, 142, 98, 0.25)";
          ctx.fillStyle = "#ffffff";
          ctx.arc(n.x, n.y, n.size, 0, 2 * Math.PI);
          ctx.fill();
          ctx.shadowBlur = 0; // reset

          ctx.beginPath();
          ctx.strokeStyle = "#108e62";
          ctx.lineWidth = 1.8;
          ctx.arc(n.x, n.y, n.size, 0, 2 * Math.PI);
          ctx.stroke();

          // Small interior hub dot
          ctx.beginPath();
          ctx.fillStyle = "#108e62";
          ctx.arc(n.x, n.y, n.size * 0.4, 0, 2 * Math.PI);
          ctx.fill();

          // Monospace technical labels with custom offset
          ctx.font = "500 10px JetBrains Mono, monospace";
          ctx.fillStyle = "rgba(17, 17, 17, 0.7)";
          // Support for dark mode text inside canvas
          if (document.documentElement.classList.contains("dark")) {
            ctx.fillStyle = "rgba(244, 244, 247, 0.7)";
          }
          ctx.textAlign = n.x > width / 2 ? "left" : "right";
          ctx.fillText(n.label, n.x + (n.x > width / 2 ? 14 : -14), n.y + 3);
        }
      });

      // 5. Draw central Core node (Orchestrator Hub)
      ctx.beginPath();
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(16, 142, 98, 0.4)";
      ctx.fillStyle = "#108e62";
      ctx.arc(coreNode.x, coreNode.y, coreNode.size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Orbital pulsing ring around the orchestrator
      ctx.beginPath();
      ctx.strokeStyle = "rgba(16, 142, 98, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.arc(coreNode.x, coreNode.y, coreNode.size + 10 + Math.sin(time * 3) * 3, 0, 2 * Math.PI);
      ctx.stroke();

      // Orchestrator Label
      ctx.font = "bold 11px JetBrains Mono, monospace";
      ctx.fillStyle = "#108e62";
      ctx.textAlign = "center";
      ctx.fillText(coreNode.label, coreNode.x, coreNode.y - 25);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative border-b border-mistral-border-light bg-[#faf9f5] pt-12 pb-16 transition-colors duration-200 dot-grid-light dark:border-mistral-border-dark dark:bg-[#050505] dark:dot-grid-dark sm:pt-16 sm:pb-24 lg:pt-20">
      
      {/* Decorative Mistral Grid Frame Overlay */}
      <div className="absolute inset-y-0 left-0 hidden w-16 border-r border-mistral-border-light/40 dark:border-mistral-border-dark/20 xl:block" />
      <div className="absolute inset-y-0 right-0 hidden w-16 border-l border-mistral-border-light/40 dark:border-mistral-border-dark/20 xl:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Hero Pitch Text Block */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left relative z-10">
            
            {/* Launch Tag */}
            <div className="inline-flex self-start items-center space-x-2 rounded-sm border border-primary-brand bg-primary-brand/10 px-3 py-1 font-mono text-[11px] font-medium text-primary-brand">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-brand"></span>
              </span>
              <span>SYNCO ORCHESTRATION LAYER v3.2 EST ACTIF</span>
            </div>

            {/* Headline Display */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50 leading-[1.08]">
              L'intelligence <span className="text-primary-brand uppercase">synchronisée</span> en temps réel pour l'entreprise.
            </h1>

            {/* Sub-headline Description */}
            <p className="max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-450 font-sans tracking-wide leading-relaxed">
              Fini le cloisonnement de l’information. Synco connecte instantanément <strong>Slack, Notion, GitHub et vos bases SQL</strong> pour fusionner vos connaissances éparpillées en un contexte consolidé, accessible à vos agents IA.
            </p>

            {/* Primary Action Panel */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection("playground")}
                className="group flex h-11 items-center justify-center space-x-2 rounded-sm bg-primary-brand px-6 font-mono text-xs font-semibold text-white shadow transition-all hover:bg-[#0d7a54]"
              >
                <Terminal className="h-4 w-4" />
                <span>Lancer la console d'orchestration</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection("developers")}
                className="flex h-11 items-center justify-center space-x-2 rounded-sm border border-mistral-border-light bg-white px-6 font-mono text-xs font-semibold text-zinc-700 transition-all hover:bg-mistral-cream-dark/50 hover:text-primary-brand dark:border-mistral-border-dark dark:bg-[#080808] dark:text-zinc-300 dark:hover:bg-[#111]"
              >
                <span>Consulter l'API Reference</span>
              </button>
            </div>

            {/* Performance Accents / Benchmarks Row */}
            <div className="grid grid-cols-2 gap-4 border-t border-mistral-border-light/60 pt-6 dark:border-mistral-border-dark/40 sm:grid-cols-4">
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">LATENCE MOYENNE</span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display text-lg font-bold text-zinc-800 dark:text-zinc-250">&lt; 14 ms</span>
                  <Zap className="h-3 w-3 text-emerald-500" />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">CONTEXT SYNCING</span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display text-lg font-bold text-zinc-800 dark:text-zinc-250">1.2M tox/s</span>
                  <Layers className="h-3 w-3 text-teal-500" />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">FIABILITÉ INDEX</span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display text-lg font-bold text-zinc-800 dark:text-zinc-250">99.98%</span>
                  <ShieldCheck className="h-3 w-3 text-primary-brand" />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">SYNC DOCK CONTROLLER</span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display text-lg font-bold text-zinc-800 dark:text-zinc-250">Live API</span>
                  <RefreshCw className="h-3 w-3 animate-spin text-lime-500" />
                </div>
              </div>
            </div>

            {/* Status Live Feed Counter */}
            <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
              ⚡ Connecteur Synco Pulse : <span className="font-medium text-emerald-600 dark:text-emerald-400">{activeSyncCount.toLocaleString()} indexations de documents</span> effectuées ces dernières 24h.
            </p>

          </div>

          {/* Interactive Graph Representation Canvas Block */}
          <div ref={containerRef} className="lg:col-span-5 relative mt-10 lg:mt-0 flex items-center justify-center">
            
            {/* Visual Frame mimicking Mistral's technical console blocks */}
            <div className="absolute inset-0 border border-dashed border-primary-brand/10 rounded-sm pointer-events-none" />
            
            {/* Rounded Grid framing */}
            <div className="relative w-full rounded-sm border border-mistral-border-light bg-[#fdfdfb]/40 p-1 dark:border-mistral-border-dark dark:bg-[#080808]/60 shadow-sm backdrop-blur-[2px]">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-mistral-border-light px-4 py-2 dark:border-mistral-border-dark">
                <div className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <span className="font-mono text-[10px] text-zinc-450 uppercase tracking-widest dark:text-zinc-500">
                  synco_topology_viewer.exe
                </span>
                <div className="h-3 w-3 rounded-sm border border-mistral-border-light bg-mistral-cream-dark/50 dark:border-zinc-800 dark:bg-[#111]" />
              </div>

              {/* HTML5 Dynamic Canvas Canvas */}
              <canvas
                ref={canvasRef}
                className="block h-[400px] w-full bg-[#fcfcf9]/90 dark:bg-[#050505]/95 cursor-crosshair rounded-b-sm"
              />
            </div>

            {/* Absolute positioning background glow circles representing primary color */}
            <div className="absolute -top-12 -right-12 -z-10 h-48 w-48 rounded-full bg-primary-brand/5 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-48 w-48 rounded-full bg-primary-brand/5 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
