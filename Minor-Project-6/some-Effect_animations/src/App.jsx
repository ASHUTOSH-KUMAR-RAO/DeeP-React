import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Marki from "./components/Marki";
import About from "./components/About";
import Circle from "./components/Circle";
import Features from "./components/Features";
import ThreeCards from "./components/ThreeCards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-500">
      <Nav />
      <Landing />
      <Marki />
      <About />
      <Circle />
      <Features />
      <ThreeCards />
      <Footer />
    </div>
  );
};

export default App;
