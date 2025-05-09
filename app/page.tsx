import Header from "./components/Header";
import Hero from "./components/Hero";
import EventDescription from "./components/EventDescription";
import Speakers from "./components/Speakers";
import SpeakerCTA from "./components/SpeakerCTA";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Programme from "./components/Programme";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <EventDescription />
        <SpeakerCTA />
        <Speakers />
        <Programme />
        <Gallery />
        <Sponsors />
        <Faq />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
