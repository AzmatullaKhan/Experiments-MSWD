import './App.css';
import ProductList from './ProductList';


function App() {
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;

