import { Routes, Route } from "react-router";
import Home from "../components/home";
import About from "../components/about";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoute;
