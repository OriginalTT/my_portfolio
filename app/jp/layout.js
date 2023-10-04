'use client'
import '../globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub, BsTranslate } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

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
          <Link href={'/'} className='font-bold hover:text-hoverColor'>Tentaro Kubo</Link>
          <nav className='flex gap-3 font-light items-center'>
            <Link href={`/jp/profile`} className='hover:text-hoverColor hover:underline'>プロフィール</Link>
            <Link href={`/jp/works`} className='hover:text-hoverColor hover:underline'>作品</Link>
            <Link href={`/jp/contact`} className='hover:text-hoverColor hover:underline'>連絡先</Link>
            <Link href={'/'} className='hover:text-hoverColor hover:underline'><BsTranslate /></Link>
          </nav>
        </div>
      </motion.header>
      {children}
      <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
        >
          <div className='flex justify-center items-center gap-3 mt-5 text-3xl p-10'>
            <Link href={`/jp/contact`} >
              <HiMail className='text-5xl hover:text-hoverColor' />
            </Link>
            <a target='_blank'
              href={'https://www.linkedin.com/in/tentaro-kubo/'}
              className='hover:text-hoverColor'><BsLinkedin /></a>
            <a target='_blank'
              href={'https://github.com/OriginalTT'}
              className='hover:text-hoverColor'><BsGithub /></a>
          </div>
        </motion.footer>
    </>
  )
}
