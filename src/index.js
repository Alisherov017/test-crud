import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsContextProvider from "./context/ProductsContextProvider";
import AuthProvider from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ProductsContextProvider>    
      <App />
    </ProductsContextProvider>
  </AuthProvider>
);
