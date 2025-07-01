import CatalogList from "../../Lists/CatalolgList";
import { useNavigate } from "react-router-dom";
export default function CatalogPage() {
  const navigate = useNavigate();
  const handleNavigate = (item: { title: string }) => {
    navigate(`/каталог/${item.title}`);
  };
  return (
    <main id="catalog-page">
      <p className="mega-title text-center mb-5 uppercase">
        Аренда спецтехники
      </p>
      <ul className="catalog">
        {CatalogList.map((item) => (
          <li
            key={item.id}
            onClick={() => handleNavigate(item)}
            className="catalog-element"
          >
            <img src={item.image} className="catalog-icon" alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
