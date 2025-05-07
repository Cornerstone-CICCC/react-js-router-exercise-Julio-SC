import React from 'react';
import { Outlet } from 'react-router-dom';

const ProductsLayout: React.FC = () => {
  return (
    <div className="container">
      <h1>Products</h1>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
