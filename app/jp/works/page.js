import Link from 'next/link';

const Works = () => {
    return (
        <main className='mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-6 py-14 text-offblack sm:px-8 lg:py-24'>
            <section className='w-full max-w-[680px] text-center'>
                <p className='text-sm font-light uppercase text-accent'>
                    Works
                </p>
                <h1 className='mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl'>
                    ただいま改装中です
                </h1>
                <p className='mt-6 text-base md:text-lg font-light leading-8'>
                    自分の考え方、プロトタイピング、インタラクションデザインをもっと伝わりやすく見せられるように、このページをリニューアルしています。作品ページは少しだけお休み中ですが、近いうちにより見やすい形で戻ってくる予定です。
                </p>
                <p className='mt-4 text-base font-light leading-7'>
                    途中の状態にも関わらず見に来てくださってありがとうございます。
                </p>
                <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                    <Link
                        href='/jp/profile'
                        className='w-full rounded-full border-2 border-ink bg-ink px-6 py-3 text-canvas hover:border-accent hover:bg-accent hover:text-canvas sm:w-fit'
                    >
                        プロフィールを見る
                    </Link>
                    <Link
                        href='/jp/contact'
                        className='w-full rounded-full border-2 border-ink bg-transparent px-6 py-3 text-ink hover:border-accent hover:bg-accent hover:text-canvas sm:w-fit'
                    >
                        連絡する
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Works
