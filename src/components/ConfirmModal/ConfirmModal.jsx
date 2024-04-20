import "./ConfirmModal.css";

function ConfirmModal({ closeActiveModal, activeModal, handleItemDelete }) {
  const handleDeleteConfirmation = () => {
    handleItemDelete();
  };

  return (
    <div
      className={`confirmModal ${
        activeModal === "confirm" ? "confirmModal_opened" : ""
      }`}
    >
      <div className="confirmModal__container">
        <button
          type="button"
          className="confirmModal__close-button"
          onClick={closeActiveModal}
        ></button>
        <p className="confirmModal__text">
          Are you sure you want to delete this item?
        </p>
        <p className="confirmModal__text">This action is irreversible.</p>
        <button
          type="button"
          className="confirmModal__confirmButton"
          onClick={handleDeleteConfirmation}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="confirmModal__cancelButton"
          onClick={closeActiveModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
