import type { Metadata } from 'next';
import PdfViewer from '@/components/editor/PdfViewer';
import { GENERAL_INFO } from '@/lib/data';
import { CV_FILE } from '@/lib/files';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = {
    ...pageMetadata({
        title: 'CV',
        description: `Read or download ${GENERAL_INFO.name}’s CV.`,
        path: CV_FILE.href,
    }),
    // The page only frames the PDF, so there is nothing here to index.
    robots: { index: false, follow: true },
};

/** Victor_Adekunle_CV.pdf: my CV, opened in the editor like any other file. */
export default function CvPage() {
    return (
        <>
            <h1 className="sr-only">{GENERAL_INFO.name}’s CV</h1>
            <PdfViewer
                src={GENERAL_INFO.resume}
                name={CV_FILE.name}
                title={`${GENERAL_INFO.name}’s CV`}
            />
        </>
    );
}
