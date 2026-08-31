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
            <div className="w-[15vw] h-[50vh] bg-sectionColor flex flex-col items-center justify-center rounded-xl text-center shadow-lg shadow-goldDark/50 hover:scale-105 duration-150 cursor-pointer" onClick={() => setIsOfferPopupOpen(true)}>
                <div className="rounded-full bg-mainBackground shadow-lg shadow-goldLight/50 w-1/2 aspect-square">
                    <Icon className="w-full h-full p-8 text-goldDark" />
                </div>
                <h3 className="mt-8 font-medium text-xl">{name}</h3>
                <p className="w-3/4 mt-4">{description}</p>
                <p className="text-goldDark mt-16">DOWIEDZ SIĘ WIĘCEJ <ArrowRightIcon className="inline-block ml-2" /></p>
            </div>

            {isOfferPopupOpen && (
                <OfferPopup id={id} onClose={() => setIsOfferPopupOpen(false)} />
            )}
        </>
    )
}