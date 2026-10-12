import { useState, useEffect } from "react";

export type Product = {
  productName: string;
  photo: string;
  price: number;
  descriptionShort: string;
};

const PRODUCTS_API =
  "/api/produtos.json";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(PRODUCTS_API);

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error("Formato de JSON inválido.");
        }
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
        setProducts([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}