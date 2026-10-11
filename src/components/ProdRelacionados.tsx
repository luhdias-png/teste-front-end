import { useState } from "react";
import { Icons } from '../components/Icones'; 
import { type Product } from '../services/useProducts'; // (Ajuste o caminho para onde guardou o useProducts)


interface ProdRelacionadosProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
  itemsPerPage?: number;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

export function ProdRelacionados({
  products = [],
  itemsPerPage = 4,
  onOpenProduct 
}: ProdRelacionadosProps) {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const pageSize = Math.max(1, itemsPerPage);

  const handleNext = () => {
    if (currentIndex + pageSize < products.length) {
      setCurrentIndex((index) => index + pageSize);
    }
  };

  const handlePrev = () => {
    if (currentIndex - pageSize >= 0) {
      setCurrentIndex((index) => index - pageSize);
    }
  };

  return (
    <>
      <section className="section-header">
        <div className="title-wrapper">
          <div className="line" />
          <h2>Produtos relacionados</h2>
          <div className="line" />
        </div>
        <div className="ver-todos-link">Ver todos</div>
      </section>

      <section className="product-shelf">
        <div className="shelf-wrapper">
          <button
            className="nav-arrow prev"
            aria-label="Anterior"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <Icons.ChevronLeft />
          </button>

          <div className="carousel-viewport">
  <div
    className="products-track"
    style={{ 
      transform: `translateX(calc(-${(currentIndex * 100) / itemsPerPage}% - ${(currentIndex / itemsPerPage) * 18}px))` 
    }}
  >
    {products.map((product, idx) => (
      <div key={idx} className="product-card carousel-card">
        <div className="img-container">
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className="prod-title">{product.productName}</div>
        <div className="old-price">{formatPrice(product.price * 1.15)}</div>
        <div className="current-price">{formatPrice(product.price)}</div>
        <div className="installments">ou 2x de {formatPrice(product.price / 2)} sem juros</div>
        <div className="free-shipping">Frete grátis</div>
        <button
          className="buy-btn"
          onClick={() => onOpenProduct(product)}
        >
          COMPRAR
        </button>
      </div>
    ))}
  </div>
</div>
          <button
            className="nav-arrow next"
            aria-label="Próximo"
            onClick={handleNext}
            disabled={currentIndex + pageSize >= products.length}
          >
            <Icons.ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}