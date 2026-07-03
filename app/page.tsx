import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Curriculum from "./components/Curriculum";
import ManagementSystem from "./components/ManagementSystem";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import ContactCTA from "./components/ContactCTA";
import AllteachingCafe from "./components/AllteachingCafe";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Curriculum />
        <ManagementSystem />
        <Gallery />
        <Location />
        <ContactCTA />
        <AllteachingCafe />
      </main>
      <Footer />
      <MobileStickyBar />
      {/* MobileStickyBar adds bottom padding on mobile so content isn't hidden */}
      <div className="md:hidden h-16" aria-hidden="true" />
    </>
  );
}
