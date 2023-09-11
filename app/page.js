'use client'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main>
      <motion.h1
        className='font-bold text-9xl mt-[200px] mx-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
        Hello There!</motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
        className="font-bold text-9xl mx-10">
        Are You Ready?
      </motion.h1>
    </main>
  )
}
