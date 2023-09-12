import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [dark,setDark] = useState(true);
  return (
    <div className="App min-w-full">
        <Navbar dark={dark} setDark={setDark}/>
      <Routes>
        <Route path="/" element={<Home dark={dark}/>} />
        <Route path="/login" element={<Login dark={dark}/>} />
        <Route path="/sign-up" element={<Signup dark={dark}/>} />
        <Route path="*" element={<Home dark={dark}/>} />
      </Routes>
    </div>
  );
}

export default App;
