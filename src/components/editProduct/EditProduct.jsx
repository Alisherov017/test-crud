import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = ({ oneProduct, getOneProduct, editProduct }) => {
  const navigate = useNavigate()

    const { id } = useParams();

    const [title, setTitle] = useState  ("");
    const [price, setPrice] = useState("");
    const [descr, setDescr] = useState("");
    const [image, setImage] = useState("");  

  useEffect(() => {                      
    getOneProduct(id);                       
  }, []);

  useEffect(() => {
    if(oneProduct) {
      setTitle(oneProduct.title)
      setPrice(oneProduct.price)
      setDescr(oneProduct.descr);
      setImage(oneProduct.image);

    }
  }, [oneProduct])
  // console.log(oneProduct, "oneproduct");

  function handleSaveChanges() {
    let editedProduct = {
      title,
      price,
      descr,
      image,
    }

    editProduct(id, editedProduct)
    navigate('/')
  }



  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
      <input type="text" value={descr} onChange={(e) => setDescr(e.target.value)}/>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

      <button onClick={handleSaveChanges}>Save changes</button>
    </div>
  );
};

export default EditProduct