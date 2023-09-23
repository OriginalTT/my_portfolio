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
            className='flex justify-center align-center  p-5 rounded-xl'>
            <h1 className='font-bold text-9xl drop-shadow-2xl z-50' > {index + 1}</h1>
            <div className='flex items-center'>
                <BsFillArrowLeftCircleFill
                    className='mr-[-50px] z-40 text-3xl text-offwhite
                    bg-highlight rounded-full  border-highlight border-2
                    hover:text-highlight hover:bg-offwhite hover:border-offwhite'
                    onClick={() => handleThumbnailUpdate(-1)} />
                <div>
                    <Image
                        width={500} height={500}
                        className='rounded-xl z-50 w-[500px] h-[500px] box-border'
                        src={`/projects/${project.id}/thumbnail_${thumbnailId}.JPG`}
                        style={{ objectFit: "cover" }}
                        alt='Image' />
                </div>
                <BsFillArrowRightCircleFill
                    className='ml-[-50px] z-40 text-3xl text-offwhite
                    bg-highlight rounded-full  border-highlight border-2
                    hover:text-highlight hover:bg-offwhite hover:border-offwhite'
                    onClick={() => handleThumbnailUpdate(1)} />
            </div>
            <div className='w-[250px] ml-10 mt-[150px] z-40'>
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
                <Link href={`/jp/works/${project.id}`}
                    className='text-lg font-bold bg-offwhite px-3 py-1 rounded-full 
                    text-highlight flex items-center w-fit gap-1
                    hover:bg-highlight hover:text-offwhite hover:border-offwhite
                    border-2 box-border'
                >
                    <AiFillInfoCircle className='inline text-xl' />
                    詳細はこちら</Link>
            </div>
            <div className='bg-highlight2 w-[500px] h-[500px] rounded-xl z-[-1] ml-[-450px] mt-[100px]'></div>
        </div>
    )
}

export default ProjectCard