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
      <head>
        <title>Tentaro Kubo's Portfolio</title>
        <meta name="description" content="Tentaro Kubo is A highly motivated UX designer and front-end developer with a background from the University of Waterloo, where he specialized in UX design, video production, and graphic design, complemented by a minor in Computing. Drawing from his experiences in Japan and Canada, he brings a unique international perspective to his work and communicates seamlessly in both Japanese and English. He operates under the principle of logical creativity, ensuring designs that are both innovative and user-friendly." />
      </head>
      <body className={`${notoSansJP.className} bg-highlight text-offwhite tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
