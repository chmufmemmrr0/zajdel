import SukcesyCard from "./SukcesyCard";

export default function Sukcesy() {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <p className="text-goldDark text-xl">SUKCESY NASZYCH UCZNIÓW</p>
            <p className="text-textColor text-2xl">Jesteśmy dumni z naszych uczniów</p>
            <div className="mt-8 flex w-full justify-center px-6 flex-row items-stretch gap-6">
                <SukcesyCard id={1} />
                <SukcesyCard id={2} />
                <SukcesyCard id={3} />
            </div>
        </div>
    )
}