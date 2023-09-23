'use client'
import { motion } from "framer-motion"
import { MdNavigateNext } from "react-icons/md"
import Link from "next/link"

export default function Home() {
  return (
    <main className="h-96">
      <motion.div
        className="mt-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
        <Link
          href='/en/profile'
          className="font-bold text-9xl mx-10 hover:text-purple-200" >
          Hello! <MdNavigateNext className="inline" /></Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
        <Link
          href='/jp/profile'
          className='font-bold text-9xl mx-10 hover:text-purple-200'>
          こんにちは! <MdNavigateNext className="inline" />
        </Link>
      </motion.div>
    </main >
  )
}
