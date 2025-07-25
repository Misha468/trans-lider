const card1Url = "https://trans-lider.ru/d/catalogcard.jpg";
const card2Url = "https://trans-lider.ru/d/contactscard.jpg";
const buttonIcon = "https://trans-lider.ru/d/button.svg";
import ImageHoverEffect from "./ImageHoverComponent";
const CardsList = [
  {
    id: 1,
    img: card1Url,
    hoverText: "Каталог",
    buttonImage: buttonIcon,
    link: "/каталог",
  },
  {
    id: 2,
    img: card2Url,
    hoverText: "Контакты",
    buttonImage: buttonIcon,
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
