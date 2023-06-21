import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AboutAuthor from "./pages/AboutAuthor/AboutAuthor";

export default function MyRoutes(){

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomePrincinema" element={<Home/>} />
        <Route path="/AboutAuthor" element={<AboutAuthor/>}/>
      </Routes>
    </Router>
  );
}
