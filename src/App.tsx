import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { ShopProvider } from './context/ShopContext';

function App() {
  const [currentPage, setCurrentPage] = useState<'products' | 'cart' | 'checkout'>('products');

  const handleNavigate = (page: string) => {
    if (page === 'products' || page === 'cart' || page === 'checkout') {
      setCurrentPage(page);
    }
  };

  return (
    <ShopProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        
        <main className="flex-grow">
          {currentPage === 'products' && <ProductsPage />}
          {currentPage === 'cart' && <CartPage onNavigate={handleNavigate} />}
          {currentPage === 'checkout' && <CheckoutPage onNavigate={handleNavigate} />}
        </main>
        
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 TechStore. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </ShopProvider>
  );
}

export default App;