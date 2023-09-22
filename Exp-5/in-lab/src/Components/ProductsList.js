import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../index.css';

export const ProductsList = () => {
  const [filterCriteria, setFilterCriteria] = useState(''); // State for filtering
  const [sortCriteria, setSortCriteria] = useState(''); // State for sorting

  const products = [
    {
      "id": 1,
      "name": "Product 1",
      "price": 19.99,
      "rating": 4.5
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 29.99,
      "rating": 4.2
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 14.99,
      "rating": 4.8
    },
    {
      "id": 4,
      "name": "Product 4",
      "price": 24.99,
      "rating": 4.0
    },
    {
      "id": 5,
      "name": "Product 5",
      "price": 39.99,
      "rating": 4.7
    }
  ];

  // Filtering function
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterCriteria.toLowerCase())
  );

  // Sorting function
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortCriteria === 'price') {
      return a.price - b.price;
    } else if (sortCriteria === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  // Render the filtered and sorted product list
  const productList = sortedProducts.map((product) => (
    <Card style={{ width: '18rem' }} className="card" key={product.id}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: {product.price}</Card.Text>
        <Card.Text>Rating: {product.rating}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <div align="center" style={{padding:'8px'}}>
        <input
          type="text"
          placeholder="Filter by name"
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
          style={{padding:'5px'}}
        />
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <ul style={{ display: 'flex', justifyContent: 'space-around', padding: '8px' }}>
        {productList}
      </ul>
    </div>
  );
};
