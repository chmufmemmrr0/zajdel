import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const REVIEWS = [
    {
        quote: "Profesjonalne podejście niezależne od wieku i miła atmosfera. Genialne studio... Polecam!",
        author: "Maks C.",
    },
    {
        quote: "Profesjonalizm i ogromna wiedza przekazywana przez pedagogów, świetna atmosfera i możliwość rozwijania się. Serdecznie polecam!!",
        author: "Amelia M.",
    },
    {
        quote: "Polecam! Najlepsze studio! Wspaniały i wyrozumiały nauczyciel, rzetelnie przekazuje wiedzę, każda lekcja to przyjemność",
        author: "Karolina I.",
    },
    {
        quote: "Wspaniałe studio, Pan Krzysztof wiele mnie nauczył przez 6 lat. Był nie tylko profesjonalnym pedagogiem, ale i przyjacielem. Wszystkim serdecznie polecam z całego serca.",
        author: "Gabrysia C.",
    },
    {
        quote: "Pełen profesjonalizm połączony z indywidualnym podejściem. Polecam jak najbardziej",
        author: "Mateusz D.",
    },
    
];

export default function Opinie() {
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleReviews = Array.from({ length: 3 }, (_, offset) => {
        const index = (activeIndex + offset) % REVIEWS.length;
        return REVIEWS[index];
    });

    const goToPrevious = () => {
        setActiveIndex((current) => (current - 1 + REVIEWS.length) % REVIEWS.length);
    };

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % REVIEWS.length);
    };

    return (
        <section className="bg-mainBackground py-12 sm:py-16 px-4 sm:px-6" id="opinie">
            <div className="mx-auto max-w-[1400px] text-center">
                <p className="text-goldDark text-lg sm:text-xl">OPINIE</p>
                <p className="text-textColor text-xl sm:text-2xl">Co mówią o nas uczniowie?</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
                    <button
                        type="button"
                        aria-label="Poprzednia opinia"
                        onClick={goToPrevious}
                        className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-[2px] border-goldDark bg-transparent text-goldDark transition-colors duration-200 hover:bg-goldDark/10 flex-shrink-0"
                    >
                        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    <div className="relative w-full max-w-[1180px] overflow-hidden">
                        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 sm:p-8">
                            {visibleReviews.map((review, index) => (
                                <article
                                    key={`${review.author}-${index}-${activeIndex}`}
                                    className={`flex h-auto sm:h-[320px] flex-col justify-between rounded-[22px] bg-sectionColor/80 px-4 sm:px-8 py-6 sm:py-10 shadow-lg shadow-goldDark/50 ${index > 0 ? "hidden sm:flex" : ""}`}
                                >
                                    <div className="flex justify-center gap-2 text-goldDark">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <Star
                                                key={`${review.author}-${index}-${starIndex}-${activeIndex}`}
                                                className="h-4 w-4 sm:h-5 sm:w-5 fill-goldDark text-goldDark"
                                            />
                                        ))}
                                    </div>

                                    <p className="mt-4 sm:mt-8 text-center text-sm sm:text-[1.05rem] leading-relaxed text-textColor/90">
                                        {review.quote}
                                    </p>

                                    <div className="mt-4 sm:mt-8 text-center text-xs sm:text-base italic text-textColor/90">
                                        — {review.author}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        aria-label="Następna opinia"
                        onClick={goToNext}
                        className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-[2px] border-goldDark bg-transparent text-goldDark transition-colors duration-200 hover:bg-goldDark/10 flex-shrink-0"
                    >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>

                <div className="flex justify-center gap-3 mt-6">
                    {REVIEWS.map((review, index) => (
                        <span
                            key={review.author}
                            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${index === activeIndex ? "bg-goldDark" : "bg-goldDark/30"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}