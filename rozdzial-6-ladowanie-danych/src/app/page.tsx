import ProductsList from "@/components/products-list";
import ProductForm from "@/components/product-form"; 

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products', {
    next: { revalidate: 60 } 
  });
  const data = await res.json();

  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Katalog Produktów</h1>
      
      <ProductForm />

      <ProductsList initialData={data.products} />
    </main>
  );
}