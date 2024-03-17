import { Badge } from '@/components/ui/badge';
import axiosInstance from '@/lib/axiosInstance';
import React from 'react'

const Dashboard = async () => {
    try {
        // const res = await axiosInstance.get('/users');
        // console.log(res.data);
    } catch (e) {

    }
    return (
        <div>
            <header>

                <Badge variant="outline" className="mb-4">Dashboard</Badge>
                <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Bem vindo!</h1>
                <p className="mt-2 text-md text-gray-800 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, metus vel sollicitudin dignissim, leo odio interdum purus, a rhoncus purus metus at arcu. Suspendisse potenti. Sed vitae elit eros.</p>

            </header>

        </div>
    )
}

export default Dashboard