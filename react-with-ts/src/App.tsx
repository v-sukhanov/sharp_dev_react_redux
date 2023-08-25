import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './components/Product';
import { products } from './data/products';
import axios from 'axios';
import { IProduct } from './models';

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    async function fetchProducts() {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
        setProducts(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
  return (
      <div className="container mx-auto max-w-2xl pt-5">
          {
              products.map(product => <Product product={product}/>)
          }

      </div>
  );
}

export default App;
