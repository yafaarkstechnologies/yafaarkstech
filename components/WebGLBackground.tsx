'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    vec2 q = vec2(0.);
    q.x = snoise(st + vec2(0.0, uTime * 0.015));
    q.y = snoise(st + vec2(1.0, uTime * 0.01));

    vec2 r = vec2(0.);
    r.x = snoise(st + 1.0 * q + vec2(1.7, 9.2) + 0.05 * uTime);
    r.y = snoise(st + 1.0 * q + vec2(8.3, 2.8) + 0.04 * uTime);

    float f = snoise(st + r);

    // Charcoal Theme Palette: #121212
    vec3 colorBg = vec3(0.07, 0.07, 0.07); // ~ #121212
    vec3 colorAlt = vec3(0.12, 0.12, 0.12); // Slightly lighter charcoal
    vec3 colorAccent = vec3(0.81, 0.76, 0.70); // Cream #CEC2B2

    float mixRatio = smoothstep(-1.0, 1.0, f);
    vec3 finalColor = mix(colorBg, colorAlt, mixRatio);
    
    // Very subtle highlights
    float highlight = smoothstep(0.5, 0.9, f * f);
    finalColor = mix(finalColor, colorAccent * 0.1, highlight);

    // Vignette
    float vignette = length(gl_FragCoord.xy / uResolution.xy - 0.5);
    finalColor *= 1.0 - vignette * 0.5;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [resolution, setResolution] = useState(new THREE.Vector2(1920, 1080));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setResolution(new THREE.Vector2(window.innerWidth, window.innerHeight));
      const handleResize = () => {
        setResolution(new THREE.Vector2(window.innerWidth, window.innerHeight));
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: resolution },
    }),
    [resolution]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }}>
        <ShaderPlane />
      </Canvas>
      <div className="absolute inset-0 bg-background/50" />
    </div>
  );
}
