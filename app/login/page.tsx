"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

async function loginUser({ email, password }: { email: string; password: string}) {
    const response = await fetch("/api/auth/login", {
        method: 'POST',
        body: JSON.stringify({ email, password})
    });
    return response.json();
}

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useMutation({ mutationFn: loginUser});

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        mutation.mutate({ email, password });
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <div>
            <label htmlFor="email" className="block mb-2 text-gray-900 dark:text-white">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-gray-900 dark:text-white">Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
        <button type="submit" className="bg-gray-800 text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Login</button>
        {mutation.isError && <p>Error logging in: {mutation.error.message}</p>}
        {mutation.isSuccess && <p>Login successful!</p>}
    </form>
  )
}