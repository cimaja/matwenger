"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface ShaderAnimationProps {
  theme?: string
}

export function ShaderAnimation({ theme }: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)
  const loopCountRef = useRef(0)
  const targetTimeRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const isDark = theme === 'dark'

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader with theme support
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float isDark;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        // For light theme, make center blend to white like dark theme blends to black
        if (isDark < 0.5) {
          // Calculate total intensity
          float intensity = (color.r + color.g + color.b) / 3.0;
          
          // Apply aggressive fade to white for dim areas
          // Use power function to push low values to white faster
          float threshold = 0.3;
          if (intensity < threshold) {
            // Dim areas: fade strongly to white
            color = mix(vec3(1.0), color, pow(intensity / threshold, 2.0));
          } else {
            // Bright areas: keep colors but slightly lighten
            color = mix(color, vec3(1.0), 0.1);
          }
        }
        
        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 0.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      isDark: { type: "f", value: isDark ? 1.0 : 0.0 },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    // The shader uses fract(t) where t = time*0.05, so one cycle = 1.0/0.05 = 20 time units
    const CYCLE_DURATION = 20
    const TARGET_LOOPS = 0
    const FREEZE_PERCENTAGE = 0.38
    const FREEZE_TIME = TARGET_LOOPS * CYCLE_DURATION + (CYCLE_DURATION * FREEZE_PERCENTAGE)
    
    console.log('Shader will freeze at time:', FREEZE_TIME)
    
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      
      // Only increment time if we haven't reached the freeze point
      if (uniforms.time.value < FREEZE_TIME) {
        uniforms.time.value += 0.05
        
        // Log every second (60 frames)
        if (Math.floor(uniforms.time.value) !== Math.floor(uniforms.time.value - 0.05)) {
          console.log('Animation time:', uniforms.time.value.toFixed(2))
        }
      } else {
        // Log once when frozen
        if (uniforms.time.value === FREEZE_TIME || Math.abs(uniforms.time.value - FREEZE_TIME) < 0.06) {
          console.log('Animation FROZEN at time:', uniforms.time.value.toFixed(2))
        }
      }
      
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [theme])

  return (
    <div
      ref={containerRef}
      className="w-full h-screen"
      style={{
        background: theme === 'dark' ? "#000" : "#fff",
        overflow: "hidden",
      }}
    />
  )
}
