import React from "react";
import { useNavigate } from "react-router-dom";

const Awash = () => {
  const Navigation = useNavigate();

  const handleClick2 = () => {
    Navigation("/Abhishek");
  };
  return (
    <div>
      <h1>Kaise ho Awash beta ❤️</h1>
      <button onClick={handleClick2}>move to Abhishek Page</button>
    </div>
  );
};

export default Awash;
