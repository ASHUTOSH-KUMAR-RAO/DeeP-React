import { useState } from "react";
import Card from "./Components/card";
import"./App.css";

const App = () => {
// ! => create State karenge
// ? => then manage State karenge
// * change larenge State ko


const [name,setName] = useState ('');

  return (
    <>
      {/* <h1>hi kaise hoa aap 💕</h1> */}

      <Card name = {name} setName = {setName}/>
      <p>mai Parent component ke andar hu: {name}</p>
      {/* <Card name="My self Ashutosh Kumar Rao From Deoria" /> In General Dekha
      jaye to yeha per Card ko hum as Children Pass kr rehe hai aur App ko as a
      Parent Pass kr rehe hai by the help of Props */}
    </>
  );
};

export default App;
