import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type AboutUsPopupProps = {
    onClose: () => void;
};

export default function AboutUsPopup({ onClose }: AboutUsPopupProps) {
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
                aria-labelledby="about-us-title"
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

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#bd8d46]">O nas</p>
                <h2 id="about-us-title" className="mt-3 pr-8 text-2xl font-semibold text-[#211e1b]">
                    Zajdel Studio - Twoja muzyczna przygoda
                </h2>

                <div className="mt-6 space-y-4 text-[#6d665f] leading-relaxed">
                    <p>
                        Zajdel Studio to miejsce, gdzie pasja do muzyki łączy się z profesjonalizmem i doświadczeniem. Depuis 2010 roku pomagamy osobom w każdym wieku odkrywać i rozwijać ich muzyczne talenty.
                    </p>

                    <p>
                        Wierzymy, że muzyka to więcej niż tylko dźwięki. To sposób na wyrażenie siebie, budowanie pewności siebie, rozwijanie kreatywności i tworzenie wspaniałych wspomnień. W naszym studio każdy uczeń jest traktowany indywidualnie, z uwzględnieniem jego tempa nauki, zainteresowań i celów.
                    </p>

                    <div className="mt-6 bg-[#f3eee7] p-4 rounded-xl border border-[#e9e0d5]">
                        <h3 className="font-semibold text-[#211e1b] mb-2">Nasza misja</h3>
                        <p>
                            Tworzymy przyjazną atmosferę, w której każdy uczeń może czuć się pewnie i komfortowo. Naszym celem jest nie tylko nauczenie gry na instrumencie, ale też rozbudzenie miłości do muzyki, która będzie towarzyszyć naszym uczniom przez całe życie.
                        </p>
                    </div>

                    <div className="space-y-3 mt-6">
                        <h3 className="font-semibold text-[#211e1b]">Dlaczego my?</h3>
                        <ul className="space-y-2 ml-4">
                            <li className="flex gap-2">
                                <span className="text-[#bd8d46] font-bold">✓</span>
                                <span>Doświadczeni instruktorzy z pasją do nauczania</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#bd8d46] font-bold">✓</span>
                                <span>Indywidualne podejście do każdego ucznia</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#bd8d46] font-bold">✓</span>
                                <span>Nowoczesne pomieszczenia i instrumenty</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#bd8d46] font-bold">✓</span>
                                <span>Przygotowanie do konkursów i występów</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#bd8d46] font-bold">✓</span>
                                <span>Elastyczne harmonogramy zajęć</span>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-6 italic">
                        Dołącz do naszej muzycznej społeczności i odkryj, co możesz osiągnąć!
                    </p>
                </div>

            </div>
        </div>,
        document.body,
    );
}
