import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductsLayout from './pages/ProductsLayout';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />

      <Route path="/products" element={<ProductsLayout />}>
        <Route index element={<ProductsList />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>

      <Route path="*" element={<NotFound />} />


    </Routes>
  );
};

export default App;
