import Link from 'next/link';

const ProjectDescription = () => {
    return (
        <main className='mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-6 py-14 text-offblack sm:px-8 lg:py-24'>
            <section className='w-full max-w-[640px] text-center'>
                <p className='text-sm font-light uppercase text-accent'>
                    Project page
                </p>
                <h1 className='mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'>
                    Temporarily unavailable
                </h1>
                <p className='mt-6 text-base md:text-lg font-light leading-8'>
                    I am reworking how my projects are presented, so this individual case study is offline for the moment. Thanks for your patience while I make this section better.
                </p>
                <Link
                    href='/en/works'
                    className='mt-10 inline-block w-full rounded-full border-2 border-ink bg-ink px-6 py-3 text-canvas hover:border-accent hover:bg-accent hover:text-canvas sm:w-fit'
                >
                    Back to Works
                </Link>
            </section>
        </main>
    )
}

export default ProjectDescription
