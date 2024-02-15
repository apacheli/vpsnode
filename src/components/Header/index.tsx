import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

function Header() {
  return (
    <>
      <header className="header">
        <a href="/" style={{ height: "100%" }}>
          <img src="/logo_with_title.png" height="100%" />
        </a>

        <input type="checkbox" id="nav-checkbox" />
        <label htmlFor="nav-checkbox" className="nav-button">
          <FontAwesomeIcon icon={faBars} className="nav-icon" width="100%" />
        </label>

        <nav className="navigation">
          <ul className="navigation-list">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Our Partners</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a className="open-panel" href="/">Open Panel</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
