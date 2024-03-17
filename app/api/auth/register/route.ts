import axiosInstance from "@/lib/axiosInstance";
import { authRegisterSchema } from "@/schemas/auth-register-schema";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { ZodError } from "zod";


export async function POST(request: Request) {
    const data = await request.json();

    try {
        const validate = authRegisterSchema.safeParse(data);
        if (!validate.success) {
            const { errors }: ZodError = validate.error;
            return Response.json({ errors }, { status: 400 })
        }

        const res = await axiosInstance.post('/auth/register', {
            name: data.name,
            email: data.email,
            password: data.password
        });

        if (res.data.accessToken) {
            cookies().set('token', res.data.accessToken);
            cookies().set('user', JSON.stringify(res.data.user));
            return Response.json({
                success: true,
                status: res.status
            })
        }
    } catch (e) {
        if (e instanceof AxiosError) {
            return Response.json({
                ...e.response?.data,
            }, {
                status: e.response?.status
            })
        }
    }
}