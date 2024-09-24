import { useState } from "react";
import LoginBtn from "./Components/LoginBtn";
import LogoutBtn from "./Components/LogoutBtn";

const App = () => {
  const [isLogedIn, setLogedIn] = useState(false);
  if (isLogedIn) {
    return <LoginBtn />;
  } else {
    return <LogoutBtn />;
  }
};

export default App;
