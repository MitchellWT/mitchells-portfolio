import React, {useRef} from 'react'
import * as THREE from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {Html, Plane, OrthographicCamera} from '@react-three/drei'
import UbuntuLight from '../fonts/Ubuntu-Light.ttf'
import * as FallingImagesStyle from '../styles/fallingimages.module.scss'

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

function FallingImage({material, frameOffset, textContent}) {
    const mesh = useRef()
    const text = useRef()

    let hover = false
    let counter = 0
    let topBound = 0 
    let bottomBound = 0
    let leftBound = 0
    let rightBound = 0

    useFrame((state) => {
        if (counter == 0) {
            mesh.current.position.z = 0

            topBound = new THREE.Vector3(0, 1, 0).unproject(state.camera).y + 1
            bottomBound = new THREE.Vector3(0, -1, 0).unproject(state.camera).y - 1

            mesh.current.position.y = topBound

            leftBound = new THREE.Vector3(1, 0, 0).unproject(state.camera).x - 1
            rightBound = new THREE.Vector3(-1, 0, 0).unproject(state.camera).x + 1

            mesh.current.position.x = getRandomNumber(leftBound, rightBound)
        }

        if (counter > frameOffset && !hover) {
            mesh.current.position.y -= 0.01
            
            if (mesh.current.scale.x != 1)
            {
                mesh.current.scale.x = 1
                mesh.current.scale.y = 1

                text.current.visible = false
            }
        }

        if (hover) {
            mesh.current.scale.x = 1.5
            mesh.current.scale.y = 1.5

            text.current.visible = true
        }

        if (mesh.current.position.y <= bottomBound) {
            mesh.current.position.y = topBound + 1
        }

        counter++;
    })

    return (
        <mesh ref={mesh}>
            <Plane material={material}
            onPointerOver={(e) => {hover = true}}
            onPointerOut={(e) => {hover = false}}
            />

            <Html as={'h2'} font={UbuntuLight} className={FallingImagesStyle.fallingImageText} 
                ref={text}>
                
                {textContent}
            </Html>
        </mesh>
    )
}

export default function FallingImagesContainer() {
    const images = ['https://images.halloweencostumes.ca/products/45912/1-1/minecraft-adult-creeper-prestige-costume.jpg', 
        'https://images.halloweencostumes.ca/products/45912/1-1/minecraft-adult-creeper-prestige-costume.jpg', 
        'https://images.halloweencostumes.ca/products/45912/1-1/minecraft-adult-creeper-prestige-costume.jpg']    
    const fallingImages = []
    const materials = []
    const texts = ['Epic Minecraft', 'Epic Minecraft', 'Epic Minecraft']
    const loader = new THREE.TextureLoader()
    let frameOffset = 0

    for (const [index, value] of images.entries()) {
        materials.push(new THREE.MeshBasicMaterial({
            map: loader.load(value)
        }))

        frameOffset = getRandomNumber(frameOffset, frameOffset + 10)

        fallingImages.push(<FallingImage material={materials[index]} frameOffset={frameOffset} textContent={texts[index]}/>)
    }

    return (
        <Canvas className={FallingImagesStyle.fallingImagesContainer}>
            <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={100} near={1} far={2}/>
            {fallingImages}
        </Canvas>
    )
}