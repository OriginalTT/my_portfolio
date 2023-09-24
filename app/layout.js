'use client'
import './globals.css'
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
    <html lang="en">
      <body className={`${notoSansJP.className} bg-highlight text-offwhite tracking-tight`}>
        {children}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
        >
          <div className='flex justify-center items-center gap-3 mt-5 text-3xl p-10'>
            <Link href={`/en/contact`} >
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
      </body>
    </html>
  )
}
