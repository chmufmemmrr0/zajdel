import { useState } from "react";
import GalleryPopup from "./popups/GalleryPopup";

const galleryPhotos = Object.entries(
    import.meta.glob<string>("../assets/galleryPhotos/*.{jpg,jpeg,png,webp}", {
        eager: true,
        import: "default",
        query: "?url",
    }),
)
    .sort(([firstPath], [secondPath]) => {
        const firstNumber = Number(firstPath.split("/").pop()?.split(".")[0]);
        const secondNumber = Number(secondPath.split("/").pop()?.split(".")[0]);

        return firstNumber - secondNumber;
    })
    .map(([, url]) => url);

export default function Galeria() {
    const [isGalleryPopupOpen, setIsGalleryPopupOpen] = useState(false);
    const previewPhotos = galleryPhotos.slice(0, 6);

    return (
        <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 bg-sectionColor w-full h-fit" id="galeria">
            <p className="text-goldDark text-lg sm:text-xl">GALERIA</p>
            <p className="text-textColor text-xl sm:text-2xl text-center">Zobacz, jak uczymy i tworzymy muzykę</p>
            <div className="my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 w-full justify-center px-2 sm:px-6 items-stretch gap-3 sm:gap-6 max-w-6xl mx-auto">
                {previewPhotos.map((url) => (
                    <div
                        key={url}
                        className="w-full h-32 sm:h-48 lg:h-[200px] bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(${url})` }}
                    />
                ))}
            </div>
            <button
                type="button"
                onClick={() => setIsGalleryPopupOpen(true)}
                className="bg-goldDark text-mainBackground py-2 px-6 sm:px-8 rounded-xl h-fit w-fit m-auto text-sm sm:text-base"
            >
                ZOBACZ WIĘCEJ ZDJĘĆ
            </button>
            {isGalleryPopupOpen && (
                <GalleryPopup photos={galleryPhotos} onClose={() => setIsGalleryPopupOpen(false)} />
            )}
        </div>
    )
}