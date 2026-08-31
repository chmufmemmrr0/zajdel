import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryPopupProps = {
    photos: string[];
    onClose: () => void;
};

export default function GalleryPopup({ photos, onClose }: GalleryPopupProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbnailStart = Math.min(
        Math.max(activeIndex - 2, 0),
        Math.max(photos.length - 6, 0),
    );
    const visiblePhotos = photos.slice(thumbnailStart, thumbnailStart + 6);

    const showPrevious = () => {
        setActiveIndex((currentIndex) => (currentIndex - 1 + photos.length) % photos.length);
    };

    const showNext = () => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % photos.length);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowLeft") {
                setActiveIndex((currentIndex) => (currentIndex - 1 + photos.length) % photos.length);
            }
            if (event.key === "ArrowRight") {
                setActiveIndex((currentIndex) => (currentIndex + 1) % photos.length);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose, photos.length]);

    if (photos.length === 0) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#211e1b]/85 px-4 py-6 backdrop-blur-sm sm:px-8"
            role="presentation"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-full w-full max-w-5xl animate-[fadeSlide_300ms_ease-out] flex-col rounded-2xl bg-[#f8f5f0] p-4 text-[#3f3933] shadow-2xl sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="gallery-popup-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Zamknij galerię"
                    className="absolute right-3 top-3 z-10 rounded-full p-2 text-[#6d665f] transition-colors hover:bg-[#eee4d8] hover:text-[#3f3933]"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="flex items-center justify-between pr-12">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#bd8d46]">Galeria</p>
                        <h2 id="gallery-popup-title" className="mt-2 text-2xl font-semibold text-[#211e1b]">
                            Zajdel Studio
                        </h2>
                    </div>
                    <p className="text-sm text-[#6d665f]">
                        {activeIndex + 1} / {photos.length}
                    </p>
                </div>

                <div className="relative mt-5 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl bg-sectionColor">
                    <img
                        src={photos[activeIndex]}
                        alt={`Zdjęcie ${activeIndex + 1} z galerii Zajdel Studio`}
                        className="max-h-[58vh] w-full object-contain"
                    />
                    <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Poprzednie zdjęcie"
                        className="absolute left-3 rounded-full bg-[#f8f5f0]/90 p-2 text-[#3f3933] shadow-md transition-colors hover:bg-white"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        type="button"
                        onClick={showNext}
                        aria-label="Następne zdjęcie"
                        className="absolute right-3 rounded-full bg-[#f8f5f0]/90 p-2 text-[#3f3933] shadow-md transition-colors hover:bg-white"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                <div className="mt-4 grid grid-cols-6 gap-2">
                    {visiblePhotos.map((photo, visibleIndex) => {
                        const index = thumbnailStart + visibleIndex;

                        return (
                        <button
                            key={photo}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Pokaż zdjęcie ${index + 1}`}
                            aria-current={index === activeIndex}
                            className={`h-14 overflow-hidden rounded-lg border-2 transition-opacity sm:h-16 ${
                                index === activeIndex ? "border-[#bd8d46]" : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                        >
                            <img src={photo} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                        </button>
                        );
                    })}
                </div>
            </div>
        </div>,
        document.body,
    );
}
