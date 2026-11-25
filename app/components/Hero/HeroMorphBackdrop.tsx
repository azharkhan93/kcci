"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface HeroMorphSlideSource {
  id: string;
  imageSrc: string;
}

export interface HeroMorphBackdropProps {
  slides: HeroMorphSlideSource[];
  activeIdx: number;
  noiseScale?: number;
  edge?: number;
  drift?: number;
}

export interface HeroMorphHandle {
  renderMorph: (
    fromIdx: number,
    toIdx: number,
    progress: number,
    direction: 1 | -1,
  ) => void;
}

const VERT = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform sampler2D u_from;
uniform sampler2D u_to;
uniform float u_progress;
uniform vec2 u_resolution;
uniform float u_fromAspect;
uniform float u_toAspect;
uniform float u_scale;
uniform float u_direction;
uniform float u_edge;
uniform float u_drift;

varying vec2 v_uv;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(
    0.211324865405187,
    0.366025403784439,
   -0.577350269189626,
    0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(
    permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)
  );
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x  = 2.0 * fract(p * C.www) - 1.0;
  vec3 h  = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 v) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amplitude * snoise(v);
    v *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

vec2 mirror(vec2 uv) {
  return 1.0 - abs(1.0 - mod(uv, 2.0));
}

vec2 coverUV(vec2 uv, float imgAspect) {
  float canvasAspect = u_resolution.x / max(u_resolution.y, 1.0);
  vec2 scale = (canvasAspect > imgAspect)
    ? vec2(1.0, imgAspect / canvasAspect)
    : vec2(canvasAspect / imgAspect, 1.0);
  return mirror((uv - 0.5) * scale + 0.5);
}

