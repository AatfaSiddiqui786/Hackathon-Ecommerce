import React from 'react'
import Link from 'next/link';
export const Top = () => {
  return (
    <div>
 {/* Company Section */}
 <div className="text-gray-500 w-full sm:w-auto ">
            
            <div className=' flex justify-center gap-11 pb-5'>
            <h1><Link href='/Home2'>Home2</Link></h1>
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
