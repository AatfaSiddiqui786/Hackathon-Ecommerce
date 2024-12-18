import React from 'react';
import Link from 'next/link';

export const Top = () => {
    return (
        <div>
            {/* Company Section */}
            <div className="text-gray-500 sm:w-auto ">

                {/* Horizontal Scrolling Section for Small Devices */}
                <div className="flex justify-start items-center text-sm pb-5 overflow-x-auto space-x-5 sm:hidden ">
                    <h1><Link href='/Home2'>Home</Link></h1>
                    <h1><Link href='/About'>About</Link></h1>
                    <h1><Link href={'/List'}>List</Link></h1>
                    <h1><Link href={'/Products'}>Product</Link></h1>
                    <h1><Link href={'/Shopping'}>Shopping</Link></h1>
                    <h1><Link href={'/Contact'}>Contact</Link></h1>
                </div>

                {/* Static Navigation for Larger Screens */}
                <div className="hidden sm:flex justify-center flex-wrap gap-11 pb-5">
                    <h1><Link href='/Home2'>Home</Link></h1>
                    <h1><Link href='/About'>About us</Link></h1>
                    <h1><Link href={'/List'}>Product List</Link></h1>
                    <h1><Link href={'/Products'}>Product</Link></h1>
                    <h1><Link href={'/Shopping'}>Shopping</Link></h1>
                    <h1><Link href={'/Contact'}>Contact Me</Link></h1>
                </div>
            </div>
        </div>
    )
}
