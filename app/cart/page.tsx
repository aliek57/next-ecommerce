"use client";

import { useCart } from "../contexts/cartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        alert("YAAAY! Congrats on your purchase :)");
        clearCart();
        router.push("/");
    };

    return (
        <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 pt-20">
            <main className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Go buy something, you cheapstake moron!!!</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="border p-4 rounded-lg mb-4 flex justify-between items-center">
                                    <div>
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p>Price: R${item.price.toFixed(2)}</p>
                                        <div className="flex items-center mt-2">
                                            <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantity:</label>
                                            <input
                                                type="number"
                                                id={`quantity-${item.id}`}
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="w-16 text-center border rounded"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-700 text-white hover:bg-red-600 px-3 py-1 rounded cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 text-2xl font-bold">
                            Total: R${totalPrice.toFixed(2)}
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="mt-4 w-full bg-green-700 text-white hover:bg-green-600 font-medium rounded-lg px-5 py-2.5 text-center cursor-pointer"
                        >
                            Finish
                        </button>
                    </>
                )}
            </main>
        </div>
    );
}