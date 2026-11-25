"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { KcciEventItem } from "@/app/constants/eventsKcci";

export interface ThreeVerticalEventMarqueeProps {
  events: KcciEventItem[];
  speed?: number;
  className?: string;
}

/**
 * Draws a crisp, high-resolution text card onto an offscreen HTML canvas.
 * Strictly renders: Event Name, Event Date, and Venue (ZERO images).
 */
function drawCardOnCanvas(
  canvas: HTMLCanvasElement,
  ev: { title: string; date: string; venue: string; badge?: string }
) {
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  // Card dimensions inside canvas with margins for soft shadow
  const padX = 24;
  const padY = 20;
  const cardW = w - padX * 2;
  const cardH = h - padY * 2;
  const radius = 28;

  // Outer subtle drop shadow
  ctx.save();
  ctx.shadowColor = "rgba(43, 18, 3, 0.12)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 6;

  // Card Background Fill (Warm White to Ivory)
  ctx.beginPath();
  ctx.roundRect(padX, padY, cardW, cardH, radius);
  const bgGrad = ctx.createLinearGradient(padX, padY, padX, padY + cardH);
  bgGrad.addColorStop(0, "#FFFFFF");
  bgGrad.addColorStop(1, "#FAF6F0");
  ctx.fillStyle = bgGrad;
  ctx.fill();
  ctx.restore();

  // Subtle Chamber Border
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(padX, padY, cardW, cardH, radius);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "rgba(110, 44, 0, 0.18)";
  ctx.stroke();

  // Left accent decorative vertical pill (Chamber Crimson to Saffron)
  ctx.beginPath();
  ctx.roundRect(padX, padY + 20, 8, cardH - 40, 4);
  const accentGrad = ctx.createLinearGradient(padX, padY, padX, padY + cardH);
  accentGrad.addColorStop(0, "#A61A28");
  accentGrad.addColorStop(1, "#BB5D0E");
  ctx.fillStyle = accentGrad;
  ctx.fill();

  // --- Top Row: Date & Upcoming Badge ---
  const contentLeft = padX + 38;
  const contentRight = padX + cardW - 38;
  const topY = padY + 34;

  // Date with calendar glyph
  ctx.font = "bold 23px 'Space Grotesk', system-ui, sans-serif";
  ctx.fillStyle = "#A61A28";
  ctx.textBaseline = "middle";
  ctx.fillText(`📅  ${ev.date.toUpperCase()}`, contentLeft, topY + 12);

  // "UPCOMING" Badge on top right
  const badgeText = "UPCOMING";
  ctx.font = "bold 18px 'Space Grotesk', system-ui, sans-serif";
  const badgeW = ctx.measureText(badgeText).width + 28;
  const badgeH = 32;
  const badgeX = contentRight - badgeW;
  const badgeY = topY - 4;

  ctx.beginPath();
  ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 16);
  ctx.fillStyle = "rgba(255, 211, 124, 0.4)";
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "rgba(216, 153, 46, 0.6)";
  ctx.stroke();

  ctx.fillStyle = "#6E2C00";
  ctx.fillText(badgeText, badgeX + 14, badgeY + badgeH / 2);

  // --- Center: Event Name (Title) ---
  ctx.font = "bold 36px 'Space Grotesk', system-ui, sans-serif";
  ctx.fillStyle = "#2B1203";
  ctx.textBaseline = "top";
  const titleY = topY + 44;
  const maxTitleW = cardW - 76;

  // Multi-line wrap
  const words = ev.title.split(" ");
  let line = "";
  const lines: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const testLine = line ? `${line} ${words[i]}` : words[i];
    if (ctx.measureText(testLine).width > maxTitleW && i > 0) {
      lines.push(line);
      line = words[i];
      if (lines.length >= 2) break;
    } else {
      line = testLine;
    }
  }
  if (line && lines.length < 2) {
    lines.push(line);
  }

  lines.forEach((l, idx) => {
    ctx.fillText(l, contentLeft, titleY + idx * 46);
  });

  // --- Divider Line ---
  const dividerY = padY + cardH - 74;
  ctx.beginPath();
  ctx.moveTo(contentLeft, dividerY);
  ctx.lineTo(contentRight, dividerY);
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "rgba(110, 44, 0, 0.12)";
  ctx.stroke();

  // --- Bottom Row: Venue ---
  ctx.font = "500 24px 'Work Sans', system-ui, sans-serif";
  ctx.fillStyle = "#514646";
  ctx.textBaseline = "middle";
  const venueY = padY + cardH - 38;
  ctx.fillText(`📍  ${ev.venue}`, contentLeft, venueY);

  ctx.restore();
}

