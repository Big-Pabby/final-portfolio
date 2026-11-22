'use client';
import { Download, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import FileIcon from '@/components/ide/FileIcon';

interface Props {
    /** URL of the PDF, e.g. "/Victor_Adekunle_CV.pdf". */
    src: string;
    /** File name shown in the toolbar. */
    name: string;
    /** What the document is, for screen readers, e.g. "Victor Adekunle's CV". */
    title: string;
}

const ACTION =
    'inline-flex h-7 items-center gap-1.5 rounded px-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground';

/**
 * A PDF open in the editor: a slim toolbar, then the document filling the
 * rest of the pane. Browsers that can't show a PDF inside a page (most
 * phones) get the same two actions as large buttons instead.
 */
const PdfViewer = ({ src, name, title }: Props) => {
    // Assume the browser can embed PDFs until it says otherwise.
    const [canEmbed, setCanEmbed] = useState(true);

    useEffect(() => {
        if (navigator.pdfViewerEnabled === false) setCanEmbed(false);
    }, []);

    return (
        <div className="flex h-full flex-col">
            <div className="flex h-9 shrink-0 items-center gap-1 border-b bg-background-light px-3">
                <FileIcon lang="PDF" size={14} />
                <span className="ml-1 truncate font-mono text-xs text-muted-foreground">
                    {name}
                </span>
                <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ACTION} ml-auto`}
                    aria-label={`Open ${name} in a new tab`}
                >
                    <ExternalLink size={13} aria-hidden="true" />
                    <span className="max-sm:hidden">Open in new tab</span>
                </a>
                <a
                    href={src}
                    download
                    className={ACTION}
                    aria-label={`Download ${name}`}
                >
                    <Download size={13} aria-hidden="true" />
                    <span className="max-sm:hidden">Download</span>
                </a>
            </div>

            {canEmbed ? (
                <iframe
                    // Fit the page to the pane's width and hide the browser's own PDF toolbar.
                    src={`${src}#view=FitH&toolbar=0&navpanes=0`}
                    title={title}
                    className="min-h-0 w-full flex-1 bg-muted"
                />
            ) : (
                <div className="flex flex-1 flex-col items-center justify-center gap-5 p-6 text-center">
                    <FileIcon lang="PDF" size={44} />
                    <p className="max-w-xs text-muted-foreground">
                        This browser can’t show a PDF inside the page. Open it
                        in a new tab or download it instead.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            <ExternalLink size={15} aria-hidden="true" />
                            Open {name}
                        </a>
                        <a
                            href={src}
                            download
                            className="inline-flex h-10 items-center gap-2 rounded-md border px-5 font-mono text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                        >
                            <Download size={15} aria-hidden="true" />
                            Download
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PdfViewer;
