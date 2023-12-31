import { BiLinkExternal } from 'react-icons/bi';
import Image from 'next/image';
import watamiImage from '/public/projects/0/redesign_jp.webp';
import foodlyImage from '/public/projects/1/design_jp.webp';

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
        "technology": ['Adobe XD', 'Photoshop', 'Illustrator'],
        "thumbnail": 4,
        "description": "ローカル企業のWEB サイトを分析、そしてリデザインするという大学の授業の一環で行ったプロジェクトです。Watami Sushiというカナダ、ウォータールーに実際にある寿司屋のWEBサイトの改善を行いました。",
        tldr: [
            'ユーザーと共感し、ユーザーが求めている情報が自然と手に入るレイアウトに改善。',
            '「Call to Action」までの導線設計を明確化。',
            '直感的なアイコンなどを使用することで、情報量とミニマルなデザインを両立。'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <div className="">
                    <h3 className="text-xl my-1">流れ</h3>
                    <p className="font-light my-1">このプロジェクトは大きく二つのセクションに分かれています。一つは元のWEBサイトの分析・批評、もう一つはそれをもとに改善したHigh Fidelity Prototypeの制作です。High Fidelity PrototypeはAdobe XDを使用して制作しました。</p>
                </div>

                <div>
                    <h3 className="text-xl my-1">分析</h3>
                    <p className="font-light my-1">元の企業のWEBサイトをUXの観点から分析し、その分析結果を動画(英語)としてまとめました。ヤコブの10ユーザビリティヒューリスティックスなどのフレームワークを用いた分析を行い、特にユーザーファーストのデザインかという視点から批評いたしました。また、動画は実際のクライアントに説明するような形式で制作しており、短時間で理由と共に問題点を挙げていくというフォーマットにしております。</p>
                    <iframe width="600" height="400" src="https://www.youtube.com/embed/n2YSkE3zRnA?si=FOtMDo_XevhvRsus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                        className="mt-5 mx-auto w-full rounded-xl"
                    ></iframe>
                    {/* <ul className="list-disc font-light text-md px-10 my-1">
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
                    </ul> */}
                </div>
                <div className="mt-3">
                    <h3 className="text-xl my-1">リデザイン</h3>
                    <p className="font-light my-1">分析結果をもとに、WEB サイトをリデザインし、Adobe XDを使いHigh-Fidelity Prototypeを作成しました。制作したプロトタイプから一部抜粋し、以下に要点を記載しておりますが、<a href='https://drive.google.com/file/d/1xuUbtdSGxsvGE1K3L1_l4rKZQ3I9vlhn/view?usp=sharing' target="_blank"
                        className="underline font-bold hover:text-hoverColor inline-block"
                    >こちら
                        <BiLinkExternal className='inline-block' />
                    </a>から元のファイルもご覧いただけます。</p>
                    <Image
                        src={watamiImage}
                        quality={100} priority={true} placeholder='blur'
                        className="mx-auto my-1" alt="リデザインの解説" />
                </div>
            </article>
        )
    },
    {
        id: 12,
        "title": "ESTICO ホームページ制作",
        "genre": [1, 0],
        "technology": ['HTML', 'CSS', 'JavaScript'],
        "thumbnail": 2,
        "description": "福岡のエステサロン、ESTICO様に依頼されてWEBサイトを制作しました。初の有償でのWEB開発の経験でした。ドメインの取得やサーバーのレンタルなど、デザインからデプロイまでのすべての行程を行いました。また、これがきっかけでバックエンドへの興味が湧いたため、Next.jsなどのフレームワークを使ったフルスタックの開発の勉強を始めました。",
        tldr: [
            'HTMLやCSSなどの基礎的な技術を使ってWEBサイトを制作。',
            'ドメインの取得などのデプロイメントの作業を行う。',
            '外部サービスを使い、Instagramなどとの連携を行う。'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://www.estico.net/index.html' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >ホームページはこちら
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 1,
        "title": "Foodly",
        "genre": [0],
        "technology": ['Figma', 'Photoshop', 'Illustrator'],
        "thumbnail": 5,
        "description": "食を共有するSNSというテーマに沿ってペルソナ設定からHigh-Fidelity Prototypeまで、UXにおける全行程を行ったグループプロジェクトです。リサーチ、ペルソナ制作などから始め、Low-Fidelity Prototype、ユーザーテストを行い、最終的にHigh-Fidelity Prototypeを制作しました。",
        tldr: [
            'ペルソナ制作やリサーチなどを行い、Low-Fidelity Prototypeを作成。',
            'ユーザーテストを行い、そのフィードバックをもとにHigh-Fidelity Prototypeを作成。',
            '一部のユーザーを意識しすぎることなく、様々なユーズケースを想定。'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <Image
                    src={foodlyImage}
                    quality={100} priority={true} placeholder='blur'
                    alt="デザインの解説" />
                <a href='https://drive.google.com/file/d/1wKrAEC6mAOc9RtC8vTqzdPc0eX1Qh9oE/view?usp=sharing' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >元ファイルはこちら
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
        "description": "3Dソフトの使い方、またWEBサイト上でのアニメーションの有効的な使い方を勉強するために自主的に作成したプロジェクトです。Blenderを使い制作した3Dアニメーションを、WEBサイトのランディングページとして使用しました。また、スクロールでアニメーションが再生されるように設定しました。",
        video: (<iframe width="700" height="500" src="https://www.youtube.com/embed/IRbMN4HnBFw?si=8ypV-RlGM9SbK4RI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
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
        id: 2,
        "title": "Curiosity",
        "genre": [2],
        "technology": ['Premiere Pro', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "映像のみで感情を伝えるという大学のプロジェクトです。効果音もセリフも使わずにしていかに感情を伝えるかが試されました。私は「好奇心」という感情を伝えることを選択しました。",
        video: (<iframe width="700" height="500" src="https://www.youtube.com/embed/6fjE64XGk2k?si=dIrMZAvSBI-n5iQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        tldr: [
            '同じ映像の間を調整することで展開をつくる。',
            'ピンポイントで色を使うことによって、印象ずける。',
            'ライトを効果的に使い、白黒でも立体感を演出。'
        ]
    },
    {
        id: 4,
        "title": "Weather App",
        "genre": [1, 0],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 2,
        "description": "APIの使い方を勉強するために自主的に行ったプロジェクトです。APIを使い天気情報、および背景の画像を取得し、表示しております。不確定要素が多い中でのユーザビリティを担保するための細かな工夫を凝らしました。",
        video: (<iframe width="700" height="500" src="https://www.youtube.com/embed/OMIrPo8w_Zc?si=kiMfrXLHpkyfUThc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        tldr: [
            'Weather APIを使い天気情報を取得。',
            'Pexels APIを使い画像を取得。',
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
        id: 3,
        "title": "アルト2号",
        "genre": [2, 3],
        "technology": ['Premiere Pro', 'After Effects'],
        "thumbnail": 4,
        "description": '作編曲家として活動している友人と始めたプロジェクトです。TikTokなどのショート動画のプラットフォームでJ-popやアニソンのカバー動画を投稿していました。動画編集、構成、ディレクションなどを担当しました。',
        tldr: [
            'アルゴリズムによって高評価を受けるフォーマットを立案。',
            'データをもとに、編集のスタイルや動画の構成などを随時アップデート。',
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
        id: 6,
        "title": "Let's Drink More Coffee!",
        "genre": [2],
        "technology": ['Premiere Pro', 'After Effects'],
        "thumbnail": 2,
        "description": "モーショングラフィックスを使用したストーリーテリングを勉強するためのプロジェクト。明確なCall to Actionをいかに視聴者に伝えるかが試されました。近年のトレンドである縦長の画面比、30秒間というショート動画のフォーマットで制作しました。",
        video: (<iframe width="700" height="500" src="https://youtube.com/embed/Vf1FHaUaSik?si=KJUhXH9qKrKEu5yK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 5,
        "title": "Champion Memo",
        "genre": [1],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 2,
        "description": "APIの使い方を勉強するために自主的に行ったプロジェクトです。APIを使いLeague of Legends (Riot Games)というゲームのプレイヤー情報を取得し、その情報を処理して勝率やK/D/Aなどの統計を算出して表示しました。また、Riot Gamesが公開している画像ライブラリと組み合わせてキャラクターのアイコンなどを表示しました。",
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
        "description": "Makerspaceとはハイテクな機械やツール、工具など様々な道具が提供される施設のことです。そのMakerspaceの利用者のペルソナを作成するという大学の授業で行ったグループプロジェクトです。",
        tldr: [
            'Makerspaceについてのリサーチを行う。',
            'リサーチをもとに3つの主なターゲット層を選出。',
            'それぞれのターゲット層のペルソナを制作。',
        ],
        page: (
            <article className="flex flex-col gap-5">
                <div className="pt-3">
                    <h3 className="text-xl my-1">リサーチ</h3>
                    <p className="font-light my-1">ペルソナを制作するにあたり、Makerspace についてのリサーチを行いました。その結果、以下の情報を収集できました。</p>
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
                    <p className="font-light my-1">前述したリサーチの結果をもとに以下のペルソナを制作しました。</p>
                    <Image src={'/projects/7/thumbnail_0.JPG'} width={750} height={700} />
                    <Image src={'/projects/7/thumbnail_1.JPG'} width={750} height={700} />
                    <Image src={'/projects/7/thumbnail_2.JPG'} width={750} height={700} />
                </div>
            </article>
        )
    },
    {
        id: 9,
        "title": "RoboRenaissance: Exploring the Technology Behind Conversational AI",
        "genre": [2],
        "technology": ['Premiere Pro', 'After Effects', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "アカデミアにおける生成AIについてのドキュメンタリーを制作したグループプロジェクトです。企画、構成、インタビュー、撮影、編集など、動画制作のすべてのプロセスに携わりました。",
        video: (<iframe width="700" height="500" src="https://www.youtube.com/embed/b5WpKXqgEQ0?si=p3TVd4NFpUZTAl3m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 8,
        "title": "How I became Shiori Kajiwara",
        "genre": [2],
        "technology": ['Premiere Pro', 'After Effects', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "カナダで鍼灸師をされている日本人の梶原さんのドキュメンタリー動画を制作したプロジェクト。ストーリーボード制作やロケの手配、インタビューやディレクションなど、映像制作の一連の流れを学びました。",
        video: (<iframe width="700" height="500" src="https://www.youtube.com/embed/FP76l6hz51c?si=xd5IIwVcjkrzjDCb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 11,
        "title": "PayPal for Motorola Razr",
        "genre": [0],
        "technology": [],
        "thumbnail": 1,
        "description": "Motorola Razrというガラケーで使えるように現代のアプリをリデザインをするというプロジェクトです。世界中で使われている決済サービスのPayPalをガラケーでも使いやすいようにデザインを変更しました。また、リデザインのアイデアを元にLow-Fidelity Prototypeを制作しました。",
        tldr: [
            'スペーシングや箇条書きの使い方などの工夫でユーザビリティーを確保。',
            'ハードウェアを考慮し、矢印ボタンでも操作しやすいデザインに。',
        ]
    },
]
