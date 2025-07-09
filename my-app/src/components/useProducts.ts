import { useEffect, useState } from 'react';

export interface Product {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  image: string | null;
  created_at: string;
  updated_at: string;
  status: string;
  current_inventory: number;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://api.alluresallol.com/products');
        if (!res.ok) {
          throw new Error('Не удалось загрузить продукты');
        }
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err: any) {
        setError(err.message || 'Ошибка при загрузке продуктов');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, loading, error };
}
