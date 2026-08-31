import FaqKontakt from "../components/FaqKontakt";
import Footer from "../components/Footer";
import Galeria from "../components/Galeria";
import Instruktorzy from "../components/Instruktorzy";
import LandingBanner from "../components/LandingBanner";
import NaszaOferta from "../components/NaszaOferta";
import ONas from "../components/ONas";
import Opinie from "../components/Opinie";
import Sukcesy from "../components/Sukcesy";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="h-[200vh]">
      <Reveal><LandingBanner /></Reveal>
      <Reveal><NaszaOferta /></Reveal>
      <Reveal><ONas /></Reveal>
      <Reveal><Sukcesy /></Reveal>
      <Reveal><Instruktorzy /></Reveal>
      <Reveal><Opinie /></Reveal>
      <Reveal><Galeria /></Reveal>
      <Reveal><FaqKontakt /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}