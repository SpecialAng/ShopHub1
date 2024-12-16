import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handleNavigation = (page: 'home' | 'products') => {
    setCurrentPage(page);
    setSelectedCategory(undefined);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage('products');
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar 
          onCartClick={() => setIsCartOpen(true)}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {currentPage === 'home' ? (
            <Home onCategoryClick={handleCategoryClick} />
          ) : (
            <Products categoryId={selectedCategory} />
          )}
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default App;