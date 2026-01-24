import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'victoradekunle312@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Victor, I am reaching out to you because...',

    oldPortfolio: 'https://medium.com/@victoradekunle312',
    upworkProfile: 'mailto:victoradekunle312@gmail.com',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Big-Pabby' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/victoradekunle/' },
    { name: 'twitter', url: 'https://x.com/Big__Pabby' },
    { name: 'medium', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Vue.js',
            icon: '/logo/vue.png',
        },
        {
            name: 'Nuxt.js',
            icon: '/logo/nuxt.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Pinia',
            icon: '/logo/pinia.png',
        },
        {
            name: 'Zustand',
            icon: '/logo/zustand_.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Tanstack Query',
            icon: '/logo/tanstack.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        // {
        //     name: 'NestJS',
        //     icon: '/logo/nest.svg',
        // },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        // {
        //     name: 'MySQL',
        //     icon: '/logo/mysql.svg',
        // },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Parrot',
        slug: 'parrot',
        liveUrl: 'https://www.parrot.cx/',
        year: 2023,
        description: `
    A social review platform built to connect customers and businesses through trusted, location-based reviews and real-time engagement. I worked as a Frontend Engineer on the core web applications, including the customer platform, business dashboard, and admin management system. <br/><br/>

Key Features:<br/>
<ul>
  <li>🌍 Customer Review Platform: Intuitive interface for discovering businesses, leaving reviews, and engaging with feedback</li>
  <li>🏢 Business Web App: Tools for businesses to manage profiles, respond to reviews, and track customer sentiment</li>
  <li>🛠️ Admin Dashboard: Centralized moderation, analytics, and platform management</li>
  <li>📱 Fully Responsive: Seamless experience across mobile, tablet, and desktop devices</li>
  <li>⚡ High Performance: Optimized frontend architecture for fast load times and smooth interactions</li>
</ul><br/>

      `,
        role: `
  Senior Frontend Engineer <br/>
Led the frontend architecture and delivery of a large-scale, multi-tenant social review platform spanning multiple web applications for customers, businesses, and internal administrators.
<ul>
  <li>🌍 Platform Scale: Built and maintained a customer-facing web application on a dedicated Nuxt.js codebase, alongside a shared business and admin application supporting a growing multi-tenant user base</li>
  <li>🎨 Frontend Architecture: Designed scalable, modular UI systems across codebases using Nuxt.js, Tailwind CSS, and shadcn to ensure consistent UX and rapid development</li>
  <li>🔄 State & Data Management: Implemented robust client-side state management with Pinia and server-state handling with TanStack Query for efficient caching, synchronization, and background data updates</li>
  <li>📊 Analytics & Insights: Built interactive analytics dashboards with Chart.js to surface review trends, engagement metrics, and business performance insights</li>
  <li>🛡️ Role-Based Access Control: Implemented permission-aware UI flows for business users and administrators within the shared codebase</li>
  <li>⚡ Performance at Scale: Optimized rendering, hydration, and data-fetching strategies across applications to deliver fast, reliable experiences under high traffic</li>
  <li>👥 Technical Leadership: Defined frontend standards across multiple codebases, reviewed pull requests, and mentored engineers on scalable Nuxt, Pinia, and data-fetching patterns</li>
</ul>

      `,
        techStack: [
            'Nuxt.js',
            'Tanstack Query',
            'Tailwind CSS',
            'Shadcn',
            'Swiper.js',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/parrot.jpg',
        longThumbnail: '/projects/long/parrot.jpg',
        images: [
            '/projects/images/parrot-profile.jpg',
            '/projects/images/parrot-timeline.jpg',
            '/projects/images/parrot-analytics.jpg',
        ],
    },
    {
        title: 'Cando',
        slug: 'cando',
        techStack: [
            'Nuxtjs',
            'Tanstack Query',
            'Tailwind CSS',
            'Pinia',
            'shadcn',
            'Map Integration',
        ],
        thumbnail: '/projects/thumbnail/cando.jpg',
        longThumbnail: '/projects/long/cando.jpg',
        images: [
            '/projects/images/cando-1.jpg',
            '/projects/images/cando-2.jpg',
            '/projects/images/cando-3.jpg',
            '/projects/images/cando-4.jpg',
        ],
        liveUrl: 'https://can-do-two.vercel.app/',
        year: 2025,
        description: `Cando is a location-based service discovery platform designed to connect people in the UK with essential services in their local communities. The platform aggregates service data through web scraping, cleans and normalizes it, and visualizes the results on an interactive map for easy discovery. <br/><br/>

The application also features an AI-powered chat interface that allows users to ask location-specific questions, discover nearby services, and receive intelligent recommendations based on their area. <br/><br/>

Key Features:<br/>
<ul>
  <li>🗺️ Service Discovery Map: Interactive map visualization showing verified services by location</li>
  <li>🔍 Data Aggregation Pipeline: Scraped and normalized service data to ensure accuracy and usability</li>
  <li>🤖 AI Chat Assistant: Conversational interface for querying available services and receiving recommendations</li>
  <li>📱 Mobile-First Web App: Optimized experience for mobile users with smooth navigation and responsive layouts</li>
  <li>⚡ Real-Time Updates: Live data synchronization for service availability and updates</li>
</ul>
`,
        role: `Senior Frontend Developer <br/>
Owned and delivered the frontend experience for both the public-facing web application and the admin management system.
<ul>
  <li>🌍 User Web App: Built a responsive, mobile-first Nuxt.js application for discovering and visualizing services on an interactive map</li>
  <li>🗺️ Map Visualization: Implemented dynamic map-based service rendering with real-time filtering and location-based interactions</li>
  <li>🤖 AI Chat Interface: Developed a conversational UI enabling users to query services by location and receive intelligent recommendations</li>
  <li>🔄 State & Data Management: Managed client state with Pinia and server state with TanStack Query for efficient caching and data synchronization</li>
  <li>🔌 Real-Time Communication: Integrated WebSocket connections to handle live updates and real-time data flows</li>
  <li>🛠️ Admin Dashboard: Built admin tools for managing services, editing listings, and collecting new service data</li>
  <li>📱 Mobile Experience: Ensured a polished mobile experience with performance optimizations and touch-friendly UI patterns</li>
</ul>
`,
    },
    {
        title: 'Plotweaver',
        slug: 'plotweaver',
        techStack: [
            'Next.js',
            'Shadcn',
            'Zustand',
            'Tanstack Query',
            'Websockets',
            'Tailwind CSS',
            'Chart.js',
        ],
        thumbnail: '/projects/thumbnail/plotweaver.jpg',
        longThumbnail: '/projects/long/plotweaver.jpg',
        images: [
            '/projects/images/plotweaver-1.jpg',
            '/projects/images/plotweaver-2.jpg',
            '/projects/images/plotweaver-3.jpg',
            '/projects/images/plotweaver-4.jpg',
        ],
        liveUrl: 'https://www.plotweaver.app/',
        year: 2025,
        description:
            'PlotWeaver is an AI-powered script analysis platform designed to help writers and filmmakers turn early drafts into production-ready screenplays. Users upload their scripts and receive in-depth, AI-generated insights covering story structure, pacing, character development, financial projections, and market viability. <br/><br/> The platform also includes an interactive script editor that allows users to iterate on their work using AI-driven feedback, alongside visual analytics that help creators better understand strengths, weaknesses, and improvement areas within their scripts. <br/><br/> Key Features:<br/> <ul>  <li>🧠 AI Script Analysis: Automated evaluation of scripts with actionable feedback for improvement</li> <li>📈 Market & Financial Insights: AI-generated projections and industry insights to assess commercial viability</li> <li>✍️ Interactive Script Editor: In-app editor for updating scripts based on AI recommendations</li> <li>📊 Visual Analytics: Charts and data visualizations to highlight story metrics and performance indicators</li> <li>⚡ Real-Time Processing: Live updates and progress tracking during AI analysis</li></ul>',
        role: `Software Engineer <br/>
Led the design and implementation of the frontend experience for an AI-driven script analysis and editing platform.
<ul>
  <li>🎨 Application UI: Built a modern, responsive web application using Next.js, Tailwind CSS, and shadcn</li>
  <li>🔄 State & Data Management: Managed global state with Zustand and server state with React Query for efficient data fetching and caching</li>
  <li>🔌 Real-Time Updates: Integrated WebSocket communication to deliver live analysis status and real-time AI feedback</li>
  <li>✍️ Script Editing Experience: Developed an interactive script editor that enables seamless iteration based on AI insights</li>
  <li>📊 Data Visualization: Implemented dynamic charts and visual indicators to present analytical insights clearly and intuitively</li>
  <li>⚡ Performance & UX: Optimized rendering and interaction patterns to support large script files and data-heavy views</li>
</ul>
`,
    },
    {
        title: 'Plotweaver Translator',
        slug: 'plotweaver-translator',
        techStack: [
            'Next.js',
            'Shadcn',
            'Zustand',
            'Tanstack Query',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/datacollection.jpg',
        longThumbnail: '/projects/long/datacollection.jpg',
        images: [
            '/projects/images/datacollection-1.jpg',
            '/projects/images/datacollection-2.jpg',
            '/projects/images/datacollection-3.jpg',
        ],
        liveUrl: 'https://www.data-collection.plotweaver.app/login',
        year: 2025,
        description:
            'PlotWeaver Translator is a role-based language data collection platform built for recorders, validators, and administrators to manage large-scale audio translation workflows. The platform enables administrators to upload structured translation tasks via Excel files, assign phrases to users, and oversee the entire recording and validation lifecycle. <br/><br/> Recorders access assigned phrases through a dedicated dashboard, record audio translations, and submit their work for review. Validators review submitted recordings, provide quality ratings, and approve or reject entries, while administrators manage users, roles, tasks, and recordings across the platform. <br/><br/> Key Features:<br/><ul> <li>📄 Excel-Based Task Upload: Admins upload phrase datasets for translation and recording</li> <li>🎙️ Recorder Dashboard: Task-driven interface for recording and submitting audio translations</li> <li>✅ Validation Workflow: Validators review recordings and assign quality ratings</li> <li>🛡️ Role-Based Access Control: Clear separation of admin, recorder, and validator permissions</li> <li>📱 Responsive Web App: Optimized for desktop and mobile recording experiences</li> </ul>',
        role: `Frontend Engineer <br/>
Built and maintained the frontend workflows for a role-based audio translation and validation platform.
<ul>
  <li>🎨 Application UI: Developed a responsive web application using Next.js, Tailwind CSS, and shadcn</li>
  <li>🔄 State & Data Management: Managed server state with React Query and global client state with Zustand for task assignment, recording status, and validation flows</li>
  <li>🛡️ Role-Based Interfaces: Implemented permission-aware dashboards for admins, recorders, and validators</li>
  <li>🎙️ Recording Experience: Built user-friendly recording interfaces with clear task progression and submission states</li>
  <li>📋 Admin Tools: Developed admin views for managing users, roles, uploaded tasks, and recordings</li>
  <li>⚡ Performance & UX: Optimized data-heavy dashboards for fast interactions and reliable user experience</li>
</ul>
`,
    },
    {
        title: 'Vuhosi',
        slug: 'vuhosi',
        techStack: ['Nuxtjs', 'Tailwind CSS', 'Pinia', 'Websocket'],
        thumbnail: '/projects/thumbnail/vuhosi.jpg',
        longThumbnail: '/projects/long/vuhosi.jpg',
        images: [
            '/projects/images/vuhosi-1.jpg',
            '/projects/images/vuhosi-2.jpg',
            '/projects/images/vuhosi-3.jpg',
            '/projects/images/vuhosi-4.jpg',
            '/projects/images/vuhosi-5.jpg',
            '/projects/images/vuhosi-6.jpg',
        ],
        liveUrl: 'https://www.vuhosi.com/',
        year: 2024,
        description: `Vuhosi is an AI-powered startup analysis platform that helps investors evaluate early-stage companies by transforming uploaded documents into actionable insights. Startups upload pitch decks and internal documents, which are analyzed to provide a comprehensive view of the business, enabling investors to make informed decisions with confidence. <br/><br/>

The platform delivers structured insights across company overview, risk assessment, team strength, market fit, and comparative analysis. It also features AI mentors—domain-specific assistants that allow investors to explore insights, ask follow-up questions, and discuss startups within specific industry contexts. <br/><br/>

Key Features:<br/>
<ul>
  <li>📄 Document-Based Analysis: AI-driven evaluation of startup documents and pitch materials</li>
  <li>🏢 Company Overview & Risk Assessment: Clear summaries and risk profiling for investor decision-making</li>
  <li>👥 Team & Market Fit Analysis: Insights into execution capability and market alignment</li>
  <li>📊 Comparative Analysis: Side-by-side comparisons with similar startups and benchmarks</li>
  <li>🤖 AI Mentors: Niche-focused AI assistants for interactive discussion and deeper insights</li>
  <li>⚡ Real-Time Insights: Live analysis updates and interactive exploration of results</li>
</ul>
.`,
        role: `Software Engineer (Frontend) <br/>
Led the implementation of the frontend experience for an AI-driven investor analysis platform.
<ul>
  <li>🎨 Application UI: Built a modern, responsive web application using Nuxt.js and Tailwind CSS</li>
  <li>📄 Document Analysis Experience: Designed user flows for uploading, processing, and exploring AI-generated startup insights</li>
  <li>🤖 AI Mentor Interfaces: Developed conversational UIs for interacting with domain-specific AI mentors</li>
  <li>🔄 State Management: Managed complex client-side state with Pinia to handle analysis stages and user interactions</li>
  <li>🔌 Real-Time Updates: Integrated WebSocket communication to stream live analysis progress and results</li>
  <li>⚡ Performance & UX: Optimized rendering and interaction patterns for data-heavy views and investor dashboards</li>
</ul>
`,
    },
    {
        title: 'Storytelling',
        slug: 'storytelling',
        techStack: [
            'Next.js',
            'Shadcn',
            'Zustand',
            'Tanstack Query',
            'Tailwind CSS',
            'Chart.js',
        ],
        thumbnail: '/projects/thumbnail/storytelling.jpg',
        longThumbnail: '/projects/long/storytelling.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'GTV Reviewer',
        slug: 'gtv-reviewer',
        techStack: ['Next.js', 'Shadcn', 'Websockets', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/gtv.jpg',
        longThumbnail: '/projects/long/gtv.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'HomeBrigde',
        slug: 'homebridge',
        techStack: [
            'Next.js',
            'Shadcn',
            'Zustand',
            'Tanstack Query',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/homebridge.jpg',
        longThumbnail: '/projects/long/homebridge.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
    {
        title: 'TasteClan',
        slug: 'tasteclan',
        techStack: ['React.js', 'Zustand', 'Tanstack Query', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/tasteclan.jpg',
        longThumbnail: '/projects/long/tasteclan.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Plotweaver',
        duration: 'March 2025 - Present',
    },
    {
        title: 'Software Engineer (Frontend)',
        company: 'Zacrac',
        duration: 'Feb 2023 - Present',
    },
    {
        title: 'Frontend Engineer',
        company: 'Vuhosi',
        duration: 'Oct 2024 - Feb 2025',
    },
    {
        title: 'Frontend Developer (Intern)',
        company: 'TasteClan',
        duration: 'Aug 2022 - Jan 2023',
    },
];
