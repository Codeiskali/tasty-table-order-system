
import { CartItem } from "@/pages/Index";

interface MenuSectionProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const menuItems = [
  {
    id: "1",
    name: "Sttiler Burgers",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 25.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "2", 
    name: "Simulation Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "3",
    name: "Hlekune Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "4",
    name: "Frecerfist Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "5",
    name: "Comstor Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "6",
    name: "Camstom Driger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 35.90,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "7",
    name: "Prejvonj Froger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop",
    category: "burgers"
  }
];

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Snack Burgers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="flex bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de página */}
        <div className="flex justify-center mt-12">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600">01</span>
          </div>
        </div>
      </div>
    </section>
  );
};
