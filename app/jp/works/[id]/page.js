'use client';
import { projects } from '../variables';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { filterOptions } from '../variables';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

const ProjectDescription = ({ params }) => {
    const isBrowser = () => typeof window !== 'undefined';
    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const project = projects.find((project) => project.id === Number(params.id));
    const [thumbnailId, setThumbnailId] = useState(0);

    const allRelated = projects.filter((other) => other.genre.includes(project.genre[0]) && other.id !== project.id);
    const related = allRelated.slice(0, 3);

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
        <main className='max-w-[800px] w-2/3 mx-auto my-10 flex flex-col gap-5 items-left'>
            <Link href={'/jp/works'} className='flex gap-3 items-center bg-offwhite text-highlight
            box-border border-2 border-offwhite
            w-fit px-5 py-3 rounded-full hover:bg-hoverColor hover:text-offwhite'>
                <BsFillArrowLeftCircleFill className='text-xl' />
                <p>戻る</p>
            </Link>
            {project.video ? project.video :
                <div className='flex items-center w-fit mx-auto'>
                    <BsFillArrowLeftCircleFill
                        className='mr-[-75px] z-40 text-3xl text-offwhite
                bg-highlight rounded-full  border-highlight border-2
                hover:text-highlight hover:bg-offwhite hover:border-offwhite'
                        onClick={() => handleThumbnailUpdate(-1)} />
                    <div>
                        <Image
                            width={600} height={350}
                            className='rounded-xl rounded-  z-50 w-[800px] h-[500px]'
                            src={`/projects/${project.id}/thumbnail_${thumbnailId}.JPG`}
                            style={{ objectFit: "contain" }}
                            alt='Image' />
                    </div>
                    <BsFillArrowRightCircleFill
                        className='ml-[-75px] z-40 text-3xl text-offwhite
                bg-highlight rounded-full  border-highlight border-2
                hover:text-highlight hover:bg-offwhite hover:border-offwhite'
                        onClick={() => handleThumbnailUpdate(1)} />
                </div>
            }
            <h1 className='text-3xl'>{project.title}</h1>
            <div className='flex gap-8 justify-between'>
                <p className=' font-light flex-2'>{project.description}</p>
                <div className='flex-1 min-w-[200px]'>
                    <h3>使用技術</h3>
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
            {project.tldr ?
                <div className='bg-highlight2 rounded-xl p-5'>
                    <h3 className='text-xl'>まとめ</h3>
                    <ul className='list-disc'>
                        {project.tldr.map((tldr, index) => {
                            return (<li className='ml-7' key={index}>{tldr}</li>)
                        })}
                    </ul>
                </div>
                : null}
            <div className='p-5'>
                {project.page}
            </div>
            <div>
                <h1 className='text-3xl my-10'>関連作品</h1>
                <div className='flex flex-col gap-10'>
                    {related.map((project, index) => {
                        return (
                            <Link
                                href={`/jp/works/${project.id}`}
                                className='w-full rounded-xl bg-highlight2 hover:opacity-80 border-2 box-border border-highlight hover:border-offwhite' key={index}>
                                <div className='flex'>
                                    <Image src={`/projects/${project.id}/thumbnail_0.JPG`}
                                        width={300} height={300} alt={`Thumbnail for ${project.title}`}
                                        style={{ objectFit: 'cover' }}
                                        className='rounded-l-xl h-[200px] min-w-[300px]'
                                    />
                                    <div className='mx-5 my-3'>
                                        <h1>{project.title}</h1>
                                        <div className='flex gap-2 px-1 my-1'>
                                            {project.genre.map((genreId, index) => {
                                                const genre = filterOptions.find((option) => option.id === genreId);
                                                return (<p key={index}
                                                    className={`${genre.color} px-2 py-1 rounded-md drop-shadow-sm text-xs text-offwhite`}>
                                                    {genre.name}
                                                </p>)
                                            })}
                                        </div>
                                        <p className='text-sm font-extralight'>{project.description}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <BsFillArrowUpCircleFill onClick={scrollToTop}
                className='fixed bottom-[10%] right-[5%] text-5xl hover:text-hoverColor' />
        </main>
    )
}

export default ProjectDescription