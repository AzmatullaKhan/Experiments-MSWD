import React, { useState } from 'react';

function ProductList({ products }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>{cartItem.name} - ${cartItem.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
