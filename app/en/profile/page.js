import { engProfileInfo, jpProfileInfo } from './variables'
import Image from 'next/image'

const profile = () => {
    return (
        <main className='h-[calc(100vh-300px)]'>
            <h1 className="font-bold text-9xl mt-[200px] mx-10 z-50 relative drop-shadow-2xl">{engProfileInfo.name}</h1>
            <Image
                className='absolute top-[330px] left-[500px] z-0'
                src={engProfileInfo.headshot} width={500} height={500} alt="headshot" />
            <div className='w-96 m-10'>
                <p className='font-light text-xs indent-3'>{engProfileInfo.bio}</p>
                <div className='flex justify-between my-3'>
                    <div>
                        <h4>Skills</h4>
                        <ul>
                            {engProfileInfo.skills.map((skill, index) => (
                                <li key={index}
                                    className='font-light text-sm'
                                >{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Languages</h4>
                        <ul>
                            {engProfileInfo.languages.map((language, index) => (
                                <li key={index}
                                    className='font-light text-sm'
                                >{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Hobbies</h4>
                        <ul>
                            {engProfileInfo.hobbies.map((hobby, index) => (
                                <li key={index}
                                    className='font-light text-sm'
                                >{hobby}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </main >
    )
}

export default profile