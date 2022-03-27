import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login/Login";
import NavBar from "./Component/NavBar";
import Categories from "./Pages/Categories/Categories.jsx";

function App() {
  const userName = localStorage.getItem("userName");
  const password = localStorage.getItem("password");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {userName && password && (
          <Route
            path="/home"
            element={
              <>
                <NavBar />
                <Categories />
              </>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
