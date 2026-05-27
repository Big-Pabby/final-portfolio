import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'victoradekunle312@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Victor, I am reaching out to you because...',

    oldPortfolio: 'https://medium.com/@victoradekunle312',
    upworkProfile: 'mailto:victoradekunle312@gmail.com',
    resume: '/Victor_Adekunle_CV.pdf',
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
    A social review platform built to connect customers and businesses through trusted, location-based reviews and real-time engagement. I worked as a Software Engineer across the platform's web and mobile applications — including the customer experience, business dashboard, admin management system, and a cross-platform React Native mobile app. <br/><br/>

Key Features:<br/>
<ul>
  <li>🌍 Customer Review Platform: Intuitive interface for discovering businesses, leaving reviews, and engaging with feedback</li>
  <li>🏢 Business Web App: Tools for businesses to manage profiles, respond to reviews, and track customer sentiment</li>
  <li>📱 Cross-Platform Mobile App: React Native app delivering reviews, media uploads, push notifications, and real-time engagement on Android and iOS</li>
  <li>🛠️ Admin Dashboard: Centralized moderation, analytics, and platform management</li>
  <li>📊 Analytics: Interactive dashboards surfacing review data, engagement metrics, and customer insights</li>
  <li>⚡ High Performance: Optimized architecture for fast load times and smooth interactions across web and mobile</li>
</ul><br/>

      `,
        role: `
  Software Engineer <br/>
Built and maintained customer, business, and admin experiences across web and mobile for a large-scale, multi-tenant social review platform.
<ul>
  <li>📱 Cross-Platform Mobile: Built and maintained React Native features including authentication flows, push notifications, media uploads, review interactions, and real-time user engagement across Android and iOS</li>
  <li>🎨 Web Architecture: Designed scalable, modular UI systems with Nuxt.js, Tailwind CSS, TypeScript, and shadcn for consistent UX across the customer, business, and admin apps</li>
  <li>🔌 API Integration: Integrated RESTful APIs and optimized mobile performance for smooth navigation, fast data loading, and reliable behaviour on real devices</li>
  <li>♻️ Reusable Components: Implemented reusable mobile UI components, state management, and responsive layouts to keep web and mobile consistent</li>
  <li>🔄 State & Data Management: Managed client state with Pinia and server state with TanStack Query, applying caching strategies for efficient synchronization and background updates</li>
  <li>📊 Analytics & Insights: Built interactive analytics dashboards so businesses could analyze review data, engagement metrics, and customer insights</li>
  <li>🎓 Zacrac Learning: Redesigned the Zacrac Learning website using Nuxt.js and Vuex to improve e-learning accessibility and dynamic content management</li>
  <li>🌐 Main Website: Maintained and upgraded the Zacrac main website, including an admin dashboard for efficient blog and project management</li>
  <li>🚀 CI/CD: Established and maintained deployment pipelines on Azure and AWS for streamlined CI/CD workflows and reliable delivery</li>
</ul>

      `,
        techStack: [
            'Nuxt.js',
            'React Native',
            'TypeScript',
            'Tailwind CSS',
            'Tanstack Query',
            'Pinia',
            'REST APIs',
            'Azure',
            'AWS',
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
        techStack: [
            'Nuxt.js',
            'TypeScript',
            'Tailwind CSS',
            'Pinia',
            'OpenAI API',
            'WebSocket',
            'Stripe',
        ],
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
        description: `Vuhosi is an AI-powered platform for investors and founders that evaluates early-stage companies by transforming uploaded documents into actionable insights. Founders upload pitch decks and internal documents, which are analyzed to provide a comprehensive view of the business, enabling investors to make informed decisions with confidence. <br/><br/>

The platform delivers structured insights across company overview, risk assessment, team strength, market fit, and comparative analysis. It also features AI mentors—domain-specific assistants that allow investors to explore insights, ask follow-up questions, and discuss startups within specific industry contexts. <br/><br/>

Key Features:<br/>
<ul>
  <li>📄 Document-Based Analysis: AI-driven evaluation of startup documents and pitch materials</li>
  <li>🏢 Company Overview & Risk Assessment: Clear summaries and risk profiling for investor decision-making</li>
  <li>👥 Team & Market Fit Analysis: Insights into execution capability and market alignment</li>
  <li>📊 Comparative Analysis: Side-by-side comparisons with similar startups and benchmarks</li>
  <li>🤖 AI Mentors: Niche-focused AI assistants for interactive discussion and deeper insights</li>
  <li>⚡ Real-Time Insights: Live analysis updates and interactive exploration of results</li>
  <li>📤 File Uploads: Simple document upload for fast, reliable data ingestion into AI pipelines</li>
  <li>💳 Subscriptions: Stripe-powered subscription management and access control</li>
