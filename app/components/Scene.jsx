"use client"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { Perf } from "r3f-perf"
import { Environment, OrbitControls } from "@react-three/drei"

import Plane from "./Plane"

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} style={{ backgroundColor: "#141414" }}>
      <Perf position={"bottom-left"} />
      <OrbitControls makeDefault />
      <Plane />
    </Canvas>
  )
}
