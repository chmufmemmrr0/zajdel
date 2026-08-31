import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import userImage from "../../assets/user.jpg";

type InstruktorzyPopupProps = {
    onClose: () => void;
};

const TEACHERS = [
    { name: "Anna Zajdel", instrument: "ŚPIEW", image: userImage },
    { name: "Michał Nowak", instrument: "GITARA", image: userImage },
    { name: "Katarzyna Bernat", instrument: "PIANINO", image: userImage },
    { name: "Paweł Wojciechowski", instrument: "SKRZYPCE", image: userImage },
    { name: "Magdalena Kowalska", instrument: "ŚPIEW", image: userImage },
    { name: "Tomasz Lewandowski", instrument: "GITARA", image: userImage },
    { name: "Joanna Wójcik", instrument: "PIANINO", image: userImage },
    { name: "Bartosz Zieliński", instrument: "SKRZYPCE", image: userImage },
];

export default function InstruktorzyPopup({ onClose }: InstruktorzyPopupProps) {
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
                className="relative w-full max-w-5xl animate-[fadeSlide_300ms_ease-out] rounded-2xl bg-[#f8f5f0] p-8 text-[#3f3933] shadow-2xl max-h-[85vh] overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="teachers-title"
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

                <div className="mb-8">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#bd8d46]">Nasi Instruktorzy</p>
                    <h2 id="teachers-title" className="mt-2 text-2xl font-semibold text-[#211e1b]">
                        Poznaj naszych nauczycieli
                    </h2>
                    <p className="mt-2 text-[#6d665f]">
                        Każdy z naszych instruktorów to doświadczony muzyk, pasjonujący się nauczaniem i wspieraniem Twoich muzycznych ambicji.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TEACHERS.map((teacher, index) => (
                        <article
                            key={index}
                            className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-goldDark/50 transition-transform duration-150 hover:-translate-y-1"
                        >
                            <div
                                className="h-52 w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${teacher.image})` }}
                            />
                            <div className="px-6 pb-5 pt-4">
                                <h3 className="text-lg font-semibold text-textColor">{teacher.name}</h3>
                                <p className="mt-1 text-sm font-medium tracking-wide text-goldDark">{teacher.instrument}</p>
                                <p className="mt-3 text-xs text-[#6d665f] leading-relaxed">
                                    Doświadczony instruktor z pasją do nauczania. Specjalista w dziedzinie {teacher.instrument.toLowerCase()}.
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-xl bg-transparent border border-[#ddc8a6] px-4 py-3 font-medium text-[#6d665f] transition-colors hover:bg-[#eee4d8]"
                    >
                        Zamknij
                    </button>
                    <a
                        href="tel:+48506316592"
                        className="flex-1 rounded-xl bg-[#bd8d46] px-4 py-3 font-medium text-white transition-colors hover:bg-[#a97938] text-center"
                    >
                        Zadzwoń do nas
                    </a>
                </div>
            </div>
        </div>,
        document.body,
    );
}
