import { ProductGrid } from "@/components/product-grid";
import { ProductCardSkeleton } from "@/components/product-card-skeleton"; 

export default function Loading() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Katalog Produktów</h1>
      <ProductGrid>
        {/* Renderujemy np. 8 szkieletów zastępczych */}
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </ProductGrid>
    </main>
  );
}