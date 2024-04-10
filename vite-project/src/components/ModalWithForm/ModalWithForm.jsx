import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <div className="modalWithForm">
      <div className="modalWithForm__container">
        <button className="modalWithForm__close-button">Close</button>
        <p className="modalWithForm__title">Put the Props Title Here</p>
        <form action="" className="modalWithForm__form">
          <fieldset className="modalWithForm__fieldset">
            <input
              type="text"
              className="modalWithForm__input"
              placeholder="input text here"
            />
            <span className="modalWithForm__error"></span>
            <input
              type="url"
              className="modalWithForm__input"
              placeholder="url here"
            />
            <span className="modalWithForm__error"></span>
            <input type="radio" className="modalWithForm__input" />
            <span className="modalWithForm__error"></span>
            <button className="modalWithForm__submit-button">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

<div class="modal" id="add-card-modal">
  <div class="modal__container">
    <button
      class="modal__close-button"
      id="add-card-modal-close-button"
    ></button>
    <p class="modal__heading">New place</p>
    <form class="modal__form" name="add-card-form" id="add-card-form">
      <fieldset class="modal__form-fieldset">
        <input
          type="text"
          class="modal__form-input"
          id="add-card-modal-title"
          name="title"
          placeholder="Title"
          minlength="1"
          maxlength="30"
          required
        />
        <span class="modal__error" id="add-card-modal-title-error"></span>
        <input
          type="url"
          class="modal__form-input"
          id="add-card-modal-link"
          name="link"
          placeholder="Image link"
          required
        />
        <span class="modal__error" id="add-card-modal-link-error"></span>
        <button
          class="modal__button modal__button_disabled"
          id="add-card-modal-button"
          disabled
        >
          Create
        </button>
      </fieldset>
    </form>
  </div>
</div>;

export default ModalWithForm;
