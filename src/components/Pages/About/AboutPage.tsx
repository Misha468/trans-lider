import MainImage from "../../../assets/static/about.svg";
import Description from "./parts/Description";
import WelcomeText from "./parts/WelcomeText";
export default function AboutPage() {
  return (
    <main id="about-page">
      <img src={MainImage} alt="Фотография компании" />
      <WelcomeText />
      <Description />
    </main>
  );
}
