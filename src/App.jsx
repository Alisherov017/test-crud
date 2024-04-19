import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/productList/ProductList';
import AdddProduct from './components/addProduct/AdddProduct';
import EditProduct from './components/editProduct/EditProduct';
import axios, { Axios } from 'axios';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';


function App() {
const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([])
  const [oneProduct, setOneProduct] = useState(null)

  async function readProducts() {
    const {data} = await axios(API)           
    setProducts(data)
  }

  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data)
  }
  

 async function createProduct(newProduct) {
   await axios.post(API, newProduct); 
   readProducts()
 }

 async function deleteProduct(id) {
  await axios.delete(`${API}/${id}`)        
  readProducts()
 }

 async function editProduct(id, editedProduct) {
  await axios.patch(`${API}/${id}`, editedProduct)
  readProducts()
 }

  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                readProducts={readProducts}
                products={products}
                deleteProduct={deleteProduct}
              />
            }
          />
          <Route
            path="/add"
            element={<AdddProduct createProduct={createProduct} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditProduct
                getOneProduct={getOneProduct}
                oneProduct={oneProduct}
                editProduct={editProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
