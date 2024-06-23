import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import { noise } from "./shaders/noise"

// remove json formating from noise

// Tutorial: https://www.youtube.com/watch?v=f4s1h2YETNY
const NewShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
    uColor1: new THREE.Color("#000000"),
    // uColor2: new THREE.Color("#00ff00"),
    // uColor3: new THREE.Color("#0000ff"),
    // uColor4: new THREE.Color("#ff00ff"),
    side: THREE.DoubleSide,
  },
  // THREE.doubleSide renders both sides of the plane

  /*vertex*/ `      
      varying vec2 vUv;
      uniform float uTime;
  
      ${noise}

      void main()
      {
        vUv = uv;
        vec2 noiseCoord = uv*vec2(3., 4.);

        // tilt vertexs away from camera
        float tilt = -0.8*vUv.y;

        // inclione palne towards camera
        float incline = vUv.x*0.1;
        
        float offset = incline * mix(-.25,.25,vUv.y);


        float noise = snoise(vec3(noiseCoord.x + uTime *3., noiseCoord.y, uTime * 10.));

        // stop noise from going below 0 keeps plane still plane like
        noise = max(0., noise);

        vec3 newPosition = vec3(position.xy, position.z + noise * .75 + tilt + incline + offset);

        //Position
        vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
        // Final position
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
        vUv = uv;
      }
      `,
  /*fragment*/ `
 
      uniform vec3 uColor1;
      varying vec2 vUv;  
   
      
      void main()
      {
     
      //  gl_FragColor = vec4(uColor1, 1.0);
       gl_FragColor = vec4(vUv, 1., 1.0);
      }`
)

extend({ NewShaderMaterial })

export { NewShaderMaterial }
