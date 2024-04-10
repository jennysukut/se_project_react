import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <div className="modalWithForm">
      <div className="modalWithForm__container">
        <div className="modalWithForm__title-and-close">
          <button className="modalWithForm__close-button"></button>
          <p className="modalWithForm__title">Put the Props Title Here</p>
        </div>
        <form action="" className="modalWithForm__form">
          <fieldset className="modalWithForm__fieldset">
            <p className="modalWithForm__input-title">Name</p>
            <input
              type="text"
              className="modalWithForm__input"
              placeholder="name"
            />
            <span className="modalWithForm__error"></span>
          </fieldset>
          <fieldset className="modalWithForm__fieldset">
            <p className="modalWithForm__input-title">Image</p>
            <input
              type="url"
              className="modalWithForm__input"
              placeholder="image url"
            />
            <span className="modalWithForm__error"></span>
          </fieldset>
          <fieldset className="modalWithForm__fieldset">
            <div className="modalWithForm__radioButtons">
              <p className="modalWithForm__input-title">
                Select the weather type:
              </p>
              <label>
                <input
                  type="radio"
                  className="modalWithForm__radio-input"
                  value="option1"
                  checked={false}
                />
                Hot
              </label>
              <label>
                <input
                  type="radio"
                  className="modalWithForm__radio-input"
                  value="option1"
                  checked={false}
                />
                Warm
              </label>
              <label>
                <input
                  type="radio"
                  className="modalWithForm__radio-input"
                  value="option1"
                  checked={false}
                />
                Cold
              </label>
            </div>
            <button className="modalWithForm__submit-button">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
