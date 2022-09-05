import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/create" element={<CreateNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
