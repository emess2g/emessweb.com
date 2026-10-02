

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgencyHome from "./AgencyHome";
import Savora from "./demos/Savora";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgencyHome />} />
        <Route path="/savora" element={<Savora />} />
      </Routes>
    </BrowserRouter>
  );
}