import Link from 'next/link';

const Works = () => {
    return (
        <main className='min-h-[70vh] flex items-center justify-center px-6 py-20 text-offblack'>
            <section className='max-w-[680px] text-center'>
                <p className='text-sm font-light uppercase tracking-[0.2em] text-hoverColor'>
                    Works
                </p>
                <h1 className='mt-4 text-4xl md:text-7xl font-bold'>
                    Renovation in progress
                </h1>
                <p className='mt-6 text-base md:text-lg font-light leading-8'>
                    I am giving this section a proper refresh so it can better show how I think, prototype, and design interactions. The works page is taking a short break for now, but it will be back with a cleaner story soon.
                </p>
                <p className='mt-4 text-base font-light leading-7'>
                    Thanks for stopping by while the paint is still drying.
                </p>
                <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <Link
                        href='/en/profile'
                        className='bg-offwhite text-highlight rounded-full px-6 py-3 border-2 border-offwhite hover:bg-hoverColor hover:text-offwhite'
                    >
                        View Profile
                    </Link>
                    <Link
                        href='/en/contact'
                        className='bg-highlight2 text-offwhite rounded-full px-6 py-3 border-2 border-offwhite hover:bg-hoverColor hover:text-offwhite'
                    >
                        Contact Me
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Works
