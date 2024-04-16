import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { coordinates, APIKey } from "../../utils/constants";
import {
  getWeather,
  filterWeatherData,
  filterWeatherCardBackground,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherCardBackground, setWeatherCardBackground] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState(`F`);
  //const [popupVersion, setPopupVersion] = useState("1");

  // const choosePopupVersion = () => {
  // setPopupVersion("2");
  // };

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

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === `C`) setCurrentTemperatureUnit(`F`);
    if (currentTemperatureUnit === `F`) setCurrentTemperatureUnit(`C`);
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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            closeActiveModal={closeActiveModal}
            activeModal={activeModal}
            handleMobileMenuClick={handleMobileMenuClick}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  weatherCardBackground={weatherCardBackground}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
          <ModalWithForm
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
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
                    name="weather"
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
                    name="weather"
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
                    name="weather"
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
            //popupVersion={popupVersion}
          />
        </div>
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;