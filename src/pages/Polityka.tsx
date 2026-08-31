import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Polityka() {
    return (
        <div className="flex flex-col min-h-screen bg-mainBackground">
            {/* Header Section */}
            <div className="bg-sectionColor border-b border-[#e9e0d5] py-16 px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-textColor mb-4">
                        Polityka Prywatności
                    </h1>
                    <p className="text-lg text-[#6d665f]">
                        Informacje o ochronie Twoich danych osobowych
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow py-16 px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <section className="mb-12">
                        <p className="text-lg text-[#6d665f] leading-relaxed mb-4">
                            Zajdel Studio poważnie traktuje ochronę Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, jak zbieramy, używamy, ujawniamy i chronimy Twoje dane osobowe.
                        </p>
                    </section>

                    {/* Sections */}
                    <div className="space-y-10">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-textColor mb-4 flex items-center">
                                <span className="w-1.5 h-1.5 bg-goldDark rounded-full mr-3"></span>
                                1. Informacje, które zbieramy
                            </h2>
                            <p className="text-[#6d665f] leading-relaxed ml-6">
                                Zbieramy dane osobowe, które dobrowolnie udostępniasz, takie jak imię, nazwisko, adres e-mail, numer telefonu i informacje dotyczące Twojego zainteresowania naszymi lekcjami. Dane te służą nam do kontaktu, realizacji zamówień i poprawy jakości naszych usług.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-textColor mb-4 flex items-center">
                                <span className="w-1.5 h-1.5 bg-goldDark rounded-full mr-3"></span>
                                2. Sposób użycia danych
                            </h2>
                            <p className="text-[#6d665f] leading-relaxed ml-6">
                                Twoje dane osobowe wykorzystujemy wyłącznie w celach niezbędnych do świadczenia naszych usług, przesyłania informacji o promocjach i nowościach, odpowiadania na Twoje pytania oraz doskonalenia naszej oferty. Nie sprzedajemy Twoich danych osobowych stronom trzecim.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-textColor mb-4 flex items-center">
                                <span className="w-1.5 h-1.5 bg-goldDark rounded-full mr-3"></span>
                                3. Bezpieczeństwo danych
                            </h2>
                            <p className="text-[#6d665f] leading-relaxed ml-6">
                                Implementujemy odpowiednie środki bezpieczeństwa, aby chronić Twoje dane osobowe przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem. Nasze systemy są regularnie aktualizowane i monitorowane.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-textColor mb-4 flex items-center">
                                <span className="w-1.5 h-1.5 bg-goldDark rounded-full mr-3"></span>
                                4. Twoje prawa
                            </h2>
                            <p className="text-[#6d665f] leading-relaxed ml-6">
                                Masz prawo dostępu do swoich danych osobowych, ich poprawy lub usunięcia. Jeśli chcesz skorzystać z któregokolwiek z tych praw, skontaktuj się z nami pod adresem krzysiekmuz@wp.pl lub telefonicznie +48 506 316 592.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-textColor mb-4 flex items-center">
                                <span className="w-1.5 h-1.5 bg-goldDark rounded-full mr-3"></span>
                                5. Pliki cookies
                            </h2>
                            <p className="text-[#6d665f] leading-relaxed ml-6">
                                Nasza strona może używać plików cookies w celu poprawy doświadczenia użytkownika. Cookies nie przechowują danych osobowych i mogą być wyłączone w ustawieniach przeglądarki.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-textColor mb-4 flex items-center">
                                <span className="w-1.5 h-1.5 bg-goldDark rounded-full mr-3"></span>
                                6. Zmiany w polityce
                            </h2>
                            <p className="text-[#6d665f] leading-relaxed ml-6">
                                Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki Prywatności w dowolnym momencie. Zmiany będą opublikowane na tej stronie ze wskazaniem daty ostatniej aktualizacji.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <section className="mt-16 pt-8 border-t border-[#e9e0d5]">
                            <h2 className="text-2xl font-bold text-textColor mb-4">Kontakt</h2>
                            <p className="text-[#6d665f] leading-relaxed mb-4">
                                W przypadku pytań dotyczących niniejszej Polityki Prywatności lub naszych praktyk przetwarzania danych, prosimy skontaktuj się z nami:
                            </p>
                            <div className="ml-6 space-y-2 text-[#6d665f]">
                                <p><span className="font-semibold">Email:</span> krzysiekmuz@wp.pl</p>
                                <p><span className="font-semibold">Telefon:</span> +48 506 316 592</p>
                                <p><span className="font-semibold">Adres:</span> ul. Moniuszki 41A, 38-400 Krosno</p>
                            </div>
                        </section>

                        {/* Last Updated */}
                        <section className="mt-12 text-center">
                            <p className="text-sm text-[#918a82]">
                                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Reveal>
                <Footer />
            </Reveal>
        </div>
    );
}