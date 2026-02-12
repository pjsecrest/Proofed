'use client';

import { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TARGET_VALUE = 93;
const DURATION_MS = 2500;

// Ease-out cubic: fast at start, slows as it approaches the end
function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}

export default function DrinkSpikingStat() {
    const [value, setValue] = useState(0);
    const startTimeRef = useRef<number | null>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        startTimeRef.current = null;

        const animate = (timestamp: number) => {
            if (startTimeRef.current === null) startTimeRef.current = timestamp;
            const elapsed = timestamp - startTimeRef.current;
            const t = Math.min(elapsed / DURATION_MS, 1);
            const eased = easeOutCubic(t);
            const current = eased * TARGET_VALUE;
            setValue(current);

            if (t < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const displayValue = Math.round(value);

    return (
        <div className="w-48 h-48 mt-6 flex justify-center items-center">
            <CircularProgressbar
                value={value}
                text={`${displayValue}%`}
                styles={{
                    path: {
                        stroke: `var(--red-progress)`,
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.05s ease-out',
                    },
                    trail: {
                        stroke: 'var(--border)',
                    },
                    text: {
                        fill: 'var(--foreground-bright)',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    },
                }}
            />
        </div>
    );
}