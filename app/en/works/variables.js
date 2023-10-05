import { BiLinkExternal } from 'react-icons/bi';
import Image from 'next/image';
import watamiImage from '/public/projects/0/redesign_en.webp';
import foodlyImage from '/public/projects/1/design_en.webp';

export const filterOptions = [
    { id: 0, name: "UX", color: 'bg-cyan-200' },
    { id: 1, name: "Front-End Dev.", color: 'bg-green-200' },
    { id: 2, name: "Videography", color: 'bg-orange-200' },
    { id: 3, name: "Social Media", color: 'bg-purple-200' },
];

export const projects = [
    {
        id: 0,
        "title": "Watami Sushi",
        "genre": [0],
        "technology": ['Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator'],
        "thumbnail": 4,
        "description": "This project was part of a university course where we analyzed and redesigned the website of a local business. We worked on improving the website for Watami Sushi, a sushi restaurant located in Waterloo, Canada.",
        tldr: [
            'Empathized with the user to improve the layout and to make important information more accessible.',
            'Clarified the user flow leading to the "Call to Action".',
            'Used intuitive icons to achieve a balance between information and minimal design.'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <div className="">
                    <h3 className="text-xl my-1">Process</h3>
                    <p className="font-light my-1">This project is divided into two main sections. The first section is the analysis and critique of the original website. The second is the creation of a High Fidelity Prototype based on the critique. The High Fidelity Prototype was created using Adobe XD.</p>
                </div>

                <div className="pt-3">
                    <h3 className="text-xl my-1">Analysis</h3>
                    <p className="font-light my-1">We analyzed the original company website from a UX perspective and summarized the analysis results in a video. You can watch the video where I explain with the actual webpage embedded below. The main points are also summarized in bullet points.</p>
                    <iframe width="700" height="450" src="https://www.youtube.com/embed/n2YSkE3zRnA?si=FOtMDo_XevhvRsus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                        className="my-1 mx-auto rounded-xl"
                    ></iframe>
                    <ul className="list-disc font-light text-md px-10 my-1">
                        <li className='my-1'>
                            Due to insufficient contrast between the background image and the text on top of it, the most important message on the landing page, "Welcome", is hard to read. Adding a drop shadow, for instance, would improve readability.
                        </li>
                        <li className='my-1'>
                            While the top half of the landing page is consistent in black and white, the bottom half suddenly changes to a colored background image. This disrupts the consistency, causing the otherwise minimal design to falter.
                        </li>
                        <li className='my-1'>
                            Textboxes are used to improve readability, but the text overflows, rendering them ineffective. This creates a sense of discomfort and affects the aesthetics negatively.
                        </li>
                        <li className='my-1'>
                            The footer contains information such as address and contact details. However, they are just listed as plain text, forcing the user to manually copy and search.
                        </li>
                        <li className='my-1'>
                            The alignment of the day texts in the footer is inconsistent, making the information less intuitive.
                        </li>
                        <li className='my-1'>
                            The buttons on the menu page lack hover effects, making it unclear that they are clickable buttons. Additionally, having three buttons followed immediately by three images can be confusing for users about what they should click on.
                        </li>
                        <li className='my-1'>
                            The menu lacks detailed information. There's no mention of allergens, so customers would need to check with the staff every time.
                        </li>
                        <li className='my-1'>
                            There is a page titled "Photos", which seems to function like a blog only accessible via the restaurant's website. While it's not necessarily harmful, its removal wouldn't pose any issues either.
                        </li>
                        <li className='my-1'>
                            Clicking on the restaurant's logo returns the user to the landing page, but since the logo lacks a hover effect, especially for mobile users, it's not evident that it's clickable.
                        </li>
                        <li className='my-1'>
                            There's a feature that returns the user to the top of the page when they select the name of the current page from the header. However, this functionality is not intuitive, especially for new users. A simple arrow button in the bottom right would be more preferable.
                        </li>
                        <li className='my-1'>
                            There is no clear "Call to Action", so even after viewing the website, it's unlikely that user behavior will change.
                        </li>
                    </ul>

                </div>
                <div className="pt-3">
                    <h3 className="text-xl my-1">Redesign</h3>
                    <p className="font-light my-1">Based on the analysis, we redesigned the website and created a High-Fidelity Prototype using Adobe XD. Some excerpts from the prototype are listed below, but you can also view the original file from <a href='https://drive.google.com/file/d/1bs0umhorDjJpGd-R0DCK7-6tB_S-ZRk9/view?usp=sharing' target="_blank"
                        className="underline font-bold hover:text-purple-200"
                    >here
                        <BiLinkExternal className='inline-block' />
                    </a>.</p>
                    <Image
                        src={watamiImage}
                        quality={100} priority={true} placeholder='blur'
                        className="mx-auto my-1" alt="Explanation of the redesign" />
                </div>
            </article>
        )
    },
    {
        id: 12,
        "title": "ESTICO Website Creation",
        "genre": [1, 0],
        "technology": ['HTML', 'CSS', 'JavaScript'],
        "thumbnail": 2,
        "description": "Developed a website for ESTICO, an esthetic salon in Fukuoka, upon their request. This was my first experience as a professional web developer. I also took care of domain registration and server rental. Furthermore, this sparked my interest in the backend, prompting me to start learning about full-stack development using frameworks like Next.js.",
        tldr: [
            'Developed a website using foundational technologies like HTML and CSS.',
            'Handled deployment tasks such as domain registration.',
            'Integrated external services, establishing a link with platforms like Instagram.'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://www.estico.net/index.html' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >Visit the website
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 1,
        "title": "Foodly",
        "genre": [0],
        "technology": ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
        "thumbnail": 5,
        "description": "A group project to create a high-fidelity prototype of a social media for sharing food, covering the entire UX process from persona creation to the high-fidelity prototype. We began with research, persona creation, etc., went on to produce the Low-Fidelity Prototype, conducted user tests, and finally produced the high-fidelity prototype.",
        tldr: [
            'Conducted persona creation and research to develop a Low-Fidelity Prototype.',
            'Conducted user tests and used that feedback to create a high-fidelity prototype.',
            'Made sure not to focus too much on a specific subset of users, instead considering various use cases.'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <Image
                    src={foodlyImage}
                    quality={100} priority={true} placeholder='blur'
                    alt="Explanation of the design" />
                <a href='https://drive.google.com/file/d/15RswYj7NskPutRm6c6w8tMc5mAnsiA-O/view?usp=sharing' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >See the original file here
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
        "description": "A project to study the usage of 3D software and the effective use of animations on websites. I used Blender to create a 3D animation and used it as a landing page for the website. The animation also plays when scrolled.",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/IRbMN4HnBFw?si=8ypV-RlGM9SbK4RI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://github.com/OriginalTT/ball_tube' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >Check out GitHub here
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
        "description": "A project that conveys emotions solely through visuals. The challenge was to communicate feelings without using sound effects or dialogue. In this project, the emotion of 'curiosity' was chosen.",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/6fjE64XGk2k?si=dIrMZAvSBI-n5iQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        tldr: [
            'Create development by adjusting the same visuals.',
            'Make impressions by using color pinpointedly.',
            'Effectively use lights to produce a three-dimensional feel, even in black and white.'
        ]
    },
    {
        id: 4,
        "title": "Weather App",
        "genre": [1, 0],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 2,
        "description": "A project undertaken voluntarily to study the usage of APIs. The app fetches and displays weather information and background images using APIs. A lot of intricate details were incorporated to ensure user usability amidst many uncertain elements.",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/OMIrPo8w_Zc?si=kiMfrXLHpkyfUThc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
        tldr: [
            'Used Weather API to fetch weather information.',
            'Used Pexels API to obtain images.',
            'Employed various techniques to ensure readability amidst uncertain background image colors.'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://github.com/OriginalTT/weather_app' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >Check out GitHub here
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 3,
        "title": "Alto 2 Go",
        "genre": [2, 3],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects'],
        "thumbnail": 4,
        "description": "A project started with a friend who is active as a composer and arranger. Posts cover videos of J-pop and anime songs on short video platforms such as TikTok. Responsible for video editing, composition, and direction.",
        tldr: [
            'Formulated a format that is highly rated by the algorithm.',
            'Based on data, update editing and composition periodically.',
            'Recorded a maximum playback of about 30,000 times.'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://www.tiktok.com/@alto2go' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >Check out the TikTok account here
                    <BiLinkExternal className='inline-block' />
                </a>
            </article>
        )
    },
    {
        id: 6,
        "title": "Let's Drink More Coffee!",
        "genre": [2],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects'],
        "thumbnail": 2,
        "description": "Storytelling through motion graphics. The challenge is how to convey a clear Call to Action to viewers. Produced in a short video format that is a recent trend, with a tall screen ratio and a maximum duration of 30 seconds.",
        video: (<iframe width="800" height="500" src="https://youtube.com/embed/Vf1FHaUaSik?si=KJUhXH9qKrKEu5yK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 5,
        "title": "Champion Memo",
        "genre": [1],
        "technology": ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        "thumbnail": 2,
        "description": "A project undertaken voluntarily to study the usage of APIs. Using the API, it fetches player information from the game 'League of Legends' by Riot Games, processes that information, and calculates statistics such as win rate and KDA. In addition, it displays character icons and the like by combining with the image library published by Riot Games.",
        tldr: [
            'Used Riot Games API to fetch information.',
            'Calculated and displayed statistical information.',
            'Combined with the image library to display icons and the like.'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <a href='https://github.com/OriginalTT/champ_memo' target='_blank'
                    className='font-bold bg-offwhite text-highlight px-5 py-3 rounded-full 
                    w-fit mx-auto hover:text-offwhite hover:bg-highlight2 border-offwhite border-2 box-border'
                >Check out GitHub here
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
        "description": "A Makerspace is a facility where various tools, including high-tech machinery, are provided. This was a group project to create personas for the users of that Makerspace.",
        tldr: [
            'Conduct research on Makerspace.',
            'Choose three main target demographics based on the research.',
            'Create personas for each target group.'
        ],
        page: (
            <article className="flex flex-col gap-5">
                <div className="pt-3">
                    <h3 className="text-xl my-1">Research</h3>
                    <p className="font-light my-1">In order to create the personas, we conducted research on Makerspace. The following information was collected:</p>
                    <ul className="list-disc font-light text-md px-10 my-1">
                        <li>Definition and current state of Makerspace.</li>
                        <li>Demographics: The main users are 2nd and 3rd-year junior high school students.</li>
                        <li>The current state of Makerspace in Japan: Highly regarded as part of STEM education.</li>
                        <li>Many startups make use of Makerspace.</li>
                        <li>Voices of Reddit users (an overseas forum): Mostly middle-aged men who like DIY.</li>
                    </ul>
                </div>
                <div className="pt-3">
                    <h3 className="text-xl my-1">Creating Personas</h3>
                    <p className="font-light my-1">Based on the research, the following personas were created:</p>
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
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "A group project to produce a documentary on generative AI in academia. Involved in planning, structuring, interviewing, filming, and editing.",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/b5WpKXqgEQ0?si=p3TVd4NFpUZTAl3m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 8,
        "title": "How I became Shiori Kajiwara",
        "genre": [2],
        "technology": ['Adobe Premiere Pro', 'Adobe After Effects', 'Canon EOS 90D'],
        "thumbnail": 3,
        "description": "A project where I interviewed Ms. Kajiwara, an acupuncturist in Canada, and produced it as a documentary. Experienced the entire process of video production, including creating storyboards, arranging locations, conducting interviews, and directing.",
        video: (<iframe width="800" height="500" src="https://www.youtube.com/embed/FP76l6hz51c?si=xd5IIwVcjkrzjDCb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: 11,
        "title": "PayPal for Motorola Razr",
        "genre": [0],
        "technology": [],
        "thumbnail": 1,
        "description": "A project focused on designing modern apps to be usable on the Motorola Razr feature phone. Explored a design suitable for PayPal on the feature phone and produced a Low-Fidelity Prototype.",
        tldr: [
            'Ensured usability through strategic design, such as using basic text-only design, strategic spacing, and bullet points.',
            'Considering the hardware, the design is also easily navigable using arrow buttons.'
        ]
    },
]
