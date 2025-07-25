import { NavLink } from "react-router";
import NavigationList from "../../Lists/NavigationList";
const LogoUrl = "https://trans-lider.ru/d/logo.svg";
export default function Header() {
  return (
    <header className="w-full">
      <img src={LogoUrl} id="logo" alt="Логотип | Logo" />
      <ul className="navigaion-menu w-full">
        {NavigationList.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `header-element ${isActive ? "active" : ""}`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
