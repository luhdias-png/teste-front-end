export type CategoryItem = {
  name: string;
  icon: React.ReactNode;
};

// Tipagem das propriedades que o componente vai receber
interface CategoriasProps {
  categoriesList: CategoryItem[];
  activeCategory: string;
  setActiveCategory: (categoryName: string) => void;
}

export function Categorias({ 
  categoriesList, 
  activeCategory, 
  setActiveCategory 
}: CategoriasProps) {
  
  return (
    <section className="categories-section">
      <div className="grid">
        {categoriesList.map((cat, idx) => (
          <div
            key={idx}
            className={`cat-card ${activeCategory === cat.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.name)}
          >
            <div className="icon-box">
              {cat.icon}
            </div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}