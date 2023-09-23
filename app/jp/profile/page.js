'use client';
import { engProfileInfo, jpProfileInfo } from './variables'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoIosDocument } from 'react-icons/io';

const profile = () => {
    return (
        <main className='w-fit mx-auto'>
            <motion.div
                className='absolute z-0'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 4 }}>
                <motion.h1
                    className=' font-bold text-9xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    考え、
                </motion.h1>
                <motion.h1
                    className='font-bold text-9xl z-0'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
                >
                    創り、
                </motion.h1>
                <motion.h1
                    className='font-bold text-9xl z-0'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 2 }}
                >
                    学ぶヒト。
                </motion.h1>
            </motion.div>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 5 }}>
                <h1 className="font-bold text-9xl mt-[100px] z-50 drop-shadow-2xl">
                    {engProfileInfo.name}</h1>
                <div className='flex gap-3 mt-10 z-40'>
                    <div className='w-96'>
                        <p className='font-light text-md'>{engProfileInfo.bio}</p>
                        <div className='flex my-3 gap-5'>
                            <div>
                                <h4>スキル</h4>
                                <ul>
                                    {engProfileInfo.skills.map((skill, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4>言語</h4>
                                <ul>
                                    {engProfileInfo.languages.map((language, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{language}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4>趣味</h4>
                                <ul>
                                    {engProfileInfo.hobbies.map((hobby, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{hobby}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <a
                            className='flex items-center gap-1 text-lg py-3 px-5 
                                bg-offwhite text-highlight rounded-full w-fit ml-auto mr-5  mt-10 box-border
                                hover:bg-highlight2 hover:text-offwhite border-offwhite border-2'
                            href={'https://drive.google.com/file/d/1R7JcxSxMEy6THsyqy0GOMDfhLk-iUYu9/view?usp=drive_link'}
                            target='_blank'
                        >
                            <IoIosDocument />
                            <p>レジュメ (英文)</p>
                        </a>
                    </div>
                    <Image
                        src='/portrait.jpg' width={500} height={500} alt="headshot" />
                </div >
            </motion.section>
        </main >
    )
}

export default profile