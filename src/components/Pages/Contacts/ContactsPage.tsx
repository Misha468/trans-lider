import ContactInfo from "./parts/ContactInfo";
import MapComponent from "./parts/Map";

export default function ContactsPage() {
  return (
    <main id="contacts-page">
      <p className="mega-title">КОНТАКТЫ</p>
      <div className="w-full flex flex-col items-center gap-3">
        <MapComponent />
        <p className="mega-text text-start w-[80%]" id="contacts-address">
          Г. КАЛУГА, УЛ. ДАЛЬНЯЯ, 5
        </p>
      </div>
      <ContactInfo />
    </main>
  );
}
