import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { User } from 'lucide-react'

const Navbar = () => {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
            <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">MNB</a>
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={3} x2={21} y1={6} y2={6} /><line x1={3} x2={21} y1={12} y2={12} /><line x1={3} x2={21} y1={18} y2={18} /></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                        <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-5 dark:text-gray-400 dark:hover:text-gray-500" href="#" aria-current="page">Home</a>
                        <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-5 dark:text-gray-400 dark:hover:text-gray-500" href="#">Link 1</a>
                        <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-5 dark:text-gray-400 dark:hover:text-gray-500" href="#">Link 2</a>
                        <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-5 dark:text-gray-400 dark:hover:text-gray-500" href="#">Link 3</a>

                        <div className="flex items-center gap-x-2 sm:ms-auto">
                            <Button asChild variant={"ghost"}>
                                <Link href="/login">
                                    <User className="mr-2 w-4 h-4" />
                                    Log in
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Navbar