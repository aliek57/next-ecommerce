import Link from "next/link";

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/api/products");
    return response.json();
}

export default async function Home() {
    const products = await fetchProducts();

    return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center min-h-screen pt-60">
        <main className="flex flex-col gap-[32px] w-full max-w-4xl">
            <h1 className="text-3xl font-bold">Products</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product: { id: number; name: string; price: number }) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                <li className="border p-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p>R${product.price.toFixed(2)}</p>
                </li>
            </Link>
            ))}
            </ul>
        </main>
    </div>
    );
}