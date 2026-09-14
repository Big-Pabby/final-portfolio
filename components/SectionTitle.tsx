import { cn } from '@/lib/utils';

interface Props {
    title: string;
    /** Optional "issue number" shown before the caption, e.g. "01". */
    number?: string;
    className?: string;
}

/** Section heading styled as a comic narration caption with a rule running off to the right. */
const SectionTitle = ({ title, number, className }: Props) => {
    return (
        <div className={cn('mb-12 flex items-center gap-4', className)}>
            {number && (
                <span className="font-display text-xl tracking-widest text-muted-foreground">
                    No. {number}
                </span>
            )}
            <h2 className="comic-caption" style={{ rotate: '-1.5deg' }}>
                {title}
            </h2>
            <span className="h-[3px] grow bg-paper/15" aria-hidden="true"></span>
        </div>
    );
};

export default SectionTitle;