</ul>
.`,
        role: `Software Engineer & AI Engineer <br/>
Built the frontend experience and the AI-driven workflows for an AI platform serving investors and founders.
<ul>
  <li>🎨 Application UI: Built a modern, responsive web application using Nuxt.js, Tailwind CSS, and TypeScript</li>
  <li>🤖 AI Engineering: Designed and integrated AI-driven workflows, prompt engineering pipelines, and LLM-powered features to deliver intelligent insights and recommendations</li>
  <li>🧠 Model Integration: Built integrations with third-party AI providers (e.g. OpenAI APIs) and implemented data preprocessing, contextual prompting, and response handling for accurate, reliable outputs</li>
  <li>🔌 Real-Time Analysis: Engineered real-time data analysis with WebSocket integration, delivering immediate feedback on key metrics and AI-generated insights</li>
  <li>📤 File Uploads: Created an intuitive file upload feature for smooth data transmission to APIs and AI services, improving data ingestion and user interaction</li>
  <li>💳 Subscriptions: Implemented a subscription management system with Stripe to streamline payments and user access</li>
  <li>📧 Notifications: Integrated a proactive email notification system to enhance engagement and ensure timely communication</li>
  <li>🔄 State Management: Managed complex client-side state with Pinia across analysis stages and user interactions</li>
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
            '/projects/images/storytelling-1.jpg',
            '/projects/images/storytelling-2.jpg',
            '/projects/images/storytelling-3.jpg',
            '/projects/images/storytelling-4.jpg',
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
        title: 'HomeBridge',
        slug: 'homebridge',
        techStack: [
            'Next.js',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Prisma',
            'Tailwind CSS',
            'Tanstack Query',
        ],
        thumbnail: '/projects/thumbnail/homebridge.jpg',
        longThumbnail: '/projects/long/homebridge.jpg',
        images: [
            '/projects/images/homebridge-1.jpg',
            '/projects/images/homebridge-2.jpg',
            '/projects/images/homebridge-3.jpg',
            '/projects/images/homebridge-4.jpg',
        ],
        year: 2024,
        description: `HomeBridge is a property and housing platform that connects people with listings and the services around them. Beyond the frontend, I collaborated closely on the backend to design and ship the APIs that power the product. <br/><br/>

Key Features:<br/>
<ul>
  <li>🏠 Property Listings: Browse, search, and manage housing listings through a responsive web interface</li>
  <li>🔐 Authentication: Secure user accounts with role-based access</li>
  <li>🔌 REST API: Backend services exposing well-structured endpoints consumed by the web client</li>
  <li>🗄️ Relational Data: A PostgreSQL schema modelled and queried through the Prisma ORM</li>
</ul>`,
        role: `Software Engineer (Full-Stack) <br/>
Worked across the stack, collaborating on the backend alongside building the frontend.
<ul>
  <li>🛠️ Backend Collaboration: Partnered on the backend using Node.js and Express.js to build and maintain RESTful API endpoints</li>
  <li>🗄️ Database & ORM: Modelled relational data in PostgreSQL and used Prisma for type-safe queries, migrations, and schema management</li>
  <li>🔐 Auth & Validation: Helped implement authentication, request validation, and error handling across API routes</li>
  <li>🎨 Frontend: Built the Next.js client with Tailwind CSS, managing server state with TanStack Query</li>
  <li>🤝 Collaboration: Worked closely with the team to align API contracts between the frontend and backend</li>
</ul>`,
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
        title: 'Full Stack Engineer',
        company: 'HomeBridge',
        duration: 'Nov 2025 - March 2026',
    },
    {
        title: 'Software Engineer (Frontend)',
        company: 'Plotweaver',
        duration: 'March 2025 - Present',
    },
    {
        title: 'Software Engineer',
        company: 'Zacrac',
        duration: 'Feb 2023 - Present',
    },
    {
        title: 'Software Engineer & AI Engineer',
        company: 'Vuhosi',
        duration: 'Oct 2024 - Jun 2025',
    },
    {
        title: 'Frontend Developer (Intern)',
        company: 'TasteClan',
        duration: 'Aug 2022 - Jan 2023',
    },
];
