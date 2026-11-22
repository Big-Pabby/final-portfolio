import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';
import { CV_FILE, FILES } from '@/lib/files';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const projectHrefs = PROJECTS.map((project) => `/projects/${project.slug}`);

    // Every file in the editor is a page. The CV viewer is left out: it only
    // frames the PDF, so search engines are pointed away from it.
    return FILES.filter((file) => file !== CV_FILE).map((file) => ({
        url: `${SITE_URL}${file.href}`,
        lastModified,
        changeFrequency: projectHrefs.includes(file.href)
            ? ('yearly' as const)
            : ('monthly' as const),
        priority: file.href === '/' ? 1 : 0.7,
    }));
}
