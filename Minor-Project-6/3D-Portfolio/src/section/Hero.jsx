import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei"; // If you are using `@react-three/drei` for PerspectiveCamera
import HackerRoom from "../components/HackerRoom";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hell'o I,am Ashutosh <span className="waving-hand">🫲</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Projects & Ideas</p>
      </div>
      <div className="h-full w-full inset-0 absolute">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HackerRoom />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
