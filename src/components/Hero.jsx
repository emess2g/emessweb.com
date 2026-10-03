
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe2,
  Sparkles,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NetworkBackground() {
  const groupRef = useRef();

  const nodes = useMemo(() => {
    const points = [];

    for (let i = 0; i < 70; i++) {
      points.push(
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3,
      );
    }

    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.18;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.18) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <Points
        positions={nodes}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#FF6B35"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

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
          (x1 - x2) ** 2 +
            (y1 - y2) ** 2 +
            (z1 - z2) ** 2,
        );

        if (distance < 1.7) {
          positions.push(x1, y1, z1);
          positions.push(x2, y2, z2);
        }
      }
    }

    const geo = new THREE.BufferGeometry();

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        positions,
        3,
      ),
    );

    return geo;
  }, [nodes]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        color="#7867D8"
        transparent
        opacity={0.2}
        depthWrite={false}
      />
    </lineSegments>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-[#F7F2EB]
        px-6 pb-20 pt-32
        text-[#171310]
        transition-colors duration-500

        dark:bg-[#171310]
        dark:text-[#FFF9F2]

        md:px-10
        md:pb-28
        md:pt-40
      "
    >
      {/* =====================================================
          BACKGROUND SHAPES
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, 8, 0, -8, 0],
          y: [0, -8, 0, 8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -left-20 top-32
          h-64 w-64
          rounded-[4rem]
          bg-[#FF6B35]/20
          blur-2xl

          dark:bg-[#FF6B35]/10
        "
      />

      <motion.div
        animate={{
          x: [0, 12, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute right-[-100px] top-10
          h-96 w-96
          rounded-full
          bg-[#7867D8]/20
          blur-3xl

          dark:bg-[#7867D8]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-1/3
          h-72 w-72
          rounded-full
          bg-[#65D6D6]/20
          blur-3xl

          dark:bg-[#65D6D6]/10
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

        {/* ===================================================
            LEFT
        =================================================== */}

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border-2
                border-[#171310]
                bg-[#FF6B35]
                text-white
                shadow-[3px_3px_0_#171310]

                dark:border-[#FFF9F2]
                dark:shadow-[3px_3px_0_#000]
              "
            >
              <Sparkles size={17} />
            </span>

            <span
              className="
                text-sm font-bold
                tracking-wide
                text-[#756D66]

                dark:text-white/55
              "
            >
              emessWeb — Digital Experiences
            </span>
          </motion.div>

          {/* Heading */}
          <h1
            className="
              text-5xl
              font-black
              leading-[0.9]
              tracking-[-0.06em]

              sm:text-6xl
              md:text-7xl
              lg:text-[5.4rem]
            "
          >
            <motion.span
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              We build
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              digital{" "}
              <span className="relative inline-block text-[#FF6B35]">
                experiences.

                {/* Hand drawn underline */}
                <svg
                  className="
                    absolute
                    -bottom-2
                    left-0
                    w-full
                    md:-bottom-4
                  "
                  viewBox="0 0 280 18"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 11C65 3 190 3 276 10"
                    stroke="currentColor"
                    className="text-[#171310] dark:text-[#FFF9F2]"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mt-8
              max-w-xl
              text-base
              leading-8
              text-[#756D66]

              dark:text-white/50

              sm:text-lg
            "
          >
            We design and develop modern websites and web
            applications that help businesses look better,
            connect with customers, and grow online.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                justify-center
                gap-3
                rounded-full
                border-2
                border-[#171310]
                bg-[#171310]
                px-7 py-4
                text-sm
                font-black
                text-white
                shadow-[5px_5px_0_#FF6B35]
                transition-all duration-300

                hover:-translate-y-1
                hover:bg-[#FF6B35]
                hover:shadow-[5px_5px_0_#171310]

                dark:border-[#FFF9F2]/20
                dark:bg-[#FFF9F2]
                dark:text-[#171310]
                dark:shadow-[5px_5px_0_#FF6B35]

                dark:hover:bg-[#FF6B35]
                dark:hover:text-white
                dark:hover:shadow-[5px_5px_0_#FFF9F2]
              "
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            <a
              href="#work"
              className="
                inline-flex
                w-fit
                items-center
                justify-center
                rounded-full
                border-2
                border-[#171310]
                bg-[#FFF9F2]
                px-7 py-4
                text-sm
                font-bold
                text-[#171310]
                shadow-[4px_4px_0_#65D6D6]
                transition-all duration-300

                hover:-translate-y-1
                hover:bg-[#65D6D6]

                dark:border-[#FFF9F2]/20
                dark:bg-[#211914]
                dark:text-[#FFF9F2]
                dark:shadow-[4px_4px_0_#7867D8]

                dark:hover:bg-[#7867D8]
              "
            >
              View Our Work
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="
              mt-12
              flex flex-wrap
              items-center
              gap-x-8
              gap-y-4
              text-sm
              font-medium
              text-[#756D66]

              dark:text-white/40
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#65D6D6]" />
              Responsive by design
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />
              Modern technology
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#7867D8]" />
              Built for growth
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            RIGHT — WEBSITE VISUAL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          {/* Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#FF6B35]/20
              blur-3xl

              dark:bg-[#7867D8]/15
            "
          />

          {/* 3D network */}
          <div className="absolute inset-0 z-0">
            <Canvas
              camera={{
                position: [0, 0, 7],
                fov: 55,
              }}
              dpr={[1, 1.5]}
            >
              <ambientLight intensity={0.6} />
              <NetworkBackground />
            </Canvas>
          </div>

          {/* =================================================
              BROWSER
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-4
              w-[92%]
              rotate-[1.5deg]
              rounded-[2rem]
              border-2
              border-[#171310]
              bg-[#FFF9F2]
              p-3
              shadow-[8px_8px_0_#FF6B35]
              transition-all duration-500

              dark:border-[#FFF9F2]/20
              dark:bg-[#211914]
              dark:shadow-[8px_8px_0_#7867D8]
            "
          >
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-3 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFB84D]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#65D6D6]" />

              <div
                className="
                  ml-4
                  h-7
                  flex-1
                  rounded-lg
                  bg-[#F0E9E1]

                  dark:bg-white/10
                "
              />
            </div>

            {/* Website preview */}
            <div
              className="
                overflow-hidden
                rounded-[1.4rem]
                bg-[#F7F2EB]

                dark:bg-[#171310]
              "
            >
              {/* Fake nav */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#171310]/10
                  px-5 py-4

                  dark:border-white/10
                "
              >
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-[#FF6B35]" />

                  <div
                    className="
                      h-2.5
                      w-16
                      rounded-full
                      bg-[#171310]/80

                      dark:bg-white/70
                    "
                  />
                </div>

                <div className="hidden gap-4 sm:flex">
                  <span className="h-2 w-10 rounded-full bg-[#171310]/10 dark:bg-white/10" />
                  <span className="h-2 w-10 rounded-full bg-[#171310]/10 dark:bg-white/10" />
                  <span className="h-2 w-10 rounded-full bg-[#171310]/10 dark:bg-white/10" />
                </div>

                <div className="h-7 w-16 rounded-full bg-[#7867D8]" />
              </div>

              {/* Fake hero */}
              <div className="grid gap-5 px-5 py-8 sm:grid-cols-2 sm:items-center">
                <div>
                  <div className="mb-3 h-3 w-20 rounded-full bg-[#FFB84D]/60" />

                  <div className="space-y-2">
                    <div className="h-5 w-full rounded-md bg-[#171310]/90 dark:bg-white/80" />
                    <div className="h-5 w-4/5 rounded-md bg-[#171310]/90 dark:bg-white/80" />
                    <div className="h-5 w-3/5 rounded-md bg-[#FF6B35]" />
                  </div>

                  <div className="mt-5 h-9 w-24 rounded-full bg-[#171310] dark:bg-[#FFF9F2]" />

                  <div className="mt-5 flex gap-2">
                    <div className="h-2 w-14 rounded-full bg-[#171310]/10 dark:bg-white/10" />
                    <div className="h-2 w-20 rounded-full bg-[#171310]/10 dark:bg-white/10" />
                  </div>
                </div>

                {/* Illustration */}
                <div
                  className="
                    relative
                    h-44
                    rounded-2xl
                    bg-[#FFE2C8]

                    dark:bg-[#30251E]
                  "
                >
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-24
                      w-32
                      -translate-x-1/2
                      -translate-y-1/2
                      rotate-[-5deg]
                      rounded-xl
                      border-2
                      border-[#171310]
                      bg-[#FFF9F2]
                      shadow-[4px_4px_0_#171310]

                      dark:border-[#FFF9F2]/20
                      dark:bg-[#211914]
                      dark:shadow-[4px_4px_0_#000]
                    "
                  >
                    <div className="flex gap-1.5 border-b border-[#171310]/10 p-2 dark:border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFB84D]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#65D6D6]" />
                    </div>

                    <div className="space-y-2 p-3">
                      <div className="h-2 w-16 rounded-full bg-[#FFB84D]/60" />
                      <div className="h-2 w-24 rounded-full bg-[#171310]/10 dark:bg-white/10" />
                      <div className="h-2 w-20 rounded-full bg-[#171310]/10 dark:bg-white/10" />

                      <div className="flex gap-2 pt-2">
                        <div className="h-7 flex-1 rounded-lg bg-[#FF6B35]" />
                        <div className="h-7 w-7 rounded-lg bg-[#7867D8]/30" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#171310] bg-[#FFF9F2] shadow-[3px_3px_0_#171310] dark:border-white/10 dark:bg-[#211914] dark:shadow-[3px_3px_0_#000]">
                    <Code2 size={18} className="text-[#7867D8]" />
                  </div>

                  <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#171310] bg-[#FFF9F2] shadow-[3px_3px_0_#171310] dark:border-white/10 dark:bg-[#211914] dark:shadow-[3px_3px_0_#000]">
                    <Globe2 size={18} className="text-[#168A9A]" />
                  </div>
                </div>
              </div>

              {/* Fake cards */}
              <div className="grid grid-cols-3 gap-3 px-5 pb-5">
                <div className="h-16 rounded-xl bg-[#FFE2C8] dark:bg-[#3A241A]" />
                <div className="h-16 rounded-xl bg-[#E8E3FA] dark:bg-[#29233D]" />
                <div className="h-16 rounded-xl bg-[#DDF5F2] dark:bg-[#18302F]" />
              </div>
            </div>
          </div>

          {/* =================================================
              FLOATING CARDS
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-1
              top-20
              z-20
              hidden
              rounded-2xl
              border-2
              border-[#171310]
              bg-[#FFF9F2]
              p-4
              shadow-[5px_5px_0_#65D6D6]

              dark:border-[#FFF9F2]/20
              dark:bg-[#211914]
              dark:shadow-[5px_5px_0_#FF6B35]

              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF5F2] dark:bg-[#18302F]">
                <Globe2
                  size={18}
                  className="text-[#168A9A]"
                />
              </div>

              <div>
                <p className="text-xs font-black text-[#171310] dark:text-[#FFF9F2]">
                  Responsive
                </p>

                <p className="text-[11px] text-[#756D66] dark:text-white/40">
                  Every screen
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-1
              bottom-16
              z-20
              hidden
              rounded-2xl
              border-2
              border-[#171310]
              bg-[#FFF9F2]
              p-4
              shadow-[5px_5px_0_#7867D8]

              dark:border-[#FFF9F2]/20
              dark:bg-[#211914]
              dark:shadow-[5px_5px_0_#65D6D6]

              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8E3FA] dark:bg-[#29233D]">
                <Code2
                  size={18}
                  className="text-[#7867D8]"
                />
              </div>

              <div>
                <p className="text-xs font-black text-[#171310] dark:text-[#FFF9F2]">
                  Modern Stack
                </p>

                <p className="text-[11px] text-[#756D66] dark:text-white/40">
                  Built to scale
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM LABEL
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-20
          flex
          max-w-7xl
          items-center
          justify-between
          border-t
          border-[#171310]/10
          pt-6
          text-xs
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#756D66]

          dark:border-white/10
          dark:text-white/30
        "
      >
        <span>Web Development</span>

        <span className="hidden sm:block">
          Design & Development
        </span>

        <span>Ghana · Worldwide</span>
      </div>
    </section>
  );
}

