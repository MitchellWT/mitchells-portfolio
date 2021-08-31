import React, {useRef} from 'react'
import * as THREE from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {Text, Plane} from '@react-three/drei'
import UbuntuLight from '../fonts/Ubuntu-Light.ttf'
import * as NameDiskStyle from '../styles/namedisk.module.scss'

function DiskWithName() {
    const namedisk = useRef()
    const cylinderMaterial = new THREE.MeshBasicMaterial({opacity: 0, transparent: true})
    let lastMouse = 0

    useFrame((state) => {
        const {camera} = state

        namedisk.current.rotation.y += 0.02
        camera.position.y = document.body.getBoundingClientRect().top * 0.001
        
        document.body.onmousemove = (event) => {
            let normalizedX = event.clientX / screen.width
            normalizedX -= 0.5

            camera.rotation.z = normalizedX * -1
        }
    })

    return (
        <mesh>
            <Plane ref={namedisk} material={cylinderMaterial} rotation={[0.09, 0, 0]} position={[0, 0, 0]}>
                <Text color='#101219' anchorX='center' anchorY='middle'
                    curveRadius={1.85} font={UbuntuLight} fontSize={1} position={[0, 0, -1.85]}
                    depthOffset={1}  letterSpacing={0.1} fillOpacity={0.5}>
                    
                    MITCHELL TSUTSULIS
                </Text>
            </Plane>
        </mesh>
    )
}

export default function NameDisk() {
    return (
        <Canvas camera={{fov: 70, near: 0.1, far: 1000, position: [0, 0, 3.5]}} className={NameDiskStyle.nameDisk}>
            
            <DiskWithName />
        </Canvas>
    )
}