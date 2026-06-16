'use client'
import { motion } from "framer-motion"
import { MdNavigateNext } from "react-icons/md"
import { BsTranslate } from "react-icons/bs"
import { animate } from "framer-motion";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
  const { push } = useRouter();

  const options = useRef();

  const enIntro = useRef();
  const enIntroFirst = useRef();
  const enIntroSecond = useRef();
  const enIntroThird = useRef();

  const jpIntro = useRef();
  const jpIntroFirst = useRef();
  const jpIntroSecond = useRef();
  const jpIntroThird = useRef();

  const handleEnIntro = () => {
    const enSequence = [
      [enIntroFirst.current, { opacity: 1 }, { duration: 1, delay: 1, ease: 'easeInOut' }],
      [enIntroSecond.current, { opacity: 1 }, { duration: 1, ease: 'easeInOut' }],
      [enIntroThird.current, { opacity: 1 }, { duration: 1, ease: 'easeInOut' }],
      [enIntro.current, { opacity: 0 }, { duration: 1, delay: 0.5, ease: 'easeInOut' }]
    ]

    animate(options.current, { opacity: 0 }, { duration: 1 }, { ease: 'easeIn' });
    animate(enSequence);
    setTimeout(() => {
      push('/en/profile');
    }, 7000);
  }

  const handleJpIntro = () => {
    const jpSequence = [
      [jpIntroFirst.current, { opacity: 1 }, { duration: 1, delay: 1, ease: 'easeInOut' }],
      [jpIntroSecond.current, { opacity: 1 }, { duration: 1, ease: 'easeInOut' }],
      [jpIntroThird.current, { opacity: 1 }, { duration: 1, ease: 'easeInOut' }],
      [jpIntro.current, { opacity: 0 }, { duration: 1, delay: 0.5, ease: 'easeInOut' }]
    ]

    animate(options.current, { opacity: 0 }, { duration: 1 }, { ease: 'easeIn' });
    animate(jpSequence);
    setTimeout(() => {
      push('/jp/profile');
    }, 7000);
  }

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
      <main className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl items-center px-6 py-16 sm:px-8">
        <div ref={options} className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
            <h2
              onClick={handleEnIntro}
              className="w-fit text-5xl font-bold leading-none hover:cursor-pointer hover:text-hoverColor sm:text-7xl lg:text-9xl" >
              Hello! <MdNavigateNext className="inline" /></h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
            <h2
              onClick={handleJpIntro}
              className='mt-3 w-fit text-5xl font-bold leading-none hover:cursor-pointer hover:text-hoverColor sm:text-7xl lg:text-9xl'>
              こんにちは! <MdNavigateNext className="inline" />
            </h2>
          </motion.div>
        </div>
        <div
          ref={enIntro}
          className='pointer-events-none fixed inset-x-6 top-1/2 -translate-y-1/2 sm:inset-x-8 lg:left-1/2 lg:right-auto lg:w-full lg:max-w-6xl lg:-translate-x-1/2'>
          <h1
            ref={enIntroFirst}
            className='text-5xl font-bold leading-none text-offwhite opacity-0 sm:text-7xl lg:text-9xl'
          >
            A Designer?
          </h1>
          <h1
            ref={enIntroSecond}
            className='text-5xl font-bold leading-none opacity-0 sm:text-7xl lg:text-9xl'
          >
            Programmer?
          </h1>
          <h1
            ref={enIntroThird}
            className='text-5xl font-bold leading-none opacity-0 sm:text-7xl lg:text-9xl'
          >
            No no, Both!
          </h1>
        </div>
        <div
          ref={jpIntro}
          className='pointer-events-none fixed inset-x-6 top-1/2 -translate-y-1/2 sm:inset-x-8 lg:left-1/2 lg:right-auto lg:w-full lg:max-w-6xl lg:-translate-x-1/2'>
          <h1
            ref={jpIntroFirst}
            className='text-5xl font-bold leading-none text-offwhite opacity-0 sm:text-7xl lg:text-9xl'
          >
            プログラム
          </h1>
          <h1
            ref={jpIntroSecond}
            className='text-5xl font-bold leading-none opacity-0 sm:text-7xl lg:text-9xl'
          >
            が書ける
          </h1>
          <h1
            ref={jpIntroThird}
            className='text-5xl font-bold leading-none opacity-0 sm:text-7xl lg:text-9xl'
          >
            デザイナー。
          </h1>
        </div>
      </main >
    </>
  );
}
