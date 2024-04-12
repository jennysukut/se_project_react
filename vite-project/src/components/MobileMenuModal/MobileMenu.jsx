import "./MobileMenu.css";

function MobileMenuModal({ closeActiveModal, avatar, handleAddClick }) {
  return (
    <div className="mobileMenuModal">
      <div className="mobileMenuModal__container">
        <button
          type="button"
          className="mobileMenuModal__close-button"
          onClick={closeActiveModal}
        ></button>
        <div className="mobileMenuModal__user-container">
          <p className="mobileMenuModal__user-name">Terrence Tegegne</p>
          <img
            src={avatar}
            alt="Terrence Tegegne"
            className="mobileMenuModal__avatar"
          />
        </div>
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
