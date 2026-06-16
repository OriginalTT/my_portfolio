import Link from 'next/link';

const ProjectDescription = () => {
    return (
        <main className='min-h-[70vh] flex items-center justify-center px-6 py-20 text-offblack'>
            <section className='max-w-[640px] text-center'>
                <p className='text-sm font-light uppercase tracking-[0.2em] text-hoverColor'>
                    Project page
                </p>
                <h1 className='mt-4 text-4xl md:text-6xl font-bold'>
                    ただいま準備中です
                </h1>
                <p className='mt-6 text-base md:text-lg font-light leading-8'>
                    プロジェクトの見せ方を見直しているため、個別のケーススタディは一時的に非公開にしています。より伝わりやすい形に整えているところなので、少しだけお待ちください。
                </p>
                <Link
                    href='/jp/works'
                    className='mt-10 inline-block bg-offwhite text-highlight rounded-full px-6 py-3 border-2 border-offwhite hover:bg-hoverColor hover:text-offwhite'
                >
                    作品ページへ戻る
                </Link>
            </section>
        </main>
    )
}

export default ProjectDescription
