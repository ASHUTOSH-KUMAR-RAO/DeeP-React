import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error,setError] = useState(false); // todo=> error hamesa state mein hi rakhna chaiye 
  useEffect(() => {
    (async () => {
      try {
        setError(false)
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data)
      } catch (error) {
        setError(true)
        
      }
    })(); // ! hamne basically yeha per IIFE ka Use kiya hai kyuki hmko pta hai without async hum await use hi nhi kaar sekte hai, isiliye humne yeha per async ka use kiya hai
  }, []);

  if (error) {
    return <h1>Something Wnt Wrong</h1>
  }
  return (
    <div>
      <h1>Now Let's Move To Handling Api In React</h1>
      <h2>Name Of The Product : {products.length}</h2>
    </div>
  );
};

export default App;