void main() {
  float adjusted = u_progress * (1.0 + 2.0 * u_edge) - u_edge;

  float noise = fbm(v_uv * u_scale + vec2(0.0, u_progress * u_direction)) * 0.5 + 0.5;
  noise = smoothstep(
    0.0,
    2.0,
    length(texture2D(u_to, coverUV(v_uv, u_toAspect)).rgb) + noise
  );

  float mixFactor = 1.0 - smoothstep(adjusted - u_edge, adjusted + u_edge, noise);

  vec2 fromUV = coverUV(
    v_uv + vec2(0.0, noise * u_progress * u_drift * u_direction),
    u_fromAspect
  );
  vec2 toUV = coverUV(
    v_uv + vec2(0.0, noise * (1.0 - u_progress) * -0.5 * u_drift * u_direction),
    u_toAspect
  );

  gl_FragColor = mix(texture2D(u_from, fromUV), texture2D(u_to, toUV), mixFactor);
}
`;

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Could not create WebGL shader");
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("Shader compile failed: " + log);
  }
  return shader;
}

function linkProgram(
  gl: WebGLRenderingContext,
  vertSrc: string,
  fragSrc: string,
) {
  const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram();
  if (!program) throw new Error("Could not create WebGL program");
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  gl.deleteShader(vert);
  gl.deleteShader(frag);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error("Program link failed: " + log);
  }
  return program;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load " + src));
    img.src = src;
  });
}

/**
 * WebGL luminance-fbm noise morph dissolve backdrop driven imperatively by GSAP.
 */
export const HeroMorphBackdrop = forwardRef<
  HeroMorphHandle,
  HeroMorphBackdropProps
>(
  (
    { slides, activeIdx, noiseScale = 3.5, edge = 0.15, drift = 0.5 },
    ref,
  ) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);
    const [generation, setGeneration] = useState(0);

    const morphParamsRef = useRef({
      fromIdx: activeIdx,
      toIdx: activeIdx,
      progress: 1,
      direction: 1 as 1 | -1,
    });

    const tuningRef = useRef({ noiseScale, edge, drift });
    useEffect(() => {
      tuningRef.current = { noiseScale, edge, drift };
    }, [noiseScale, edge, drift]);

    const drawFnRef = useRef<(() => void) | null>(null);

    const renderMorph = useCallback(
      (
        fromIdx: number,
        toIdx: number,
        progress: number,
        direction: 1 | -1,
      ) => {
        morphParamsRef.current = {
          fromIdx,
          toIdx,
          progress: Math.min(Math.max(progress, 0), 1),
          direction,
        };
        drawFnRef.current?.();
      },
      [],
    );

    useImperativeHandle(
      ref,
      () => ({
        renderMorph,
      }),
      [renderMorph],
    );

    const sources = slides.map((s) => s.imageSrc).join("\n");

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas || slides.length === 0) return;

      const gl =
        canvas.getContext("webgl", { alpha: false, antialias: false }) ??
        (canvas.getContext(
          "experimental-webgl",
        ) as WebGLRenderingContext | null);

      if (!gl) {
        setFailed(true);
        return;
      }

      let program: WebGLProgram | null = null;
      let buffer: WebGLBuffer | null = null;
      const textures: (WebGLTexture | null)[] = slides.map(() => null);
      const aspects: number[] = slides.map(() => 16 / 9);
      const uniforms: Record<string, WebGLUniformLocation | null> = {};
      let disposed = false;

      const pick = (i: number) =>
        textures[i] ?? textures.find((t) => t !== null) ?? null;

      const draw = () => {
        if (disposed || !program) return;
        const { fromIdx, toIdx, progress, direction } = morphParamsRef.current;
        const t = tuningRef.current;

        const fromTex = pick(fromIdx);
        const toTex = pick(toIdx);
        if (!fromTex || !toTex) return;

        gl.useProgram(program);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, fromTex);
        gl.uniform1i(uniforms.from, 0);

        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, toTex);
        gl.uniform1i(uniforms.to, 1);

        gl.uniform1f(uniforms.progress, progress);
        gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
        gl.uniform1f(uniforms.fromAspect, aspects[fromIdx] ?? 1.777);
        gl.uniform1f(uniforms.toAspect, aspects[toIdx] ?? 1.777);
        gl.uniform1f(uniforms.scale, t.noiseScale);
        gl.uniform1f(uniforms.direction, direction);
        gl.uniform1f(uniforms.edge, Math.max(t.edge, 0.001));
        gl.uniform1f(uniforms.drift, t.drift);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      };

      drawFnRef.current = draw;

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = Math.round(canvas.clientWidth * dpr);
        const h = Math.round(canvas.clientHeight * dpr);
        if (w === 0 || h === 0) return;
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
        draw();
      };

      const observer = new ResizeObserver(resize);
      observer.observe(canvas);

      const onLost = (e: Event) => {
        e.preventDefault();
      };
      const onRestored = () => {
        setGeneration((g) => g + 1);
      };

      canvas.addEventListener("webglcontextlost", onLost);
      canvas.addEventListener("webglcontextrestored", onRestored);

      const init = async () => {
        try {
          program = linkProgram(gl, VERT, FRAG);
          gl.useProgram(program);

          buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW,
          );
          const loc = gl.getAttribLocation(program, "a_position");
          gl.enableVertexAttribArray(loc);
          gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

          for (const name of [
            "from",
            "to",
            "progress",
            "resolution",
            "fromAspect",
            "toAspect",
            "scale",
            "direction",
            "edge",
            "drift",
          ]) {
            uniforms[name] = gl.getUniformLocation(program, "u_" + name);
          }

          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

          let renderedFirst = false;
          let refused = 0;

          await Promise.all(
            slides.map((slide, idx) =>
              loadImage(slide.imageSrc).then(
                (img) => {
                  if (disposed) return;
                  const tex = gl.createTexture();
                  gl.bindTexture(gl.TEXTURE_2D, tex);
                  gl.texImage2D(
                    gl.TEXTURE_2D,
                    0,
                    gl.RGBA,
                    gl.RGBA,
                    gl.UNSIGNED_BYTE,
                    img,
                  );
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_WRAP_S,
                    gl.CLAMP_TO_EDGE,
                  );
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_WRAP_T,
                    gl.CLAMP_TO_EDGE,
                  );
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_MIN_FILTER,
                    gl.LINEAR,
                  );
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_MAG_FILTER,
                    gl.LINEAR,
                  );

                  textures[idx] = tex;
                  aspects[idx] =
                    img.naturalWidth / Math.max(img.naturalHeight, 1);

                  if (!renderedFirst) {
                    renderedFirst = true;
                    resize();
                    setReady(true);
                  } else {
                    draw();
                  }
                },
                () => {
                  refused += 1;
                  if (refused === slides.length && !disposed) {
                    setFailed(true);
                  }
                },
              ),
            ),
          );
        } catch {
          if (!disposed) setFailed(true);
        }
      };

      void init();

      return () => {
        disposed = true;
        drawFnRef.current = null;
        observer.disconnect();
        canvas.removeEventListener("webglcontextlost", onLost);
        canvas.removeEventListener("webglcontextrestored", onRestored);
        for (const tex of textures) {
          if (tex) gl.deleteTexture(tex);
        }
        if (buffer) gl.deleteBuffer(buffer);
        if (program) gl.deleteProgram(program);
        textures.fill(null);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sources, generation]);

    if (failed) return null;

    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 block w-full h-full pointer-events-none"
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 350ms ease",
        }}
      />
    );
  },
);

HeroMorphBackdrop.displayName = "HeroMorphBackdrop";
