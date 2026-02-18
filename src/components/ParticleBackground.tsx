import { useEffect, useRef } from "react";

const bugEmojis = ["🐛", "🐞", "🐜", "🪲", "🦗", "🕷️", "🦟", "🪳"];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; speed: number; text: string; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.7,
        text: bugEmojis[Math.floor(Math.random() * bugEmojis.length)],
        opacity: 0.15 + Math.random() * 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "18px serif";

      particles.forEach((p) => {
        ctx.fillStyle = `hsla(190, 100%, 50%, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
        p.y += p.speed;
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
          p.text = bugEmojis[Math.floor(Math.random() * bugEmojis.length)];
        }
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />;
};

export default ParticleBackground;
