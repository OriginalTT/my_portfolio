'use client';
import { projects, filterOptions } from './variables'
import { useState } from 'react';
import { AiFillFilter } from 'react-icons/ai';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import ProjectCard from './components';
import { motion } from 'framer-motion';

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

    const isBrowser = () => typeof window !== 'undefined';
    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <main className='mx-auto my-[50px] max-w-[1000px]'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='w-fit mx-auto flex items-center gap-3 bg-highlight2 text-offwhite px-5 py-3 rounded-xl'>
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
            </motion.div>
            <div className='flex flex-col justify-center items-center gap-10 mt-10 w-fit mx-auto'>
                {projectList.map((project, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}>
                            <ProjectCard
                                key={index}
                                index={index}
                                project={project} />
                        </ motion.div >
                    )
                })}
            </div>
            <BsFillArrowUpCircleFill onClick={scrollToTop}
                className='fixed bottom-[10%] right-[5%] text-5xl hover:text-hoverColor' />
        </main>
    )
}

export default works