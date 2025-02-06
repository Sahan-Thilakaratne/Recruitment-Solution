import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/"]
const publicRoutes = ["/sign-in", "/sign-up"]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = cookies().get("session")?.value;

    console.log("Session cookie:", cookie); // Debugging

    if (!cookie) {
        console.log("No session cookie found"); // Debugging
    }

    const session = cookie ? await decrypt(cookie) : null;

    console.log("Session data:", session); // Debugging

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
    }

    if (isPublicRoute && session) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    return NextResponse.next();
}