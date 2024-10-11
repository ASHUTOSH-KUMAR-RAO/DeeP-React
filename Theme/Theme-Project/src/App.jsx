import React, { createContext, useState } from "react";
import Child1 from "./Components/Child1";
import "./App.css";

const ThemeContext = createContext(); //todo =? 1st Step
const App = () => {
  const [theme, setTheme] = useState('light'); //? => 2nd Step
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
        {/* 3rd Step provider bnate hai  */}

        <div className="Container" style={{backgroundColor:theme==='light'?"skyblue":"black"}} >
        <Child1 />

        </div>
       
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
export { ThemeContext };
