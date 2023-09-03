import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { SessionProvider } from './SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sample Next App',
  description: 'THis project was originally created to enable me practive the use of Next Auth and firebase for authentication purpose using a social signin option like google auth',
}

export default function RootLayout({ children }) {

  const session = getServerSession(authOptions)
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navigation />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
