import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
        <ModalWithForm
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          buttonText="Add garment"
          title="New garment"
        >
          <fieldset className="modal__fieldset">
            <label htmlFor="name" className="modal__input-title">
              Name
              <input
                type="text"
                className="modal__input"
                placeholder="name"
                id="name"
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
                  className="modal__radio-input"
                  value="option1"
                  id="hot"
                  //checked={false}
                />
                Hot
              </label>
              <label htmlFor="warm" className="modal__radio-label">
                <input
                  type="radio"
                  className="modal__radio-input"
                  value="option1"
                  id="warm"
                  //checked={false}
                />
                Warm
              </label>
              <label htmlFor="cold" className="modal__radio-label">
                <input
                  type="radio"
                  className="modal__radio-input"
                  value="option1"
                  id="cold"
                  //checked={false}
                />
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
        />
      </div>
    </div>
  );
}

export default App;
