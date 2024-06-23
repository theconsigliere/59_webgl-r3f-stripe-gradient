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
    uColors: [
      new THREE.Color("#00FFFF"),
      new THREE.Color("#0099f2"),
      new THREE.Color("#4b55de"),
      new THREE.Color("#1ef2b2"),
      new THREE.Color("#caebe9"),
    ],
    uFreq: [0.3, 0.4],
    uMultiplyTime: 0.1,
    side: THREE.DoubleSide,
  },
  // THREE.doubleSide renders both sides of the plane

  /*vertex*/ `   
      uniform float uTime;  
      uniform vec3 uColors[5];
      uniform vec2 uFreq;
      uniform float uMultiplyTime;

      varying vec2 vUv;
      varying vec3 vColor;
   
      ${noise}

      void main()
      {
        vUv = uv;
        float time = uTime * uMultiplyTime;
        vec2 noiseCoord = uv*vec2(3., 4.);


        // tilt vertexs away from camera
        float tilt = -0.8*vUv.y;

        // inclione palne towards camera
        float incline = vUv.x*0.1;
        
        float offset = incline * mix(-.25,.25,vUv.y);

        float noise = snoise(vec3(noiseCoord.x + time *3., noiseCoord.y, time * 10.));

        // stop noise from going below 0 keeps plane still plane like
        noise = max(0., noise);

        vec3 newPosition = vec3(position.xy, position.z + noise * .75 + tilt + incline + offset);


        //Position
        vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
        // Final position
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
      
        
        // Colors
        vColor = uColors[4];

        for(int i = 0; i < 5; i++)
        {

        float noiseFlow = 5. + float(i) * .3;
        float noiseSpeed = 10. + float(i) * .3;
        float noiseSeed = 1. + float(i) * 10.;

       // float noiseFloor = .1;
      //  float noiseCeil = .6 + float(i) +0.07;
     
        float noise = 
       // smoothstep(noiseFloor, noiseCeil,
          snoise(
              vec3(noiseCoord.x * uFreq.x + time * noiseFlow, 
              noiseCoord.y * uFreq.y, 
              time * noiseSpeed + noiseSeed
            )
         // )
        );


        vColor = mix(vColor, uColors[i], noise);
         
        }



      }
      `,
  /*fragment*/ `

      varying vec2 vUv;  
      varying vec3 vColor;

    
      void main()
      {

     
        gl_FragColor = vec4(vColor, 1.0);
      }`
)

extend({ NewShaderMaterial })

export { NewShaderMaterial }
