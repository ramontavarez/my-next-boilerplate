import axiosInstance from "@/lib/axiosInstance";
import { authResetPasswordSchema } from "@/schemas/auth-reset-password-schema";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { ZodError } from "zod";

export async function POST(request: Request) {
    const data = await request.json();

    try {
        const validate = authResetPasswordSchema.safeParse(data);
        if (!validate.success) {
            const { errors }: ZodError = validate.error;
            return Response.json({ errors }, { status: 400 })
        }

        const res = await axiosInstance.post('/auth/reset', {
            password: data.password,
            token: data.token
        });

        return Response.json({
            success: true,
            message: res.data.message
        })

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