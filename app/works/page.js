import { projects } from './variables'
import Image from 'next/image'

const works = () => {
    return (
        <main>
            <div className='flex flex-row gap-10 w-screen mt-20 mx-auto h-fit overflow-y-hidden overflow-x-scroll'>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <h1 className='font-bold text-9xl relative top-[80px] left-[-30px] z-10 drop-shadow-2xl' > {index}</h1>
                            <div
                                className='flex justify-center align-center bg-highlight2 drop-shadow-2xl text-offwhite p-5 h-[600px] rounded-xl'>
                                <div className='w-[250px] flex flex-col shrink-0'>
                                    <Image width={250} height={250} className='rounded-xl opacity-80' src={project.thumbnail} alt='Image' />
                                    <div className='my-3'>
                                        <h3 className='font-bold text-xl'>{project.title}</h3>
                                        <div className='flex gap-2 px-1 my-3'>
                                            {project.genre.map((genre, index) => {
                                                return <p key={index} className={`${genre.color} px-2 py-1 rounded-md drop-shadow-md text-xs text-offblack`}>{genre.name}</p>
                                            })}
                                        </div>
                                        <p className='text-md'>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div >
        </main >
    )
}

export default works