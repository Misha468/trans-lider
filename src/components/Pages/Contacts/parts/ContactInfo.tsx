import ContactsList from "../../../Lists/ContactsList";
import Requisites from "./Requisites";

export default function ContactInfo() {
  return (
    <section className="w-full contact-info-wrapper">
      <div className="flex flex-col gap-10 w-4/5">
        {ContactsList.map((item) => (
          <div
            key={item.id}
            className="contact-block w-full flex flex-col gap-5"
          >
            <p className="contact-block-title">{item.title}</p>
            <ul className="contact-list">
              {item.contacts.map((contact) => (
                <li key={contact.id} className="contact-list-element">
                  <p>{contact.title}</p>
                  <a href={contact.link}>{contact.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Requisites />
      </div>
    </section>
  );
}
