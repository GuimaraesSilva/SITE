"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ParticlesAnimation from "./ParticlesAnimation";

interface LandingAnimationProps {
  onComplete?: () => void;
}

export default function LandingAnimation({
  onComplete,
}: LandingAnimationProps) {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationStage(1), 500), // nomes entram
      setTimeout(() => setAnimationStage(2), 2000), // nomes afastam
      setTimeout(() => setAnimationStage(3), 2500), // click to visit
      // Auto navigate after animation completes + 2 seconds
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 4000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  const handleClick = () => {
    if (animationStage === 3 && onComplete) {
      onComplete();
    }
  };

  return (
    <div
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <ParticlesAnimation />
      {/* Nome Maior (esquerda) */}
      <Image
        src="/animation/maior.svg"
        alt="maior"
        width={250}
        height={150}
        className={`
          absolute h-32 md:h-60 w-auto transition-all duration-1000 ease-in-out
          ${animationStage >= 1 ? "opacity-100" : "opacity-0"}
        `}
        style={{
          top: "50%",
          left:
            animationStage === 1 ? "50%" : animationStage >= 2 ? "63%" : "10%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Nome Menor (direita) */}
      <Image
        src="/animation/menor.svg"
        alt="menor"
        width={250}
        height={100}
        className={`
          absolute h-32 md:h-60 w-auto transition-all duration-1000 ease-in-out
          ${animationStage >= 1 ? "opacity-100" : "opacity-0"}
        `}
        style={{
          top: "50%",
          right:
            animationStage === 1 ? "50%" : animationStage >= 2 ? "62%" : "-10%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Logo (desce ao centro) */}
      <Image
        src="/animation/logo.svg"
        alt="logo"
        width={400}
        height={400}
        className={`
          absolute transition-all duration-[1000ms] ease-in-out
          ${animationStage >= 2 ? "opacity-100" : "opacity-0"}
        `}
        style={{
          top: animationStage >= 2 ? "50%" : "-30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Indicador "click to visit" */}
      <div
        className={`fixed bottom-8 right-8 text-white text-sm transition-all duration-500 ${
          animationStage === 3
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          <p className="text-center">click to visit</p>
        </div>
      </div>
    </div>
  );
}
