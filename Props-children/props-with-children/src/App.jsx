import { useState } from "react";
import Button from "./Components/Button";
// import Cards from "./Components/cards";

const App = () => {
  const [count, setCount] = useState(0);

  const handlClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Button moveKaro={handlClick}> {/* isko hum bolte function pass karna in elements */}
        <h1>{count}</h1>
      </Button>
      {/* <Cards> jitna kuch bhi hum <Cards>........</Cards> iske bich mein likhte hai aur wo content kisi bhi type ha kyu n ho hum usko bolte hai hum "Children" jaise h1,p,p ye saab children hai 
        <h1>hello ji kaise ho aap saab</h1>
        <p>Waise acha padha rehe hai aap Bhaiya </p>
        <p>i love this course</p>
      </Cards> */}
    </>
  );
};

export default App;
