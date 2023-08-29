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
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';
import { ProductsPage } from './pages/ProductsPage';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={ <ProductsPage /> } />
				<Route path="/about" element={ <AboutPage /> } />
			</Routes>
		</>
	);
}

export default App;
