'use client'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub, BsGlobeAmericas } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
// import { useMouse } from '@react-hooks-library/core'

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState('jp');

  // const { x, y } = useMouse({ type: 'page' });

  const handleLanguageChange = () => {
    setLanguage(prev => {
      if (prev === 'en') {
        console.log('jp');
        return 'jp';
      } else {
        console.log('en');
        return 'en';
      }
    });
  }

  return (
    <html lang="en">
      <body className={`${notoSansJP.className} bg-highlight text-offwhite tracking-tight`}>
        {/* <motion.div
          className='rounded-full z-0 pointer-events-none'
          animate={{
            opacity: 1,
            height: 20,
            width: 20,
            marginLeft: -10,
            marginTop: -10,
            fontSize: '20px',
            backgroundColor: '#13ACDE',
            x: x,
            y: y,
          }}
        >
        </motion.div> */}
        <motion.header
          className='m-3 z-50'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className='flex justify-between w-11/12 max-w-[1500px] mx-auto'>
            <Link href={'/'} className='font-bold hover:text-purple-200'>Tentaro Kubo</Link>
            <nav className='flex gap-3 font-light items-center'>
              <Link href={`/${language}/profile`} className='hover:text-purple-200'>Profile</Link>
              <Link href={`/${language}/works`} className='hover:text-purple-200'>Works</Link>
              <Link href={`/${language}/contact`} className='hover:text-purple-200'>Contact</Link>
              <Link href={`/`} className='hover:text-purple-200'><BsGlobeAmericas /></Link>
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
            <Link href={`/${language}/contact`} >
              <HiMail className='text-5xl hover:text-purple-200' />
            </Link>
            <a target='_blank'
              href={'https://www.linkedin.com/in/tentaro-kubo/'}
              className='hover:text-purple-200'><BsLinkedin /></a>
            <a target='_blank'
              href={'https://github.com/OriginalTT'}
              className='hover:text-purple-200'><BsGithub /></a>
          </div>
        </motion.footer>
      </body>
    </html>
  )
}
