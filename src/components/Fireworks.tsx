'use client';

import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  innerColor: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleAmp: number;
}

const OUTER_COLORS = [
  '#ffb7c5', '#ff90a8', '#ffd1dc', '#ffcccc',
  '#ff6b9d', '#ffe4e8', '#fce4ec', '#f8bbd0',
  '#c8f5d8', '#a8edca', '#ffffff', '#ffaec0',
];
const INNER_COLORS = [
  '#ffffff', '#fff0f5', '#ffe8ee', '#f0fff4',
  '#e8fff5', '#fffde7',
];

const MAX_PETALS   = 80;   // hard cap — keeps frame time stable
const SPAWN_EVERY  = 20;   // frames between auto-spawns (~3/sec at 60fps)

const Fireworks = () => {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const petals     = useRef<Petal[]>([]);
  const rafId      = useRef<number>();
  const frameCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    /* Spawn petals that drift down from the top */
    const autoSpawn = () => {
      if (petals.current.length >= MAX_PETALS) return;
      const count = 1 + Math.floor(Math.random() * 3);   // 1–3 at a time
      for (let i = 0; i < count; i++) {
        petals.current.push({
          x:  Math.random() * canvas.width,
          y:  -14,
          vx: (Math.random() - 0.5) * 1.4,
          vy: 0.5 + Math.random() * 0.9,   // always falling downward
          alpha: 0.7 + Math.random() * 0.3,
          color:      OUTER_COLORS[Math.floor(Math.random() * OUTER_COLORS.length)],
          innerColor: INNER_COLORS[Math.floor(Math.random() * INNER_COLORS.length)],
          size: 5 + Math.random() * 8,
          rotation:      Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          type: Math.floor(Math.random() * 3),
          wobble:      Math.random() * Math.PI * 2,
          wobbleSpeed: 0.02 + Math.random() * 0.03,
          wobbleAmp:   0.03 + Math.random() * 0.05,
        });
      }
    };

    const drawShape = (type: number, s: number) => {
      ctx.beginPath();
      if (type === 0) {
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo( s * 0.95, -s * 0.35,  s * 0.95,  s * 0.75, 0,  s);
        ctx.bezierCurveTo(-s * 0.95,  s * 0.75, -s * 0.95, -s * 0.35, 0, -s);
      } else if (type === 1) {
        ctx.ellipse(0, 0, s * 0.52, s, 0, 0, Math.PI * 2);
      } else {
        ctx.moveTo(0,  s * 0.85);
        ctx.bezierCurveTo(-s * 1.6,  s * 0.15, -s * 1.6, -s * 0.9, 0, -s * 0.3);
        ctx.bezierCurveTo( s * 1.6,  -s * 0.9,  s * 1.6,  s * 0.15, 0,  s * 0.85);
      }
      ctx.closePath();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      frameCount.current++;

      // Auto-spawn on interval
      if (frameCount.current % SPAWN_EVERY === 0) autoSpawn();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.current = petals.current.filter((p) => {
        p.wobble += p.wobbleSpeed;
        p.vx     += Math.sin(p.wobble) * p.wobbleAmp;
        p.vy     += 0.015;           // gentle gravity
        p.x      += p.vx;
        p.y      += p.vy;
        p.rotation += p.rotationSpeed;
        p.alpha    -= 0.0022;

        // Remove once invisible or below screen
        if (p.alpha <= 0 || p.y > canvas.height + 20) return false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.alpha;

        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 5;          // fixed low value — cheaper than animated

        drawShape(p.type, p.size);

        const grad = ctx.createRadialGradient(0, -p.size * 0.2, 0, 0, 0, p.size * 1.1);
        grad.addColorStop(0,    p.innerColor);
        grad.addColorStop(0.45, p.color);
        grad.addColorStop(1,    p.color + '44');
        ctx.fillStyle = grad;
        ctx.fill();

        // Vein
        ctx.globalAlpha = p.alpha * 0.22;
        ctx.strokeStyle = p.innerColor;
        ctx.lineWidth   = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.85);
        ctx.lineTo(0,  p.size * 0.85);
        ctx.stroke();

        ctx.restore();
        return true;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
};

export default Fireworks;
