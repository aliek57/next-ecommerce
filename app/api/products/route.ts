import { NextResponse } from "next/server";

const products = [
    { id: 1, name: "Flor-da-fortuna", price: 10.99},
    { id: 2, name: "Jibóia", price: 70},
    { id: 3, name: "Costela de Adão", price: 35.5},
]

export async function GET() {
    return NextResponse.json(products)
}