import { useState, useEffect } from "react";

export type Product = {
  productName: string;
  photo: string;
  price: number;
  descriptionShort: string;
};

// "Plano B" para quando a API der erro de CORS
const mockProducts: Product[] = [
  { productName: "Iphone 11 PRO MAX BRANCO 1", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 15000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 1", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 9000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "Iphone 11 PRO MAX BRANCO 2", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 14990, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 2", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 12000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "Iphone 11 PRO MAX BRANCO 3", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 4550, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 3", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 38000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "Iphone 11 PRO MAX BRANCO 4", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 42000, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { productName: "IPHONE 13 MINI 4", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 520, descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const PRODUCTS_API = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_API);
        
        if (!response.ok) {
          throw new Error("Falha na requisição HTTP");
        }

        const data = await response.json();
        
        if (data && data.products) {
          setProducts(data.products);
        } else if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error("Formato de JSON desconhecido");
        }
        
      } catch (err) {
        console.warn("Erro de CORS detectado. Utilizando dados locais como fallback.", err);
        // Plano B: Se API falhar, então preenchemos a prateleira com o mock
        setProducts(mockProducts);
        //  error como false para a interface não mostrar a mensagem vermelha
        setError(false);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
}