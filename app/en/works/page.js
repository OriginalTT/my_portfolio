'use client';
import { projects, filterOptions } from './variables'
import { useState } from 'react';
import Image from 'next/image'
import { AiFillFilter, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';

const works = () => {
    const [filter, setFilter] = useState([]);
    const [projectList, setProjectList] = useState(projects);


    const handleFilter = (e) => {
        let newFilter;
        const value = Number(e.target.id);
        if (e.target.checked) {
            newFilter = [...filter, value];
        } else {
            newFilter = filter.filter((item) => item !== value);
        }
        setFilter(newFilter);
        applyFilter(newFilter);
    }

    const applyFilter = (currentFilter) => {
        if (currentFilter.length === 0) {
            setProjectList(projects);
            return;
        }
        let newList = [];
        projects.forEach((project) => {
            let included = false;
            project.genre.forEach((id) => {
                if (currentFilter.includes(id)) {
                    included = true;
                }
            })
            if (included) {
                newList.push(project);
            }
        });
        setProjectList(newList);
    };


    return (
        <main>
            <div className='ml-10 mt-10 w-fit flex items-center gap-3 bg-offwhite 
            text-highlight px-5 py-3 rounded-xl'>
                <AiFillFilter className='text-3xl' />
                {filterOptions.map((option, index) => {
                    return (
                        <div key={index} className={`px-2 py-1 rounded-md 
                        drop-shadow-sm text-xs text-offwhite ${option.color}
                        flex items-center gap-1`}>
                            <input
                                onChange={handleFilter}
                                type="checkbox" id={index}
                                name={option.name} value={option.name}
                                className='w-3 border rounded-full' />
                            <label htmlFor={index}
                            >{option.name}</label>
                        </div>
                    )
                })}
            </div>
            <div className='mb-[-300px]'>
                <div className='flex flex-col justify-center items-center gap-10 w-fit mt-[400px] mx-auto'>
                    {projectList.map((project, index) => {
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
                                                {project.genre.map((id, index) => {
                                                    return (<p key={index} className={`${filterOptions[id].color} 
                                                    px-2 py-1 rounded-md drop-shadow-sm text-xs text-offwhite`}>
                                                        {filterOptions[id].name}
                                                    </p>)
                                                })}
                                            </div>
                                            <p className='text-sm font-extralight my-5'>{project.description}</p>
                                            <Link href={`/works/${index}`}
                                                className='text-lg font-bold bg-offwhite px-3 py-1 rounded-full 
                                                    drop-shadow-sm text-highlight flex items-center w-fit gap-1'
                                            >
                                                <AiFillInfoCircle className='inline text-2xl' />
                                                詳細はこちら</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-highlight2 w-[500px] h-[500px] rounded-xl z-0 relative top-[-450px] left-[500px]'></div>
                            </div>
                        )
                    })}
                </div >
            </div >
        </main>
    )
}

export default works