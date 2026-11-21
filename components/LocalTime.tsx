'use client';
import { useEffect, useState } from 'react';
import { GENERAL_INFO } from '@/lib/data';

const formatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: GENERAL_INFO.timeZone,
    timeZoneName: 'short',
});

/**
 * My local time, e.g. "09:07 GMT+1". Renders a placeholder on the server so
 * the markup never disagrees with the visitor's clock during hydration.
 */
const LocalTime = ({ className }: { className?: string }) => {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const timer = window.setInterval(() => setNow(new Date()), 15_000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <time
            className={className}
            dateTime={now?.toISOString()}
            title={`My local time (${GENERAL_INFO.location})`}
        >
            {now ? formatter.format(now) : '--:--'}
        </time>
    );
};

export default LocalTime;
