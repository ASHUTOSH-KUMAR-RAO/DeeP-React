import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Child1 = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      setTheme = ("dark");
    } else {
      setTheme = ("light");
    }
  };
  return (
    <>
      <button onClick={handleClick}>click here and show magic</button>
    </>
  );
};

export default Child1;
