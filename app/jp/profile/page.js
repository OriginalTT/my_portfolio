import { engProfileInfo, jpProfileInfo } from './variables'
import Image from 'next/image'

const profile = () => {
    return (
        <main className='w-fit mx-auto'>
            <h1 className="font-bold text-9xl mt-[200px] mx-10 z-50 relative drop-shadow-2xl">
                {engProfileInfo.name}</h1>
            <div className='flex gap-3'>
                <div className='w-96'>
                    <p className='font-light text-xs mt-10'>{engProfileInfo.bio}</p>
                    <div className='flex justify-between my-3'>
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
                </div>
                <Image
                    className='z-0 mt-[-50px]'
                    src='/portrait.jpg' width={500} height={500} alt="headshot" />
            </div >
        </main >
    )
}

export default profile