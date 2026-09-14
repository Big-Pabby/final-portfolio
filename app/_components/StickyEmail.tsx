import { GENERAL_INFO } from '@/lib/data';
import { buildMailto } from '@/lib/utils';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-0 left-0 z-[1] flex flex-col items-center gap-6 px-3">
            <a
                href={buildMailto(GENERAL_INFO.email, GENERAL_INFO.emailSubject)}
                className="text-muted-foreground tracking-[1px] transition-colors hover:text-primary [writing-mode:vertical-rl]"
                aria-label={`Email ${GENERAL_INFO.email}`}
            >
                {GENERAL_INFO.email}
            </a>
            <span className="block h-24 w-px bg-border" aria-hidden="true"></span>
        </div>
    );
};

export default StickyEmail;
