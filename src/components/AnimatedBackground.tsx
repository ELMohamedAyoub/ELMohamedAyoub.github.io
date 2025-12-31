import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
};

const FloatingPaint = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      if (!ctx) return;

      const isDarkMode = document.documentElement.classList.contains('dark');
      const fadeColor = isDarkMode
        ? 'rgba(0, 0, 0, 0.05)'
        : 'rgba(255, 255, 255, 0.05)';

      ctx.fillStyle = fadeColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Particle generation disabled - no more colorful trail
      
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.01;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.opacity})`;
        ctx.fill();
      });

      particlesRef.current = particlesRef.current.filter(p => p.opacity > 0);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  };

  return <canvas ref={canvasRef} className="fixed inset-0 z-[1] pointer-events-none" />;
};
export default FloatingPaint;
