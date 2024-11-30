import React, { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
      <div className=" relative w-full min-h-screen">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>

      <div className=" relative w-full min-h-screen">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>

      <div className=" relative w-full min-h-screen">
        {data[2].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
    </>
  );
};

export default App;
