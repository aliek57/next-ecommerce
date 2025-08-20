import { NextResponse } from "next/server";

const products = [
    { id: 1, name: "Flor-da-fortuna", price: 10.99, describe: "A beautiful plant that brings good luck." },
    { id: 2, name: "Jibóia", price: 70, describe: "A trailing plant with heart-shaped leaves." },
    { id: 3, name: "Costela de Adão", price: 35.5, describe: "A tropical plant with large, split leaves." },
    { id: 4, name: "Orquídea", price: 102.9, describe: "An exotic plant known for its stunning flowers." },
    { id: 5, name: "Samambaia", price: 25, describe: "A lush fern that adds greenery to any space." },
    { id: 6, name: "Espada de São Jorge", price: 15.5, describe: "A hardy plant with sword-like leaves." },
    { id: 7, name: "Suculenta", price: 8.5, describe: "A low-maintenance plant that stores water in its leaves." },
    { id: 8, name: "Rosa do Deserto", price: 95.0, describe: "A desert plant with vibrant flowers." },
    { id: 9, name: "Cacto", price: 12.0, describe: "A spiky plant that thrives in dry conditions." },
    { id: 10, name: "Orelha de Shrek", price: 66.0, describe: "A unique plant with large, ear-shaped leaves." },
    { id: 11, name: "Dinheiro em Penca", price: 22.5, describe: "A plant known for its round, coin-like leaves." },
    { id: 12, name: "Hortênsia", price: 60.0, describe: "A flowering plant with large, colorful blooms." },
]

export async function GET() {
    return NextResponse.json(products)
}