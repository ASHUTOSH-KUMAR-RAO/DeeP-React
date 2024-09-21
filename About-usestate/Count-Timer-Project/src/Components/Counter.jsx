import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count,setCount] = useState(0); 
  return (
    <>
      <div className="counter-container">
        <p id="para">you have clicked {count} times </p>
        <button id='tap-baba' onClick={()=>{setCount(count+1)}}>Tap Here </button>
      </div>

    </>
  );
};
export default Counter;
