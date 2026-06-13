"use client";

import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import type { GlobeMethods } from "react-globe.gl";

const ARCS = [
  { startLat: 40.71,  startLng: -74.0,   endLat: 51.5,   endLng: -0.12,  dl: 0.6, dg: 0.4, at: 1800 },
  { startLat: 51.5,   startLng: -0.12,   endLat: 35.67,  endLng: 139.65, dl: 0.5, dg: 0.5, at: 2400 },
  { startLat: 37.77,  startLng: -122.41, endLat: 35.67,  endLng: 139.65, dl: 0.7, dg: 0.3, at: 2000 },
  { startLat: 25.2,   startLng: 55.27,   endLat: 1.35,   endLng: 103.81, dl: 0.5, dg: 0.5, at: 2200 },
  { startLat: -33.86, startLng: 151.2,   endLat: 1.35,   endLng: 103.81, dl: 0.6, dg: 0.4, at: 2800 },
  { startLat: 35.67,  startLng: 139.65,  endLat: -33.86, endLng: 151.2,  dl: 0.4, dg: 0.6, at: 2600 },
  { startLat: 55.75,  startLng: 37.61,   endLat: 52.52,  endLng: 13.4,   dl: 0.7, dg: 0.3, at: 1600 },
  { startLat: 48.85,  startLng: 2.35,    endLat: -1.29,  endLng: 36.82,  dl: 0.5, dg: 0.5, at: 3000 },
  { startLat: -23.55, startLng: -46.63,  endLat: 40.71,  endLng: -74.0,  dl: 0.6, dg: 0.4, at: 2400 },
  { startLat: 28.61,  startLng: 77.2,    endLat: 25.2,   endLng: 55.27,  dl: 0.5, dg: 0.5, at: 2000 },
  { startLat: 31.23,  startLng: 121.47,  endLat: 37.77,  endLng: -122.41,dl: 0.6, dg: 0.4, at: 2600 },
  { startLat: 52.52,  startLng: 13.4,    endLat: 40.71,  endLng: -74.0,  dl: 0.5, dg: 0.5, at: 2200 },
];

const POINTS = [
  { lat: 40.71,  lng: -74.0   },
  { lat: 51.5,   lng: -0.12   },
  { lat: 35.67,  lng: 139.65  },
  { lat: 1.35,   lng: 103.81  },
  { lat: 28.61,  lng: 77.2    },
  { lat: 37.77,  lng: -122.41 },
  { lat: -23.55, lng: -46.63  },
  { lat: 25.2,   lng: 55.27   },
  { lat: 31.23,  lng: 121.47  },
  { lat: 48.85,  lng: 2.35    },
  { lat: 55.75,  lng: 37.61   },
  { lat: -33.86, lng: 151.2   },
];

const HTML_PANELS = [
  { lat: 55, lng: -25, altitude: 0.55, type: "dashboard" },
  { lat: 32, lng: 125, altitude: 0.55, type: "mobile"    },
  { lat:  5, lng: 140, altitude: 0.45, type: "api"       },
];

