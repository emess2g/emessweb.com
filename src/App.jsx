
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgencyHome from "./AgencyHome";
import Savora from "./demos/Savora";
import VertexBuild from "./demos/VertexBuild";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgencyHome />} />
        <Route path="/savora" element={<Savora />} />
        <Route path="/vertex-build" element={<VertexBuild />} />
      </Routes>
    </BrowserRouter>
  );
}

