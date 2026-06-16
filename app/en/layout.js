'use client'
import '../globals.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub, BsTranslate } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

export default function RootLayout({ children }) {
  return (
    <>
      <motion.header
        className='z-50 px-4 py-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        suppressHydrationWarning
      >
        <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4'>
          <Link href={'/'} className='shrink-0 font-bold hover:text-hoverColor'>Tentaro Kubo</Link>
          <nav className='flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-light sm:text-base'>
            <Link href={`/en/profile`} className='hover:text-hoverColor hover:underline'>Profile</Link>
            <Link href={`/en/works`} className='hover:text-hoverColor hover:underline'>Works</Link>
            <Link href={`/en/contact`} className='hover:text-hoverColor hover:underline'>Contact</Link>
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
        <div className='mt-16 flex items-center justify-center gap-4 px-4 pb-10 pt-6 text-3xl'>
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
    </>
  )
}
