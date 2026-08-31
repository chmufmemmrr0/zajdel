import { useState } from "react";
import InstruktorzyCard from "./InstruktorzyCard";
import InstruktorzyPopup from "./popups/InstruktorzyPopup";

export default function Instruktorzy() {
    const [isInstruktorzyPopupOpen, setIsInstruktorzyPopupOpen] = useState(false);

    return (
        <>
            <section className="px-4 sm:px-6 lg:px-16 xl:px-24 py-12">
                <div>
                    <p className="text-goldDark text-lg sm:text-xl">NASI INSTRUKTORZY</p>
                    <p className="text-textColor text-xl sm:text-2xl">Poznaj naszych nauczycieli</p>
                </div>
                <div className="mt-8 grid w-full gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-5">
                    {[1, 2, 3, 4].map((id) => (
                        <InstruktorzyCard key={id} id={id} />
                    ))}
                    <button 
                        onClick={() => setIsInstruktorzyPopupOpen(true)}
                        className="bg-goldDark text-mainBackground py-3 sm:py-4 px-6 sm:px-16 rounded-xl h-fit w-fit m-auto hover:bg-[#b3934f] transition-colors duration-150 text-sm sm:text-base"
                    >
                        ZOBACZ WIĘCEJ
                    </button>
                </div>
            </section>

            {isInstruktorzyPopupOpen && (
                <InstruktorzyPopup onClose={() => setIsInstruktorzyPopupOpen(false)} />
            )}
        </>
    );
}