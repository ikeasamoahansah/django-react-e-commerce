import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API request to fetch products from Django backend
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        // Update the 'products' state with the fetched data
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // The empty array [] means this effect runs once when the component mounts

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {/* Render other product details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
