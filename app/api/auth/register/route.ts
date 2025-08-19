import { NextResponse } from "next/server";

let users: any[] = []

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const exists = users.find((user) => user.email === email && user.password === password)
    if (exists) return NextResponse.json({ success: false, message: "User already exists" });

    users.push({ email, password });
    return NextResponse.json({ success: true, message: "User registered successfully" });
}