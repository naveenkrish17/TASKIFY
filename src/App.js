import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Tasks from "./pages/Tasks.jsx";
import User from "./pages/User.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
