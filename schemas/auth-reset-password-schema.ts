import { z } from "zod"

export const authResetPasswordSchema = z.object({
    password: z.string().regex(new RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/), {
        message: 'Senha deve ter pelo menos 1 caracter especial, 1 letra maiuscula, 1 minuscula e 1 numero'
    }),
    confirmPassword: z.string(),
}).superRefine(({ confirmPassword, password }, ctx) => {

    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'As senhas devem coincidir',
            path: ['confirmPassword']
        })
    }
})