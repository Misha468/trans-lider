import Card1 from "../../../../assets/static/landingPhotos/catalogCard.jpg";
import Card2 from "../../../../assets/static/landingPhotos/contactsCard.jpg";
import ButtonIcon from "../../../../assets/static/button.svg";
import ImageHoverEffect from "./ImageHoverComponent";
const CardsList = [
  {
    id: 1,
    img: Card1,
    hoverText: "Каталог",
    buttonImage: ButtonIcon,
    link: "/каталог",
  },
  {
    id: 2,
    img: Card2,
    hoverText: "Контакты",
    buttonImage: ButtonIcon,
    link: "/контакты",
  },
];
export default function Cards() {
  return (
    <section className="cards-wrapper">
      {CardsList.map((card) => (
        <ImageHoverEffect
          key={card.id}
          image={card.img}
          hoverText={card.hoverText}
          buttonImage={card.buttonImage}
          link={card.link}
        />
      ))}
    </section>
  );
}
