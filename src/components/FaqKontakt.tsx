import { useState, useEffect } from "react";
import { ChevronDown, Clock3, MapPin, Mail, Phone } from "lucide-react";

const faqs = [
    "Ile trwają zajęcia i jak często się odbywają?",
    "Czy przygotowujecie uczniów do konkursów?",
    "Dla jakich grup wiekowych są zajęcia?",
    "Jak zapisać się na zajęcia?",
];

const answers = [
    "Zajęcia odbywają się regularnie w ustalonym planie, w zależności od wybranego cyklu i poziomu zaawansowania - najczesciej raz w tygodniu. Każde zajęcia trwają zazwyczaj 45 lub 30 minut.",
    "Tak, przygotowujemy uczniów do konkursów, występów i przesłuchań. Oferujemy wsparcie w zakresie techniki, interpretacji utworów oraz przygotowania do wystąpień publicznych.",
    "Zajęcia prowadzone są dla dzieci, młodzieży oraz dorosłych. Wybieramy poziom i program zgodnie z wiekiem i potrzebami uczestnika.",
    "Najprościej skontaktować się z nami telefonicznie lub mailowo, a następnie ustalić dogodny termin i rodzaj zajęć.",
];

const contactItems = [
    { icon: Phone, value: "+48 506 316 592" },
    { icon: Mail, value: "krzysiekmuz@wp.pl" },
    { icon: MapPin, value: "ul. Moniuszki 41A\n38-400 Krosno" },
    { icon: Clock3, value: "Pon - Pt: 12:00 - 21:00\nSob: 9:00 - 18:00" },
];

export default function FaqKontakt() {
    const [openIndex, setOpenIndex] = useState<number>(-1);
    const [cookieConsent, setCookieConsent] = useState<string | null>(null);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        setCookieConsent(consent);

        const handleStorageChange = () => {
            const updatedConsent = localStorage.getItem("cookieConsent");
            setCookieConsent(updatedConsent);
        };

        const handleCookieConsentChanged = () => {
            const updatedConsent = localStorage.getItem("cookieConsent");
            setCookieConsent(updatedConsent);
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("cookieConsentChanged", handleCookieConsentChanged);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("cookieConsentChanged", handleCookieConsentChanged);
        };
    }, []);

    const toggleFaq = (index: number) => {
        setOpenIndex((current) => (current === index ? -1 : index));
    };
 
    const mapQuery = "ul. Moniuszki 41A, 38-400 Krosno";
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

    return (
        <section className="bg-sectionColor px-4 sm:px-6 py-12 sm:py-16 md:px-8 xl:px-16">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1fr_1.15fr]">
                    <div>
                        <p className="text-goldDark text-lg sm:text-xl">FAQ</p>
                        <p className="text-textColor text-xl sm:text-2xl">Najczęściej zadawane pytania</p>

                        <div className="mt-6 sm:mt-8 space-y-4">
                            {faqs.map((question, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={question}
                                        className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                                            isOpen ? "border-[#d7c4a6] bg-[#f1e7db] shadow-sm" : "border-[#e9dcc7] bg-[#f1ede8]"
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 text-left"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-sm sm:text-lg leading-relaxed text-[#1d1c1b]">{question}</span>

                                            <span
                                                className={`flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#c8a979] text-[#c19959] transition-transform duration-300 flex-shrink-0 ${
                                                    isOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            >
                                                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                                            </span>
                                        </button>

                                        <div
                                            className="grid transition-all duration-300 ease-out"
                                            style={{
                                                gridTemplateRows: isOpen ? "1fr" : "0fr",
                                            }}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-base leading-relaxed text-[#4d4741]">{answers[index]}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                

                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute -left-5 top-0 hidden h-full w-px bg-[#e5ddd3] lg:block"
                        />
                        <p className="text-goldDark text-lg sm:text-xl">KONTAKT</p>
                        <p className="text-textColor text-xl sm:text-2xl">Odezwij się do nas</p>

                        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 xl:grid-cols-[1.1fr_1fr]">
                            <div className="overflow-hidden rounded-[22px] border border-[#e0d3bf] bg-[#f4efe9] p-2 shadow-[0_10px_30px_rgba(56,48,36,0.05)]">
                                <div className="relative h-64 sm:h-80 lg:h-[340px] overflow-hidden rounded-[18px] bg-[#efe7dc]">
                                    {cookieConsent === "accepted" ? (
                                        <iframe
                                            title="Mapa lokalizacji"
                                            src={mapUrl}
                                            className="h-full w-full border-0"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    ) : (
                                        <div className="h-full w-full flex items-center justify-center bg-[#f1ede8]">
                                            <div className="text-center px-4">
                                                <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-[#c9a46a] mx-auto mb-2" />
                                                <p className="text-textColor font-medium mb-1 text-sm sm:text-base">Mapa jest niedostępna</p>
                                                <p className="text-xs sm:text-sm text-[#6d665f]">Zaakceptuj cookies, aby zobaczyć naszą lokalizację</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-1">
                                {contactItems.map(({ icon: Icon, value }) => (
                                    <div
                                        key={value}
                                        className="flex flex-col items-start gap-2 sm:gap-3 px-2 sm:px-4 py-2"
                                    >
                                        <div className="flex items-center justify-center text-[#b67b32] flex-shrink-0">
                                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                        </div>

                                        <span className="whitespace-pre-line text-xs sm:text-sm lg:text-lg leading-relaxed">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}