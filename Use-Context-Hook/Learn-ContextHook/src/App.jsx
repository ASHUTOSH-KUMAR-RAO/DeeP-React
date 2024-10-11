import React, { createContext, useState } from "react";
import Child1 from "./Components/Child1";

//! Step 1:  hum aise Context ko create krte hai 🍎
const userContext = createContext(); 


const App = () => {

  const [User,setUser] = useState({name: "Ashutosh Kumar rao"});
  return (
    <>
    <h1>hi baby kaise ho aap </h1>

    <userContext.Provider value={User}>
      <Child1 />
    </userContext.Provider>
    </>
  );
};

export default App;
export {userContext} //? isko export bahut jruri hota hai 
