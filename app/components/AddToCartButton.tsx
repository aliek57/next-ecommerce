"use client";

import { toast } from "react-toastify";
import { useCart } from "../contexts/cartContext";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
    product: {
        id: number;
        name: string;
        price: number;
    };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const router = useRouter();

    const handleAddClick = () => {
        toast.info(`${product.name} was add to your cart!`);
        addToCart(product);
        router.push("/")
    }

    return (
        <button
            onClick={handleAddClick}
            className="bg-gray-800 text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center cursor-pointer"
        >
            Add to cart
        </button>
    );
}