function makePanelEl(type: string): HTMLElement {
  const wrap = document.createElement("div");

  const base = `
    background: rgba(8,8,18,0.82);
    border: 1px solid rgba(99,102,241,0.45);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 24px -4px rgba(99,102,241,0.55), inset 0 1px 0 rgba(255,255,255,0.06);
    pointer-events: none;
    user-select: none;
    font-family: ui-monospace, monospace;
  `;

  if (type === "dashboard") {
    wrap.style.cssText = base + "padding: 10px 14px; min-width: 130px;";
    wrap.innerHTML = `
      <div style="color:#818cf8;font-size:9px;font-weight:700;letter-spacing:.1em;margin-bottom:7px;display:flex;align-items:center;gap:5px;">
        <span style="width:5px;height:5px;border-radius:50%;background:#818cf8;display:inline-block;box-shadow:0 0 6px #818cf8;"></span>
        DASHBOARD
      </div>
      <div style="display:flex;gap:5px;margin-bottom:5px;">
        <div style="flex:1;height:28px;background:linear-gradient(180deg,rgba(99,102,241,0.25) 0%,rgba(99,102,241,0.05) 100%);border-radius:3px;border:1px solid rgba(99,102,241,0.2);"></div>
        <div style="flex:1.4;height:28px;background:linear-gradient(180deg,rgba(99,102,241,0.15) 0%,rgba(99,102,241,0.04) 100%);border-radius:3px;border:1px solid rgba(99,102,241,0.15);"></div>
        <div style="width:18px;height:18px;border-radius:50%;background:rgba(99,102,241,0.2);border:1px solid rgba(99,102,241,0.3);align-self:center;flex-shrink:0;"></div>
      </div>
      <div style="height:2px;background:rgba(99,102,241,0.5);border-radius:2px;margin-bottom:3px;width:80%;"></div>
      <div style="height:2px;background:rgba(99,102,241,0.2);border-radius:2px;width:55%;"></div>
    `;
  } else if (type === "mobile") {
    wrap.style.cssText = base + "padding: 10px 10px; width: 62px;";
    wrap.innerHTML = `
      <div style="background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.3);border-radius:8px;padding:6px;text-align:center;">
        <div style="width:20px;height:3px;background:rgba(255,255,255,0.15);border-radius:2px;margin:0 auto 5px;"></div>
        <div style="height:18px;background:linear-gradient(180deg,rgba(99,102,241,0.3),rgba(99,102,241,0.08));border-radius:3px;margin-bottom:3px;border:1px solid rgba(99,102,241,0.2);"></div>
        <div style="display:flex;gap:2px;">
          <div style="flex:1;height:10px;background:rgba(99,102,241,0.2);border-radius:2px;"></div>
          <div style="flex:1;height:10px;background:rgba(99,102,241,0.15);border-radius:2px;"></div>
        </div>
        <div style="width:12px;height:2px;background:rgba(255,255,255,0.12);border-radius:2px;margin:4px auto 0;"></div>
      </div>
    `;
  } else {
    wrap.style.cssText = base + "padding: 8px 14px;";
    wrap.innerHTML = `
      <div style="color:#818cf8;font-size:13px;font-weight:700;letter-spacing:.04em;">&lt;API/&gt;</div>
      <div style="color:rgba(129,140,248,0.5);font-size:8px;margin-top:2px;">REST · v2</div>
    `;
  }

  return wrap;
}

type GlobeComponentType = (typeof import("react-globe.gl"))["default"];
type ArcDatum = (typeof ARCS)[number];
type PanelDatum = (typeof HTML_PANELS)[number];

export default function GlobeClient() {
  // Start fetching the globe textures in parallel with the react-globe.gl chunk,
  // instead of waiting for the chunk to load before the textures even start.
  preload("/earth-night.jpg", { as: "image" });
  preload("/earth-topology.jpg", { as: "image" });

  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef     = useRef<GlobeMethods | undefined>(undefined);
  const [GlobeComp, setGlobeComp] = useState<GlobeComponentType | null>(null);
  const [size, setSize]           = useState({ w: 0, h: 0 });

  useEffect(() => {
    import("react-globe.gl").then((m) => setGlobeComp(() => m.default));
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

  return (
    <div ref={containerRef} className="w-full h-full">
      {!GlobeComp && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Soft glow */}
            <div className="absolute inset-0 rounded-full bg-indigo-600/10 blur-[60px]" />

            {/* Sphere outline */}
            <div className="absolute inset-8 rounded-full border border-indigo-500/25 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />

            {/* Graticule lines hinting at a wireframe globe */}
            <div className="absolute inset-8 rounded-full border border-dashed border-indigo-400/15" style={{ transform: "scaleY(0.42)" }} />
            <div className="absolute inset-8 rounded-full border border-dashed border-indigo-400/15" style={{ transform: "scaleX(0.42)" }} />
            <div className="absolute inset-8 rounded-full border border-dashed border-indigo-400/10" />

            {/* Spinning highlight ring */}
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-indigo-400/80 border-r-indigo-400/30 animate-spin [animation-duration:2.2s]" />

            {/* Status label */}
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
          /* ── Globe surface ── */
          globeImageUrl="/earth-night.jpg"
          bumpImageUrl="/earth-topology.jpg"
          backgroundColor="rgba(0,0,0,0)"
          /* ── Atmosphere ── */
          atmosphereColor="#4f46e5"
          atmosphereAltitude={0.28}
          /* ── Arcs ── */
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
          /* ── City points ── */
          pointsData={POINTS}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#a5b4fc"}
          pointAltitude={0.012}
          pointRadius={0.45}
          /* ── Expanding rings from cities ── */
          ringsData={POINTS}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => (t: number) => `rgba(139,92,246,${1 - t})`}
          ringMaxRadius={3.5}
          ringPropagationSpeed={2.5}
          ringRepeatPeriod={1200}
          /* ── Floating UI panels ── */
          htmlElementsData={HTML_PANELS}
          htmlElement={(d: object) => makePanelEl((d as PanelDatum).type)}
          htmlAltitude={(d: object) => (d as PanelDatum).altitude}
        />
      )}
    </div>
  );
}
