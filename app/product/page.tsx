"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

async function fetchProduct(id: string) {
    const response = await fetch(`/api/products/${id}`);
    const products = await response.json()
    return products.find((product: { id: number }) => product.id === parseInt(id));
}

export default function ProductPage() {
    const { id } = useParams()
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProduct(id),
    })

    if (isLoading) {
    return <h3>Loading...</h3>
  }

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
        <p className="text-lg mb-2">Price: R${data.price.toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to cart
        </button>
      </main>
    </div>
  )
}