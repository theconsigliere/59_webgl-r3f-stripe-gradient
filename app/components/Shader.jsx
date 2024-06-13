import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

// Tutorial: https://www.youtube.com/watch?v=f4s1h2YETNY
const NewShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
    // uColor1: new THREE.Color("#ff0000"),
    // uColor2: new THREE.Color("#00ff00"),
    // uColor3: new THREE.Color("#0000ff"),
    // uColor4: new THREE.Color("#ff00ff"),
    side: THREE.DoubleSide,
  },
  // THREE.doubleSide renders both sides of the plane

  /*vertex*/ `      
      varying vec2 vUv;
      void main()
      {
        //Position
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        // Final position
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
        vUv = uv;
      }
      `,
  /*fragment*/ `
      uniform float uTime;

      varying vec2 vUv;  
      
       
      void main()
      {
     
       gl_FragColor = vec4(vUv, 1.0, 1.0);
      }`
)

extend({ NewShaderMaterial })

export { NewShaderMaterial }
