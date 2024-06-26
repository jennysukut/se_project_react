import "./Header.css";

import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/AppContext";
import { useContext } from "react";

import logo from "../../images/Logo.svg";
import avatar from "../../images/Avatar.svg";
import mobileMenu from "../../images/MobileMenuButton.svg";
import MobileMenuModal from "../MobileMenuModal/MobileMenu";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

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
  handleSignUpClick,
  handleLogInClick,
}) {
  const { isLoggedIn } = useContext(AppContext);
  const { currentUser } = useContext(CurrentUserContext);

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
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="header__button header__add-clothes-button"
              onClick={handleAddClick}
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__user-profile-link">
              <div className="header__user-container">
                <p className="header__user-name">{currentUser.name}</p>
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="header__avatar"
                  />
                ) : (
                  <div className="header__avatar-default">
                    {currentUser.name.slice(0, 1)}
                  </div>
                )}
              </div>
            </Link>{" "}
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__button header__sign-up-button"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="header__button header__log-in-button"
              onClick={handleLogInClick}
            >
              Log In
            </button>
          </>
        )}
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
        <ToggleSwitch />
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
