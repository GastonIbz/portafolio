import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Herramientas from "./routes/Herramientas";



function App() {
  return (
<> 
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Herramientas" element={<Herramientas />} />
  <Route path="/About" element={<About />} />
  <Route path="/Contact" element={<Contact />} />
</Routes>
</>
  );
}

export default App;
