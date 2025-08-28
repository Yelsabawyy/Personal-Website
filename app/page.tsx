import ToggleComponent from "./components/toggleComponent";
import Header from "./components/header";
import { Mailing } from "./components/mailing";
import AboutMe from "./components/about";

export default function Home() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <ToggleComponent/>
      <Mailing/>
    </div>
  );
}
