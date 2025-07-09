import React from 'react';
import { useProducts } from './useProducts';

export default function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Загрузка товаров...</div>;
  if (error) return <div style={{ color: 'red' }}>Ошибка: {error}</div>;
  if (!products.length) return <div>Нет товаров</div>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, width: 260 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{product.name}</div>
          <div style={{ color: '#666', marginBottom: 8 }}>{product.description}</div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Цена: {product.price} грн</div>
          <div style={{ fontSize: 13, color: '#888' }}>В наличии: {product.current_inventory}</div>
        </div>
      ))}
    </div>
  );
}
