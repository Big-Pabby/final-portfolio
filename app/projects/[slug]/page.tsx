import { ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import Editor from '@/components/editor/Editor';
import { Bullet, H1, H2, H3, L, P, Para, S } from '@/components/editor/tokens';
import { PROJECTS } from '@/lib/data';
import {
    getRoleTitle,
    htmlToBlocks,
    stripHtml,
    TextBlock,
    truncate,
} from '@/lib/utils';
import ProjectGallery from './_components/ProjectGallery';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return { title: 'Project not found' };
    }

    const description = truncate(stripHtml(project.description), 160);
    const url = `/projects/${project.slug}`;

    return {
        title: `${project.title} - ${project.techStack.slice(0, 3).join(', ')}`,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            url,
            title: project.title,
            description,
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description,
        },
    };
};

/** A front-matter line: `key: value`, in the file's monospace style. */
const Meta = ({ name, children }: { name: string; children: ReactNode }) => (
    <L className="fence">
        <P>{name}</P>: {children}
    </L>
);

const Blocks = ({ blocks }: { blocks: TextBlock[] }) =>
    blocks.map((block, index) => {
        if (block.type === 'item') return <Bullet key={index}>{block.text}</Bullet>;
        if (block.type === 'label') return <H3 key={index}>{block.text}</H3>;
        return (
            <Para key={index} className="mb-3">
                {block.text}
            </Para>
        );
    });

/** projects/<slug>.md: a case study, opened as a Markdown file. */
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const index = PROJECTS.findIndex((project) => project.slug === slug);
    const project = PROJECTS[index];

    if (!project) {
        return notFound();
    }

    const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(index + 1) % PROJECTS.length];
    // The first line of `role` is the job title, already shown in the front matter.
    const [, ...roleBlocks] = htmlToBlocks(project.role);

    return (
        <Editor variant="markdown">
            <L className="fence">
                <span className="md-mark">---</span>
            </L>
            <Meta name="role">{getRoleTitle(project.role)}</Meta>
            <Meta name="year">{project.year}</Meta>
            <Meta name="category">{project.category}</Meta>
            {project.status && (
                <Meta name="status">
                    <S>{project.status}</S>
                </Meta>
            )}
            <Meta name="stack">[{project.techStack.join(', ')}]</Meta>
            <L className="fence">
                <span className="md-mark">---</span>
            </L>
            <L />
            <H1>{project.title}</H1>
            <L />
            <Para className="text-lg text-foreground md:text-xl">
                {project.summary}
            </Para>
            {(project.liveUrl || project.sourceCode) && (
                <>
                    <L />
                    <L>
                        <span className="flex flex-wrap gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex h-10 items-center gap-1.5 rounded-md bg-primary px-4 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                                >
                                    Live product
                                    <ArrowUpRight size={15} aria-hidden="true" />
                                </a>
                            )}
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex h-10 items-center gap-1.5 rounded-md border px-4 font-mono text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                                >
                                    Source code
                                    <ArrowUpRight size={15} aria-hidden="true" />
                                </a>
                            )}
                        </span>
                    </L>
                </>
            )}
            <L />
            <H2>Overview</H2>
            <L />
            <Blocks blocks={htmlToBlocks(project.description)} />
            <L />
            {roleBlocks.length > 0 && (
                <>
                    <H2>My role</H2>
                    <L />
                    <Blocks blocks={roleBlocks} />
                    <L />
                </>
            )}
            <ProjectGallery title={project.title} images={project.images} />
            {PROJECTS.length > 1 && (
                <L className="fence">
                    <nav
                        aria-label="More projects"
                        className="flex flex-wrap justify-between gap-x-6 gap-y-2"
                    >
                        <Link href={`/projects/${prev.slug}`} className="link">
                            ← {prev.slug}.md
                        </Link>
                        <Link href={`/projects/${next.slug}`} className="link">
                            {next.slug}.md →
                        </Link>
                    </nav>
                </L>
            )}
            <L />
        </Editor>
    );
};

export default Page;
