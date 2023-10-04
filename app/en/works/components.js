import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { filterOptions } from "./variables";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai';

const ProjectCard = (props) => {
    const { project, index } = props;
    const [thumbnailId, setThumbnailId] = useState(0);

    const handleThumbnailUpdate = (delta) => {
        setThumbnailId((prev) => {
            if (prev + delta < 0) {
                return project.thumbnail - 1;
            } else {
                return (prev + delta) % project.thumbnail
            }
        }
        );
    }

    return (
        <div
            className='flex justify-center align-center rounded-xl'>
            <div className='flex items-center'>
                {project.thumbnail === 1 ? <BsFillArrowLeftCircleFill
                    className='mr-[-50px] z-40 text-3xl opacity-0' /> :
                    <BsFillArrowLeftCircleFill
                        className='mr-[-50px] z-40 text-3xl text-black
                    bg-highlight rounded-full  border-highlight border-2
                    hover:text-highlight hover:bg-offwhite hover:border-offwhite'
                        onClick={() => handleThumbnailUpdate(-1)} />
                }
                <div>
                    <Image
                        rel='preload'
                        width={500} height={500}
                        className='rounded-l-xl z-50 w-[500px] h-[500px] box-border'
                        src={`/projects/${project.id}/thumbnail_${thumbnailId}.JPG`}
                        style={{ objectFit: "cover" }}
                        alt='Image' />
                </div>
                {project.thumbnail === 1 ?
                    <BsFillArrowRightCircleFill
                        className='ml-[-50px] z-40 text-3xl opacity-0' /> :
                    <BsFillArrowRightCircleFill
                        className='ml-[-50px] z-40 text-3xl text-offwhite
                    bg-highlight rounded-full  border-highlight border-2
                    hover:text-highlight hover:bg-offwhite hover:border-offwhite'
                        onClick={() => handleThumbnailUpdate(1)} />
                }
            </div>
            <div className='w-[250px] ml-10 mr-[-30px] mt-10 z-40'>
                <h3 className='font-bold text-xl'>{project.title}</h3>
                <div className='flex gap-2 px-1 my-3'>
                    {project.genre.map((genreId, index) => {
                        const genre = filterOptions.find((option) => option.id === genreId);
                        return (<p key={index}
                            className={`${genre.color} px-2 py-1 rounded-md drop-shadow-sm text-xs text-offwhite`}>
                            {genre.name}
                        </p>)
                    })}
                </div>
                <p className='text-sm font-extralight my-5'>{project.description}</p>
                <Link href={`/en/works/${project.id}`}
                    className='text-lg bg-offwhite px-3 py-1 rounded-full 
                    text-highlight flex items-center w-fit gap-1
                    hover:bg-highlight hover:text-offwhite border-offwhite
                    border-2 box-border'
                >
                    <AiFillInfoCircle className='inline text-xl' />
                    Learn More</Link>
            </div>
            <div className='bg-highlight2 w-[500px] h-[500px] rounded-r-xl z-[-1] ml-[-450px]'></div>
        </div>
    )
}

export default ProjectCard