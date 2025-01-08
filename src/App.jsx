import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Policy from "./Policy";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/grading-policy" element={<Policy />} />
    </Routes>
  </BrowserRouter>
   </>
  );
}
