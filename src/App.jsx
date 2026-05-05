import "./App.css";
import Home from "./pages/home.jsx";
import Detail from "./pages/invitation.jsx";
import TimeEvent from "./pages/time.jsx";
import Location from "./pages/location.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/time" element={<TimeEvent />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
