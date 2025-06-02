// components/ParticlesBackground.js
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesAnimation() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      {/* Container circular para as partículas */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "49%",
          width: "650px",
          height: "650px",
          transform: "translate(-50%, -50%)",
          borderRadius: "100%",
          overflow: "hidden",
          //   border: "2px solid rgba(255, 255, 255, 0.3)",
          zIndex: 1,
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 80,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 40,
                  size: 6,
                  duration: 2,
                  opacity: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 25,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
}
