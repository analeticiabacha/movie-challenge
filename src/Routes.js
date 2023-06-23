import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AboutAuthor from "./pages/AboutAuthor/AboutAuthor";
import AboutMovies from "./pages/AboutMovies/AboutMovies";
import Search from "./pages/Search/Search";

export default function MyRoutes(){

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomePrincinema" element={<Home/>} />
        <Route path="/AboutAuthor" element={<AboutAuthor/>}/>
        <Route path="movie/:id" element={<AboutMovies/>}/>
        <Route path="search" element={<Search/>} />
      </Routes>
    </Router>
  );
}
