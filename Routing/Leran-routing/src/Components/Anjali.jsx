import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

const Anjali = () => {
  const navigate = useNavigate(); // todo=> yeha per useNavigate hook ka use kr rehe hai jiske wajah se hm button per click kr rehe hai to jyoti ke page per move shift ho jaa rehe hai

  const handleClick = () => {
    navigate("/Jyoti");
  };

  return (
    <div>
      <h1>
        This Girl is The One of the Humbel girl and also So Clever like Awash
        and Abhishek 🤎{" "}
      </h1>

      <button onClick={handleClick}>Click here and go jyoti page</button>
      <Outlet/>
    </div>
  );
};

export default Anjali;
