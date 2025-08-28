import ToggleComponent from "./components/toggleComponent";
import HeroSection from "./components/heroSection";
import { Mailing } from "./components/mailing";
import AboutMe from "./components/aboutSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <ToggleComponent/>
      <Mailing/>
    </div>
  );
}
