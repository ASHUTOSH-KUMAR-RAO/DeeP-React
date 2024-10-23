import React from "react";
import Background from "./Components/Background";
import Forground from "./Components/Forground";

const App = () => {
  return (
    <div className="w-full h-screen bg-lime-200 relative">
     <Background/>
     <Forground/>
    
    </div>
  );
};

export default App;
