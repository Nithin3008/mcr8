import { Routes, Route } from "react-router";
import "./App.css";
import { Home1 } from "./Home";
import { Event1 } from "./Event";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home1></Home1>}></Route>
        <Route path={"/Event1/:eventId"} element={<Event1></Event1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
