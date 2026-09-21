'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductGrid } from './product-grid'; 
import { ProductCard } from './product-card';
import { ProductCardSkeleton } from './product-card-skeleton';

import { ProductEmptyState } from './product-empty-state';
import { ProductErrorState } from './product-error-state';

export default function ProductList({ initialData }: { initialData: any[] }) {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favoriteProducts');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Błąd podczas odczytu ulubionych");
      }
    }
  }, []);

  const toggleFavorite = (productId: number) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
      
    setFavorites(newFavorites);
    localStorage.setItem('favoriteProducts', JSON.stringify(newFavorites));
  };

  const { data: products, isLoading, isError, refetch } = useQuery({
    queryKey: ['products', search],
    queryFn: async () => {
      const url = search 
        ? `https://dummyjson.com/products/search?q=${search}` 
        : 'https://dummyjson.com/products';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Błąd pobierania danych');
      const json = await res.json();
      return json.products;
    },
    initialData: search ? undefined : initialData,
    staleTime: 60_000,
  });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Szukaj produktów..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full max-w-md rounded-md border p-2"
      />
      
      {isError ? (
        <ProductErrorState />
      ) : isLoading ? (
        <ProductGrid>
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </ProductGrid>
      ) : products?.length === 0 ? (
        <ProductEmptyState />
      ) : (
        <ProductGrid>
          {products?.map((product: any) => {
            const isFavorite = favorites.includes(product.id);
            
            return (
              <div key={product.id} className="relative transition-transform hover:-translate-y-1">
                 <button 
                   onClick={() => toggleFavorite(product.id)}
                   className="absolute right-4 top-4 z-10 text-2xl drop-shadow-md transition-transform hover:scale-110"
                   title="Oznacz jako ulubione"
                 >
                   {isFavorite ? '❤️' : '🤍'}
                 </button>
                 <ProductCard product={product} />
              </div>
            );
          })}
        </ProductGrid>
      )}
    </div>
  );
}