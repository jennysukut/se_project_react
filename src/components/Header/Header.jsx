import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/Avatar.svg";
import mobileMenu from "../../images/MobileMenuButton.svg";
import MobileMenuModal from "../MobileMenuModal/MobileMenu";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  handleAddClick,
  weatherData,
  closeActiveModal,
  activeModal,
  handleMobileMenuClick,
}) {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="WTWR Logo" className="header__logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        <ToggleSwitch />
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
        <Link to="/profile" className="header__user-profile-link">
          <div className="header__user-container">
            <p className="header__user-name">Terrence Tegegne</p>
            <img
              src={avatar}
              alt="Terrence Tegegne"
              className="header__avatar"
            />
          </div>
        </Link>
      </header>
      <header className="mobileHeader">
        <div className="mobileHeader__logo-and-menu">
          <Link to="/">
            <img src={logo} alt="WTWR Logo" className="header__logo-mobile" />
          </Link>
          <button
            type="button"
            className="header__mobile-menu-button"
            onClick={handleMobileMenuClick}
          >
            <img
              src={mobileMenu}
              alt="WTWR Menu"
              className="header__mobile-menu"
            />
          </button>
        </div>
        <p className="header__date-and-location-mobile">
          {currentDate}, {weatherData.city}, {weatherData.timeOfDay}
        </p>
      </header>
      <MobileMenuModal
        closeActiveModal={closeActiveModal}
        avatar={avatar}
        handleAddClick={handleAddClick}
        activeModal={activeModal}
      />
    </>
  );
}

export default Header;
