// src/components/AnimatedHero.tsx
'use client';

import { useEffect, useRef } from 'react';
import planeImg from '@/assets/images/plane.png';

export default function AnimatedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const plane = new Image();
    plane.src = planeImg;

    let x = -300;
    let y = window.innerHeight * 0.25;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (plane.complete) {
        ctx.drawImage(plane, x, y, 220, 120);
      }
      x += 3.5;
      y = window.innerHeight * 0.25 + Math.sin(x * 0.015) * 50;
      if (x > canvas.width + 300) x = -300;

      requestAnimationFrame(animate);
    };

    if (plane.complete) {
      animate();
    } else {
      plane.onload = () => {
        console.log("PLANE LOADED!");
        animate();
      };
    }

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 object-cover"
    />
  );
}