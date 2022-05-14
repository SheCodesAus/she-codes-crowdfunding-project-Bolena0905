import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import Nav from "./components/Nav/Nav";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProjectFormPage from "./pages/ProjectFormPage";



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
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="users/register/" element={<RegistrationPage />} />
            <Route path="/project/create" element={<ProjectFormPage />} />
            
          </Routes>
      </div>
    </Router>
  );
}
export default App;