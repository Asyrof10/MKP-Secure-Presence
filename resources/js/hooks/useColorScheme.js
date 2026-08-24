import { useEffect, useState } from 'react';

export default function useColorScheme() {
    const [isDark, setIsDark] = useState(
        () =>
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches,
    );

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e) => setIsDark(e.matches);
        mq.addEventListener('change', listener);
        return () => mq.removeEventListener('change', listener);
    }, []);

    return isDark;
}
