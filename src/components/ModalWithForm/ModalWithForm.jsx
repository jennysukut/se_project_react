import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  closeActiveModal,
  isOpen,
  onSubmit,
}) {
  return (
    <div
      className={`modal modal_type_${title} ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__container">
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
          <button className="modal__submit-button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
