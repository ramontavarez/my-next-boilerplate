'use server';

import { cookies } from "next/headers";

export async function getUser(): Promise<SessionUser> {
    const user = cookies().get('user');
    if (!user || !user.value) {
        return {
            id: 0,
            name: '',
            email: '',
            image: '',
        }
    }

    return JSON.parse(user.value);
}

export type SessionUser = {
    id: number;
    name: string;
    email: string;
    image: string;
}