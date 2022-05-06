import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import Nav from "./components/Nav/Nav";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";


import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            
          </Routes>
      </div>
    </Router>
  );
}
export default App;