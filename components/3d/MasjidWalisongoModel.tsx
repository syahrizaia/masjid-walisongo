"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function MasjidWalisongoModel() {
  const groupRef = useRef<THREE.Group>(null);
  const lanternLightRef = useRef<THREE.PointLight>(null);
  const innerDomeLightRef = useRef<THREE.PointLight>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Procedural Emerald Marble Texture
  const marbleTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Base deep emerald gradient
      const grad = ctx.createLinearGradient(0, 0, 512, 512);
      grad.addColorStop(0, "#03281c");
      grad.addColorStop(0.5, "#063c2c");
      grad.addColorStop(1, "#021f16");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Organic gold & pearl marble veining
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 28; i++) {
        ctx.beginPath();
        let x = Math.random() * 512;
        let y = Math.random() * 512;
        ctx.moveTo(x, y);
        for (let j = 0; j < 8; j++) {
          x += (Math.random() - 0.45) * 80;
          y += (Math.random() - 0.4) * 80;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = i % 2 === 0 ? "rgba(234, 179, 8, 0.18)" : "rgba(255, 255, 255, 0.12)";
        ctx.stroke();
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  }, []);

  // Procedural Floating Spiritual Light Particles (Noor Dust)
  const particlesData = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.2 + Math.random() * 2.8;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.3) * 4.5;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
      scales[i] = Math.random() * 0.08 + 0.02;
    }
    return { positions, count };
  }, []);

  // High-Poly Physical Materials
  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#eab308"),
        metalness: 0.95,
        roughness: 0.15,
        envMapIntensity: 2.2,
      }),
    []
  );

  const emeraldMarbleMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#064e3b"),
        map: marbleTexture || undefined,
        metalness: 0.15,
        roughness: 0.18,
        clearcoat: 1.0,
        clearcoatRoughness: 0.06,
        reflectivity: 0.9,
      }),
    [marbleTexture]
  );

  const whiteMarbleMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#f8fafc"),
        metalness: 0.05,
        roughness: 0.15,
        clearcoat: 0.9,
        clearcoatRoughness: 0.08,
      }),
    []
  );

  const amberGlassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#f59e0b"),
        transmission: 0.88,
        opacity: 1,
        transparent: true,
        roughness: 0.1,
        ior: 1.52,
        thickness: 0.4,
        specularColor: new THREE.Color("#fef08a"),
      }),
    []
  );

  // Infinite Loop 60fps Animation
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Subtle majestic orbital rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      // Gentle mouse parallax tilt
      const targetRotX = (state.pointer.y * Math.PI) / 30;
      const targetRotZ = -(state.pointer.x * Math.PI) / 35;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 3);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, delta * 3);
    }

    // Breathing Noor Warm Glow
    const pulse = Math.sin(t * 2.2) * 0.5 + 0.5;
    if (lanternLightRef.current) {
      lanternLightRef.current.intensity = 2.0 + pulse * 1.5;
    }
    if (innerDomeLightRef.current) {
      innerDomeLightRef.current.intensity = 1.5 + pulse * 1.0;
    }

    // Floating spiritual particles upward drift
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesData.count; i++) {
        positions[i * 3 + 1] += delta * 0.25;
        if (positions[i * 3 + 1] > 3.5) {
          positions[i * 3 + 1] = -1.8;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Number of colonnade pillars in circle
  const pillarCount = 8;
  const pillarRadius = 1.35;

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* 1. TIERED HEXAGONAL MARBLE PLINTH (PODIUM AGUNG) */}
      {/* Lower Platform */}
      <mesh position={[0, -1.6, 0]} material={emeraldMarbleMaterial} castShadow receiveShadow>
        <cylinderGeometry args={[2.4, 2.6, 0.25, 6, 1]} />
      </mesh>
      {/* Gold Trim Ring */}
      <mesh position={[0, -1.46, 0]} material={goldMaterial}>
        <cylinderGeometry args={[2.42, 2.42, 0.04, 6, 1]} />
      </mesh>
      {/* Upper Inlaid White Marble Dais */}
      <mesh position={[0, -1.35, 0]} material={whiteMarbleMaterial} receiveShadow>
        <cylinderGeometry args={[2.1, 2.25, 0.2, 6, 1]} />
      </mesh>
      {/* Intricate Geometric Medallion Ring */}
      <mesh position={[0, -1.24, 0]} rotation={[-Math.PI / 2, 0, 0]} material={goldMaterial}>
        <ringGeometry args={[1.7, 1.82, 64]} />
      </mesh>

      {/* 2. GRAND NUSANTARA TAJUG ROOF & GRAND EMERALD DOME */}
      {/* Tier 1 Tajug Roof Base (Over Colonnade) */}
      <mesh position={[0, 0.45, 0]} material={emeraldMarbleMaterial} castShadow>
        <cylinderGeometry args={[1.75, 1.85, 0.12, 64]} />
      </mesh>
      {/* Gold cornice molding */}
      <mesh position={[0, 0.52, 0]} material={goldMaterial}>
        <torusGeometry args={[1.76, 0.04, 32, 64]} />
      </mesh>

      {/* Tier 2 Nusantara Tajug Arch Eaves */}
      <mesh position={[0, 0.75, 0]} material={whiteMarbleMaterial} castShadow>
        <cylinderGeometry args={[1.4, 1.7, 0.35, 64]} />
      </mesh>
      <mesh position={[0, 0.94, 0]} material={goldMaterial}>
        <torusGeometry args={[1.42, 0.035, 32, 64]} />
      </mesh>

      {/* High-Poly Walisongo Grand Onion Dome */}
      <mesh position={[0, 1.35, 0]} material={emeraldMarbleMaterial} castShadow>
        <sphereGeometry args={[1.15, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.72]} />
      </mesh>
      {/* Dome Ribs / Gold Arabesque Crest Lines (4 High-Poly Rings) */}
      {[0.25, 0.5, 0.75].map((scale, idx) => (
        <mesh key={idx} position={[0, 1.2 + idx * 0.35, 0]} material={goldMaterial}>
          <torusGeometry args={[1.15 * Math.sin(1 - idx * 0.28), 0.025, 32, 64]} />
        </mesh>
      ))}

      {/* Pointed Dome Crown Collar */}
      <mesh position={[0, 2.1, 0]} material={goldMaterial} castShadow>
        <cylinderGeometry args={[0.18, 0.38, 0.3, 32]} />
      </mesh>

      {/* MUSTAKA & POLISHED GOLD BRASS CRESCENT & STAR */}
      {/* Pinnacle Spire Spheres */}
      <mesh position={[0, 2.35, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.16, 32, 32]} />
      </mesh>
      <mesh position={[0, 2.58, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.11, 32, 32]} />
      </mesh>
      <mesh position={[0, 2.76, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.02, 0.06, 0.28, 32]} />
      </mesh>
      {/* Crescent Moon (Hilal) */}
      <mesh position={[0, 2.95, 0]} rotation={[0, 0, -Math.PI / 4]} material={goldMaterial} castShadow>
        <torusGeometry args={[0.18, 0.035, 32, 64, Math.PI * 1.55]} />
      </mesh>
      {/* Eight-Pointed Islamic Star (Khatam) at the Apex */}
      <mesh position={[0, 3.16, 0]} material={goldMaterial}>
        <octahedronGeometry args={[0.08, 0]} />
      </mesh>

      {/* 3. COLONNADE PILLARS & ARCHED MIHRAB SANCTUARY */}
      {Array.from({ length: pillarCount }).map((_, i) => {
        const angle = (i / pillarCount) * Math.PI * 2;
        const x = Math.cos(angle) * pillarRadius;
        const z = Math.sin(angle) * pillarRadius;
        return (
          <group key={i} position={[x, -0.4, z]}>
            {/* Pillar Base */}
            <mesh position={[0, -0.8, 0]} material={goldMaterial} castShadow>
              <cylinderGeometry args={[0.11, 0.14, 0.12, 32]} />
            </mesh>
            {/* Fluted Marble Shaft */}
            <mesh position={[0, 0, 0]} material={whiteMarbleMaterial} castShadow>
              <cylinderGeometry args={[0.085, 0.09, 1.5, 48]} />
            </mesh>
            {/* Corinthian/Moorish Capital with Gold Inlay */}
            <mesh position={[0, 0.8, 0]} material={goldMaterial} castShadow>
              <cylinderGeometry args={[0.14, 0.09, 0.14, 32]} />
            </mesh>
          </group>
        );
      })}

      {/* Inner Mosque Sanctuary Ambient Glow */}
      <pointLight
        ref={innerDomeLightRef}
        position={[0, 0.2, 0]}
        color="#fbbf24"
        intensity={2.2}
        distance={4.5}
        decay={2}
      />

      {/* 4. INTRICATE CLASSIC MOSQUE HANGING LANTERN (FANOUS) */}
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <group position={[0, -0.3, 0]}>
          {/* Lantern Brass Hanging Chain */}
          <mesh position={[0, 0.55, 0]} material={goldMaterial}>
            <cylinderGeometry args={[0.012, 0.012, 0.35, 16]} />
          </mesh>
          {/* Lantern Top Canopy */}
          <mesh position={[0, 0.32, 0]} material={goldMaterial} castShadow>
            <coneGeometry args={[0.26, 0.18, 8]} />
          </mesh>
          {/* Amber Glass Bulb with Warm Internal Glow */}
          <mesh position={[0, 0.08, 0]} material={amberGlassMaterial}>
            <cylinderGeometry args={[0.18, 0.24, 0.35, 8]} />
          </mesh>
          {/* Filigree Brass Lattice Cage (Mashrabiya Struts) */}
          <mesh position={[0, 0.08, 0]} material={goldMaterial}>
            <torusGeometry args={[0.21, 0.015, 16, 8]} />
          </mesh>
          {/* Lantern Base & Finial */}
          <mesh position={[0, -0.15, 0]} rotation={[Math.PI, 0, 0]} material={goldMaterial} castShadow>
            <coneGeometry args={[0.22, 0.14, 8]} />
          </mesh>
          <mesh position={[0, -0.26, 0]} material={goldMaterial}>
            <sphereGeometry args={[0.04, 16, 16]} />
          </mesh>

          {/* Warm Breathing Noor Light Source inside Lantern */}
          <pointLight
            ref={lanternLightRef}
            position={[0, 0.08, 0]}
            color="#f59e0b"
            intensity={3.0}
            distance={5.0}
            decay={1.8}
            castShadow
          />
        </group>
      </Float>

      {/* 5. SPIRITUAL FLOATING LIGHT MOTES (PARTIKEL NOOR) */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlesData.positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#fef08a"
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
