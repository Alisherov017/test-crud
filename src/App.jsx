import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/productList/ProductList";
import AdddProduct from "./components/addProduct/AdddProduct";
import EditProduct from "./components/editProduct/EditProduct";
import axios, { Axios } from "axios";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./components/register/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AdddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
