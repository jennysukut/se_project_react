import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/Avatar.svg";
import mobileMenu from "../../images/MobileMenuButton.svg";
import MobileMenuModal from "../MobileMenuModal/MobileMenu";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ handleAddClick, weatherData, closeActiveModal }) {
  return (
    <>
      <header className="header">
        <img src={logo} alt="WTWR Logo" className="header__logo" />
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
        <div className="header__user-container">
          <p className="header__user-name">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </header>
      <header className="mobileHeader">
        <div className="mobileHeader__logo-and-menu">
          <img src={logo} alt="WTWR Logo" className="header__logo-mobile" />
          <img
            src={mobileMenu}
            alt="WTWR Menu"
            className="header__mobile-menu"
          />
        </div>
        <p className="header__date-and-location-mobile">
          {currentDate}, {weatherData.city}
        </p>
      </header>
      <MobileMenuModal
        closeActiveModal={closeActiveModal}
        avatar={avatar}
        handleAddClick={handleAddClick}
      />
    </>
  );
}

export default Header;
