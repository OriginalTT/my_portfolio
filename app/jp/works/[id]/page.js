import { projects } from '../variables';

const ProjectDescription = ({ params }) => {
    const project = projects.find((project) => project.id === Number(params.id));

    return (
        <main className='max-w-[700px] w-2/3 mx-auto flex flex-col gap-5 items-left'>
            <h1 className='text-center text-3xl'>{project.title}</h1>
            <div className='flex gap-8 justify-between'>
                <p className=' font-light flex-2'>{project.description}</p>
                <div className='flex-1 min-w-[200px]'>
                    <h3>使用ソフト</h3>
                    <ul className='list-disc'>
                        {project.technology.length === 0 ?
                            <li className='ml-7 font-light'>なし</li> :
                            project.technology.map((name, index) => {
                                return (<li key={index} className='ml-7 font-light'>
                                    {name}
                                </li>)
                            })}
                    </ul>
                </div>
            </div>
            {project.page}
        </main>
    )
}

export default ProjectDescription