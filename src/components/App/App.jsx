import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
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
import RegisterModal from "../RegisterModal/RegisterModal";
import AppContext from "../../contexts/AppContext";
import LoginModal from "../LoginModal/LoginModal";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [popupVersion, setPopupVersion] = useState("2");

  //const choosePopupVersion = () => {
  //  setPopupVersion("2");
  //};

  const handleSignUp = () => {
    setActiveModal("register");
    console.log("sign up modal active");
  };

  const handleLogIn = () => {
    setActiveModal("log-in");
    console.log("log in modal active");
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

  const handleAddItem = ({ item }) => {
    addItem({ item })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
      })
      .then(closeActiveModal)
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeletePress = () => {
    setActiveModal("confirm");
  };

  const handleItemDelete = () => {
    deleteItem(selectedCard._id)
      .then((data) => {
        const updatedClothingItems = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(updatedClothingItems);
        closeActiveModal();
      })
      .catch((err) => {
        console.log(err);
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
        const fetchedClothingItems = data.toReversed();
        setClothingItems(fetchedClothingItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        console.log("escape pressed");
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
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
              handleSignUp={handleSignUp}
              handleLogIn={handleLogIn}
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
              clothingItems={clothingItems}
            />
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              closeActiveModal={closeActiveModal}
              handleDeletePress={handleDeletePress}
              // popupVersion={popupVersion}
            />
            <ConfirmModal
              activeModal={activeModal}
              closeActiveModal={closeActiveModal}
              handleItemDelete={handleItemDelete}
            />
            <RegisterModal
              activeModal={activeModal}
              closeActiveModal={closeActiveModal}
            />
            <LoginModal
              activeModal={activeModal}
              closeActiveModal={closeActiveModal}
            />
          </div>
          <Footer />
        </CurrentTemperatureUnitContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
