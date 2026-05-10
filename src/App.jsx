import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Courses from "./Courses.jsx";
import Contact from "./Contact.jsx";    

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;