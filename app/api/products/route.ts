import { NextResponse } from "next/server";

const products = [
    { id: 1, name: "Flor-da-fortuna", price: 10.99},
    { id: 2, name: "Jibóia", price: 70},
    { id: 3, name: "Costela de Adão", price: 35.5},
    { id: 4, name: "Orquídea", price: 102.9},
    { id: 5, name: "Samambaia", price: 25},
    { id: 6, name: "Espada de São Jorge", price: 15.5},
    { id: 7, name: "Suculenta", price: 8.5 },
    { id: 8, name: "Rosa do Deserto", price: 95.0 },
    { id: 9, name: "Cacto", price: 12.0 },
    { id: 10, name: "Orelha de Shrek", price: 66.0 },
    { id: 11, name: "Dinheiro em Penca", price: 22.5 },
    { id: 12, name: "Hortênsia", price: 60.0 },
]

export async function GET() {
    return NextResponse.json(products)
}