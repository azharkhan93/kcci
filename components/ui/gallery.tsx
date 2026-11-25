"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import * as THREE from "three";

const DEFAULT_GALLERY_IMAGE_URLS = [
  "https://cdn.21st.dev/assets/localized/86810ac01c6e9fc4d0944f4709c0495541fbb0916ba994d36bd8cf22f1a7f06c.webp",
  "https://cdn.21st.dev/assets/localized/7c777c14efb761dbccbbb3e8b8ff13920231964944c2038472a2ffa4d99c395d.webp",
  "https://cdn.21st.dev/assets/localized/8a11b3e5ba715ffbbd881947094563baae2540b407674bd0a15891037e15bba9.webp",
  "https://cdn.21st.dev/assets/localized/6c09469827c02ff16e4041fc1da82efdc9e59832b59ec29cc0cbe761b0862518.webp",
  "https://cdn.21st.dev/assets/localized/2b1aec480447e45c5b717363def6ef96bc38443179dc6f97ea25a0f8461c07b7.webp",
] as const;

export type GalleryItem = {
  id?: string;
  imageSrc: string;
  imageAlt?: string;
  title?: string;
};

export type GalleryProps = {
  speed?: number;
  scale?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  direction?: 1 | -1;
  images?: string[];
  items?: GalleryItem[];
  panelCount?: number;
  interactive?: boolean;
  onSelect?: (index: number) => void;
  className?: string;
  style?: CSSProperties;
};

export const GALLERY_DEFAULTS = {
  speed: 1,
  scale: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const satisfies Required<
  Pick<
    GalleryProps,
    "speed" | "scale" | "opacity" | "hue" | "saturation" | "brightness"
  >
>;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function Gallery({
  speed = GALLERY_DEFAULTS.speed,
  scale = GALLERY_DEFAULTS.scale,
  opacity = GALLERY_DEFAULTS.opacity,
  hue = GALLERY_DEFAULTS.hue,
  saturation = GALLERY_DEFAULTS.saturation,
  brightness = GALLERY_DEFAULTS.brightness,
  direction = 1,
  images,
  items,
  panelCount = 14,
  interactive = true,
  onSelect,
  className = "",
  style,
}: GalleryProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const settingsRef = useRef({ speed, scale, direction, interactive });
  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    settingsRef.current = { speed, scale, direction, interactive };
    onSelectRef.current = onSelect;
  }, [speed, scale, direction, interactive, onSelect]);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    const resolvedUrls =
      images && images.length > 0
        ? images
        : items && items.length > 0
          ? items.map((it) => it.imageSrc)
          : Array.from(DEFAULT_GALLERY_IMAGE_URLS);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.z = 16.5;

    const gallery = new THREE.Group();
    scene.add(gallery);

    // Curved cylindrical panel geometry
    const geometry = new THREE.CylinderGeometry(
      4.8,
      4.8,
      1.85,
      64,
      1,
      true,
      0,
      Math.PI * 0.42
    );

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    let disposed = false;
    let frame = 0;
    let elapsed = 0;
    let previousTime = 0;
    let hostVisible = true;
    let documentVisible = !document.hidden;
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const textures = resolvedUrls.map((url) => {
      const texture = loader.load(url, () => {
        if (disposed) {
          texture.dispose();
          return;
        }
        renderer.render(scene, camera);
      });
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(
        8,
        renderer.capabilities.getMaxAnisotropy()
      );
      return texture;
    });

    const totalPanels = Math.max(6, panelCount);
    const materials = Array.from(
      { length: totalPanels },
      (_, index) =>
        new THREE.MeshBasicMaterial({
          map: textures[index % textures.length],
          opacity: 0.94,
          side: THREE.DoubleSide,
          toneMapped: false,
          transparent: true,
        })
    );

    const panelMeshes: THREE.Mesh[] = [];

    materials.forEach((material, index) => {
      const panel = new THREE.Mesh(geometry, material);
      const verticalOffset = (index - totalPanels / 2) * 0.72;
      const angle = (index / totalPanels) * Math.PI * 4;

      panel.position.y = verticalOffset;
      panel.rotation.y = angle;
      panel.userData = {
        panelIndex: index,
        imageIndex: index % resolvedUrls.length,
      };

      panelMeshes.push(panel);
      gallery.add(panel);
    });

    // Inertial interaction state
    let isPointerDown = false;
    let startX = 0;
    let startY = 0;
    let hasDragged = false;
    let currentRotationY = 0;
    let targetRotationY = 0;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (e: PointerEvent) => {
      if (!settingsRef.current.interactive) return;
      isPointerDown = true;
      startX = e.clientX;
      startY = e.clientY;
      hasDragged = false;
      canvas.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!settingsRef.current.interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!isPointerDown) {
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(panelMeshes);
        canvas.style.cursor = hits.length > 0 ? "pointer" : "grab";
        return;
      }

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        hasDragged = true;
      }

      targetRotationY += deltaX * 0.006;
      startX = e.clientX;
      startY = e.clientY;
      canvas.style.cursor = "grabbing";
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      canvas.releasePointerCapture?.(e.pointerId);
      canvas.style.cursor = "grab";

      if (!hasDragged && onSelectRef.current) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(panelMeshes);
        if (hits.length > 0) {
          const clickedImageIndex = hits[0].object.userData.imageIndex;
          if (typeof clickedImageIndex === "number") {
            onSelectRef.current(clickedImageIndex);
          }
        }
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    const render = (time = performance.now()) => {
      const safeSpeed = clamp(settingsRef.current.speed, 0, 3);
      const safeScale = clamp(settingsRef.current.scale, 0.7, 1.35);
      const dir = settingsRef.current.direction;

      if (previousTime) {
        const deltaSec = Math.min((time - previousTime) / 1000, 0.05);
        elapsed += deltaSec * safeSpeed;
      }
      previousTime = time;

      if (!isPointerDown) {
        targetRotationY += 0.0035 * safeSpeed * dir;
      }

      currentRotationY += (targetRotationY - currentRotationY) * 0.08;
      gallery.rotation.y = currentRotationY;
      gallery.position.y = Math.sin(elapsed * 0.9) * 0.55;
      gallery.scale.setScalar(safeScale);

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
      if (reducedMotion) {
        render(0);
        return;
      }
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
      gallery.clear();
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
      renderer.dispose();
    };
  }, [images, items, panelCount]);

  return (
    <div
      ref={hostRef}
      className={`threeui-background gallery cursor-grab active:cursor-grabbing ${className}`}
      data-mode="light"
      role="img"
      aria-label="3D Cylindrical Slider"
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="gallery__canvas w-full h-full block touch-none"
        aria-hidden="true"
        style={{
          opacity: clamp(opacity, 0.05, 1),
          filter: `hue-rotate(${clamp(hue, -180, 180)}deg) saturate(${clamp(saturation, 0, 2)}) brightness(${clamp(brightness, 0.35, 1.65)})`,
        }}
      />
    </div>
  );
}

export default Gallery;
