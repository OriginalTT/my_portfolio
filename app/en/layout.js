'use client'
import '../globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsTranslate } from 'react-icons/bs';

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export default function RootLayout({ children }) {
  return (
    <>
      <motion.header
        className='m-3 z-50'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        suppressHydrationWarning
      >
        <div className='flex justify-between w-11/12 max-w-[1500px] mx-auto'>
          <Link href={'/'} className='font-bold hover:text-purple-200'>Tentaro Kubo</Link>
          <nav className='flex gap-3 font-light items-center'>
            <Link href={`/en/profile`} className='hover:text-purple-200'>Profile</Link>
            <Link href={`/en/works`} className='hover:text-purple-200'>Works</Link>
            <Link href={`/en/contact`} className='hover:text-purple-200'>Contact</Link>
            <Link href={'/'} className='hover:text-purple-200'><BsTranslate /></Link>
          </nav>
        </div>
      </motion.header>
      {children}
    </>
  )
}
