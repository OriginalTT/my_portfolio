'use client';
import { profileInfo } from './variables'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoIosDocument } from 'react-icons/io';

const profile = () => {
    return (
        <main className='w-fit mx-auto'>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', }}>
                <h1 className="font-bold text-9xl mt-[100px] z-50 drop-shadow-2xl">
                    {profileInfo.name}</h1>
                <div className='flex gap-3 mt-10 z-40'>
                    <div className='w-96'>
                        <p className='font-light text-md'>{profileInfo.bio}</p>
                        <div className='flex my-3 gap-5'>
                            <div>
                                <h4>Skills</h4>
                                <ul>
                                    {profileInfo.skills.map((skill, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4>Languages</h4>
                                <ul>
                                    {profileInfo.languages.map((language, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{language}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4>Hobbies</h4>
                                <ul>
                                    {profileInfo.hobbies.map((hobby, index) => (
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
                            <p>Resume</p>
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