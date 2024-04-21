import React, { useContext, useEffect } from 'react'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import { productsContext } from '../../context/ProductsContextProvider';


const ProductList = () => {
  const { readProducts, products, deleteProduct } = useContext(productsContext)
  useEffect(() => {
    readProducts();
  }, []);

  return (
    <div>
      {products.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginTop: '25px', marginLeft: '15px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={item.image}
            title="product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              название: {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              описание: {item.descr}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              price: {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`edit/${item.id}`}>
              <Button size="small">Edit</Button>
            </Link>
            <Button size="small" onClick={(e) => deleteProduct(item.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>                              
      ))}
    </div>
  );
};

export default ProductList