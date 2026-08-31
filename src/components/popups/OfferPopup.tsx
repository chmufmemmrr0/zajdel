import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Guitar, LucideIcon, Mic, Music, Piano } from "lucide-react";

type OfferPopupProps = {
    id: number;
    onClose: () => void;
};

const ICONS: Record<number, LucideIcon> = {
    1: Mic,
    2: Guitar,
    3: Piano,
    4: Music,
};

const OFFER_DATA: Record<number, {
    title: string;
    description: string;
    lessonsLook: string[];
    whatWeLean: string[];
    pricing: string;
}> = {
    1: {
        title: "ŚPIEW",
        description: "Rozwijaj swój głos, technikę i pewność siebie na scenie.",
        lessonsLook: [
            "Indywidualne lekcje w wygodnym studio",
            "Trwające 30 lub 45 minut",
            "Dostosowane do Twojego tempa nauki",
            "Możliwość lekcji online"
        ],
        whatWeLean: [
            "Technika oddychania i emisji głosu",
            "Czytanie nut i interpretacja utworów",
            "Przygotowanie do konkursów i występów",
            "Rozwijanie pewności siebie na scenie",
            "Różne style muzyczne: pop, jazz, klasyka"
        ],
        pricing: "80 zł za lekcję 45 min | 65 zł za lekcję 30 min\n50 zł za odwołaną lekcję 45 min | 40 zł za odwołaną lekcję 30 min"
    },
    2: {
        title: "GITARA",
        description: "Nauka gry na gitarze od podstaw do zaawansowanych.",
        lessonsLook: [
            "Indywidualne lekcje w wygodnym studio",
            "Trwające 30 lub 45 minut",
            "Dostosowane do Twojego poziomu",
            "Możliwość lekcji online"
        ],
        whatWeLean: [
            "Podstawy gry na gitarze klasycznej/elektrycznej",
            "Technika gry palcami i piórem",
            "Czytanie nut i tabulatur",
            "Improwizacja i komponowanie",
            "Przygotowanie repertuaru - od pop'u do klasyki"
        ],
        pricing: "80 zł za lekcję 45 min | 65 zł za lekcję 30 min\n50 zł za odwołaną lekcję 45 min | 40 zł za odwołaną lekcję 30 min"
    },
    3: {
        title: "PIANINO",
        description: "Klasyka, rozrywka, improwizacja. Zagraj to, co kochasz.",
        lessonsLook: [
            "Indywidualne lekcje na profesjonalnym pianinie",
            "Trwające 30 lub 45 minut",
            "Elastyczny harmonogram",
            "Możliwość lekcji online (z ograniczeniami)"
        ],
        whatWeLean: [
            "Podstawy gry na pianinie",
            "Czytanie nut z pozycji skrzypcowych i basowych",
            "Technika palców i pozycja przy instrumencie",
            "Improwizacja i komponowanie",
            "Od klasyki do muzyki filmowej"
        ],
        pricing: "80 zł za lekcję 45 min | 65 zł za lekcję 30 min\n50 zł za odwołaną lekcję 45 min | 40 zł za odwołaną lekcję 30 min"
    },
    4: {
        title: "SKRZYPCE",
        description: "Piękno dźwięku i techniki. Klasycznie i nowocześnie.",
        lessonsLook: [
            "Indywidualne lekcje w wygodnym studio",
            "Trwające 30 lub 45 minut",
            "Lekcje dla początkujących i zaawansowanych",
            "Lekcje głównie stacjonarne"
        ],
        whatWeLean: [
            "Prawidłowa pozycja i chwyty",
            "Technika łuczka",
            "Czytanie nut",
            "Intonacja i słuch muzyczny",
            "Od ćwiczeń do wspaniałych utworów"
        ],
        pricing: "80 zł za lekcję 45 min | 65 zł za lekcję 30 min\n50 zł za odwołaną lekcję 45 min | 40 zł za odwołaną lekcję 30 min"
    }
};

export default function OfferPopup({ id, onClose }: OfferPopupProps) {
    const data = OFFER_DATA[id];
    const Icon = ICONS[id] ?? Music;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
            role="presentation"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl animate-[fadeSlide_300ms_ease-out] rounded-2xl bg-[#f8f5f0] p-8 text-[#3f3933] shadow-2xl max-h-[80vh] overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="offer-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Zamknij okno"
                    className="absolute right-4 top-4 rounded-full p-2 text-[#6d665f] transition-colors hover:bg-[#eee4d8] hover:text-[#3f3933]"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-[#f3eee7] p-3">
                        <Icon className="w-8 h-8 text-[#bd8d46]" />
                    </div>
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#bd8d46]">Lekcje</p>
                        <h2 id="offer-title" className="text-2xl font-semibold text-[#211e1b]">
                            {data.title}
                        </h2>
                    </div>
                </div>

                <p className="text-[#6d665f] mb-6">{data.description}</p>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-[#211e1b] mb-3">Jak wyglądają nasze lekcje?</h3>
                        <ul className="space-y-2">
                            {data.lessonsLook.map((item, index) => (
                                <li key={index} className="flex gap-3 text-[#6d665f]">
                                    <span className="text-[#bd8d46] font-bold">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#211e1b] mb-3">Co się uczymy?</h3>
                        <ul className="space-y-2">
                            {data.whatWeLean.map((item, index) => (
                                <li key={index} className="flex gap-3 text-[#6d665f]">
                                    <span className="text-[#bd8d46] font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#f3eee7] p-4 rounded-xl border border-[#e9e0d5]">
                        <h3 className="font-semibold text-[#211e1b] mb-2">Cennik</h3>
                        <p className="text-[#6d665f] whitespace-pre-line">{data.pricing}</p>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-xl bg-transparent border border-[#ddc8a6] px-4 py-3 font-medium text-[#6d665f] transition-colors hover:bg-[#eee4d8]"
                    >
                        Zamknij
                    </button>
                    <a
                        href="tel:+48506316592"
                        className="flex-1 rounded-xl bg-[#bd8d46] px-4 py-3 font-medium text-white transition-colors hover:bg-[#a97938] text-center"
                    >
                        Zadzwoń do nas
                    </a>
                </div>
            </div>
        </div>,
        document.body,
    );
}
