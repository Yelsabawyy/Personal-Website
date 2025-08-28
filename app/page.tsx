import ServicesSection from "./components/serviceSection";
import HeroSection from "./components/heroSection";
import { Mailing } from "./components/mailingSection";
import AboutMe from "./components/aboutSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <ServicesSection/>
      <Mailing/>
    </div>
  );
}
