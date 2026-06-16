'use client';

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { filterOptions } from "./variables";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai';

const ProjectCard = (props) => {
    const { project } = props;
    const [thumbnailId, setThumbnailId] = useState(0);
    const hasMultipleThumbnails = project.thumbnail > 1;

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
        <article className='mx-auto grid w-full max-w-5xl overflow-hidden rounded-xl bg-highlight2 md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.75fr)]'>
            <div className='relative aspect-square w-full bg-highlight sm:aspect-[4/3] md:aspect-square'>
                <Image
                    fill
                    sizes='(max-width: 768px) 100vw, 58vw'
                    className='object-cover'
                    src={`/projects/${project.id}/thumbnail_${thumbnailId}.JPG`}
                    alt={`${project.title} thumbnail`} />
                {hasMultipleThumbnails && (
                    <>
                        <button
                            type='button'
                            aria-label='Previous thumbnail'
                            className='absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-highlight bg-highlight text-3xl text-black hover:border-offwhite hover:bg-offwhite hover:text-highlight'
                            onClick={() => handleThumbnailUpdate(-1)}
                        >
                            <BsFillArrowLeftCircleFill aria-hidden />
                        </button>
                        <button
                            type='button'
                            aria-label='Next thumbnail'
                            className='absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-highlight bg-highlight text-3xl text-offwhite hover:border-offwhite hover:bg-offwhite hover:text-highlight'
                            onClick={() => handleThumbnailUpdate(1)}
                        >
                            <BsFillArrowRightCircleFill aria-hidden />
                        </button>
                    </>
                )}
            </div>
            <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                <div>
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <div className='mt-3 flex flex-wrap gap-2'>
                        {project.genre.map((genreId, index) => {
                            const genre = filterOptions.find((option) => option.id === genreId);
                            return (<p key={index}
                                className={`${genre.color} rounded-md px-2 py-1 text-xs text-offwhite drop-shadow-sm`}>
                                {genre.name}
                            </p>)
                        })}
                    </div>
                </div>
                <p className='text-sm font-extralight leading-6'>{project.description}</p>
                <Link href={`/en/works/${project.id}`}
                    className='flex w-full items-center justify-center gap-1 rounded-full border-2 border-offwhite bg-offwhite px-4 py-2 text-highlight hover:bg-highlight hover:text-offwhite sm:w-fit'
                >
                    <AiFillInfoCircle className='text-xl' />
                    Learn More</Link>
            </div>
        </article>
    )
}

export default ProjectCard
