"use client";
import { useMemo } from "react";

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

const FloatingParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      left: 15 + i * 14,
      top: 10 + ((i * 17) % 80),
      duration: 4 + (i % 3),
      delay: i * 0.5,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="bg-primary/15 absolute h-2 w-2 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float-particle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
