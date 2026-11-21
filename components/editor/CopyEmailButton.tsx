'use client';
import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { copyEmail } from '@/components/ide/commands';

/** "Copy email" action for contact.sh, with a short confirmation. */
const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = window.setTimeout(() => setCopied(false), 2000);
        return () => window.clearTimeout(timer);
    }, [copied]);

    return (
        <button
            type="button"
            onClick={async () => setCopied(await copyEmail())}
            className="code-lens"
            aria-live="polite"
        >
            {copied ? (
                <Check size={13} className="text-primary" aria-hidden="true" />
            ) : (
                <Copy size={13} aria-hidden="true" />
            )}
            {copied ? 'Copied' : 'Copy email'}
        </button>
    );
};

export default CopyEmailButton;
