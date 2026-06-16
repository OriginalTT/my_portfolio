'use client';
import { profileInfo } from './variables'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { BsImageFill, BsFillPersonFill } from 'react-icons/bs';
import profilePicture from '../../../public/portrait.webp';

const profile = () => {
    return (
        <main className='mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 lg:py-24'>
            <motion.section
                className='w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', }}>
                <h1 className="text-5xl font-bold leading-none drop-shadow-2xl sm:text-6xl lg:text-8xl">
                    {profileInfo.name}</h1>
                <div className='mt-8 flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between lg:gap-12'>
                    <div className='w-full md:max-w-[620px]'>
                        <p className='text-base font-light leading-8'>{profileInfo.bio}</p>
                        <div className='my-8 grid grid-cols-1 gap-5 sm:grid-cols-3'>
                            <div>
                                <h4>Expertise</h4>
                                <ul>
                                    {profileInfo.skills.map((skill, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4>Interests</h4>
                                <ul>
                                    {profileInfo.interests.map((interest, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{interest}</li>
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
                        </div>
                        <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
                            <Link href={'/en/works'}
                                className='flex items-center justify-center gap-1 py-3 px-5 
                            bg-ink text-canvas rounded-full w-full sm:w-fit box-border
                            hover:bg-accent hover:text-canvas border-ink hover:border-accent border-2' >
                                <BsImageFill />
                                <p>Works</p>
                            </Link>
                            <a
                                className='flex items-center justify-center gap-1 py-3 px-5 
                            bg-transparent text-ink rounded-full w-full sm:w-fit box-border
                            hover:bg-accent hover:text-canvas border-ink hover:border-accent border-2'
                                href='https://drive.google.com/file/d/17qMUBxfsWDEhkHzoXmK4hv2NqcOpnyk0/view?usp=sharing'
                                target='_blank'
                            >
                                <BsFillPersonFill />
                                <p>Resume</p>
                            </a>
                        </div>
                    </div>
                    <Image
                        quality={100} priority={true} placeholder='blur'
                        src={profilePicture} width={300} height={300}
                        alt="Tentaro's Portrait Photo"
                        className='mx-auto aspect-square w-full max-w-[320px] rounded-xl object-cover md:mx-0 md:w-[300px] lg:w-[340px] lg:max-w-[340px]' />
                </div>
            </motion.section>
        </main >
    )
}

export default profile
