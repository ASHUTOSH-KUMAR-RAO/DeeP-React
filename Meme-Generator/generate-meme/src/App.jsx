import {Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import"./App.css";
import HomePage from "./pages/HomePage";
import Edit from "./pages/Edit";
const App = () => {
  return (
    <div className="Container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/edit/" element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App
