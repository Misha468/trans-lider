import LeftSide from "./LeftSide";
import Logo from "../../../../assets/static/logo.svg";
export default function TopFooter() {
  function scrollToTop() {
    console.log("scroll");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className="top-footer-part">
      <LeftSide />
      <section className="right-side-footer">
        <img
          src={Logo}
          className="w-4/5"
          id="footer-logo"
          alt="Логотип | Logo"
        />
        <button onClick={scrollToTop} className="footer-button">
          ВВЕРХ
        </button>
      </section>
    </section>
  );
}
