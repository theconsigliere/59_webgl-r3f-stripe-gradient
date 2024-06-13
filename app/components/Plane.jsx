import { useRef } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useControls } from "leva"

import { NewShaderMaterial } from "./Shader"

export default function Plane() {
  const ref = useRef()
  const { viewport, size } = useThree()

  // const shaderProps = useControls("Shader Props", {
  //   rings: { value: 10, min: 1, max: 100 },
  //  fract: { value: 2.0, min: 0.1, max: 10 },
  // color1: "#ff0000",
  // color2: "#00ff00",
  // color3: "#0000ff",
  // color4: "#ff00ff",
  // })

  useFrame((state, delta) => {
    ref.current.uTime += delta
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <newShaderMaterial
        ref={ref}
        key={NewShaderMaterial.key}
        uResolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        // uColor1={shaderProps.color1}
        // uColor2={shaderProps.color2}
        // uColor3={shaderProps.color3}
        // uColor4={shaderProps.color4}
      />
    </mesh>
  )
}
