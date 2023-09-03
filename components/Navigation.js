'use client'
import Link from "next/link"
import { useState } from "react"

export const Navigation = () => {
    const [user, setUser] = useState(false)

    const handleSigninRequest = () => {
        console.log('found');
    }

    return (
        <nav className='w-full py-6 px-4 bg-[#222d] backdrop-blur-sm flex justify-between flex-col md:flex-row text-sm'>
          <div className='font-semibold' onClick={() => setUser(e => !e)}>
            <Link href="/">Brand Name</Link>
          </div>
          {
            user ? <>
              <div className='links flex flex-col md:flex-row mt-7 md:mt-0 justify-end space-y-4 md:space-x-4 md:space-y-0'>
                <Link href="/profile" className='hover:cursor-pointer'>
                  Profile
                </Link>
                <div className='hover:cursor-pointer' onClick={() => handleSigninRequest}>
                  Logout
                </div>
              </div>
            </>
            :<>
              <div className='links flex flex-col md:flex-row mt-7 md:mt-0 justify-end space-y-4 md:space-x-4 md:space-y-0'>
                <div className='hover:cursor-pointer' onClick={handleSigninRequest}>
                  Signin
                </div>
              </div>
            </>
          }
          
        </nav>
    )
}
