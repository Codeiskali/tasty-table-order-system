
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/pages/Index";

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const Cart = ({ items, isOpen, onClose, onRemoveItem, onUpdateQuantity }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-gray-800 text-white border-gray-700">
        <SheetHeader>
          <SheetTitle className="text-white">Seu Carrinho</SheetTitle>
          <SheetDescription className="text-gray-300">
            {items.length === 0 ? "Seu carrinho está vazio" : `${items.length} item(s) no carrinho`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              Adicione alguns itens ao seu carrinho!
            </p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-green-400 font-bold">R$ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="border-gray-600 text-white hover:bg-gray-600"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center text-white">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="border-gray-600 text-white hover:bg-gray-600"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-gray-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              
              <div className="border-t border-gray-600 pt-4 mt-6">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-green-400">R$ {total.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white" size="lg">
                  Finalizar Pedido
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
