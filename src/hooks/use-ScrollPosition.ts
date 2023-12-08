import { useEffect } from 'react';

// ----------------------------------------------------------------------


export function useScrollPosition(id: string) {

  useEffect(() => {
    const handleScroll = () => {
        let scroll = window.scrollY;
        const header = document.getElementById(id)
        if (header) {
            if (scroll > 0) {
                header.style.boxShadow = "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)"
                header.style.top="0"
            } else {
                header.style.boxShadow = "none"
                header.style.top="72"
            }
        }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
},[])
}
