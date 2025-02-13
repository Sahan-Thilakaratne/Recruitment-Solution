import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function getCurrentUser(){

    const session = await decrypt(cookies().get("session")?.value);

    if(!session){
        return NextResponse.json({ user: null }, { status: 401});


    }

    return NextResponse.json({ user: session.userId})
}