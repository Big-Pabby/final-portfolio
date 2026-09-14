import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { stripHtml, truncate } from '@/lib/utils';

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

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
