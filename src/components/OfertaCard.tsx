import { useState } from "react";
import { ArrowRightIcon, Guitar, LucideIcon, Mic, Music, Piano } from "lucide-react";
import OfferPopup from "./popups/OfferPopup";

const ICONS: Record<number, LucideIcon> = {
    1: Mic,
    2: Guitar,
    3: Piano,
    4: Music,
};

const NAMES: Record<number, string> = {
    1: "ŚPIEW",
    2: "GITARA",
    3: "PIANINO",
    4: "SKRZYPCE",
};

const DESCS: Record<number, string> = {
    1: "Rozwijaj swój głos, technikę i pewność siebie na scenie.",
    2: "Nauka gry na gitarze od podstaw do zaawansowanych.",
    3: "Klasyka, rozrywka, improwizacja. Zagraj to, co kochasz.",
    4: "Piękno dźwięku i techniki. Klasycznie i nowocześnie.",
};

export default function OfertaCard({id}: {id: number}) {
    const [isOfferPopupOpen, setIsOfferPopupOpen] = useState(false);
    const Icon = ICONS[id] ?? Music;
    const name = NAMES[id] ?? `OFERTA ${id}`;
    const description = DESCS[id] ?? "";

    return (
        <>
            <div className="w-full h-64 sm:h-80 lg:h-[50vh] bg-sectionColor flex flex-col items-center justify-center rounded-xl text-center shadow-lg shadow-goldDark/50 hover:scale-105 duration-150 cursor-pointer" onClick={() => setIsOfferPopupOpen(true)}>
                <div className="rounded-full bg-mainBackground shadow-lg shadow-goldLight/50 w-12 h-12 sm:w-16 sm:h-16 lg:w-1/2 lg:aspect-square flex items-center justify-center">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-full lg:h-full lg:p-8 text-goldDark" />
                </div>
                <h3 className="mt-3 sm:mt-6 lg:mt-8 font-medium text-base sm:text-lg lg:text-xl">{name}</h3>
                <p className="w-4/5 mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm">{description}</p>
                <p className="text-goldDark mt-2 sm:mt-4 lg:mt-16 text-xs sm:text-sm">DOWIEDZ SIĘ WIĘCEJ <ArrowRightIcon className="inline-block ml-1 size-3 sm:size-4" /></p>
            </div>

            {isOfferPopupOpen && (
                <OfferPopup id={id} onClose={() => setIsOfferPopupOpen(false)} />
            )}
        </>
    )
}