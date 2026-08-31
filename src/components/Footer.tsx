import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logoTransparent.png";
import TrialLessonPopup from "./popups/TrialLessonPopup";
import OfferPopup from "./popups/OfferPopup";
import InstruktorzyPopup from "./popups/InstruktorzyPopup";
import AboutUsPopup from "./popups/AboutUsPopup";

export default function Footer() {
    const [openTrialPopup, setOpenTrialPopup] = useState(false);
    const [openOfferPopup, setOpenOfferPopup] = useState<number | null>(null);
    const [openInstruktorzyPopup, setOpenInstruktorzyPopup] = useState(false);
    const [openAboutUsPopup, setOpenAboutUsPopup] = useState(false);

    const handleOfferClick = (id: number) => {
        setOpenOfferPopup(id);
    };
    return (
        <>
            <footer className="border-t border-[#e9e0d5] bg-sectionColor">
                <div className="mx-auto grid max-w-[1800px] gap-6 sm:gap-8 md:gap-10 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-[2.4fr_1fr_1fr_1.2fr] px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col justify-center gap-6 sm:col-span-2 md:col-span-1">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10">
                            <div className="flex flex-col items-center text-[#171615]">
                                <img src={logo} alt="Logo" className="h-40 w-40 sm:h-48 sm:w-48 md:h-64 md:w-64" />
                            </div>

                            <div>
                                <p className="max-w-[390px] text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                                    Zajdel Studio to miejsce, gdzie pasja do muzyki łączy się z profesjonalizmem i doświadczeniem.
                                    <br />
                                    Rozwijaj swój talent razem z nami!
                                </p>
                                <div className="mt-5 flex gap-3 justify-center sm:justify-start">
                                    <a href="https://www.facebook.com/zajdelstudio/?locale=pl_PL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddc8a6] text-[#bd8d46] transition-colors hover:bg-[#f1e5d3]">
                                        <span className="text-xl font-semibold">f</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide">Menu</h2>
                        <nav className="flex flex-col gap-2 text-xs sm:text-sm text-[#6d665f]">
                            <a href="#start" className="hover:text-[#bd8d46] cursor-pointer">Strona główna</a>
                            <a href="#oferta" className="hover:text-[#bd8d46] cursor-pointer">Oferta</a>
                            <button onClick={() => setOpenAboutUsPopup(true)} className="hover:text-[#bd8d46] cursor-pointer text-left">O nas</button>
                            <button onClick={() => setOpenInstruktorzyPopup(true)} className="hover:text-[#bd8d46] cursor-pointer text-left">Nasi instruktorzy</button>
                            <a href="#galeria" className="hover:text-[#bd8d46] cursor-pointer">Galeria</a>
                            <a href="#opinie" className="hover:text-[#bd8d46] cursor-pointer">Opinie</a>
                        </nav>
                    </div>

                    <div>
                        <h2 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide">Oferta</h2>
                        <nav className="flex flex-col gap-2 text-xs sm:text-sm text-[#6d665f]">
                            <button onClick={() => handleOfferClick(1)} className="hover:text-[#bd8d46] cursor-pointer text-left">Śpiew</button>
                            <button onClick={() => handleOfferClick(2)} className="hover:text-[#bd8d46] cursor-pointer text-left">Gitara</button>
                            <button onClick={() => handleOfferClick(3)} className="hover:text-[#bd8d46] cursor-pointer text-left">Pianino</button>
                            <button onClick={() => handleOfferClick(4)} className="hover:text-[#bd8d46] cursor-pointer text-left">Skrzypce</button>
                            <button onClick={() => setOpenTrialPopup(true)} className="hover:text-[#bd8d46] cursor-pointer text-left">Lekcja próbna</button>
                        </nav>
                    </div>

                    <div className="hidden md:block">
                        <h2 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide">Kontakt</h2>
                        <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#6d665f]">
                            <a href="tel:+48506316592" className="flex items-center gap-3 hover:text-[#bd8d46]"><Phone className="h-5 w-5 text-[#bd8d46]" />+48 506 316 592</a>
                            <a href="mailto:krzysiekmuz@wp.pl" className="flex items-center gap-3 hover:text-[#bd8d46]"><Mail className="h-5 w-5 text-[#bd8d46]" />krzysiekmuz@wp.pl</a>
                            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#bd8d46]" /><span>ul. Moniuszki 41A<br />38-400 Krosno</span></div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#e9e0d5]">
                    <div className="mx-auto flex max-w-[1800px] flex-col gap-3 px-4 sm:px-6 md:px-8 py-5 text-xs text-[#918a82] md:flex-row md:items-center md:justify-between">
                        <span>© {new Date().getFullYear()} Zajdel Studio. Wszelkie prawa zastrzeżone.</span>
                        <div className="flex gap-5">
                            <a href="/#/polityka" className="hover:text-[#bd8d46]">Polityka prywatności</a>
                        </div>
                    </div>
                </div>
            </footer>

            {openTrialPopup && <TrialLessonPopup onClose={() => setOpenTrialPopup(false)} />}
            {openOfferPopup && <OfferPopup id={openOfferPopup} onClose={() => setOpenOfferPopup(null)} />}
            {openInstruktorzyPopup && <InstruktorzyPopup onClose={() => setOpenInstruktorzyPopup(false)} />}
            {openAboutUsPopup && <AboutUsPopup onClose={() => setOpenAboutUsPopup(false)} />}
        </>
    )}