import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookiesBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            setIsVisible(true);
        } else {
            if (cookieConsent === "accepted") {
                loadAnalytics();
            }
        }
    }, []);

    const loadAnalytics = () => {
        console.log("Analytics loaded - user accepted cookies");
    };

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        window.dispatchEvent(new Event("cookieConsentChanged"));
        loadAnalytics();
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        window.dispatchEvent(new Event("cookieConsentChanged"));
        console.log("User declined cookies - no tracking loaded");
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-sectionColor border-t border-[#e9e0d5] shadow-lg">
            <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-3">
                            <div className="flex-1">
                                <h3 className="text-xs sm:text-sm font-semibold text-textColor mb-1">
                                    Pliki Cookies
                                </h3>
                                <p className="text-xs text-[#6d665f] leading-relaxed">
                                    Używamy cookies, aby ulepszyć doświadczenie użytkownika, analizować ruch na stronie i personalizować zawartość. 
                                    <span className="block mt-1">
                                        Klikając "Akceptuję wszystkie", wyrażasz zgodę na używanie wszystkich cookies. 
                                        Klikając "Odrzuć", będziemy używać jedynie niezbędne cookies. 
                                        Możesz zmienić swoje preferencje w każdej chwili.
                                    </span>
                                </p>
                                <Link 
                                    to="/polityka" 
                                    className="text-xs text-goldDark hover:text-[#a6824c] underline mt-2 inline-block transition-colors"
                                >
                                    Polityka prywatności
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col xs:flex-row gap-2 shrink-0">
                        <button
                            onClick={handleDecline}
                            className="px-3 sm:px-4 py-2 text-xs font-medium text-textColor bg-transparent border border-goldDark rounded-lg hover:bg-[#f1e5d3] transition-colors duration-150 whitespace-nowrap"
                        >
                            Odrzuć
                        </button>
                        <button
                            onClick={handleAccept}
                            className="px-3 sm:px-4 py-2 text-xs font-medium text-mainBackground bg-goldDark rounded-lg hover:bg-[#b3934f] transition-colors duration-150 whitespace-nowrap"
                        >
                            Akceptuję wszystkie
                        </button>
                    </div>

                    <button
                        onClick={handleClose}
                        aria-label="Zamknij"
                        className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto text-[#6d665f] hover:text-textColor transition-colors flex-shrink-0"
                    >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
