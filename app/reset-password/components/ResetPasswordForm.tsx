"use client";

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authResetPasswordSchema as formSchema } from '@/schemas/auth-reset-password-schema';
import { useSearchParams } from 'next/navigation';


const ResetPasswordForm = ({ setIsLoading }: { setIsLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<boolean>(false);

    const token = useSearchParams().get('token');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setSuccess(false);
        setIsLoading(true);
        try {
            const res = await axios.post('/api/auth/reset', {
                password: values.password,
                confirmPassword: values.confirmPassword,
                token,
            });

            if (res.data.success) {
                setError(null);
                setIsLoading(false);
                setSuccess(true);
                // window.location.href = '/dashboard';
            }
        } catch (e: AxiosError | unknown) {
            if (e instanceof AxiosError) {
                console.log(e.response?.data);
                setError(e.response?.data.message);
            }
            setSuccess(false);
            setIsLoading(false);
        }
    }
    return (
        <Form {...form}>
            <form id="resetPasswordForm" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

            {success && (
                <Alert className="mt-8">
                    <AlertTitle>Pronto!</AlertTitle>
                    <AlertDescription>Sua senha foi alterada com sucesso! <Link href="/login" className="text-blue-600 font-bold hover:text-blue-800 hover:underline">Faça o login aqui</Link></AlertDescription>
                </Alert>
            )}

        </Form>
    )
}

export default ResetPasswordForm