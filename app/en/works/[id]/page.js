import Link from 'next/link';

const ProjectDescription = () => {
    return (
        <main className='min-h-[70vh] flex items-center justify-center px-6 py-20 text-offblack'>
            <section className='max-w-[640px] text-center'>
                <p className='text-sm font-light uppercase tracking-[0.2em] text-hoverColor'>
                    Project page
                </p>
                <h1 className='mt-4 text-4xl md:text-6xl font-bold'>
                    Temporarily unavailable
                </h1>
                <p className='mt-6 text-base md:text-lg font-light leading-8'>
                    I am reworking how my projects are presented, so this individual case study is offline for the moment. Thanks for your patience while I make this section better.
                </p>
                <Link
                    href='/en/works'
                    className='mt-10 inline-block bg-offwhite text-highlight rounded-full px-6 py-3 border-2 border-offwhite hover:bg-hoverColor hover:text-offwhite'
                >
                    Back to Works
                </Link>
            </section>
        </main>
    )
}

export default ProjectDescription
