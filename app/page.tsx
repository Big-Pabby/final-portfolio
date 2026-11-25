import type { Metadata } from 'next';
import Link from 'next/link';
import Editor from '@/components/editor/Editor';
import { Bullet, C, H1, H2, L, Para, Quote, S } from '@/components/editor/tokens';
import { MAILTO } from '@/components/ide/commands';
import LocalTime from '@/components/LocalTime';
import { GENERAL_INFO, PROJECTS, STATS } from '@/lib/data';

export const metadata: Metadata = {
    alternates: { canonical: '/' },
};

const FEATURED = PROJECTS.filter((project) => project.featured);

const ProjectLink = ({ slug, children }: { slug: string; children: string }) => (
    <Link href={`/projects/${slug}`} className="link font-semibold text-foreground">
        {children}
    </Link>
);

// Shell commands a visitor might try first; each one is also a plain link.
const QUICK_START: [command: string, href: string, comment: string][] = [
    ['open projects', '/projects', `${FEATURED.length} featured case studies`],
    ['cat about.ts', '/about', 'who I am, beyond the code'],
    ['cat how-i-work.md', '/how-i-work', 'three habits, with proof'],
    ['./contact.sh', '/contact', 'say hi'],
];

/** README.md: the landing file, with the whole story at a glance. */
export default function Home() {
    return (
        <Editor variant="markdown">
            <H1>
                Hi, I&apos;m <span className="text-primary">Victor.</span>
                <span className="caret" aria-hidden="true"></span>
            </H1>
            <L />
            <Quote>
                {GENERAL_INFO.availability && (
                    <>
                        <span className="text-emerald-500" aria-hidden="true">
                            ●{' '}
                        </span>
                        <span className="text-foreground">
                            {GENERAL_INFO.availability}
                        </span>
                        {' · '}
                    </>
                )}
                {GENERAL_INFO.role} · {GENERAL_INFO.location} · <LocalTime />
            </Quote>
            <L />
            <Para>
                I’m a software engineer who builds fast, scalable, user-focused
                products across web and mobile. Lately that means AI: I built{' '}
                <ProjectLink slug="baissoncv">BaissonCV</ProjectLink> end to
                end, led the frontend for{' '}
                <ProjectLink slug="plotweaver">Plotweaver</ProjectLink>’s script
                analysis, and engineered the LLM workflows behind{' '}
                <ProjectLink slug="vuhosi">Vuhosi</ProjectLink>.
            </Para>
            <L />
            <Para>
                I work across the stack, from React, Next.js, Vue and React
                Native frontends to the Node.js, Express and PostgreSQL APIs
                behind them. I’ve shipped for{' '}
                <ProjectLink slug="parrot">Parrot</ProjectLink>,{' '}
                <ProjectLink slug="cando">Cando</ProjectLink> and the{' '}
                <ProjectLink slug="storytelling">
                    Lagos Youth Storytelling Challenge
                </ProjectLink>
                , which was open to over 200,000 students.
            </Para>
            <L />
            <L>
                <span className="flex flex-wrap gap-3">
                    <a
                        href={MAILTO}
                        className="inline-flex h-10 items-center rounded-md bg-primary px-5 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Say hi
                    </a>
                    <a
                        href={GENERAL_INFO.resume}
                        download
                        className="inline-flex h-10 items-center rounded-md border px-5 font-mono text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                        Download CV
                    </a>
                </span>
            </L>
            <L />
            <L>
                <dl className="flex flex-wrap gap-x-10 gap-y-3">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="flex flex-col-reverse">
                            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                {stat.label}
                            </dt>
                            <dd className="font-mono text-3xl font-bold text-primary">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </L>
            <L />
            <H2>Quick start</H2>
            <L />
            <Para className="text-muted-foreground">
                This site is a code editor. Open files from the explorer, press
                Ctrl + K to search, or type in the terminal below.
            </Para>
            <L className="fence">
                <span className="md-mark">```bash</span>
            </L>
            {QUICK_START.map(([command, href, comment]) => (
                <L key={href} className="fence">
                    <Link href={href} className="group">
                        <span className="text-muted-foreground">$ </span>
                        <span className="group-hover:text-primary group-hover:underline">
                            {command}
                        </span>
                        <C>{`  # ${comment}`}</C>
                    </Link>
                </L>
            ))}
            <L className="fence">
                <span className="md-mark">```</span>
            </L>
            <L />
            <H2>Featured projects</H2>
            <L />
            {FEATURED.map((project) => (
                <Bullet key={project.slug}>
                    <ProjectLink slug={project.slug}>{project.title}</ProjectLink>
                    {': '}
                    {project.summary}{' '}
                    <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
                        {project.year}
                        {project.status && (
                            <>
                                {' · '}
                                <S>{project.status}</S>
                            </>
                        )}
                    </span>
                </Bullet>
            ))}
            <L />
            <H2>Writing</H2>
            <L />
            <Para>
                I write about building for web, mobile and AI on my blog,{' '}
                <a
                    href={GENERAL_INFO.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link font-semibold text-foreground"
                    aria-label="Notes from Victor (opens in a new tab)"
                >
                    Notes from Victor
                </a>
                .
            </Para>
            <L />
            <Para>
                <Link href="/projects" className="link">
                    See all {PROJECTS.length} projects
                </Link>
                {' · '}
                <Link href="/stack" className="link">
                    My stack
                </Link>
                {' · '}
                <Link href="/experience" className="link">
                    Experience
                </Link>
            </Para>
            <L />
        </Editor>
    );
}
