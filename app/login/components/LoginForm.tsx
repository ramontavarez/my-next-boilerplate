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
    email: z.string().email(),
    password: z.string()
})

const LoginForm = ({ setIsLoading }: { setIsLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [error, setError] = React.useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const res = await axios.post('/api/auth/login', values);
            if (res.data.success) {
                setError(null);
                setIsLoading(false);
                // navigate('/dashboard');
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
            <form id="loginForm" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='youremail@mail.com' {...field} />
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
                                <Input type="password" {...field} />
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

export default LoginForm