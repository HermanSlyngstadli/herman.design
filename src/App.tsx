import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, Hud, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import './App.css'

function App() {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Hud>
                    <PerspectiveCamera makeDefault position={[0, 0, -10]} />
                    <mesh>
                        <ringGeometry />
                    </mesh>
                </Hud>
                <OrbitControls />
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <Bounds fit clip observe damping={6} margin={2}>
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={'pink'} />
                    </mesh>
                    <pointLight position={[0, 10, 10]} />
                </Bounds>
            </Suspense>
        </Canvas>
    )
}

export default App
