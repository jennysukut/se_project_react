import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { coordinates, APIKey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { filterWeatherCardBackground } from "../WeatherCard/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [popupVersion, setPopupVersion] = useState("1");
  const [weatherCardBackground, setWeatherCardBackground] = useState("");

  const choosePopupVersion = () => {
    setPopupVersion("2");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleMobileMenuClick = () => {
    setActiveModal("mobile-menu");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather({ coordinates }, APIKey)
      .then((data) => {
        const currentData = filterWeatherData(data);
        setWeatherData(currentData);
        const currentBackground = filterWeatherCardBackground(currentData);
        setWeatherCardBackground(currentBackground);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleAddClick={handleAddClick}
          weatherData={weatherData}
          closeActiveModal={closeActiveModal}
          activeModal={activeModal}
          handleMobileMenuClick={handleMobileMenuClick}
        />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          weatherCardBackground={weatherCardBackground}
        />
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
          popupVersion={popupVersion}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
