"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newProduct: {
      title: string;
      price: number;
      category: string;
    }) => {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      return res.json();
    },

    onMutate: async (newProduct) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });

      const previousProducts = queryClient.getQueryData(["products", ""]);

      queryClient.setQueryData(["products", ""], (old: any) => {
        const optimisticProduct = {
          ...newProduct,
          id: Math.random(),
          thumbnail: "https://via.placeholder.com/300?text=Brak+zdjecia",
        };
        return old ? [optimisticProduct, ...old] : [optimisticProduct];
      });

      return { previousProducts };
    },

    onError: (err, newProduct, context) => {
      if (context?.previousProducts) {
        queryClient.setQueryData(["products", ""], context.previousProducts);
      }
      alert("Wystąpił błąd podczas dodawania produktu.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onSuccess: () => {
      setTitle("");
      setPrice("");
      setCategory("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, price: Number(price), category });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 max-w-md rounded-lg border p-6 shadow-sm"
    >
      <h2 className="mb-4 text-xl font-bold">Dodaj nowy produkt</h2>

      <div className="flex max-w-md flex-col gap-4">
        <input
          type="text"
          placeholder="Tytuł produktu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="rounded border p-2"
        />
        <input
          type="number"
          placeholder="Cena ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="rounded border p-2"
        />
        <input
          type="text"
          placeholder="Kategoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="rounded border p-2"
        />

        <button
          type="submit"
          disabled={mutation.isPending}
          className="rounded bg-black p-2 text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
        >
          {mutation.isPending ? "Wysyłanie..." : "Dodaj produkt"}
        </button>
      </div>
    </form>
  );
}
