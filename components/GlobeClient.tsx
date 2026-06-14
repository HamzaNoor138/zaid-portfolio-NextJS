"use client";

import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import type { GlobeMethods } from "react-globe.gl";

const ARCS = [
  { startLat: 40.71,  startLng: -74.0,   endLat: 51.5,   endLng: -0.12,  dl: 0.6, dg: 0.4, at: 1800 },
  { startLat: 51.5,   startLng: -0.12,   endLat: 35.67,  endLng: 139.65, dl: 0.5, dg: 0.5, at: 2400 },
  { startLat: 37.77,  startLng: -122.41, endLat: 35.67,  endLng: 139.65, dl: 0.7, dg: 0.3, at: 2000 },
  { startLat: 25.2,   startLng: 55.27,   endLat: 1.35,   endLng: 103.81, dl: 0.5, dg: 0.5, at: 2200 },
  { startLat: 48.85,  startLng: 2.35,    endLat: -1.29,  endLng: 36.82,  dl: 0.5, dg: 0.5, at: 3000 },
  { startLat: -23.55, startLng: -46.63,  endLat: 40.71,  endLng: -74.0,  dl: 0.6, dg: 0.4, at: 2400 },
];

const POINTS = [
  { lat: 40.71,  lng: -74.0   },
  { lat: 51.5,   lng: -0.12   },
  { lat: 35.67,  lng: 139.65  },
  { lat: 1.35,   lng: 103.81  },
  { lat: 25.2,   lng: 55.27   },
  { lat: 48.85,  lng: 2.35    },
];

type GlobeComponentType = (typeof import("react-globe.gl"))["default"];
type ArcDatum = (typeof ARCS)[number];

export default function GlobeClient() {
  preload("/earth-night.jpg", { as: "image" });
  preload("/earth-topology.jpg", { as: "image" });

  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef     = useRef<GlobeMethods | undefined>(undefined);
  const [GlobeComp, setGlobeComp] = useState<GlobeComponentType | null>(null);
  const [size, setSize]           = useState({ w: 0, h: 0 });

  // Defer import to idle time so Three.js parsing doesn't block initial TTI
  useEffect(() => {
    const load = () =>
      import("react-globe.gl").then((m) => setGlobeComp(() => m.default));
    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(load, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(load, 100);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const measure = () => {
      if (containerRef.current)
        setSize({ w: containerRef.current.offsetWidth, h: containerRef.current.offsetHeight });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    const ctrl = g.controls();
    ctrl.autoRotate      = true;
    ctrl.autoRotateSpeed = 0.45;
    ctrl.enableZoom      = false;
    ctrl.enablePan       = false;
    g.pointOfView({ lat: 20, lng: 10, altitude: 2.0 }, 0);
  }, [GlobeComp, size]);

  // Pause rendering when hero section is scrolled off-screen to free the main thread
  useEffect(() => {
    const g = globeRef.current;
    if (!g || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (g as any).resumeAnimation?.();
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (g as any).pauseAnimation?.();
        }
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [GlobeComp]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {!GlobeComp && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-indigo-600/10 blur-[60px]" />
            <div className="absolute inset-8 rounded-full border border-indigo-500/25 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />
            <div className="absolute inset-8 rounded-full border border-dashed border-indigo-400/15" style={{ transform: "scaleY(0.42)" }} />
            <div className="absolute inset-8 rounded-full border border-dashed border-indigo-400/15" style={{ transform: "scaleX(0.42)" }} />
            <div className="absolute inset-8 rounded-full border border-dashed border-indigo-400/10" />
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-indigo-400/80 border-r-indigo-400/30 animate-spin [animation-duration:2.2s]" />
            <div className="absolute -bottom-12 inset-x-0 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase">
                Loading globe…
              </span>
            </div>
          </div>
        </div>
      )}
      {GlobeComp && size.w > 0 && (
        <GlobeComp
          ref={globeRef}
          width={size.w}
          height={size.h}
          globeImageUrl="/earth-night.jpg"
          bumpImageUrl="/earth-topology.jpg"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#4f46e5"
          atmosphereAltitude={0.28}
          arcsData={ARCS}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor={() => ["rgba(139,92,246,1)", "rgba(99,102,241,0.1)"]}
          arcAltitude={0.32}
          arcStroke={0.7}
          arcDashLength={(d: object) => (d as ArcDatum).dl}
          arcDashGap={(d: object) => (d as ArcDatum).dg}
          arcDashAnimateTime={(d: object) => (d as ArcDatum).at}
          pointsData={POINTS}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#a5b4fc"}
          pointAltitude={0.012}
          pointRadius={0.45}
          ringsData={POINTS}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => (t: number) => `rgba(139,92,246,${1 - t})`}
          ringMaxRadius={3.5}
          ringPropagationSpeed={2.5}
          ringRepeatPeriod={1200}
        />
      )}
    </div>
  );
}
