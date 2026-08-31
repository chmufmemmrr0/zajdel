import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
};

export default function Reveal({ children }: RevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
            {children}
        </div>
    );
}