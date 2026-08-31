import OfertaCard from "./OfertaCard";

export default function NaszaOferta() {
    return (
        <div id="oferta" className="flex flex-col items-center justify-center py-8">
            <p className="text-goldDark text-xl">NASZA OFERTA</p>
            <p className="text-textColor text-2xl">Wybierz swoją drogę</p>
            <div className="flex flex-row gap-16 mt-8">
                <OfertaCard id={1} />
                <OfertaCard id={2} />
                <OfertaCard id={3} />
                <OfertaCard id={4} />
            </div>
        </div>
    )
}