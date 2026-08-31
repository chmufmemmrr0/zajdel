import { useState } from "react";
import { ChevronDown } from "lucide-react";
import bannerImage from "../assets/banner.png";
import TrialLessonPopup from "./popups/TrialLessonPopup";

export default function LandingBanner() {
    const [isTrialLessonPopupOpen, setIsTrialLessonPopupOpen] = useState(false);

    return (
        <>
            <div
                className="h-screen flex flex-col items-center justify-end bg-cover bg-center p-4 sm:p-8 text-l"
                style={{ backgroundImage: `url(${bannerImage})` }}
                id="start"
            >
                <div className="items-center flex flex-col">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-textColor m-4 sm:m-8 text-center text-sm sm:text-base">
                        <p>Nauka śpiewu</p>
                        <p className="text-goldDark hidden sm:inline">•</p>
                        <p>Gitara</p>
                        <p className="text-goldDark hidden sm:inline">•</p>
                        <p>Pianino</p>
                        <p className="text-goldDark hidden sm:inline">•</p>
                        <p>Skrzypce</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            type="button"
                            onClick={() => setIsTrialLessonPopupOpen(true)}
                            className="bg-goldDark text-mainBackground py-2 px-4 sm:px-6 rounded-xl text-sm sm:text-base whitespace-nowrap"
                        >
                            UMÓW LEKCJĘ PRÓBNĄ
                        </button>
                        <button className="bg-transparent duration-150 hover:bg-goldDark text-textColor hover:text-mainBackground py-2 px-4 sm:px-6 rounded-xl border-goldDark border-2 text-sm sm:text-base whitespace-nowrap">
                            POZNAJ OFERTĘ
                        </button>
                    </div>
                    <ChevronDown className="mt-4 sm:mt-8 animate-bounce size-8 sm:size-12 text-goldDark" />
                </div>
            </div>

            {isTrialLessonPopupOpen && (
                <TrialLessonPopup onClose={() => setIsTrialLessonPopupOpen(false)} />
            )}
        </>
    );
}