import "./App.css";
import Navbar from "./bNavbar.jsx";
import Home from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
