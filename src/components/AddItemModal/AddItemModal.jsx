import "./AddItemModal.css";
import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({
  activeModal,
  handleAddItem,
  closeActiveModal,
  clothingItems,
  isLoading,
  setIsLoading,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const item = { name, imageUrl, weather };
    handleAddItem({ item });
  };

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  }, [clothingItems]);

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={activeModal === "add-garment"}
      buttonText={isLoading ? "Adding..." : "Add garment"}
      title="New garment"
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="itemName" className="modal__input-title">
          Name
          <input
            type="text"
            className="modal__input"
            placeholder="name"
            id="itemName"
            value={name}
            onChange={handleNameChange}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label htmlFor="imageUrl" className="modal__input-title">
          Image
          <input
            type="url"
            className="modal__input"
            placeholder="image url"
            id="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
          <span className="modal__error"></span>
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <div className="modal__radioButtons">
          <legend className="modal__input-title">
            Select the weather type:
          </legend>
          <label htmlFor="hot" className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              className="modal__radio-input"
              value="hot"
              id="hot"
              onChange={handleWeatherChange}
              checked={"hot" === weather}
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              className="modal__radio-input"
              value="warm"
              id="warm"
              onChange={handleWeatherChange}
              checked={"warm" === weather}
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              className="modal__radio-input"
              value="cold"
              id="cold"
              onChange={handleWeatherChange}
              checked={"cold" === weather}
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
