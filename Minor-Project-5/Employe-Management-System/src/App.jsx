import { useContext, useState } from "react";
import Loggin from "./components/Auth/Loggin";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import EmployDashBoard from "./components/Dashboard/EmployDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  console.log("Auth Data:", authData); // Debugging
  console.log(authData?.employes); // Safe navigation operator

  const handleLogin = (email, password) => {
    if (email === "ashuico@gmail.com" && password === 123) {
      setUser("admin");
    } else if (email === "employe@me.com" && password === 321) {
      setUser("employe");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <>
      {!user ? <Loggin handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashBoard /> : <EmployDashBoard />}
    </>
  );
};

export default App;
