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
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, addItem, deleteItem } from "../../utils/api";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { AppContext, CurrentUserContext } from "../../contexts/AppContext";
import LoginModal from "../LoginModal/LoginModal";
import { register, signIn, checkToken } from "../../utils/auth.js";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoutes.jsx";

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
  const [currentUser, setCurrentUser] = useState({
    name: "Tester",
    email: "testy@gmail.com",
    // avatar: `https://images.unsplash.com/photo-1605184861755-8f190fea96a5?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  }); //maybe update this to an object with the user's information to render on the profile
  const [token, setToken] = useState("");

  //const [popupVersion, setPopupVersion] = useState("2");

  //const choosePopupVersion = () => {
  //  setPopupVersion("2");
  //};

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setActiveModal("register");
    console.log("sign up modal active");
  };

  const handleAddUser = ({ user }) => {
    console.log(`Adding this user: ${user.email} ${user.name}`);
    register({ user })
      .then(() => {
        navigate("/profile");
      })
      .then(closeActiveModal)
      .then(() => {
        // setCurrentUser({
        //   name: user.name,
        //   email: user.email,
        //   avatar: user.avatar,
        // });
        // console.log(currentUser);
        setIsLoggedIn(true);
      });
  };

  const handleLogInClick = () => {
    setActiveModal("log-in");
    console.log("log in modal active");
  };

  const handleLogin = ({ email, password }) => {
    console.log(email);
    console.log(password);
    signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
      })
      .then(closeActiveModal);

    //check the server's response - do this in the App.js section?
    //Store the token
    //localStorage.setItem("jwt", res.token);
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
    addItem({ item, token })
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
    deleteItem(selectedCard._id, { token })
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
    if (localStorage.jwt) {
      const token = localStorage.jwt;
      checkToken({ token }).then(() => {
        setToken(token);
        setIsLoggedIn(true);
      });
    }
  }, [currentUser]);

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
    <CurrentUserContext.Provider value={{ currentUser }}>
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
                handleSignUpClick={handleSignUpClick}
                handleLogInClick={handleLogInClick}
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
                    <ProtectedRoute>
                      <Profile
                        handleCardClick={handleCardClick}
                        handleAddClick={handleAddClick}
                        clothingItems={clothingItems}
                      />
                    </ProtectedRoute>
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
                handleAddUser={handleAddUser}
                currentUser={currentUser}
                setActiveModal={setActiveModal}
              />
              <LoginModal
                activeModal={activeModal}
                closeActiveModal={closeActiveModal}
                handleLogin={handleLogin}
                setActiveModal={setActiveModal}
              />
            </div>
            <Footer />
          </CurrentTemperatureUnitContext.Provider>
        </AppContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
