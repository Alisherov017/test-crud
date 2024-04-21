import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const productsContext = createContext();
const ProductsContextProvider = ({ children }) => {
  const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  async function readProducts() {
    const { data } = await axios(API);
    setProducts(data);
  }

  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
    readProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProducts();
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    readProducts();
  }

  const  value={
      products,
      oneProduct,
      readProducts,
      getOneProduct,
      createProduct,
      deleteProduct,
      editProduct
    }

  return (
    <productsContext.Provider value={value}>{children}</productsContext.Provider>
  );
};

export default ProductsContextProvider;
