'use client';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import ProgressProvider from './ProgressProvider';

export default function DrinkSpikingStat() {
    return (
        <div className="w-48 h-48 mt-6 flex justify-center items-center">
            <CircularProgressbar
                value={93}
                text={`93%`}
                styles={{
                    path: {
                        stroke: `var(--red-progress)`,
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 2s ease-in-out',
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