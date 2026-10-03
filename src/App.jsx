
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgencyHome from "./AgencyHome";
import Savora from "./demos/Savora";
import VertexBuild from "./demos/VertexBuild";
import HavenHouse from "./demos/HavenHouse";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgencyHome />} />
        <Route path="/savora" element={<Savora />} />
        <Route path="/vertex-build" element={<VertexBuild />} />
        <Route path="/haven-house" element={<HavenHouse />} />
      </Routes>
    </BrowserRouter>
  );
}

