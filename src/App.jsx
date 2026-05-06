import "./App.css";
import Home from "./pages/home.jsx";
import Detail from "./pages/invitation.jsx";
import TimeEvent from "./pages/time.jsx";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Location = lazy(() => import("./components/location.jsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/time" element={<TimeEvent />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Suspense>
  );
}

export default App;
