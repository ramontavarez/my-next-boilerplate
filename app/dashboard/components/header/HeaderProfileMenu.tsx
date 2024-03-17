'use client';

import { SessionUser } from '@/app/actions/getUser';
import { logout } from '@/app/actions/logout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
import React from 'react'
import { getFallbackName } from '@/lib/utils';

const HeaderProfileMenu = (user: SessionUser) => {
    async function handleLogout() {
        await logout();
        window.location.href = '/login';
    }
    return (
        <div className="flex flex-row items-center justify-end gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="w-10 h-10 cursor-pointer">
                        <AvatarImage src={user.image} alt="@shadcn" />
                        <AvatarFallback>{getFallbackName(user.name)}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="text-xs">
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm font-medium leading-none">{user.name}</span>
                            <span className="text-xs leading-none text-muted-foreground">{user.email}</span>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="w-4 h-4 mr-2" />
                            <span>Perfil</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="w-4 h-4 mr-2" />
                            <span>Configurações</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleLogout()}>
                        <LogOut className="w-4 h-4 mr-2" />
                        <span>Sair</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default HeaderProfileMenu