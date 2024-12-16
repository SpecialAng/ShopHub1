import React from 'react';
import { categories } from '../data/categories';
import { CategoryCard } from '../components/CategoryCard';
import { ProductSlider } from '../components/ProductSlider';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Carousel } from '../components/Carousel';
import { carouselImages } from '../data/carousel';

interface HomeProps {
  onCategoryClick: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onCategoryClick }) => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="space-y-12">
      <section>
        <Carousel images={carouselImages} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Kategori Belanja</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={onCategoryClick}
            />
          ))}
        </div>
      </section>

      <section>
        <ProductSlider title="Produk Unggulan">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-none w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductSlider>
      </section>

      <section>
        <ProductSlider title="Produk Terbaru">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="flex-none w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductSlider>
      </section>
    </div>
  );
};