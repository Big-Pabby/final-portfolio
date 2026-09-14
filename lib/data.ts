import { IProject } from '@/types';

export const GENERAL_INFO = {
    name: 'Victor Adekunle',
    email: 'victoradekunle312@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Victor, I am reaching out to you because...',

    oldPortfolio: 'https://medium.com/@victoradekunle312',
    upworkProfile: 'mailto:victoradekunle312@gmail.com',
    resume: '/Victor_Adekunle_CV.pdf',
    // Shown as a status pill in the hero. Set to '' to hide it.
    availability: 'Open to new opportunities',
};

export const STATS = [
    { value: '5+', label: 'Years of Experience' },
    { value: '10+', label: 'Completed Projects' },
    { value: '10K+', label: 'Hours Worked' },
];

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
        title: 'BaissonCV',
        slug: 'baissoncv',
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'AI Integration',
            'Stripe',
            'Job Board APIs',
        ],
        thumbnail: '/projects/thumbnail/baissoncv.jpg',
        images: [
            '/projects/images/baissoncv-1.jpg',
            '/projects/images/baissoncv-2.jpg',
            '/projects/images/baissoncv-3.jpg',
            '/projects/images/baissoncv-4.jpg',
            '/projects/images/baissoncv-5.jpg',
        ],
        liveUrl: 'https://www.baissoncv.app/',
        year: 2026,
        description: `BaissonCV puts your résumé on a URL. Upload a PDF, DOCX, or JSON Resume and the AI extracts the structure, the editor polishes it, and a magic link makes it yours — live at baissoncv.app/yourname, updating in real time as you edit, with no account needed to view it. <br/><br/>
On top of the free editor and hosting, paid plans add AI writing on every line, an ATS scanner that scores a CV from 0 to 100 against any job description, cover letters, translation into French, Spanish, Yoruba, and Igbo, live job discovery that pulls 50 openings matched to the CV, auto-tailoring for a specific role, and visitor analytics. A recruiter workspace runs the same engine in reverse: post a job description, and every applicant's BaissonCV link is scored and ranked in an auto-sorted inbox. <br/><br/>
Key Features:<br/>
<ul>
  <li>🔗 Résumé on a URL: A shareable baissoncv.app/yourname page that updates live as you edit, plus multiple CV versions with time-travel snapshots</li>
  <li>📄 Upload to sign in: PDF, DOCX, or JSON Resume parsed into structured sections, confirmed with a magic-link email</li>
  <li>🤖 AI on every line: Rewrite bullets, draft summaries, suggest missing skills, translate, and prep interview questions from the CV and job description</li>
  <li>🎯 ATS Scanner: Paste a job description for a 0–100 match score, missing keywords, one-click fixes, and cover letters — also available as a one-off scan with Stripe checkout</li>
  <li>💼 Job Discovery: Live openings from Adzuna, Remotive, Arbeitnow, and The Muse, auto-tailored to each role, with visitor analytics on the Best plan</li>
  <li>🏢 Recruiter Workspace: Job slugs, an auto-ranked applicant inbox, workspaces and roles, and CSV export of top candidates</li>
  <li>📤 Export Anywhere: PDF (A4 / US Letter), DOCX, plain text, JSON Resume, and vCard</li>
</ul>`,
        role: `Software Engineer <br/>
Designed and built BaissonCV end to end — product, frontend, backend, and AI features.
<ul>
  <li>🎨 Built the marketing site, the résumé editor with live preview and templates, public résumé pages, the ATS scanner, pricing, and the recruiter workspace with Next.js, TypeScript, and Tailwind CSS</li>
  <li>🤖 Implemented the AI pipeline: résumé parsing from PDF, DOCX, and JSON, line-by-line rewriting, ATS scoring against job descriptions, cover letters, and translation</li>
  <li>💼 Integrated the Adzuna, Remotive, Arbeitnow, and The Muse job APIs for live, CV-matched job discovery and auto-tailoring</li>
  <li>💳 Set up magic-link authentication, Free / Better / Best subscriptions, one-off ATS scans, and payments with Stripe</li>
  <li>📤 Built exports to PDF, DOCX, plain text, JSON Resume, and vCard</li>
</ul>`,
    },
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
        title: 'Lagos Youth Storytelling',
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
        images: [
            '/projects/images/storytelling-1.jpg',
            '/projects/images/storytelling-2.jpg',
            '/projects/images/storytelling-3.jpg',
            '/projects/images/storytelling-4.jpg',
        ],
        liveUrl: 'https://www.lagosstorytelling.ng/',
        year: 2025,
        description: `The official platform for the Lagos Youth Storytelling Challenge 2025 — a statewide writing competition run by the Lagos State Films and Videos Censorship Board with Plotweaver as technology partner, open to over 200,000 junior and senior secondary school students across 20 local government areas. <br/><br/>
The platform covers the whole competition lifecycle: a public site with categories, prizes, rules, and timeline; a student submission portal where participants register, write or upload their story, and accept the submission agreement; a parent portal for guardian consent; and an organiser dashboard for tracking participation, monitoring AI-assisted story evaluations, and reviewing detailed per-story reports. <br/><br/>
Key Features:<br/>
<ul>
  <li>📝 Story Submission Portal: Register with school, class, and track details, then write in-app or upload a story with live word counts and writing tips</li>
  <li>🤖 AI-Assisted Evaluation: Plotweaver Story Check scores every entry against the competition criteria — cultural authenticity, creative innovation, narrative structure, educational value, and more — with compliance and safety screening</li>
  <li>📊 Organiser Dashboard: Live KPIs for participants, schools, submissions, and evaluations, with daily, weekly, and district-level charts</li>
  <li>📋 Detailed Evaluation Reports: Per-story score breakdowns, strengths, areas for improvement, and exportable reports for judges</li>
  <li>👨‍👩‍👧 Parent Portal: Guardian consent and oversight in line with Nigeria's data protection requirements</li>
  <li>📱 Responsive Design: Works for students submitting on mobile as well as organisers reviewing on desktop</li>
</ul>`,
        role: `Frontend Engineer <br/>
Built the frontend of the competition platform with the Plotweaver team.
<ul>
  <li>🎨 Implemented the public landing site, student submission portal, parent portal, and organiser dashboard with Next.js, Tailwind CSS, and shadcn/ui</li>
  <li>📈 Built the analytics views with Chart.js, including submission trends, district performance, and evaluation summaries</li>
  <li>🔄 Managed client state with Zustand and server data with TanStack Query for fast, reliable data loading across the portals</li>
  <li>✅ Implemented the story submission flow with file upload, validation, word limits, and the submission agreement</li>
</ul>`,
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
        images: [
            '/projects/images/gtv-1.jpg',
            '/projects/images/gtv-2.jpg',
            '/projects/images/gtv-3.jpg',
        ],
        year: 2025,
        description: `GTV Reviewer is an AI-powered platform that helps applicants prepare a winning UK Global Talent Visa application. Users upload their personal statement, CV, reference letters, and evidence, and purpose-built AI agents review them against Tech Nation's official criteria — returning precise insights, expert-style feedback, and actionable recommendations in minutes. <br/><br/>
Alongside the core review, the platform offers a Pro tier and one-off prevention services such as a GTV eligibility scan, a reference letter risk review, and a mandatory-criteria deep dive, so applicants can catch problems before they submit. <br/><br/>
Key Features:<br/>
<ul>
  <li>📄 Smart Document Analysis: Upload a personal statement and evidence for AI analysis against Tech Nation's criteria</li>
  <li>🗂️ Evidence Classification: Achievements are automatically categorised by innovation, impact, and recognition to surface gaps</li>
  <li>👥 Multiple Reviewer Perspectives: Feedback from different reviewer personas — technical experts, business leaders, and academics</li>
  <li>📊 Detailed Reports: Overall score, evidence quality grade, radar-style gap analysis, and downloadable recommendations</li>
  <li>⚡ Real-Time Progress: Live status updates while a review runs, powered by WebSockets</li>
  <li>💳 Plans &amp; Services: Free and Pro tiers, one-off prevention services, and discounted bundles</li>
</ul>`,
        role: `Frontend Engineer <br/>
Built the web application for an AI-driven visa application review service.
<ul>
  <li>🎨 Implemented the marketing site, review workflow, and report views with Next.js, Tailwind CSS, and shadcn/ui</li>
  <li>⚡ Integrated WebSockets so applicants see review progress and results update in real time</li>
  <li>📤 Built the document upload and review submission flows with clear validation and status feedback</li>
  <li>💳 Implemented the pricing, prevention services, and bundle pages</li>
</ul>`,
    },

    {
        title: 'TasteClan',
        slug: 'tasteclan',
        techStack: ['React.js', 'Zustand', 'Tanstack Query', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/tasteclan.jpg',
        images: [
            '/projects/images/tasteclan-1.jpg',
            '/projects/images/tasteclan-2.jpg',
            '/projects/images/tasteclan-3.jpg',
        ],
        year: 2022,
        description: `TasteClan is a food ordering and delivery platform built for university students and busy professionals in Akure, Ondo State, Nigeria. Customers browse top local restaurants — from breakfast cafés to amala, suya, and shawarma spots — order food or foodstuff, and get it delivered within minutes during opening hours. <br/><br/>
Beyond ordering, TasteClan built a community around food: members join "the Clan" to share health goals, discover new recipes, and talk about what they eat, while restaurant owners, home cooks, and student vendors can partner with the platform to reach more customers. <br/><br/>
Key Features:<br/>
<ul>
  <li>🍽️ Restaurant Discovery: Browse top-rated local restaurants and their menus</li>
  <li>🛵 Fast Ordering: Place orders for meals or foodstuff with quick delivery around Akure</li>
  <li>👥 Food Community: Join the Clan to share goals, recipes, and food conversations</li>
  <li>🤝 Vendor Partnerships: Onboarding for restaurants and home cooks who want to sell through the platform</li>
  <li>📬 Newsletter &amp; Contact: Subscription and contact forms for updates and support</li>
  <li>📱 Responsive Design: Optimised for students ordering on mobile</li>
</ul>`,
        role: `Frontend Developer (Intern) <br/>
Built the customer-facing web app during my internship at TasteClan.
<ul>
  <li>🎨 Implemented the landing page, restaurant listings, and ordering UI with React and Tailwind CSS from the design handoff</li>
  <li>🔄 Managed order and session state with Zustand and fetched restaurant and order data with TanStack Query</li>
  <li>📝 Built the community sign-up, vendor partnership, newsletter, and contact forms</li>
</ul>`,
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
