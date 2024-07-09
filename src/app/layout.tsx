
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import {Plus_Jakarta_Sans} from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/context/them-provider'
import { Suspense } from 'react';
const jakarta = Plus_Jakarta_Sans
({subsets:['latin']})
export default function RootLayout({
  children,
}:Readonly<{children:React.ReactNode}>)  {
  return (
   
      <html lang="en">
        <ClerkProvider >
        <body className={jakarta.className} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
             
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {children}
          
            <Toaster/>
          </ThemeProvider>
          </Suspense>
          </body>
          </ClerkProvider>
      </html>
      
  )
}