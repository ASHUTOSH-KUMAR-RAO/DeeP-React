import Cards from "./Components/Cards";
import Female from "./assets/Female.jpg";
import nature from "./assets/nature.jpg";
import teddy from "./assets/teddy.jpg";
import "./App.css";
const App = () => {
  return (
    <>
      <Cards name="Looking so Boring" image={Female} style = {{"border-radius":"20px"}}/>
      <Cards name="Beauty of Nature" image={nature} />
      <Cards name="i love it🐻‍❄️" image={teddy} />
    </>
  );
};

export default App;
