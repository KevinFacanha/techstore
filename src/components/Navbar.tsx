import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const { cart } = useShop();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => onNavigate('products')}
        >
          <Store size={24} />
          <span className="text-xl font-bold">TechStore</span>
        </div>
        
        <div className="flex space-x-6">
          <button 
            className={`flex items-center space-x-1 ${currentPage === 'products' ? 'font-bold' : ''}`}
            onClick={() => onNavigate('products')}
          >
            <span>Produtos</span>
          </button>
          
          <button 
            className={`flex items-center space-x-1 ${currentPage === 'cart' ? 'font-bold' : ''}`}
            onClick={() => onNavigate('cart')}
          >
            <div className="relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <span>Carrinho</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;