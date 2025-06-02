
import { Button } from "@/components/ui/button";
import { Product, CartItem } from "@/pages/Index";

interface ProductGridProps {
  selectedCategory: string;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const products: Product[] = [
  // Burgers
  {
    id: "1",
    name: "Sttiler Burgers",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 25.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "burgers"
  },
  {
    id: "2",
    name: "Simulation Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
    category: "burgers"
  },
  {
    id: "3",
    name: "Hlekune Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    category: "burgers"
  },
  {
    id: "4",
    name: "Frecerfist Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
    category: "burgers"
  },
  {
    id: "5",
    name: "Comstor Burger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
    category: "burgers"
  },
  {
    id: "6",
    name: "Camstom Driger",
    description: "Maecenas Laoreet non mauris porttitor, sed sodales nulla consectetur leo elit dignissim lacus vitae.",
    price: 35.90,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    category: "burgers"
  },
  // Bebidas
  {
    id: "7",
    name: "Coca-Cola Gelada",
    description: "Refrigerante gelado 350ml",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop",
    category: "bebidas"
  },
  {
    id: "8",
    name: "Suco Natural",
    description: "Suco de frutas natural 300ml",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop",
    category: "bebidas"
  },
  {
    id: "9",
    name: "Milkshake Especial",
    description: "Milkshake cremoso com cobertura",
    price: 18.90,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
    category: "bebidas"
  },
  // Batatas
  {
    id: "10",
    name: "Batata Frita Clássica",
    description: "Porção grande de batatas fritas crocantes",
    price: 15.90,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    category: "batatas"
  },
  {
    id: "11",
    name: "Batata com Cheddar",
    description: "Batatas fritas com molho cheddar derretido",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop",
    category: "batatas"
  },
];

export const ProductGrid = ({ selectedCategory, onAddToCart }: ProductGridProps) => {
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "burgers":
        return "Snack Burgers";
      case "bebidas":
        return "Bebidas Geladas";
      case "batatas":
        return "Batatas Especiais";
      default:
        return "Produtos";
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8">{getCategoryTitle(selectedCategory)}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-400">
                  R$ {product.price.toFixed(2)}
                </span>
                <Button
                  onClick={() => onAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  })}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
