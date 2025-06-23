import { NavLink } from "react-router";
import Logo from "../../../assets/static/logo.svg";
import NavigationList from "../../Lists/NavigationList";
export default function Header() {
  return (
    <header className="w-full">
      <img src={Logo} id="logo" alt="Логотип | Logo" />
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
