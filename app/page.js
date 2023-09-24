'use client'
import { motion } from "framer-motion"
import { MdNavigateNext } from "react-icons/md"
import { BsTranslate } from "react-icons/bs"
import Link from "next/link"

export default function Home() {
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
            <Link href={`/en/profile`} className='hover:text-hoverColor hover:underline'>Profile</Link>
            <Link href={`/en/works`} className='hover:text-hoverColor hover:underline'>Works</Link>
            <Link href={`/en/contact`} className='hover:text-hoverColor hover:underline'>Contact</Link>
            <Link href={'/'} className='hover:text-hoverColor hover:underline'><BsTranslate /></Link>
          </nav>
        </div>
      </motion.header>
      <main className="h-96 w-fit mx-auto">
        <motion.div
          className="mt-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
          <Link
            href='/en/profile'
            className="font-bold text-9xl mx-10 hover:text-hoverColor" >
            Hello! <MdNavigateNext className="inline" /></Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
          <Link
            href='/jp/profile'
            className='font-bold text-9xl mx-10 hover:text-hoverColor'>
            こんにちは! <MdNavigateNext className="inline" />
          </Link>
        </motion.div>
      </main >
    </>
  )
}
