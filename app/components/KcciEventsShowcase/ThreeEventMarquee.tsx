"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { KcciEventItem } from "@/app/constants/eventsKcci";

export interface ThreeEventMarqueeProps {
  events: KcciEventItem[];
  onSelectEvent: (event: KcciEventItem) => void;
  speed?: number;
  className?: string;
}

export const ThreeEventMarquee: React.FC<ThreeEventMarqueeProps> = ({
  events,
  onSelectEvent,
  speed = 1,
  className = "",
}) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speedRef = useRef(speed);
  const onSelectRef = useRef(onSelectEvent);

  useEffect(() => {
    speedRef.current = speed;
    onSelectRef.current = onSelectEvent;
  }, [speed, onSelectEvent]);

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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 15);

    const marqueeGroup = new THREE.Group();
    scene.add(marqueeGroup);

    const cardWidth = 3.6;
    const cardHeight = 2.4;
    const cardSpacing = 4.2;
    const totalEvents = events.length;
    const totalSpan = totalEvents * cardSpacing;

    // Card plane geometry with chamfered ratio
    const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight, 16, 16);
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    let disposed = false;

    // Load textures for all events
    const textures = events.map((ev) => {
      const tex = loader.load(ev.imageSrc || "/sectors/kashmir-handicrafts.jpg", () => {
        if (disposed) {
          tex.dispose();
          return;
        }
        renderer.render(scene, camera);
      });
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      return tex;
    });

    // Create panel meshes
    const meshes: THREE.Mesh[] = [];

    events.forEach((ev, idx) => {
      const material = new THREE.MeshBasicMaterial({
        map: textures[idx % textures.length],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { event: ev, index: idx };
      marqueeGroup.add(mesh);
      meshes.push(mesh);
    });

    let currentOffset = 0;
    let targetOffset = 0;
    let isPointerDown = false;
    let startX = 0;
    let hasDragged = false;
    let frame = 0;
    let previousTime = 0;
    let hostVisible = true;
    let documentVisible = !document.hidden;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      startX = e.clientX;
      hasDragged = false;
      canvas.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!isPointerDown) {
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(meshes);
        canvas.style.cursor = hits.length > 0 ? "pointer" : "grab";
        return;
      }

      const deltaX = e.clientX - startX;
      if (Math.abs(deltaX) > 4) {
        hasDragged = true;
      }

      targetOffset += deltaX * 0.015;
      startX = e.clientX;
      canvas.style.cursor = "grabbing";
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      canvas.releasePointerCapture?.(e.pointerId);
      canvas.style.cursor = "grab";

      if (!hasDragged) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(meshes);
        if (hits.length > 0) {
          const hitEvent = hits[0].object.userData.event as KcciEventItem;
          if (hitEvent && onSelectRef.current) {
            onSelectRef.current(hitEvent);
          }
        }
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    const render = (time = performance.now()) => {
      const deltaSec = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0.016;
      previousTime = time;

      if (!isPointerDown) {
        targetOffset -= deltaSec * 0.85 * speedRef.current;
      }

      currentOffset += (targetOffset - currentOffset) * 0.1;

      // Position panels along a 3D curved horizontal arc
      meshes.forEach((mesh, idx) => {
        let posX = ((idx * cardSpacing + currentOffset) % totalSpan);
        if (posX < -totalSpan / 2) posX += totalSpan;
        if (posX > totalSpan / 2) posX -= totalSpan;

        // Quadratic parabolic depth curve (3D arch)
        const normalizedX = posX / (totalSpan / 2);
        const posZ = -Math.pow(normalizedX, 2) * 3.5;
        const rotY = -normalizedX * 0.35;
        const scale = 1.05 - Math.abs(normalizedX) * 0.18;

        mesh.position.set(posX, Math.sin(time * 0.0012 + idx) * 0.15, posZ);
        mesh.rotation.set(0, rotY, 0);
        mesh.scale.setScalar(Math.max(0.65, scale));

        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = THREE.MathUtils.clamp(1.15 - Math.abs(normalizedX) * 0.75, 0.25, 1);
      });

      renderer.render(scene, camera);
    };

    const tick = (time: number) => {
      if (disposed || !hostVisible || !documentVisible) {
        frame = 0;
        previousTime = 0;
        return;
      }
      render(time);
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame && hostVisible && documentVisible) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const width = Math.max(1, Math.round(bounds.width));
      const height = Math.max(1, Math.round(bounds.height));
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      hostVisible = entry?.isIntersecting ?? true;
      if (hostVisible) start();
      else stop();
    });

    const handleVisibility = () => {
      documentVisible = !document.hidden;
      if (documentVisible) start();
      else stop();
    };

    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    document.addEventListener("visibilitychange", handleVisibility);
    resize();
    start();

    return () => {
      disposed = true;
      stop();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      marqueeGroup.clear();
      geometry.dispose();
      meshes.forEach((m) => {
        (m.material as THREE.Material).dispose();
      });
      textures.forEach((t) => t.dispose());
      renderer.dispose();
    };
  }, [events]);

  return (
    <div
      ref={hostRef}
      className={`relative w-full h-full select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block touch-none" />
    </div>
  );
};
