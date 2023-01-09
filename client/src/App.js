import React from "react";
import {Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import ExpenseCatCont from "./containers/ExpenseCatCont";
import IncomesCont from "./containers/IncomesCont";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/expense_categories" element={<ExpenseCatCont/>} />
        <Route path="/incomes" element={<IncomesCont/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
