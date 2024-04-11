import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
}) {
  return (
    <div
      className={`modal modal_type_${title} ${
        activeModal === "add-garment" ? "modal_opened" : ""
      }`}
    >
      <div className="modal__container">
        <div className="modal__title-and-close">
          <button
            type="button"
            className="modal__close-button"
            onClick={closeActiveModal}
          ></button>
          <p className="modal__title">{title}</p>
        </div>
        <form action="" className="modal__form">
          {children}
          <button className="modal__submit-button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
