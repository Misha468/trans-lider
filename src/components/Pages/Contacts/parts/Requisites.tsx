import RequisitesList from "../../../Lists/RequisitesList";

export default function Requisites() {
  return (
    <div className="contact-block w-full flex flex-col gap-5">
      <p className="contact-block-title">РЕКВИЗИТЫ</p>
      <ul className="contact-list">
        {RequisitesList.map((item) => (
          <li key={item.id} className="contact-list-element">
            <p>{item.title}</p>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
