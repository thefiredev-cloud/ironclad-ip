'use client'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Shield() {
  const shieldRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const t = useRef(0)

  useFrame((_, delta) => {
    t.current += delta
    if (shieldRef.current) {
      shieldRef.current.rotation.y = Math.sin(t.current * 0.5) * 0.3
    }
    if (glowRef.current) {
      const pulse = (Math.sin(t.current * 2) + 1) / 2
      ;(glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.05 + pulse * 0.1
    }
  })

  // Shield shape using a custom geometry approximation with CylinderGeometry
  const shieldShape = new THREE.Shape()
  shieldShape.moveTo(0, 2)
  shieldShape.lineTo(1.5, 1.2)
  shieldShape.lineTo(1.5, -0.5)
  shieldShape.quadraticCurveTo(1.5, -1.5, 0, -2.2)
  shieldShape.quadraticCurveTo(-1.5, -1.5, -1.5, -0.5)
  shieldShape.lineTo(-1.5, 1.2)
  shieldShape.lineTo(0, 2)

  const shieldGeometry = new THREE.ShapeGeometry(shieldShape)
  const shieldEdges = new THREE.EdgesGeometry(shieldGeometry)

  // Patent P symbol points
  const pShape = new THREE.Shape()
  pShape.moveTo(-0.3, -0.6)
  pShape.lineTo(-0.3, 0.6)
  pShape.lineTo(0.1, 0.6)
  pShape.quadraticCurveTo(0.5, 0.6, 0.5, 0.2)
  pShape.quadraticCurveTo(0.5, -0.1, 0.1, -0.1)
  pShape.lineTo(-0.3, -0.1)

  const pGeometry = new THREE.ShapeGeometry(pShape)
  const pEdges = new THREE.EdgesGeometry(pGeometry)

  return (
    <group>
      {/* Shield outline */}
      <lineSegments geometry={shieldEdges}>
        <lineBasicMaterial color="#eab308" transparent opacity={0.9} />
      </lineSegments>

      {/* Shield fill glow */}
      <mesh ref={glowRef} geometry={shieldGeometry}>
        <meshBasicMaterial color="#eab308" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>

      {/* Patent P */}
      <group position={[-0.1, 0, 0.1]}>
        <lineSegments geometry={pEdges}>
          <lineBasicMaterial color="#eab308" transparent opacity={1} />
        </lineSegments>
      </group>

      {/* Rotating outer ring */}
      <mesh ref={shieldRef} position={[0, 0, -0.2]}>
        <torusGeometry args={[2, 0.02, 8, 64]} />
        <meshBasicMaterial color="#eab308" transparent opacity={0.2} />
      </mesh>

      {/* Pulse rings */}
      {[2.4, 2.8, 3.2].map((r, i) => (
        <mesh key={i} position={[0, 0, -0.3]}>
          <torusGeometry args={[r, 0.01, 8, 64]} />
          <meshBasicMaterial color="#eab308" transparent opacity={0.05 + i * 0.03} />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} color="#eab308" intensity={2} />
      <pointLight position={[-3, -3, 3]} color="#eab308" intensity={0.5} />
      <Shield />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
