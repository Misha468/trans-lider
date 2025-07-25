const mainImage = "https://trans-lider.ru/d/about.svg";
import Description from "./parts/Description";
import WelcomeText from "./parts/WelcomeText";
export default function AboutPage() {
  return (
    <main id="about-page">
      <img src={mainImage} alt="Фотография компании" />
      <WelcomeText />
      <Description />
    </main>
  );
}
