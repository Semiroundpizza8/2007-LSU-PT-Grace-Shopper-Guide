import React, { useState, useEffect } from 'react';
// TODO 6 - write component for products
// TODO - import getProducts
import {
  getProducts
} from '../api';

const Products = () => {
  // TODO - initialize state for products
  const [products, setProducts] = useState([]);

  // TODO - fetchProducts func that calls getProducts and setProducts
  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  }
  // TODO - uesEffect that calls fetchProducts
  useEffect(fetchProducts, []);
  
  return (
    <>
      <h1>Products</h1>
      {/* TODO - map over products, displaying the name, description */}
      {
        products.map(product => <div key={product.id}>
          <p>{product.name}</p>
        </ div>)
      }
    </>
  );
}

export default Products;