
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h1 className="text-xl font-bold text-white">SNACK BAR</h1>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Início
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Título
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Portfólio
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              className="relative bg-green-500 hover:bg-green-600 text-white px-6 py-2"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Cart
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="sm" className="relative text-gray-300 hover:text-white">
              <User className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                1
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
