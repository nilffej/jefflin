import { MutableRefObject, useEffect, useState } from "react";

export const useAnimateIn = (ref: MutableRefObject<HTMLDivElement>) => {
    const [shouldAnimateIn, setShouldAnimateIn] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldAnimateIn(true);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(ref.current);
    }, []);

    return shouldAnimateIn;
}