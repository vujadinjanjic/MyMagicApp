import React from "react";
import "./App.css";
import Homepage from "./modules/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
