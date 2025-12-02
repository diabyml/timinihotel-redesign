import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import Experience from "./components/Experience";
import Amenities from "./components/Amenities";
import Sustainability from "./components/Sustainability";
import RoomShowcase from "./components/RoomShowcase";
import GalleryPreview from "./components/GalleryPreview";
import VideoSpotlight from "./components/VideoSpotlight";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <SmoothScroll>
        <Navbar />
        <Hero />
        <IntroSection />
        <VideoSpotlight />
        <GalleryPreview />
        <RoomShowcase />
        <Experience />
        <Sustainability />
        <Amenities />
        <Footer />
      </SmoothScroll>
    </main>
  );
}
