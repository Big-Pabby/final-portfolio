import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';
import { FILES } from '@/lib/files';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const projectHrefs = PROJECTS.map((project) => `/projects/${project.slug}`);

    // Every file in the editor is a page.
    return FILES.map((file) => ({
        url: `${SITE_URL}${file.href}`,
        lastModified,
        changeFrequency: projectHrefs.includes(file.href)
            ? ('yearly' as const)
            : ('monthly' as const),
        priority: file.href === '/' ? 1 : 0.7,
    }));
}
