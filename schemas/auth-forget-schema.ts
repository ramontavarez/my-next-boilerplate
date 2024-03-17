import { z } from "zod";

export const authForgetSchema = z.object({
    email: z.string().email()
});