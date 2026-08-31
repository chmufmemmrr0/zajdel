import { useState } from "react";
import oNasImage from "../assets/oNas.jpg";
import AboutUsPopup from "./popups/AboutUsPopup";

export default function ONas() {
    const [isAboutUsPopupOpen, setIsAboutUsPopupOpen] = useState(false);

    return (
        <>
            <div className="flex flex-row items-center justify-center bg-sectionColor h-[50vh]">
                <div style={{ backgroundImage: `url(${oNasImage})` }} className="w-1/2 flex-none self-stretch bg-cover bg-center"></div>
                <div className="w-1/2 flex-none min-w-0 flex flex-col items-start justify-center p-24">
                    <p className="text-goldDark text-xl">O NAS</p>
                    <p className="text-textColor text-2xl">Poznaj Zajdel Studio</p>
                    <p className="w-3/4 my-4 text-lg">Wierzymy, że muzyka rozwija nie tylko talent, ale również pewność siebie, wrażliwość i pasję. Tworzymy miejsce, w którym każdy może rozwijać swoje umiejętności - niezależnie od wieku i poziomu. Profesjonalizm, indywidualne podejście i przyjazna atmosfera to nasza codzienność.</p>
                    <button 
                        onClick={() => setIsAboutUsPopupOpen(true)}
                        className="bg-goldDark text-mainBackground py-2 px-4 rounded-xl hover:bg-[#b3934f] transition-colors duration-150"
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