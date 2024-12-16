import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

interface ProductsProps {
  categoryId?: string;
}

export const Products: React.FC<ProductsProps> = ({ categoryId }) => {
  const filteredProducts = categoryId
    ? products.filter(product => product.category === categoryId)
    : products;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {categoryId ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Products` : 'All Products'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};