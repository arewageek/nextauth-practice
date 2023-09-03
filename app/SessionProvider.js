'use client'
import { Session } from "next-auth";
import { SessionProvider as Provider } from 'next-auth/react'

export const SessionProvider = ({ children, session }) => {
    return(
        <Provider>
            {children}
        </Provider>
    )
}