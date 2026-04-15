import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="container1">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/page1"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              Samartfonlar va Gadjetlar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page2"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              Noutbuklar ,Kompyuterlar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page3"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              TV va Proektrolar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page4"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              Audiotexnikalar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page5"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              Transport
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page6"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              Uy uchun texnika
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page7"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              Oshxona uchun texnikalar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page8"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              Go’zallik va Sog’liq
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;