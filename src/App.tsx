import { useState } from 'react';
import logo from './assets/Logo.png'
import { Footer } from './components/Footer';
import { Novidades } from './components/Novidades';
import { ProdRelacionados } from './components/ProdRelacionados';
import { Modal } from './components/Modal';
import { Marcas } from './components/Marcas';
import { Parceiros } from './components/Parceiros';
import { ProdutosComTabs } from './components/ProdutosComTab';
import { Categorias } from './components/Categorias';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { useProducts, type Product } from '../src/services/useProducts';
import { Icons } from './components/Icones';
import { formatPrice } from './utils/formatPrice';

export default function App() {
  const { products, loading, error } = useProducts();  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Tecnologia");
  const [cartCount, setCartCount] = useState(0);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + modalQuantity);
    setSelectedProduct(null);
  };

  const categoriesList = [
    { name: "Tecnologia", icon: <Icons.Tech /> },
    { name: "Supermercado", icon: <Icons.Supermarket /> },
    { name: "Bebidas", icon: <Icons.Drinks /> },
    { name: "Ferramentas", icon: <Icons.Tools /> },
    { name: "Saúde", icon: <Icons.Health /> },
    { name: "Esportes e Fitness", icon: <Icons.Fitness /> },
    { name: "Moda", icon: <Icons.Fashion /> },
  ];

  return (
    <div className="app-root">
      <Header cartCount={cartCount} logoSrc={logo} />
      <Navbar/>
      <Hero/>

      <Categorias 
        categoriesList={categoriesList} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

{loading && (
  <p role="status">
    Carregando produtos...
  </p>
)}

{error && (
  <p role="alert">
    Erro ao carregar os produtos. Tente novamente mais tarde.
  </p>
)}

{!loading && !error && (
  <ProdutosComTabs
    products={products}
    onOpenProduct={handleOpenModal}
  />
)}

      <Parceiros/>
      {loading ? (
        <p style={{ textAlign: "center", padding: "50px" }}>A carregar produtos...</p>
      ) : error ? (
        <p style={{ textAlign: "center", padding: "50px", color: "red" }}>Erro ao carregar os produtos. Tente novamente mais tarde.</p>
      ) : (
        <ProdRelacionados
          products={products} 
          onOpenProduct={handleOpenModal} 
        />
      )}     
      <Parceiros/>
      <Marcas/>      
      {loading ? (
        <p style={{ textAlign: "center", padding: "50px" }}>A carregar produtos...</p>
      ) : error ? (
        <p style={{ textAlign: "center", padding: "50px", color: "red" }}>Erro ao carregar os produtos. Tente novamente mais tarde.</p>
      ) : (
        <ProdRelacionados
          products={products} 
          onOpenProduct={handleOpenModal} 
        />
      )}        
      <Novidades/>
      <Footer/>
      {selectedProduct && (
        <Modal 
          product={selectedProduct}
          quantity={modalQuantity}
          setQuantity={setModalQuantity}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          formatPrice={formatPrice}
        />
      )}
    </div>
  );
}