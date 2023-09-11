import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata = {
  title: 'Tentaro Kubo | Portfolio',
  description: 'Tentaro Kubo is a software developer, UX designer, and graphic \
  designer. He was born and raised in Japan, but now he lives in Canada.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.className} bg-hightlight text-offwhite`}>
        <header className='m-3'>
          <div className='flex justify-between w-11/12 max-w-1000px mx-auto'>
            <Link href={'/'} className='font-bold'>Tentaro Kubo</Link>
            <nav className='flex gap-3 font-light'>
              <Link href={'/profile'}>Profile</Link>
              <Link href={'/works'}>Works</Link>
              <Link href={'/contact'}>Contact</Link>
            </nav>
          </div>
        </header>
        {children}</body>
    </html>
  )
}
