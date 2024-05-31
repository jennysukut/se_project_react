import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  closeActiveModal,
  isOpen,
  onSubmit,
  altButton,
  altButtonText,
  logIn,
  handleAltButton,
}) {
  return (
    <div
      className={`modal modal_type_${title} ${isOpen ? "modal_opened" : ""}`}
    >
      <div
        className={`modal__container ${logIn ? "modal_container-login" : ""}`}
      >
        <div className="modal__title-and-close">
          <button
            type="button"
            className="modal__close-button"
            onClick={closeActiveModal}
          />
          <p className="modal__title">{title}</p>
        </div>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            className={`modal__submit-button ${
              altButton ? "modal__submit-button-v2" : ""
            }`}
          >
            {buttonText}
          </button>
          {altButton ? (
            <button onClick={handleAltButton} className="altModalButton">
              {altButtonText}
            </button>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
