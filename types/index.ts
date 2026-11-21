export interface IProject {
    title: string;
    year: number;
    /** One line shown wherever the project is listed. */
    summary: string;
    /** Short domain label, e.g. "AI · Film". */
    category: string;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    images: string[];
    slug: string;
    /** Featured projects appear on the canvas and in README.md. */
    featured?: boolean;
    /** Leave unset to show no status. */
    status?: 'Live' | 'Beta' | 'In progress' | 'Archived';
    liveUrl?: string;
    sourceCode?: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    company: string;
    quote: string;
    /** Where visitors can verify the quote, e.g. a LinkedIn profile. */
    url?: string;
}

export interface IWorkHabit {
    title: string;
    body: string;
    /** Projects that show this habit, each with one line of proof. */
    proof: { slug: string; line: string }[];
}
