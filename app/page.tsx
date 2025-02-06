import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import Offer from "@/components/Offer";
import Project from "@/components/Project";
import TrustedBrand from "@/components/TrustedBrand";

export default function Home() {
  return (
    <>
      <Navbar className="lg:px-16 px-6" />
      <Hero className="lg:px-16 px-6" />
      <About className="lg:px-16 px-6" />
      <Gallery />
      <Offer className="lg:px-16 px-6" />
      <Marquee />
      <Project className="lg:px-16 px-6" />
      <TrustedBrand className="lg:px-16 px-6" />
      <Footer />
    </>
  );
}
