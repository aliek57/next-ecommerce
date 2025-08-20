import AddToCartButton from "../../components/AddToCartButton";

async function fetchProduct(id: string) {
    const response = await fetch(`http://localhost:3000/api/products`);
    const products = await response.json();
    return products.find((product: { id: number }) => product.id === parseInt(id));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await fetchProduct(params.id);

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="font-sans min-h-screen pt-20">
            <main className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg mb-2">Price: R${product.price.toFixed(2)}</p>
                <AddToCartButton product={product} />
            </main>
        </div>
    );
}