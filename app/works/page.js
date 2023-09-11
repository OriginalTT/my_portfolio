import { projects } from './variables'
import Image from 'next/image'

const works = () => {
    return (
        <main className='mb-[-300px]'>
            <div className='flex flex-col justify-center items-center gap-10 w-fit mt-[450px] mx-auto'>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className='w-[600px] mt-[-350px] ml-[-500px]'>
                            <div
                                className='flex justify-center align-center  p-5 rounded-xl'>
                                <h1 className='font-bold text-9xl drop-shadow-2xl relative top-[-50px] left-[550px] z-50' > {index + 1}</h1>
                                <div className='flex shrink-0 z-30'>
                                    <div className='w-[500px] h-[500px] rounded-xl bg-black opacity-10 relative left-[500px]'></div>
                                    <Image width={500} height={500} className='rounded-xl' src={project.thumbnail} alt='Image' />
                                    <div className='w-[250px] m-3 relative top-[100px]'>
                                        <h3 className='font-bold text-xl'>{project.title}</h3>
                                        <div className='flex gap-2 px-1 my-3'>
                                            {project.genre.map((genre, index) => {
                                                return <p key={index} className={`${genre.color} px-2 py-1 rounded-md drop-shadow-sm text-xs text-offwhite`}>{genre.name}</p>
                                            })}
                                        </div>
                                        <p className='text-md'>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-highlight2 w-[500px] h-[500px] rounded-xl z-0 relative top-[-450px] left-[500px]'></div>
                        </div>
                    )
                })}
            </div >
        </main >
    )
}

export default works