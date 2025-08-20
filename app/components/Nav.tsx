import Link from "next/link";

export default function Nav() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">E-commerce Next</Link>
                <div>
                <Link href="/" className="mr-4">Home</Link>
                <Link href="/cart">Cart</Link>
                </div>
            </nav>
        </header>
    )
}