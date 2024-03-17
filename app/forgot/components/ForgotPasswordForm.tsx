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
import { authForgetSchema as formSchema } from '@/schemas/auth-forget-schema';

const ForgetPasswordForm = ({ setIsLoading }: { setIsLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ''
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setSuccess(null);
        setIsLoading(true);
        try {
            const res = await axios.post('/api/auth/forgot', values);
            if (res.data.success) {
                setError(null);
                setIsLoading(false);
                setSuccess(res.data.message);
                form.reset();
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
            <form id="forgotPasswordForm" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            </form>

            {error && (
                <Alert className="mt-8" variant={"destructive"}>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert className='mt-8'>
                    <AlertTitle>Quase lá!</AlertTitle>
                    <AlertDescription>{success}</AlertDescription>
                </Alert>
            )}

        </Form>
    )
}

export default ForgetPasswordForm