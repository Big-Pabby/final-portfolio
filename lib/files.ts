import { GENERAL_INFO, PROJECTS, TESTIMONIALS } from './data';

export type FileLang =
    | 'Markdown'
    | 'TypeScript'
    | 'JSON'
    | 'YAML'
    | 'Shell Script'
    | 'Figma'
    | 'PDF';

/** A page of the site, presented as a file in the editor. */
export interface IFile {
    kind: 'file';
    name: string;
    /** Path shown in breadcrumbs and the terminal, e.g. "projects/parrot.md". */
    path: string;
    /** Route that opens the file. */
    href: string;
    lang: FileLang;
    /** Plain-language label for search, e.g. "Contact". */
    title: string;
    /** A real file to download rather than a page to open. */
    download?: boolean;
}

export interface IFolder {
    kind: 'folder';
    name: string;
    path: string;
    children: IFile[];
}

export const WORKSPACE = 'portfolio';

const file = (
    path: string,
    href: string,
    lang: FileLang,
    title: string,
): IFile => ({
    kind: 'file',
    name: path.split('/').pop() ?? path,
    path,
    href,
    lang,
    title,
});

const projectFile = (slug: string, title: string) =>
    file(`projects/${slug}.md`, `/projects/${slug}`, 'Markdown', title);

export const PROJECTS_FOLDER: IFolder = {
    kind: 'folder',
    name: 'projects',
    path: 'projects',
    children: [
        file('projects/selected-work.fig', '/projects', 'Figma', 'Selected work'),
        ...PROJECTS.map((project) => projectFile(project.slug, project.title)),
    ],
};

export const CV_FILE: IFile = {
    ...file(
        GENERAL_INFO.resume.replace(/^\//, ''),
        GENERAL_INFO.resume,
        'PDF',
        'Download CV',
    ),
    download: true,
};

/** The file tree, in the order the Explorer shows it. */
export const TREE: (IFile | IFolder)[] = [
    PROJECTS_FOLDER,
    file('README.md', '/', 'Markdown', 'Home'),
    file('about.ts', '/about', 'TypeScript', 'About me'),
    file('how-i-work.md', '/how-i-work', 'Markdown', 'How I work'),
    file('stack.json', '/stack', 'JSON', 'My stack'),
    file('experience.yml', '/experience', 'YAML', 'Experience'),
    // Real quotes only: the file appears once there is something to read.
    ...(TESTIMONIALS.length > 0
        ? [file('testimonials.md', '/testimonials', 'Markdown', 'Testimonials')]
        : []),
    file('contact.sh', '/contact', 'Shell Script', 'Contact'),
    CV_FILE,
];

/** Every file that opens in the editor (so not the CV download). */
export const FILES: IFile[] = TREE.flatMap((node) =>
    node.kind === 'folder' ? node.children : [node],
).filter((item) => !item.download);

export const README = FILES.find((item) => item.href === '/') as IFile;

export const getFileByHref = (href: string) =>
    FILES.find((item) => item.href === href);

/**
 * Find a file the way a forgiving shell would: by path or name, with or
 * without the extension, relative to `cwd` ('' is the workspace root).
 */
export const resolveFile = (input: string, cwd = '') => {
    const query = input
        .trim()
        .replace(/^(~\/|\.\/|\/)/, '')
        .toLowerCase();
    if (!query) return undefined;

    const candidates = [...FILES, CV_FILE];
    const stem = (value: string) => value.replace(/\.[a-z]+$/, '');
    const matches = (target: string) =>
        target.toLowerCase() === query || stem(target.toLowerCase()) === query;

    return (
        candidates.find((item) => cwd && matches(item.path.replace(`${cwd}/`, '')) && item.path.startsWith(`${cwd}/`)) ??
        candidates.find((item) => matches(item.path)) ??
        candidates.find((item) => matches(item.name))
    );
};
