import React from "react";
import { Route, Routes } from "react-router-dom";
import AddData from "./components/AddData";
import EditData from "./components/EditData";
import Header from "./components/Header";
import Home from "./components/Home";
import "./components/style.css"
import View from "./components/View";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditData />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </>
  );
};

export default App;
