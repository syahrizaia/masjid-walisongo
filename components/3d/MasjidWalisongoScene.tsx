"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { MasjidWalisongoModel } from "./MasjidWalisongoModel";

function SceneFallback() {
  return (
    <div className="w-full h-full min-h-[460px] flex flex-col items-center justify-center p-8">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-ping" />
        <div className="w-16 h-16 rounded-full bg-emerald-900/60 backdrop-blur-xl border border-yellow-400/50 flex items-center justify-center shadow-lg shadow-yellow-500/20">
          <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
      <p className="mt-4 text-xs font-semibold tracking-widest text-emerald-200/80 uppercase">
        Memuat Model 3D Masjid Walisongo...
      </p>
    </div>
  );
}

export function MasjidWalisongoScene() {
  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[620px] rounded-3xl overflow-hidden">
      {/* Subtle Optical Liquid Radial Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-transparent via-transparent to-emerald-950/70" />

      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 1.1, 5.0], fov: 42 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          {/* Sacred Cinematic Lighting */}
          <ambientLight intensity={0.8} color="#064e3b" />
          
          {/* Sun Key Light (Warm Champagne) */}
          <directionalLight
            position={[5, 8, 4]}
            intensity={2.4}
            color="#fef08a"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          
          {/* Specular Rim Light (Emerald Luminous Sheen) */}
          <spotLight
            position={[-5, 7, -3]}
            intensity={3.8}
            color="#34d399"
            angle={0.65}
            penumbra={1}
          />
          
          {/* Subtle Warm Bounce */}
          <pointLight position={[0, -2, 2.5]} intensity={1.5} color="#f59e0b" />

          {/* 3D High-Poly Model */}
          <MasjidWalisongoModel />

          {/* Realistic Soft Contact Shadows on Plinth Ground */}
          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.65}
            scale={9}
            blur={2.8}
            far={4.5}
            color="#01150e"
          />

          {/* Smooth Orbital Controls (Limited vertical angle to maintain stately perspective) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2 + 0.05}
            minPolarAngle={Math.PI / 3 - 0.2}
            rotateSpeed={0.6}
          />
        </Canvas>
      </Suspense>

      {/* Floating Interactive Badge */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="px-4 py-1.5 rounded-full bg-emerald-950/70 backdrop-blur-xl border border-white/15 text-[11px] font-medium text-emerald-200/90 shadow-lg tracking-wide flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Putar 3D Model Secara Interaktif
        </div>
      </div>
    </div>
  );
}

export default MasjidWalisongoScene;