export const ThreeVerticalEventMarquee: React.FC<
  ThreeVerticalEventMarqueeProps
> = ({ events, speed = 1, className = "" }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speedRef = useRef(speed);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas || events.length === 0) return undefined;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 13);

    const marqueeGroup = new THREE.Group();
    scene.add(marqueeGroup);

    const cardWidth = 5.8;
    const cardHeight = 2.45;
    const cardSpacing = 2.95;
    const totalEvents = events.length;
    const totalSpan = totalEvents * cardSpacing;

    const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight, 16, 16);

    // Create high-resolution CanvasTextures for each event (strictly Name, Date, Venue, No Image)
    const cardCanvases: HTMLCanvasElement[] = [];
    const textures: THREE.CanvasTexture[] = [];

    events.forEach((ev) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 1160;
      offscreen.height = 490;
      drawCardOnCanvas(offscreen, ev);
      cardCanvases.push(offscreen);

      const tex = new THREE.CanvasTexture(offscreen);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      textures.push(tex);
    });

    // Re-draw textures once fonts are completely loaded
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        cardCanvases.forEach((offscreen, idx) => {
          drawCardOnCanvas(offscreen, events[idx]);
          textures[idx].needsUpdate = true;
        });
        renderer.render(scene, camera);
      });
    }

    const meshes: THREE.Mesh[] = [];
    const materials: THREE.MeshBasicMaterial[] = [];

    events.forEach((ev, idx) => {
      const material = new THREE.MeshBasicMaterial({
        map: textures[idx % textures.length],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.98,
      });
      materials.push(material);

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { event: ev, index: idx };
      marqueeGroup.add(mesh);
      meshes.push(mesh);
    });

    let currentOffset = 0;
    let targetOffset = 0;
    let isPointerDown = false;
    let isHovered = false;
    let startY = 0;
    let frame = 0;
    let previousTime = 0;
    let hostVisible = true;
    let documentVisible = !document.hidden;

    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      startY = e.clientY;
      canvas.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) {
        canvas.style.cursor = "grab";
        return;
      }
      const deltaY = e.clientY - startY;
      targetOffset -= deltaY * 0.016;
      startY = e.clientY;
      canvas.style.cursor = "grabbing";
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      canvas.releasePointerCapture?.(e.pointerId);
      canvas.style.cursor = "grab";
    };

    const onPointerEnter = () => {
      isHovered = true;
    };

    const onPointerLeave = () => {
      isHovered = false;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("pointerenter", onPointerEnter);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const render = (time = performance.now()) => {
      const deltaSec = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0.016;
      previousTime = time;

      if (!isPointerDown) {
        // Continuous upward vertical 3D flow (slows smoothly on hover)
        const currentSpeedMultiplier = isHovered ? 0.35 : 0.85;
        targetOffset += deltaSec * currentSpeedMultiplier * speedRef.current;
      }

      currentOffset += (targetOffset - currentOffset) * 0.1;

      // Position along a 3D vertical parabolic curve
      meshes.forEach((mesh, idx) => {
        let posY = (idx * cardSpacing - currentOffset) % totalSpan;
        if (posY < -totalSpan / 2) posY += totalSpan;
        if (posY > totalSpan / 2) posY -= totalSpan;

        const normalizedY = posY / (totalSpan / 2);
        // Vertical depth: center is closest (Z = 0), top/bottom curve into background
        const posZ = -Math.pow(normalizedY, 2) * 3.6;
        const rotX = normalizedY * 0.28;
        const scale = 1.05 - Math.abs(normalizedY) * 0.15;

        mesh.position.set(0, posY, posZ);
        mesh.rotation.set(rotX, 0, 0);
        mesh.scale.setScalar(Math.max(0.7, scale));

        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = THREE.MathUtils.clamp(
          1.15 - Math.abs(normalizedY) * 0.8,
          0.15,
          1
        );
      });

      if (hostVisible && documentVisible) {
        renderer.render(scene, camera);
      }
      frame = requestAnimationFrame(render);
    };

    const updateDimensions = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(host);
    updateDimensions();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        hostVisible = entry.isIntersecting;
        if (hostVisible && documentVisible) {
          renderer.render(scene, camera);
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(host);

    const onVisibilityChange = () => {
      documentVisible = !document.hidden;
      if (documentVisible && hostVisible) {
        renderer.render(scene, camera);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("pointerenter", onPointerEnter);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      textures.forEach((tex) => tex.dispose());
      materials.forEach((mat) => mat.dispose());
      geometry.dispose();
      renderer.dispose();
    };
  }, [events]);

  return (
    <div
      ref={hostRef}
      className={`relative w-full h-full select-none ${className}`}
      style={{ touchAction: "none" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
