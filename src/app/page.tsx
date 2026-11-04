import { FaqSection } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MotionRoot } from "@/components/MotionRoot";
import { Navbar } from "@/components/Navbar";
import { Profiles } from "@/components/Profiles";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Synergy } from "@/components/Synergy";

export default function Home() {
  return (
    <>
      <Navbar />
      <MotionRoot>
        <Hero />
        <Synergy />
        <Services />
        <Profiles />
        <Reviews />
        <FaqSection />
        <Location />
      </MotionRoot>
      <Footer />
      <FloatingCta />
    </>
  );
}

