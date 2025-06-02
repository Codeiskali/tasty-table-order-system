
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/pages/Index";

interface MenuSectionProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const menuItems = [
  {
    id: "1",
    name: "Sttiler Burgers",
    description: "Hambúrguer premium com carne grelhada, queijo cheddar e molho especial",
    price: 25.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "2", 
    name: "Simulation Burger",
    description: "Hambúrguer artesanal com bacon crocante e cebola caramelizada",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "3",
    name: "Hlekune Burger",
    description: "Hambúrguer duplo com queijo derretido e molho barbecue",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "4",
    name: "Frecerist Burger",
    description: "Hambúrguer vegetariano com grão-de-bico e molho verde",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "5",
    name: "Comstor Burger",
    description: "Hambúrguer clássico com alface, tomate e maionese",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "6",
    name: "Camstom Driger",
    description: "Hambúrguer gourmet com cogumelos e queijo brie",
    price: 35.90,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop",
    category: "burgers"
  },
  {
    id: "7",
    name: "Batata Frita",
    description: "Porção generosa de batatas fritas crocantes",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop",
    category: "sides"
  },
  {
    id: "8",
    name: "Refrigerante Especial",
    description: "Bebida gelada com frutas vermelhas",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop",
    category: "drinks"
  }
];

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Snack Burgers</h2>
          <p className="text-lg text-gray-600">
            Descubra nossos deliciosos hambúrgueres artesanais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2">{item.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {item.description}
                </CardDescription>
                <div className="text-2xl font-bold text-green-600">
                  R$ {item.price.toFixed(2)}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  onClick={() => onAddToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image
                  })}
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
