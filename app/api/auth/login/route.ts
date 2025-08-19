import { NextResponse } from "next/server";

let users: any[] = [];

import * as registerRoute from "../register/route"

export async function POST(req: Request) {
    const { email, password } = await req.json();
    
    const users = (registerRoute as any).users || [];
    const user = users.find((user: any) => user.email === email && user.password === password);
    if(!user) return NextResponse.json({ success: false, message: "User not found" })
    return NextResponse.json({ success: true, token: "fake-jwt", email });
}