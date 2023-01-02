import React from "react";
import {Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
