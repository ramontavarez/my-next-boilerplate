import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
        return Response.redirect(new URL('/login', request.url))
    }

    if (token && request.nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/dashboard', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/reset-password') && request.nextUrl.searchParams.get('token') === null) {
        return Response.redirect(new URL('/login', request.url))
    }
}