import React from 'react'
import HeaderSearchBar from './HeaderSearchBar'
import HeaderProfileMenu from './HeaderProfileMenu'
import { getUser } from '@/app/actions/getUser'

const DashboardHeader = async () => {
    const user = await getUser();
    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
            <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
                <div className="me-5 lg:me-0 lg:hidden">
                    <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
                </div>
                <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">

                    <HeaderSearchBar />
                    <HeaderProfileMenu {...user} />
                </div>
            </nav>
        </header>

    )
}

export default DashboardHeader