import axiosInstance from "@/lib/axiosInstance";
import { authForgetSchema } from "@/schemas/auth-forget-schema";
import { AxiosError } from "axios";
import { ZodError } from "zod";

export async function POST(request: Request) {
    const data = await request.json();

    try {
        const validate = authForgetSchema.safeParse(data);
        if (!validate.success) {
            const { errors }: ZodError = validate.error;
            return Response.json({ errors }, { status: 400 })
        }

        const res = await axiosInstance.post('/auth/forget', {
            email: data.email,
            callbackUrl: 'http://localhost:3000/reset-password'
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