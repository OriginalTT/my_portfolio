'use client'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'


const notoSansJP = Noto_Sans_JP({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.className} bg-highlight text-offwhite tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
