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
        <div ref={options}>
          <motion.div
            className="mt-[200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
            <h1
              onClick={handleEnIntro}
              className="font-bold text-9xl mx-10 hover:text-hoverColor hover:cursor-pointer" >
              Hello! <MdNavigateNext className="inline" /></h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}>
            <h1
              onClick={handleJpIntro}
              className='font-bold text-9xl mx-10 hover:text-hoverColor hover:cursor-pointer'>
              こんにちは! <MdNavigateNext className="inline" />
            </h1>
          </motion.div>
        </div>
        <div
          ref={enIntro}
          className='fixed top-[200px] pointer-events-none'>
          <h1
            ref={enIntroFirst}
            className='font-bold text-9xl opacity-0 text-offwhite'
          >
            A Designer?
          </h1>
          <h1
            ref={enIntroSecond}
            className='font-bold text-9xl opacity-0'
          >
            Programmer?
          </h1>
          <h1
            ref={enIntroThird}
            className='font-bold text-9xl opacity-0'
          >
            No no, Both!
          </h1>
        </div>
        <div
          ref={jpIntro}
          className='fixed top-[200px] pointer-events-none'>
          <h1
            ref={jpIntroFirst}
            className='font-bold text-9xl opacity-0 text-offwhite'
          >
            プログラム
          </h1>
          <h1
            ref={jpIntroSecond}
            className='font-bold text-9xl opacity-0'
          >
            が書ける
          </h1>
          <h1
            ref={jpIntroThird}
            className='font-bold text-9xl opacity-0'
          >
            デザイナー。
          </h1>
        </div>
      </main >
    </>
  );
}