
interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "burgers", name: "Pratos Mains", subtitle: "Pratos", icon: "🍔" },
  { id: "bebidas", name: "Bebate", subtitle: "Drinks", icon: "🥤" },
  { id: "batatas", name: "Castinhas", subtitle: "Snacks", icon: "🍟" },
  { id: "sobremesas", name: "Rafasbion", subtitle: "Criacs", icon: "🍰" },
  { id: "especiais", name: "Dolairs", subtitle: "Colmios", icon: "⭐" },
];

export const Sidebar = ({ selectedCategory, onCategoryChange }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-800 min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Snack Bar</h1>
      </div>
      
      <nav className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
              selectedCategory === category.id
                ? "bg-red-500 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <div>
              <div className="font-medium">{category.name}</div>
              <div className="text-sm opacity-75">{category.subtitle}</div>
            </div>
          </button>
        ))}
      </nav>
      
      <div className="mt-8">
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors">
          Sods Vios
        </button>
      </div>
    </aside>
  );
};
