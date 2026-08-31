import SukcesyCard from "./SukcesyCard";

export default function Sukcesy() {
    return (
        <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-goldDark text-lg sm:text-xl">SUKCESY NASZYCH UCZNIÓW</p>
            <p className="text-textColor text-xl sm:text-2xl text-center">Jesteśmy dumni z naszych uczniów</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full justify-center px-2 sm:px-6 items-stretch gap-4 sm:gap-6 max-w-6xl mx-auto">
                <SukcesyCard id={1} />
                <SukcesyCard id={2} />
                <SukcesyCard id={3} />
            </div>
        </div>
    )
}