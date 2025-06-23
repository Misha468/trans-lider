import "./components/Styles/tailwind.css";
import "./components/Styles/leaflet.css";
import "./components/Styles/consts.css";
import "./components/Styles/media.css";
import { HashRouter, Routes, Route } from "react-router";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import LandingPage from "./components/Pages/Landing/LandingPage";
import CatalogPage from "./components/Pages/Catalog/CatalogPage";
import GalleryPage from "./components/Pages/Gallery/GalleryPage";
import AboutPage from "./components/Pages/About/AboutPage";
import ContactsPage from "./components/Pages/Contacts/ContactsPage";
import CatalogElementPage from "./components/Pages/CatalogElement/CatalogElementPage";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/каталог" element={<CatalogPage />} />
        <Route path="/фотогалерея" element={<GalleryPage />} />
        <Route path="/о-нас" element={<AboutPage />} />
        <Route path="/контакты" element={<ContactsPage />} />
        <Route path="/каталог/:title" element={<CatalogElementPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
