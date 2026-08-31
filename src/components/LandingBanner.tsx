import { useState } from "react";
import { ChevronDown } from "lucide-react";
import bannerImage from "../assets/banner.png";
import TrialLessonPopup from "./popups/TrialLessonPopup";

export default function LandingBanner() {
    const [isTrialLessonPopupOpen, setIsTrialLessonPopupOpen] = useState(false);

    return (
        <>
            <div
                className="h-screen flex flex-col items-center justify-end bg-cover bg-center p-8 text-l"
                style={{ backgroundImage: `url(${bannerImage})` }}
                id="start"
            >
                <div className="items-center flex flex-col">
                    <div className="flex flex-row gap-4 text-textColor m-8">
                        <p>Nauka śpiewu</p>
                        <p className="text-goldDark">•</p>
                        <p>Gitara</p>
                        <p className="text-goldDark">•</p>
                        <p>Pianino</p>
                        <p className="text-goldDark">•</p>
                        <p>Skrzypce</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <button
                            type="button"
                            onClick={() => setIsTrialLessonPopupOpen(true)}
                            className="bg-goldDark text-mainBackground py-2 px-4 rounded-xl"
                        >
                            UMÓW LEKCJĘ PRÓBNĄ
                        </button>
                        <button className="bg-transparent duration-150 hover:bg-goldDark text-textColor hover:text-mainBackground py-2 px-4 rounded-xl border-goldDark border-2">
                            POZNAJ OFERTĘ
                        </button>
                    </div>
                    <ChevronDown className="mt-8 animate-bounce size-12 text-goldDark" />
                </div>
            </div>

            {isTrialLessonPopupOpen && (
                <TrialLessonPopup onClose={() => setIsTrialLessonPopupOpen(false)} />
            )}
        </>
    );
}