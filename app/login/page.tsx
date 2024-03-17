'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="container flex h-screen max-w-md">
            <div className="m-auto w-full">
                <Card>
                    <CardHeader className="text-center space-y-2">
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Ainda não tem uma conta? <Link href="/register" className="text-blue-600 font-bold hover:text-blue-800 hover:underline">Cadastre-se aqui</Link></CardDescription>
                    </CardHeader>
                    <CardContent className="mt-4">
                        <LoginForm setIsLoading={setIsLoading} />
                        <div className="float-end">
                            <Link href="/forgot" className="text-blue-600 text-xs font-bold hover:text-blue-800 hover:underline">Esqueci minha senha</Link>
                        </div>
                    </CardContent>
                    <CardFooter className="flex mt-6">
                        <Button type="submit" form="loginForm" className="w-full" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Login
                        </Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default LoginPage