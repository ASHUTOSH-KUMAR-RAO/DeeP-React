import React from "react";
import Child3 from "./Child3";
import { useContext } from "react";

const Child2 = () => {

  const User = useContext(userContext);
  return (
    <>
    {User.name}
      <Child3 />
    </>
  );
};

export default Child2;
