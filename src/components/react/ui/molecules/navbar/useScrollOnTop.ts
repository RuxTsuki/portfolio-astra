import { useEffect, useState } from "react";

/**
 *
 * @return {boolean} The sticky value indicating whether the header should be fixed.
 * will fix header after a specific scrollable `100`
 */
export const useScrollOnTop = () => {
    const [sticky, setSticky] = useState(false);

    // on render, set listener
    useEffect(() => {

        if (window.scrollY >= 80)
            setSticky(true);

        const isSticky = () => {
            /* Method that will fix header after a specific scrollable */
            const scrollTop = window.scrollY;
            const stickyClass = scrollTop >= 100;
            setSticky(stickyClass);
        };
        window.addEventListener("scroll", isSticky);
        return () => window.removeEventListener("scroll", isSticky);
    }, []);

    return sticky;
}