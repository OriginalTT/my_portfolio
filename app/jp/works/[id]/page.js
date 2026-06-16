import Link from 'next/link';

const ProjectDescription = () => {
    return (
        <main className='mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-6 py-14 text-offblack sm:px-8 lg:py-24'>
            <section className='w-full max-w-[640px] text-center'>
                <p className='text-sm font-light uppercase text-hoverColor'>
                    Project page
                </p>
                <h1 className='mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'>
                    ただいま準備中です
                </h1>
                <p className='mt-6 text-base md:text-lg font-light leading-8'>
                    プロジェクトの見せ方を見直しているため、個別のケーススタディは一時的に非公開にしています。より伝わりやすい形に整えているところなので、少しだけお待ちください。
                </p>
                <Link
                    href='/jp/works'
                    className='mt-10 inline-block w-full rounded-full border-2 border-offwhite bg-offwhite px-6 py-3 text-highlight hover:bg-hoverColor hover:text-offwhite sm:w-fit'
                >
                    作品ページへ戻る
                </Link>
            </section>
        </main>
    )
}

export default ProjectDescription
