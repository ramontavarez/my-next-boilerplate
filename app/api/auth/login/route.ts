import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const data = await request.json();

    if (!data.email || !data.password) {
        return Response.json({
            error: "Email and password are required"
        })
    }

    try {
        const res = await axiosInstance.post('/auth/login', data);

        if (res.data.accessToken) {
            cookies().set('token', res.data.accessToken);
            cookies().set('user', JSON.stringify(res.data.user));
            return Response.json({
                success: true,
                status: res.status
            })
        }

    } catch (e: unknown | AxiosError) {
        if (e instanceof AxiosError) {
            return Response.json({
                ...e.response?.data,
            }, {
                status: e.response?.status
            })
        }
    }

    return Response.json({
        error: 'Bad request',
        status: 400
    })
}