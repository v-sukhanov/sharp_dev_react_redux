import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './components/Product';
import { products } from './data/products';
import axios from 'axios';
import { IProduct } from './models';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { useProducts } from './hooks/products';

function App() {
    const {loading, error, products} = useProducts()
  return (
      <div className="container mx-auto max-w-2xl pt-5">
          {
              loading && <Loader/>
          }
          {
              error && <ErrorMessage error={error}/>
          }
          {
              products.map(product => <Product product={product}/>)
          }

      </div>
  );
}

export default App;
