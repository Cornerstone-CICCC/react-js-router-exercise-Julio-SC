import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.title} - ${product.price}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
