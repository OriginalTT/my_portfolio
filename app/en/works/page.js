import Link from 'next/link';

const Works = () => {
    return (
        <main className='mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-6 py-14 text-offblack sm:px-8 lg:py-24'>
            <section className='w-full max-w-[680px] text-center'>
                <p className='text-sm font-light uppercase text-accent'>
                    Works
                </p>
                <h1 className='mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl'>
                    Renovation in progress
                </h1>
                <p className='mt-6 text-justify text-base font-light leading-8 md:text-lg'>
                    I am refreshing this section to better show my process and projects.
                </p>
                <p className='mt-4 text-justify text-base font-light leading-7'>
                    Thanks for your patience.
                </p>
                <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                    <Link
                        href='/en/profile'
                        className='w-full rounded-full border-2 border-ink bg-ink px-6 py-3 text-canvas hover:border-accent hover:bg-accent hover:text-canvas sm:w-fit'
                    >
                        View Profile
                    </Link>
                    <Link
                        href='/en/contact'
                        className='w-full rounded-full border-2 border-ink bg-transparent px-6 py-3 text-ink hover:border-accent hover:bg-accent hover:text-canvas sm:w-fit'
                    >
                        Contact Me
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Works
