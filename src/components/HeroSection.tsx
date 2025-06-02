
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="relative bg-cover bg-center h-96 flex items-center"
        style={{
          backgroundImage: "url('/lovable-uploads/af104971-844c-4468-82a9-454593886ee2.png')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Snack Bar</h1>
            <p className="text-xl mb-6">
              Os melhores hambúrgueres e snacks da cidade
            </p>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Peça Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
