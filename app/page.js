'use client'
import { motion } from "framer-motion"
import { MdNavigateNext } from "react-icons/md"

export default function Home() {
  return (
    <main className="h-96">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
        className="font-bold text-9xl mx-10 mt-[200px]">
        Hello! <MdNavigateNext className="inline" />
      </motion.h1>
      <motion.h1
        className='font-bold text-9xl mx-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
        こんにちは! <MdNavigateNext className="inline" /></motion.h1>
    </main>
  )
}
