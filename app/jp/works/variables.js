import { BiLinkExternal } from 'react-icons/bi';
import Image from 'next/image';

export const filterOptions = [
    { id: 0, name: "UX", color: 'bg-cyan-200' },
    { id: 1, name: "フロントエンド開発", color: 'bg-green-200' },
    { id: 2, name: "映像制作", color: 'bg-orange-200' },
    { id: 3, name: "SNS", color: 'bg-purple-200' },
];

export const projects = [
    {
        id: 0,
        "title": "Watami Sushi",
        "genre": [0],
        "technology": ['Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator'],
        "thumbnail": 4,
        "description": "ローカル企業のWEB サイトを分析、そしてリデザインするという大学の授業の一環で行ったプロジェクト。Watami Sushiというカナダ、ウォータールーにある寿司屋のWEBサイトの改善を行った。",
        tldr: [
            'ユーザーと共感し、ユーザーが求めている情報が自然と手に入るレイアウトに改善。',
            '「Call to Action」までの導線設計を明確化。',
            '直感的なアイコンなどを使用することで、情報量とミニマルなデザインを両立。'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <div className="">
                    <h3 className="text-xl my-1">流れ</h3>
                    <p className="font-light my-1">このプロジェクトは大きく二つのセクションに分かれています。一つは元のWEBサイトの分析・批評。もう一つはそれをもとに改善したHigh Fidelity Prototypeの制作です。High Fidelity PrototypeはAdobe XDを使用して制作。</p>
                </div>

                <div className="pt-3">
                    <h3 className="text-xl my-1">分析</h3>
                    <p className="font-light my-1">元の企業のWEBサイトをUXの観点から分析し、その分析結果を動画(英語)としてまとめました。実際のWEBページを映しながら説明している動画を以下の埋め込みからご覧いただけますが、要点は箇条書きでまとめてあります。</p>
                    <iframe width="700" height="450" src="https://www.youtube.com/embed/n2YSkE3zRnA?si=FOtMDo_XevhvRsus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                        className="my-1 mx-auto rounded-xl"
                    ></iframe>
                    <ul className="list-disc font-light text-md px-10 my-1">
                        <li className='my-1'>
                            背景画像とその上の文字のコントラストが不十分なため、ランディングページの一番重要な「Welcome」というメッセージが読みにくい。ドロップシャドウなどをつけることによって可読性を向上させるべき。
                        </li>
                        <li className='my-1'>
                            ランディングページの上半分は白黒で統一されている一方で下半分は急に背景画像が色付きに変わる。統一感が失われ、せっかくのミニマルなデザインがブレてしまう。
                        </li>
                        <li className='my-1'>
                            可読性を向上させるためにテキストボックスを用いているが、文字がはみ出しており意味がなくなってしまっている。むしろ、違和感が生まれ見栄えも悪くなっている。
                        </li>
                        <li className='my-1'>
                            フッターに住所や連絡先などの情報が記載されているが、ただのテキストとして記載されているだけなので、ユーザー側がわざわざコピペをして調べなくてはならない。
                        </li>
                        <li className='my-1'>
                            フッターの曜日のテキストのアラインメントが統一されていないため、直観的に情報が伝わりずらい。
                        </li>
                        <li className='my-1'>
                            メニューページのボタン類にはホバーエフェクトがないため直観的にボタンだとわかりずらい。また3つ並んでいるボタンのすぐ下に3つ画像が並んでいるため、何をどうクリックすればいいのかが伝わりずらい。
                        </li>
                        <li className='my-1'>
                            メニューの情報量が少ない。アレルギー食材が使われているのかなどの表記がないため、いちいち店員に確認をしなくてはならない。
                        </li>
                        <li className='my-1'>
                            Photos というお店のWEB サイトでのみ閲覧可能なブログのようなページがあるが、ユーザーにとっての恩恵はあまりない機能。あってもいいが、無くても問題はない。
                        </li>
                        <li className='my-1'>
                            お店のロゴをクリックするとランディングページに戻る設計だが、このロゴもホバーエフェクトがないため、クリックが可能であると特にスマホユーザーにはわかりずらい。
                        </li>
                        <li className='my-1'>
                            閲覧中のページ名をヘッダーで選ぶとページのTOP まで戻る機能があるが、初めてのユーザーには絶対に伝わらない。シンプルに右下に上矢印のボタンを配置するなどのほうが好ましい。
                        </li>
                        <li className='my-1'>
                            Call To Actionが特になく、このWEB サイトを見てもユーザーの行動が変わることは期待できない。
                        </li>
                    </ul>
                </div>
                <div className="pt-3">
                    <h3 className="text-xl my-1">リデザイン</h3>
                    <p className="font-light my-1">分析結果をもとに、WEB サイトをリデザインし、Adobe XDを使いHigh-Fidelity Prototypeを作成。プロトタイプから一部抜粋し、以下に要点を記載しておりますが、<a href='https://drive.google.com/file/d/1bs0umhorDjJpGd-R0DCK7-6tB_S-ZRk9/view?usp=sharing' target="_blank"
                        className="underline font-bold hover:text-hoverColor"
                    >こちら
                        <BiLinkExternal className='inline-block' />
                    </a>から元のファイルもご覧いただけます。</p>
                    <Image
                        width={800} height={1442}
                        className="mx-auto my-1" src={'/projects/0/redesign_jp.png'} alt="リデザインの解説" />
                </div>
            </article>
        )
    },
    {
        id: 1,
        "title": "Foodly",
        "genre": [0],
        "technology": ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
        "thumbnail": 5,
        "description": "食を共有するSNSというテーマに沿ってペルソナ設定からHigh-Fidelity Prototypeまで、UXにおける全行程を行ったグループプロジェクト。リサーチ、ペルソナ制作などから始め、Low-Fidelity Prototype、ユーザーテストを行い、最終的にHigh-Fidelity Prototypeを制作。",
        tldr: [
            'ペルソナ制作やリサーチなどを行い、Low-Fidelity Prototypeを作成。',
            'ユーザーテストを行い、そのフィードバックをもとにHigh-Fidelity Prototypeを作成。',
            '一部のユーザーを意識しすぎることなく、様々なユーズケースを想定。'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <Image
                    src={'/projects/1/design_jp.png'}
                    width={800} height={1668}
                    alt="デザインの解説" />
                <a href='https://drive.google.com/file/d/15RswYj7NskPutRm6c6w8tMc5mAnsiA-O/view?usp=sharing' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >元ファイルはこちら
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 2,
        "title": "Curiosity",
        "genre": [2],
        "technology": ['Adobe Premiere Pro', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "映像のみで感情を伝えるというプロジェクト。効果音もセリフも使わずにしていかに感情を伝えるかが試された。このプロジェクトでは、「好奇心」という感情を選択。",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/6fjE64XGk2k?si=dIrMZAvSBI-n5iQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        tldr: [
            '同じ映像の間を調整することで展開をつくる。',
            'ピンポイントで色を使うことによって、印象ずける。',
            'ライトを効果的に使い、白黒でも立体感を演出。'
        ]
    },
    {
        id: 3,
        "title": "アルト2号",
        "genre": [2, 3],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects'],
        "thumbnail": 4,
        "description": '作編曲家として活動している友人と始めたプロジェクト。TikTokなどのショート動画のプラットフォームでJ-popやアニソンのカバー動画を投稿。動画編集、構成、ディレクションなどを担当。',
        tldr: [
            'アルゴリズムによって高評価を受けるフォーマットを立案。',
            'データをもとに、随時編集、構成などをアップデート',
            '最高再生回数は約3万回再生を記録。'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://www.tiktok.com/@alto2go' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >TikTokアカウントはこちら
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 10,
        "title": "Ball Tube - 3D Website",
        "genre": [1],
        "technology": ['Blender', 'HTML', 'CSS', 'JavaScript'],
        "thumbnail": 4,
        "description": "3Dソフトの使い方、またWEBサイト上でのアニメーションの有効的な使い方を勉強するためのプロジェクト。Blenderを使い制作した3Dアニメーションを、WEBサイトのランディングページとして使用。また、スクロールでアニメーションが再生されるように。",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/IRbMN4HnBFw?si=8ypV-RlGM9SbK4RI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://github.com/OriginalTT/ball_tube' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >GitHubはこちら
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 4,
        "title": "Weather App",
        "genre": [0, 1],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 2,
        "description": "APIの使い方を勉強するために自主的に行ったプロジェクト。APIを使い天気情報、および背景の画像を取得し、表示。不確定要素が多い中でのユーザビリティを担保するための細かな工夫を凝らした。",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/OMIrPo8w_Zc?si=kiMfrXLHpkyfUThc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        tldr: [
            'Weather APIを使い天気情報を取得',
            'Pexels APIを使い画像を取得',
            '背景画像の色が不確定な中、可読性を担保するために様々な技術を使用。'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://github.com/OriginalTT/weather_app' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >GitHubはこちら
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 5,
        "title": "Champion Memo",
        "genre": [1],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 2,
        "description": "APIの使い方を勉強するために自主的に行ったプロジェクト。APIを使いLeague of Legends (Riot Games)というゲームのプレイヤー情報を取得し、その情報を処理して勝率やKDAなどの統計を算出。また、Riot Gamesが公開している画像ライブラリと組み合わせてキャラクターのアイコンなどを表示。",
        tldr: [
            'Riot Games APIを使い情報を取得。',
            '統計情報を算出し、表示。',
            '画像ライブラリと組み合わせてアイコンなどを表示。',
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://github.com/OriginalTT/champ_memo' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >GitHubはこちら
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 7,
        "title": "Makerspace Persona",
        "genre": [0],
        "technology": [],
        "thumbnail": 3,
        "description": "Makerspaceとはハイテクな機械やツール、工具など様々な道具が提供される施設。そのMakerspaceの利用者のペルソナを作成するというグループプロジェクト。",
        tldr: [
            'Makerspaceについてのリサーチを行う。',
            'リサーチをもとに3つの主なターゲット層を選出。',
            'それぞれのターゲット層のペルソナを制作。',
        ],
        page: (
            <article className="flex flex-col gap-5">
                <div className="pt-3">
                    <h3 className="text-xl my-1">リサーチ</h3>
                    <p className="font-light my-1">ペルソナを制作するにあたり、Makerspace についてのリサーチを行う。以下の情報を収集。</p>
                    <ul className="list-disc font-light text-md px-10 my-1">
                        <li>Makerspace の定義、及び現状</li>
                        <li>デモグラフィック: 主なユーザーは中学生2, 3年生</li>
                        <li>日本においてのMakerspace の現状: STEM教育の一つとしての高い注目度</li>
                        <li>Makerspace を活用したスタートアップが多数存在</li>
                        <li>Reddit(海外の掲示板)のユーザーの声: ほとんどはDIY 好きな中年男性</li>
                    </ul>
                </div>
                <div className="pt-3">
                    <h3 className="text-xl my-1">ペルソナ制作</h3>
                    <p className="font-light my-1">リサーチをもとに以下のペルソナを制作。</p>
                    <Image src={'/projects/7/thumbnail_0.jpg'} width={750} height={700} />
                    <Image src={'/projects/7/thumbnail_1.jpg'} width={750} height={700} />
                    <Image src={'/projects/7/thumbnail_2.jpg'} width={750} height={700} />
                </div>
            </article>
        )
    },
    {
        id: 6,
        "title": "Let's Drink More Coffee!",
        "genre": [2],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects'],
        "thumbnail": 2,
        "description": "モーショングラフィックスをとおしてのストーリーテリング。明確なCall to Actionをいかに視聴者に伝えるのかという課題。縦長の画面比、尺も最大30秒という近年のトレンドであるショート動画のフォーマットで制作。",
        video: (<iframe width="800" height="500" src="https://youtube.com/embed/Vf1FHaUaSik?si=KJUhXH9qKrKEu5yK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 9,
        "title": "RoboRenaissance: Exploring the Technology Behind Conversational AI",
        "genre": [2],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "アカデミアにおける生成AIについてのドキュメンタリーを制作するグループプロジェクト。企画、構成、インタビュー、撮影、編集などに携わる。",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/b5WpKXqgEQ0?si=p3TVd4NFpUZTAl3m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 8,
        "title": "How I became Shiori Kajiwara",
        "genre": [2],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "カナダで鍼灸師をされている梶原さんのインタビューを行い、それをドキュメンタリーとして制作したプロジェクト。ストーリーボード制作やロケの手配、インタビューやディレクションなど、映像制作の一連の流れを経験。",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/FP76l6hz51c?si=xd5IIwVcjkrzjDCb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 11,
        "title": "PayPal for Motorola Razr",
        "genre": [0],
        "technology": [],
        "thumbnail": 1,
        "description": "Motorola Razrというガラケーで使えるように現代のアプリをデザインをするというプロジェクト。PayPalのガラケーに適したデザインを考察し、Low-Fidelity Prototypeを制作。",
        tldr: [
            'スペーシングや箇条書きの使い方などの工夫でユーザビリティーを確保。',
            'ハードウェアを考慮し、矢印ボタンでも操作しやすいデザインに。',
        ]
    },
]
