import { useRef } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

import { NewShaderMaterial } from "./Shader"

export default function Plane() {
  const ref = useRef()
  const { viewport, size } = useThree()

  const shaderProps = useControls("Shader Props", {
    //   rings: { value: 10, min: 1, max: 100 },
    //  fract: { value: 2.0, min: 0.1, max: 10 },
    color1: "#00FFFF",
    color2: "#0099f2",
    color3: "#4b55de",
    color4: "#1ef2b2",
    color5: "#caebe9",
    frequency: [0.2, 0.25],
    wireframe: false,
    time: { value: 0.1, min: 0.001, max: 1.0 },
  })

  useFrame((state, delta) => {
    ref.current.uTime += delta * 0.05
  })

  return (
    <mesh scale={[viewport.width * 2, viewport.height * 2, 1]}>
      {/*  */}
      <planeGeometry args={[1, 1, 100, 100]} />
      <newShaderMaterial
        ref={ref}
        key={NewShaderMaterial.key}
        uResolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        wireframe={shaderProps.wireframe}
        uColors={[
          new THREE.Color(shaderProps.color1),
          new THREE.Color(shaderProps.color2),
          new THREE.Color(shaderProps.color3),
          new THREE.Color(shaderProps.color4),
          new THREE.Color(shaderProps.color5),
        ]}
        uFreq={shaderProps.frequency}
        uMultiplyTime={shaderProps.time}
      />
    </mesh>
  )
}
