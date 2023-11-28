import {SwiperSlide } from 'swiper/react';
import {  MeshTransmissionMaterial, ContactShadows, Environment,OrbitControls, PresentationControls, Effects, useTexture ,Loader,useGLTF, Center } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas ,useLoader,useFrame} from '@react-three/fiber'
import { Vector3 } from 'three';
import { useRef } from 'react';
let global = {}
function Book() {
  
    let ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.set(Math.cos(t / 4) / 4, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 4)
        ref.current.position.y = (0.5 + Math.cos(t / 2)) / 5
      })

    const gltf = useLoader(GLTFLoader, '/bookModel.glb')
    global.gltf1 = gltf

      return (
        <group ref={ref}>
          <primitive receiveShadow castShadow object={gltf.scene}/>
          </group>
      );
  }
let Scene = ()=>{
    return <div id="canvas-container" style={{width:"100%",height:'100%'}}>
                <Canvas shadows colorManagement flat dpr={[1, 2]} camera={{ rotation:[0,0,-Math.PI],position: [0, 0, 1], fov: 25 }}>
                <color attach="background" args={['#19191A']} />
                <Environment preset="city"  blur={0} />
                <ambientLight intensity={0.7} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
                <PresentationControls snap global zoom={1}   >
                <Center scale={0.014} position={[0,0,0]} rotation={[0,-Math.PI/2,0]}>
                    <Book/>
                </Center>
                    </PresentationControls>
                </Canvas>
            </div>
}

export default Scene