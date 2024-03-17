"use client";

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { AlertCircle } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(6, { message: 'Nome deve ter pelo menos 6 caracteres' }),
    email: z.string().email(),
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

const RegisterForm = ({ setIsLoading }: { setIsLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [error, setError] = React.useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const res = await axios.post('/api/auth/register', values);

            if (res.data.success) {
                setError(null);
                setIsLoading(false);
                window.location.href = '/dashboard';
            }
        } catch (e: AxiosError | unknown) {
            if (e instanceof AxiosError) {
                console.log(e.response?.data);
                setError(e.response?.data.message);
            }

            setIsLoading(false);
        }
    }
    return (
        <Form {...form}>
            <form id="registerForm" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input  {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='youremail@mail.com' {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirmar senha</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>

            {error && (
                <Alert className="mt-8" variant={"destructive"}>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

        </Form>
    )
}

export default RegisterForm