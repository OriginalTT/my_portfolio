'use client';
import { profileInfo } from './variables'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { BsImageFill, BsFillPersonFill } from 'react-icons/bs';
import profilePicture from '/public/portrait.webp';

const profile = () => {
    return (
        <main className='w-fit mx-auto'>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', }}>
                <h1 className="font-bold text-4xl md:text-9xl mt-10 ml-5 md:mt-[100px] md:ml-0 z-50 drop-shadow-2xl">
                    {profileInfo.name}</h1>
                <div className='flex flex-col-reverse md:flex-row gap-3 mt-3 md:mt-10 w-11/12 max-w-screen-lg mx-auto'>
                    <div>
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
                                <h4>Hobbies</h4>
                                <ul>
                                    {profileInfo.hobbies.map((hobby, index) => (
                                        <li key={index}
                                            className='font-light text-sm'
                                        >{hobby}</li>
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
                        <div className='flex mt-10 gap-5'>
                            <Link href={'/en/works'}
                                className='flex items-center gap-1 py-3 px-5 
                            bg-offwhite text-highlight rounded-full w-fit box-border
                            hover:bg-hoverColor hover:text-offwhite border-offwhite border-2' >
                                <BsImageFill />
                                <p>Works</p>
                            </Link>
                            <a
                                className='flex items-center gap-1 py-3 px-5 
                            bg-highlight2 text-offwhite rounded-full w-fit box-border
                            hover:bg-hoverColor hover:text-offwhite border-offwhite border-2'
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
                        src={profilePicture} width={500} height={500}
                        alt="Professional headshot of Tentaro Kubo"
                        className='rounded-2xl md:w-[500px] md:h-[500px] mx-auto' />
                </div>
            </motion.section>
        </main >
    )
}

export default profile