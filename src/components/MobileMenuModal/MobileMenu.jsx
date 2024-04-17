import "./MobileMenu.css";
import { Link } from "react-router-dom";

function MobileMenuModal({
  closeActiveModal,
  avatar,
  handleAddClick,
  activeModal,
}) {
  return (
    <div
      className={`mobileMenuModal ${
        activeModal === "mobile-menu" ? "mobileMenuModal-opened " : ""
      }`}
    >
      <div className="mobileMenuModal__container">
        <button
          type="button"
          className="mobileMenuModal__close-button"
          onClick={closeActiveModal}
        ></button>
        <Link to="/profile" className="header__user-profile-link">
          <div className="mobileMenuModal__user-container">
            <p className="mobileMenuModal__user-name">Terrence Tegegne</p>
            <img
              src={avatar}
              alt="Terrence Tegegne"
              className="mobileMenuModal__avatar"
            />
          </div>
        </Link>
        <button
          type="button"
          className="mobileMenuModal__add-clothes-button"
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
      </div>
    </div>
  );
}

export default MobileMenuModal;
