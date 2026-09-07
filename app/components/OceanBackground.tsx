"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface OceanBackgroundProps {
  className?: string;
  intensity?: number;
  showDots?: boolean;
  showBeam?: boolean;
}

export function OceanBackground({
  className = "",
  intensity = 1,
  showDots = true,
  showBeam = true,
}: OceanBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    // Deep fog matching obsidian background #05090b
    scene.fog = new THREE.FogExp2(0x05090b, 0.04);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.2, 8.5);
    camera.lookAt(0, 0.6, 0);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 3. Custom GLSL Wave Simulation Shader
    const geometry = new THREE.PlaneGeometry(36, 36, 128, 128);
    geometry.rotateX(-Math.PI / 2);

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.6 * intensity },
      uWaveHeight: { value: 0.42 * intensity },
      uColorDeep: { value: new THREE.Color("#020608") },       // Deep obsidian dark base
      uColorSurface: { value: new THREE.Color("#06232c") },    // Dark cyan abyss
      uColorHighlight: { value: new THREE.Color("#06b6d4") },  // Electric Cyan highlight
      uColorFoam: { value: new THREE.Color("#a5f3fc") },       // Light Cyan Crest foam
      uSunPosition: { value: new THREE.Vector3(-4.0, 7.0, -8.0) }, // Matches diagonal beam angle
    };

    const customMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        uniform float uTime;
        uniform float uSpeed;
        uniform float uWaveHeight;

        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vElevation;

        // Multi-frequency wave calculation (Gerstner & Trochoidal inspired)
        float calculateWave(vec2 pos, float time) {
          float elevation = 0.0;
          
          // Primary diagonal swell matching the light beam angle
          vec2 dir1 = normalize(vec2(0.9, 0.7));
          elevation += sin(dot(pos, dir1) * 0.42 + time * 1.1) * (0.34 * uWaveHeight);
          
          // Secondary cross-swell
          vec2 dir2 = normalize(vec2(-0.6, 0.9));
          elevation += sin(dot(pos, dir2) * 0.7 + time * 1.5) * (0.18 * uWaveHeight);
          
          // Surface ripples
          vec2 dir3 = normalize(vec2(0.3, -1.0));
          elevation += sin(dot(pos, dir3) * 1.3 + time * 2.0) * (0.08 * uWaveHeight);
          
          // Micro chop
          elevation += cos(pos.x * 2.6 + time * 2.5) * sin(pos.y * 2.6 + time * 2.5) * (0.035 * uWaveHeight);
          
          return elevation;
        }

        vec3 calculateNormal(vec2 pos, float time) {
          float eps = 0.05;
          float hC = calculateWave(pos, time);
          float hR = calculateWave(pos + vec2(eps, 0.0), time);
          float hT = calculateWave(pos + vec2(0.0, eps), time);
          
          vec3 dX = vec3(eps, hR - hC, 0.0);
          vec3 dY = vec3(0.0, hT - hC, eps);
          
          return normalize(cross(dY, dX));
        }

        void main() {
          float time = uTime * uSpeed;
          vec3 pos = position;
          
          float wave = calculateWave(pos.xz, time);
          pos.y += wave;
          vElevation = wave;

          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          vWorldPosition = worldPos.xyz;
          vNormal = normalize((modelMatrix * vec4(calculateNormal(position.xz, time), 0.0)).xyz);

          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform vec3 uColorDeep;
        uniform vec3 uColorSurface;
        uniform vec3 uColorHighlight;
        uniform vec3 uColorFoam;
        uniform vec3 uSunPosition;

        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vElevation;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          vec3 normal = normalize(vNormal);

          // Fresnel reflectance
          float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.2);

          // Depth / Elevation gradient
          float mixFactor = smoothstep(-0.35, 0.4, vElevation);
          vec3 waterColor = mix(uColorDeep, uColorSurface, mixFactor);

          // Specular shimmer aligned with top-left diagonal light
          vec3 lightDir = normalize(uSunPosition - vWorldPosition);
          vec3 halfVector = normalize(lightDir + viewDir);
          float specular = pow(max(dot(normal, halfVector), 0.0), 48.0);
          
          // Crest foam highlights
          float foamFactor = smoothstep(0.22, 0.42, vElevation);
          vec3 crestGlow = uColorFoam * foamFactor * 0.75;

          // Composite ocean color
          vec3 finalColor = mix(waterColor, uColorHighlight, fresnel * 0.7);
          finalColor += uColorHighlight * specular * 1.9;
          finalColor += crestGlow;

          // Distance fog fade into obsidian dark background
          float dist = length(cameraPosition - vWorldPosition);
          float fogFactor = smoothstep(9.0, 30.0, dist);
          finalColor = mix(finalColor, uColorDeep, fogFactor * 0.96);

          gl_FragColor = vec4(finalColor, 0.94);
        }
      `,
      transparent: true,
      depthWrite: true,
    });

    const oceanMesh = new THREE.Mesh(geometry, customMaterial);
    scene.add(oceanMesh);

    // 4. Mouse Interactivity & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 3.2;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.7;
      mouseY = y * 0.35;

      if (beamRef.current) {
        beamRef.current.style.transform = `translate3d(${x * 35}px, ${-y * 25}px, 0) rotate(-28deg)`;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // 5. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 6. Animation Loop with IntersectionObserver
    let rafId: number | null = null;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      uniforms.uTime.value += delta;

      // Smooth camera lerp
      targetCameraX = mouseX;
      targetCameraY = 3.2 + mouseY * 0.35;
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 0.6, 0);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!rafId) {
        clock.start();
        rafId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
        clock.stop();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    // 7. Cleanup
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      stopAnimation();

      geometry.dispose();
      customMaterial.dispose();
      renderer.dispose();
    };
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#05090b] ${className}`}
      aria-hidden="true"
    >
      {/* 1. Deep 3D Ocean Waves Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover" />

      {/* 2. Diagonal Cyan/Teal Ray Beam (From your reference image) */}
      {showBeam && (
        <div
          ref={beamRef}
          className="pointer-events-none absolute -left-[20%] -top-[30%] h-[750px] w-[140%] origin-center opacity-75 blur-[95px] will-change-transform mix-blend-screen"
          style={{
            transform: "rotate(-28deg)",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(6, 44, 48, 0.35) 20%, rgba(8, 145, 178, 0.55) 45%, rgba(6, 182, 212, 0.45) 55%, rgba(4, 25, 28, 0.3) 75%, transparent 100%)",
          }}
        />
      )}

      {/* 3. Atmospheric Cyan Radial Bloom */}
      <div
        className="pointer-events-none absolute left-[20%] top-[-10%] h-[450px] w-[600px] rounded-full opacity-35 blur-[120px] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, #0891b2 0%, #0e7490 40%, transparent 70%)",
        }}
      />

      {/* 4. Subtle Micro-Dot Texture Overlay */}
      {showDots && (
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)",
          }}
        />
      )}

      {/* 5. Vignette & Edge Shadow for Maximum Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05090b] via-transparent to-[#05090b]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05090b]/80 via-transparent to-[#05090b]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05090b_85%)] opacity-80" />
    </div>
  );
}
