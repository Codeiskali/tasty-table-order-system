
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      <div className="relative min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: "url('/lovable-uploads/1dac0f5d-e73c-4e78-bc5b-8b59afe6e01b.png')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/70 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-md text-white">
            <h1 className="text-5xl font-bold mb-4">Snack Bar</h1>
            <p className="text-xl mb-8 text-gray-200">
              Quejolandia Burgers em<br />
              snack tijme
            </p>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium"
            >
              Order now
            </Button>
          </div>
        </div>

        {/* Indicadores de slide */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};
