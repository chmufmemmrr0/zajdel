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
        <div className="flex flex-col items-center justify-center py-8 bg-sectionColor w-screen h-fit" id="galeria">
            <p className="text-goldDark text-xl">GALERIA</p>
            <p className="text-textColor text-2xl">Zobacz, jak uczymy i tworzymy muzykę</p>
            <div className="my-8 flex w-full justify-center px-6 flex-row items-stretch gap-6">
                {previewPhotos.map((url) => (
                    <div
                        key={url}
                        className="w-1/3 h-[200px] bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(${url})` }}
                    />
                ))}
            </div>
            <button
                type="button"
                onClick={() => setIsGalleryPopupOpen(true)}
                className="bg-goldDark text-mainBackground py-2 px-8 rounded-xl h-fit w-fit m-auto"
            >
                ZOBACZ WIĘCEJ ZDJĘĆ
            </button>
            {isGalleryPopupOpen && (
                <GalleryPopup photos={galleryPhotos} onClose={() => setIsGalleryPopupOpen(false)} />
            )}
        </div>
    )
}