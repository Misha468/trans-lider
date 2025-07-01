import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CatalogList from "../../Lists/CatalolgList";
export default function CatalogElementPage() {
  interface Parameter {
    id: number;
    title: string;
    value: string;
  }
  interface Technic {
    id: number;
    image: string;
    title: string;
    parameters: Parameter[];
  }
  const { title } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState<Technic[]>([]);
  useEffect(() => {
    CatalogList.map((item) => {
      if (item.title === title) {
        setItems(item.technic);
      }
    });
  });
  const handleNavigate = () => {
    navigate("/каталог");
  };
  return (
    <main className="catalog-element-page">
      <div className="top-bar">
        <button
          onClick={handleNavigate}
          className="custom-button top-bar-button"
        >
          НАЗАД
        </button>
        <p className="mega-title uppercase text-center">{title}</p>
        <div className="top-bar-void"></div>
      </div>
      {items.map((technic) => (
        <div key={technic.id} className="technic-card">
          <div className="techinc-card-image-wrapper">
            <p>{technic.title}</p>
            <div>
              <img
                src={technic.image}
                className="techinc-card-image"
                alt={technic.title}
              />
            </div>
          </div>
          <div className="techinc-card-text">
            <p className="mega-text technic-card-title">
              ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
            </p>
            <div className="techinc-card-parameters">
              {technic.parameters.map((parameter) => (
                <h1 key={parameter.id}>
                  <p className="lowercase parameter-title">
                    {parameter.title}:
                  </p>
                  <div className="divider"></div>
                  <p>{parameter.value}</p>
                </h1>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
