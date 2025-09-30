import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
