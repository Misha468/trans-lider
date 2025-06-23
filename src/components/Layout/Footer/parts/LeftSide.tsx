import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import PhoneNumbersList from "../../../Lists/PhoneNumbersList";
export default function LeftSide() {
  return (
    <section className="flex flex-col gap-5">
      <p className="mega-title">КОНТАКТЫ</p>
      <div className="flex flex-row gap-1">
        <IoLocationOutline className="mega-title" />
        <ul className="flex flex-col gap-1">
          <li className="footer-element">АДРЕС</li>
          <li className="footer-element">248031, г. Калуга, ул. Дальняя, 5</li>
        </ul>
      </div>
      <div className="flex flex-row gap-1">
        <IoCallOutline className="mega-title" />
        <ul className="flex flex-col gap-1">
          <li className="footer-element">ТЕЛЕФОН</li>
          {PhoneNumbersList.map((item) => (
            <li key={item.id} className="footer-element">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
