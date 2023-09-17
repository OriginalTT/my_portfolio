export const filterOptions = [
    { id: 0, name: "UX", color: 'bg-cyan-700' },
    { id: 1, name: "フロントエンド開発", color: 'bg-green-700' },
    { id: 2, name: "Video", color: 'bg-orange-700' },
    { id: 3, name: "ストーリーテリング", color: 'bg-purple-700' },
    { id: 4, name: "SNSマーケティング", color: 'bg-teal-700' },
];

export const projects = [
    {
        id: 0,
        "title": "Watami Sushi",
        "genre": [0],
        "technology": ['Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator'],
        "thumbnail": 4,
        "description": "ローカル企業のWEB サイトを分析、そしてリデザインするという大学の授業の一環で行ったプロジェクト。Watami Sushiというカナダ、ウォータールーにある寿司屋のWEB サイトを選択。",
        page: (
            <article>
                <p>Testing Out some stuff</p>
                <a href="https://www.watamisushi.com/">Watami Sushi</a>
            </article>
        )
    },
    {
        id: 1,
        "title": "Foodly",
        "genre": [0],
        "technology": ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
        "thumbnail": 5,
        "description": "食を共有するSNS というテーマに沿ってペルソナ設定からHigh-Fidelity PrototypeまでのUX における全行程を制作するという大学の授業の一環で行ったグループプロジェクト。リサーチ、ペルソナ制作などから始め、Low-Fidelity Prototype、ユーザーテストを行い、最終的にHigh-Fidelity Prototypeを制作。"
    },
    {
        id: 2,
        "title": "Curiosity",
        "genre": [2],
        "technology": ['Adobe Premiere Pro'],
        "thumbnail": 0,
        "description": "このプロジェクトは映像のみで感情を伝えるというもので、効果音もセリフも使わずいかにして感情を伝えるかという映像の技術力が試された課題でした。私が選んだ感情は「好奇心」です。理由としては、僕の性格の奥底に一番根強くある感情だから自分らしく表現ができると考えたからです。この課題を通して、色の使い方や間の取り方、光の使い方などを主に学ぶことができました。"
    },
    {
        id: 3,
        "title": "アルト2号",
        "genre": [2, 4],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects'],
        "thumbnail": 0,
        "description": "このプロジェクトは作編曲家として活動している友人と始めたもので、TikTokなどのショート動画でJ-popおよびアニソンをカバーするというものでした。私は動画編集や構成などを主に担当しました。このプロジェクトを通しての一番の学びはデータを活用した戦略立案です。ショート動画はアルゴリズムで再生回数か決まるので、どのような指標を伸ばしたら高評価を受けるのかなどを分析しました。例えば、冒頭にオリジナル楽曲のMVを持ってきたり早口で字幕を追わせることにより視聴維持率を著しく伸ばすことができました。"
    },
    {
        id: 4,
        "title": "Weather App",
        "genre": [0, 1],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 0,
        "description": "APIの使い方を勉強するために自主的に行ったプロジェクトです。APIを使い天気情報、および背景の画像を取得します。このプロジェクトでは特にユーザビリティを担保するための細かな工夫を学ぶことができました。例えば背景画像の色合いが予測できないため、その上にある文字のリーダビリティをどのように担保するのかなどです。"
    },
    {
        id: 5,
        "title": "Champion Memo",
        "genre": [0, 1],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 0,
        "description": "APIの使い方を勉強するために自主的に行ったプロジェクトです。APIを使い League of Legends (Riot Games) というゲームのプレイヤー情報を取得しています。取得した情報を処理して勝率などを計算して表示します。また、 Riot Games が公開している画像ライブラリと組み合わせてキャラクターのアイコンなどを表示しています。"
    },
    {
        id: 7,
        "title": "Makerspace Persona",
        "genre": [0],
        "technology": [],
        "thumbnail": 3,
        "description": "Makerspace とはハイテクな機械やツール、工具など様々な道具が提供される施設。UX デザインの勉強として、そのMakerspace の利用者のペルソナを作成するというプロジェクト。"
    },
]
