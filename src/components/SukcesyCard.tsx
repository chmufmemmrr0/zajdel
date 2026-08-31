import { LucideIcon, Music, Star, Trophy } from "lucide-react";
import sukcesy1Image from "../assets/sukcesy1.jpg";
import sukcesy2Image from "../assets/sukcesy2.jpg";
import sukcesy3Image from "../assets/sukcesy3.jpg";

const ICONS: Record<number, LucideIcon> = {
    1: Trophy,
    2: Star,
    3: Music,
};

const NAMES: Record<number, string> = {
    1: "LAUREACI KONKURSÓW",
    2: "KONCERTY",
    3: "EGZAMINY",
};

const DESCS: Record<number, string> = {
    1: "Nasi uczniowie zdobywają nagrody na ogólnopolskich i międzynarodowych konkursach muzycznych.",
    2: "Regularnie występujemy podczas koncertów, wydarzeń kulturalnych i własnych projektów artystycznych.",
    3: "Skutecznie przygotowujemy do egzaminów państwowych i certyfikatów muzycznych.",
};

const IMAGES: Record<number, string> = {
    1: sukcesy1Image,
    2: sukcesy2Image,
    3: sukcesy3Image,
};

export default function SukcesyCard({ id }: { id: number }) {
    const Icon = ICONS[id];

    return (
        <div className="w-full max-w-md flex-none overflow-hidden rounded-2xl bg-white shadow-lg shadow-goldDark/50">
            <div
                className="relative h-64 w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${IMAGES[id]})`,
                    backgroundPosition: id === 1 ? "center top" : "center",
                }}
            >
                <div className="absolute bottom-0 left-6 flex h-20 w-20 translate-y-1/2 items-center justify-center rounded-full border-2 border-goldDark bg-white text-goldDark shadow-lg shadow-goldDark/50">
                    <Icon size={38} strokeWidth={1.5} />
                </div>
            </div>
            <div className="flex min-h-44 flex-col items-center justify-center px-8 pb-7 pt-12 text-center">
                <h3 className="text-lg font-semibold text-textColor">{NAMES[id]}</h3>
                <p className="mt-3 text-base leading-relaxed text-textColor/80">{DESCS[id]}</p>
            </div>
        </div>
    )
}