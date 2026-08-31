import { useState } from "react";
import oNasImage from "../assets/oNas.jpg";
import AboutUsPopup from "./popups/AboutUsPopup";

export default function ONas() {
    const [isAboutUsPopupOpen, setIsAboutUsPopupOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center bg-sectionColor h-auto lg:h-[50vh]">
                <div style={{ backgroundImage: `url(${oNasImage})` }} className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-full bg-cover bg-center"></div>
                <div className="w-full lg:w-1/2 flex-none min-w-0 flex flex-col items-start justify-center p-6 sm:p-12 lg:p-24">
                    <p className="text-goldDark text-lg sm:text-xl">O NAS</p>
                    <p className="text-textColor text-xl sm:text-2xl">Poznaj Zajdel Studio</p>
                    <p className="w-full sm:w-4/5 lg:w-3/4 my-3 sm:my-4 text-sm sm:text-base lg:text-lg">Wierzymy, że muzyka rozwija nie tylko talent, ale również pewność siebie, wrażliwość i pasję. Tworzymy miejsce, w którym każdy może rozwijać swoje umiejętności - niezależnie od wieku i poziomu. Profesjonalizm, indywidualne podejście i przyjazna atmosfera to nasza codzienność.</p>
                    <button 
                        onClick={() => setIsAboutUsPopupOpen(true)}
                        className="bg-goldDark text-mainBackground py-2 px-4 rounded-xl hover:bg-[#b3934f] transition-colors duration-150 text-sm sm:text-base"
                    >
                        POZNAJ NAS BLIŻEJ
                    </button>
                </div>
            </div>

            {isAboutUsPopupOpen && (
                <AboutUsPopup onClose={() => setIsAboutUsPopupOpen(false)} />
            )}
        </>
    )
}