import Landing from "../../../assets/static/Landing.png";
import ButtonIcon from "../../../assets/static/button.svg";
import Cards from "./parts/Cards";
import { NavLink } from "react-router";
import SpcecialOffer from "../../Lists/SpecialOffer";
export default function LandingPage() {
  return (
    <main id="landing-page">
      <img src={Landing} alt="Приветственное изображение" />
      <Cards />
      {SpcecialOffer.map((item) => (
        <div className="landing-special-offer">
          <div className="back-part-special-offer">
            <img
              src={item.image}
              className="offer-image"
              alt="Фотография специального предложения"
            />
          </div>
          <div className="front-part-special-offer">
            <div></div>
            <div className="offer-text">
              <p className="hyper-title uppercase text-right">{item.title}</p>
              <p className="offer-description">{item.description}</p>
            </div>
            <div className="offer-button-wrapper">
              <NavLink to={item.link}>
                <img
                  src={ButtonIcon}
                  className="offer-button"
                  alt="Кнопка для перехода"
                />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
