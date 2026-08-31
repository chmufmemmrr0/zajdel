import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Mail, Phone, X } from "lucide-react";

type TrialLessonPopupProps = {
    onClose: () => void;
};

export default function TrialLessonPopup({ onClose }: TrialLessonPopupProps) {
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
                className="relative w-full max-w-md animate-[fadeSlide_300ms_ease-out] rounded-2xl bg-[#f8f5f0] p-8 text-[#3f3933] shadow-2xl"
                role="dialog"
                aria-modal="true"
                aria-labelledby="trial-lesson-title"
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

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#bd8d46]">Lekcja próbna</p>
                <h2 id="trial-lesson-title" className="mt-3 pr-8 text-2xl font-semibold text-[#211e1b]">
                    Zacznijmy wspólną muzyczną drogę
                </h2>
                <p className="mt-4 leading-relaxed text-[#6d665f]">
                    Zadzwoń lub napisz do nas, aby ustalić dogodny termin lekcji próbnej. Chętnie odpowiemy na wszystkie pytania.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                    <a
                        href="tel:+48506316592"
                        className="flex items-center gap-3 rounded-xl bg-[#bd8d46] px-4 py-3 font-medium text-white transition-colors hover:bg-[#a97938]"
                    >
                        <Phone className="h-5 w-5" />
                        +48 506 316 592
                    </a>
                    <a
                        href="mailto:krzysiekmuz@wp.pl"
                        className="flex items-center gap-3 rounded-xl border border-[#ddc8a6] px-4 py-3 font-medium text-[#6d665f] transition-colors hover:bg-[#eee4d8]"
                    >
                        <Mail className="h-5 w-5 text-[#bd8d46]" />
                            krzysiekmuz@wp.pl
                    </a>
                </div>
            </div>
        </div>,
        document.body,
    );
}
