'use client';

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import Link from 'next/link'
import RegisterForm from './components/RegisterForm'
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="container flex h-screen max-w-md">
            <div className="m-auto w-full">
                <Card>
                    <CardHeader className="text-center space-y-2">
                        <CardTitle>Cadastro</CardTitle>
                        <CardDescription>Já tem uma conta? <Link href="/login" className="text-blue-600 font-bold hover:text-blue-800 hover:underline">Faça login por aqui</Link></CardDescription>
                    </CardHeader>
                    <CardContent className="mt-4">
                        <RegisterForm setIsLoading={setIsLoading} />
                    </CardContent>
                    <CardFooter className="flex mt-6">
                        <Button type="submit" form="registerForm" className="w-full" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Cadastrar
                        </Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default LoginPage