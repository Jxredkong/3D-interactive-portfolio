"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface ShootingStarsProps {
  className?: string;
  starCount?: number;
  shootingStarCount?: number;
  minSpeed?: number;
  maxSpeed?: number;
  minSize?: number;
  maxSize?: number;
  trailLength?: number;
  starColor?: string;
  shootingStarColor?: string;
  backgroundColor?: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  trail: { x: number; y: number; opacity: number }[];
  life: number;
  maxLife: number;
}

export default function ShootingStars({
  className = "",
  starCount = 100,
  shootingStarCount = 3,
  minSpeed = 2,
  maxSpeed = 10,
  minSize = 0.5,
  maxSize = 2,
  trailLength = 20,
  starColor,
  shootingStarColor,
  backgroundColor,
}: ShootingStarsProps) {
  const { theme } = useTheme();
  
  // Theme-aware defaults
  const defaultStarColor = starColor || (theme === "dark" ? "#ffffff" : "#000000");
  const defaultShootingStarColor = shootingStarColor || (theme === "dark" ? "#60a5fa" : "#3b82f6");
  const defaultBackgroundColor = backgroundColor || (theme === "dark" 
    ? "bg-black dark:bg-black" 
    : "bg-gradient-to-b from-gray-900 via-black to-gray-900");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const stars = useRef<Star[]>([]);
  const shootingStars = useRef<ShootingStar[]>([]);
  const animationId = useRef<number>();
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    createStars();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const createStars = () => {
    stars.current = [];
    for (let i = 0; i < starCount; i++) {
      stars.current.push({
        x: Math.random() * canvasSize.current.w,
        y: Math.random() * canvasSize.current.h,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }
  };

  const createShootingStar = (): ShootingStar => {
    const side = Math.floor(Math.random() * 4);
    let x, y, vx, vy;

    // Create shooting star from random edge
    switch (side) {
      case 0: // top
        x = Math.random() * canvasSize.current.w;
        y = -10;
        vx = (Math.random() - 0.5) * 4;
        vy = Math.random() * maxSpeed + minSpeed;
        break;
      case 1: // right
        x = canvasSize.current.w + 10;
        y = Math.random() * canvasSize.current.h;
        vx = -(Math.random() * maxSpeed + minSpeed);
        vy = (Math.random() - 0.5) * 4;
        break;
      case 2: // bottom
        x = Math.random() * canvasSize.current.w;
        y = canvasSize.current.h + 10;
        vx = (Math.random() - 0.5) * 4;
        vy = -(Math.random() * maxSpeed + minSpeed);
        break;
      default: // left
        x = -10;
        y = Math.random() * canvasSize.current.h;
        vx = Math.random() * maxSpeed + minSpeed;
        vy = (Math.random() - 0.5) * 4;
        break;
    }

    const maxLife = Math.random() * 60 + 30;
    return {
      x,
      y,
      prevX: x,
      prevY: y,
      vx,
      vy,
      size: Math.random() * 2 + 1,
      opacity: 1,
      trail: [],
      life: maxLife,
      maxLife,
    };
  };

  const updateShootingStars = () => {
    // Add new shooting stars
    if (shootingStars.current.length < shootingStarCount && Math.random() < 0.02) {
      shootingStars.current.push(createShootingStar());
    }

    // Update existing shooting stars
    shootingStars.current.forEach((star, index) => {
      star.prevX = star.x;
      star.prevY = star.y;
      star.x += star.vx;
      star.y += star.vy;
      star.life--;

      // Add to trail
      star.trail.push({
        x: star.x,
        y: star.y,
        opacity: star.opacity,
      });

      // Limit trail length
      if (star.trail.length > trailLength) {
        star.trail.shift();
      }

      // Update opacity based on life
      star.opacity = star.life / star.maxLife;

      // Remove if life is over or out of bounds
      if (
        star.life <= 0 ||
        star.x < -50 ||
        star.x > canvasSize.current.w + 50 ||
        star.y < -50 ||
        star.y > canvasSize.current.h + 50
      ) {
        shootingStars.current.splice(index, 1);
      }
    });
  };

  const drawStars = () => {
    if (!context.current) return;

    stars.current.forEach((star) => {
      // Twinkling effect
      star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.1;
      star.opacity = Math.max(0.1, Math.min(1, star.opacity));

      context.current!.save();
      context.current!.globalAlpha = star.opacity;
      context.current!.fillStyle = defaultStarColor;
      context.current!.beginPath();
      context.current!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      context.current!.fill();
      context.current!.restore();
    });
  };

  const drawShootingStars = () => {
    if (!context.current) return;

    shootingStars.current.forEach((star) => {
      // Draw trail
      star.trail.forEach((point, index) => {
        const trailOpacity = (index / star.trail.length) * star.opacity * 0.5;
        const trailSize = star.size * (index / star.trail.length);

        context.current!.save();
        context.current!.globalAlpha = trailOpacity;
        context.current!.fillStyle = defaultStarColor;
        context.current!.beginPath();
        context.current!.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
        context.current!.fill();
        context.current!.restore();
      });

      // Draw shooting star head
      context.current!.save();
      context.current!.globalAlpha = star.opacity;
      
      // Create gradient for the shooting star
      const gradient = context.current!.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      );
      gradient.addColorStop(0, defaultStarColor);
      gradient.addColorStop(0.5, defaultShootingStarColor);
      gradient.addColorStop(1, "transparent");
      
      context.current!.fillStyle = gradient;
      context.current!.beginPath();
      context.current!.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      context.current!.fill();
      
      // Draw bright core
      context.current!.fillStyle = defaultStarColor;
      context.current!.beginPath();
      context.current!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      context.current!.fill();
      
      context.current!.restore();
    });
  };

  const clearCanvas = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    }
  };

  const animate = () => {
    clearCanvas();
    drawStars();
    updateShootingStars();
    drawShootingStars();
    animationId.current = requestAnimationFrame(animate);
  };

  return (
    <div
      className={cn(
        className,
        defaultBackgroundColor
      )}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
