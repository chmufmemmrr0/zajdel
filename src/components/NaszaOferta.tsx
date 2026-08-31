import OfertaCard from "./OfertaCard";

export default function NaszaOferta() {
    return (
        <div id="oferta" className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-goldDark text-lg sm:text-xl">NASZA OFERTA</p>
            <p className="text-textColor text-xl sm:text-2xl text-center">Wybierz swoją drogę</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-16 mt-8 w-full max-w-7xl">
                <OfertaCard id={1} />
                <OfertaCard id={2} />
                <OfertaCard id={3} />
                <OfertaCard id={4} />
            </div>
        </div>
    )
}