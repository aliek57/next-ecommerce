"use client"

import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  const response = await fetch("/api/products")
  return response.json()
}

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-20 pl-0">
      <main className="flex flex-col gap-[32px] w-full max-w-4xl">
        <h1 className="text-3xl font-bold">Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((product: { id: number; name: string; price: number }) => (
            <li key={product.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>R${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
