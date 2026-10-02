import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NetworkBackground() {
  const groupRef = useRef();

  const nodes = useMemo(() => {
    const points = [];

    for (let i = 0; i < 90; i++) {
      points.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 4,
      );
    }

    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

   groupRef.current.rotation.y =
     Math.sin(state.clock.elapsedTime * 0.35) * 0.22;

   groupRef.current.rotation.x =
     Math.sin(state.clock.elapsedTime * 0.22) * 0.09;
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      <Points positions={nodes} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Connecting network */}
      <NetworkLines nodes={nodes} />
    </group>
  );
}

function NetworkLines({ nodes }) {
  const geometry = useMemo(() => {
    const positions = [];

    const nodeCount = nodes.length / 3;

    for (let i = 0; i < nodeCount; i++) {
      const x1 = nodes[i * 3];
      const y1 = nodes[i * 3 + 1];
      const z1 = nodes[i * 3 + 2];

      for (let j = i + 1; j < nodeCount; j++) {
        const x2 = nodes[j * 3];
        const y2 = nodes[j * 3 + 1];
        const z2 = nodes[j * 3 + 2];

        const distance = Math.sqrt(
          (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2,
        );

        if (distance < 1.8) {
          positions.push(x1, y1, z1);
          positions.push(x2, y2, z2);
        }
      }
    }

    const geo = new THREE.BufferGeometry();

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );

    return geo;
  }, [nodes]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
  color="#22d3ee"
  transparent
  opacity={0.32}
  depthWrite={false}
/>
    
    </lineSegments>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pb-20 pt-32 text-white md:px-10">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 55,
          }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />

          <NetworkBackground />
        </Canvas>
      </div>

      {/* Dark gradient over the network */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400"
          >
            emessWeb
          </motion.p>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            <motion.span
              initial={{ opacity: 0, x: -70, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              We build
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 70, y: -20, rotate: 5 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block text-white/30"
            >
              digital
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50, y: 30, rotate: 4 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              experiences
            </motion.span>
            <span className="text-cyan-400">.</span>
          </h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <p className="max-w-md text-base leading-relaxed text-white/40">
              Modern websites designed to make your business stand out.
            </p>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-cyan-400"
            >
              Start a Project
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
