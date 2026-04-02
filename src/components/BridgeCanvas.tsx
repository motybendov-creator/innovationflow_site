import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export default function BridgeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const blue = "20, 120, 160";
    const gold = "50, 160, 80";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles flowing from left (Israel) to right (Romania)
    const createParticle = () => {
      const fromLeft = Math.random() > 0.5;
      particles.push({
        x: fromLeft ? -10 : canvas.width + 10,
        y: canvas.height * 0.3 + Math.random() * canvas.height * 0.4,
        vx: fromLeft ? 0.5 + Math.random() * 1.5 : -(0.5 + Math.random() * 1.5),
        vy: (Math.random() - 0.5) * 0.5,
        size: 1 + Math.random() * 2,
        color: fromLeft ? blue : gold,
        alpha: 0.3 + Math.random() * 0.5,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw bridge arc
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.15, canvas.height * 0.6);
      ctx.quadraticCurveTo(canvas.width * 0.5, canvas.height * 0.25, canvas.width * 0.85, canvas.height * 0.6);
      ctx.strokeStyle = `rgba(${blue}, 0.08)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Second arc
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.15, canvas.height * 0.62);
      ctx.quadraticCurveTo(canvas.width * 0.5, canvas.height * 0.28, canvas.width * 0.85, canvas.height * 0.62);
      ctx.strokeStyle = `rgba(${gold}, 0.06)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      if (Math.random() > 0.92) createParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += (Math.random() - 0.5) * 0.05;

        // Curve particles along the bridge arc
        const progress = p.x / canvas.width;
        const arcY = canvas.height * 0.6 - Math.sin(progress * Math.PI) * canvas.height * 0.32;
        p.y += (arcY - p.y) * 0.01;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color}, ${0.1 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        if (p.x < -20 || p.x > canvas.width + 20) particles.splice(i, 1);
      }

      // Keep particle count reasonable
      while (particles.length > 120) particles.shift();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
