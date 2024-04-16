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
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, addItem, deleteItem } from "../../utils/api";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

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
  const [clothingItems, setClothingItems] = useState([{}]);
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

  const handleAddItem = (e, { item }) => {
    e.preventDefault();
    console.log(item);
    setClothingItems({ item, ...clothingItems });
    addItem({ item });
  };

  const handleDeletePress = () => {
    setActiveModal("confirm");
  };

  const handleItemDelete = () => {
    deleteItem(selectedCard._id).then((res) => {
      console.log(res); //It works! Now to update the list of cards?
    });
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

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
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
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <AddItemModal
            activeModal={activeModal}
            handleAddItem={handleAddItem}
            closeActiveModal={closeActiveModal}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            handleDeletePress={handleDeletePress}
            //popupVersion={popupVersion}
          />
          <ConfirmModal
            activeModal={activeModal}
            closeActiveModal={closeActiveModal}
            handleItemDelete={handleItemDelete}
          />
        </div>
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
