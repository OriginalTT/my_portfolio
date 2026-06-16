import Link from 'next/link';

const Works = () => {
    return (
        <main className='min-h-[70vh] flex items-center justify-center px-6 py-20 text-offblack'>
            <section className='max-w-[680px] text-center'>
                <p className='text-sm font-light uppercase tracking-[0.2em] text-hoverColor'>
                    Works
                </p>
                <h1 className='mt-4 text-4xl md:text-7xl font-bold'>
                    ただいま改装中です
                </h1>
                <p className='mt-6 text-base md:text-lg font-light leading-8'>
                    自分の考え方、プロトタイピング、インタラクションデザインをもっと伝わりやすく見せられるように、このページをリニューアルしています。作品ページは少しだけお休み中ですが、近いうちにより見やすい形で戻ってくる予定です。
                </p>
                <p className='mt-4 text-base font-light leading-7'>
                    途中の状態にも関わらず見に来てくださってありがとうございます。
                </p>
                <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <Link
                        href='/jp/profile'
                        className='bg-offwhite text-highlight rounded-full px-6 py-3 border-2 border-offwhite hover:bg-hoverColor hover:text-offwhite'
                    >
                        プロフィールを見る
                    </Link>
                    <Link
                        href='/jp/contact'
                        className='bg-highlight2 text-offwhite rounded-full px-6 py-3 border-2 border-offwhite hover:bg-hoverColor hover:text-offwhite'
                    >
                        連絡する
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Works
