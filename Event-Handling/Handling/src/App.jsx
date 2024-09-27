import React from "react";
import "./App.css";

const App = () => {

  const handleClick = () => {
    alert("Button is clicked");
  };

  const handleMouse = () => {
    alert("Awash,Abhishek,Jyoti,Anjali💕");
  };

  const handleChange =(e)=>{
    console.log("ye buttn write kiya tumne",e.target.value)
  }

  const handlSubmit = (e)=>{
    e.preventDefault();
    alert("Form is submitted");
  }

  return (
    <>

    <form onSubmit={handlSubmit}>
      <input type="text" placeholder="Enter your name" onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
      {/* <p onMouseOver={handleMouse}>This guys are my best buddies</p>

      <button onClick={handleClick}>Click me</button> */}
    </>
  );
};

export default App;
