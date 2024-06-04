import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//import stylesheets
import "./App.css";

//import components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoutes.jsx";

//import utils & apis
import { coordinates, APIKey } from "../../utils/constants";
import {
  getWeather,
  filterWeatherData,
  filterWeatherCardBackground,
} from "../../utils/weatherApi";
import {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import {
  register,
  signIn,
  checkToken,
  updateProfile,
} from "../../utils/auth.js";

//import contexts
import { AppContext, CurrentUserContext } from "../../contexts/AppContext";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  //set states
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
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    avatar: "",
    email: "",
  });
  //const [popupVersion, setPopupVersion] = useState("2");

  //const choosePopupVersion = () => {
  //  setPopupVersion("2");
  //};

  const navigate = useNavigate();

  //functions for users
  const handleSignUpClick = () => {
    setActiveModal("register");
    console.log("sign up modal active");
  };

  const handleAddUser = ({ user }) => {
    console.log(`Adding this user: ${user.email} ${user.name}`);
    register({ user })
      .then(() => {
        const { email, password } = user;
        signIn({ email, password })
          .then((res) => {
            localStorage.setItem("jwt", res.token);
            console.log(user);
            setCurrentUser({
              name: user.name,
              email: user.email,
              avatar: user.avatar,
            });
            setIsLoggedIn(true);
            navigate("/profile");
            closeActiveModal();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogInClick = () => {
    setActiveModal("log-in");
    console.log("log in modal active");
  };

  const handleLogin = ({ email, password }, setEmail, setPassword) => {
    console.log(email);
    console.log(password);
    if (!email || !password) {
      return;
    }

    signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        checkToken(res.token)
          .then((res) => {
            console.log(res);
            setCurrentUser({
              _id: res._id,
              name: res.name,
              avatar: res.avatar,
              email: res.email,
            });
            setIsLoggedIn(true);
            setEmail("");
            setPassword("");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(closeActiveModal)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleProfileChange = (newData) => {
    const token = localStorage.jwt;
    updateProfile({ newData, token })
      .then(() => {
        setCurrentUser({
          _id: currentUser._id,
          name: newData.newName,
          avatar: newData.newAvatar,
          email: currentUser.email,
        });
        closeActiveModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //functions for items

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItem = ({ item }) => {
    const token = localStorage.jwt;
    addItem({ item, token })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
      })
      .then(closeActiveModal)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem("jwt");
    const cards = clothingItems;

    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => {
                return card._id === id ? updatedCard.item : card;
              })
            );
            console.log(cards);
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            console.log(updatedCard.item);
            setClothingItems((cards) =>
              cards.map((card) => {
                return card._id === id ? updatedCard.item : card;
              })
            );
          })
          .catch((err) => console.log(err));
  };

  const handleItemDelete = () => {
    const token = localStorage.jwt;
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //functions for opening & submitting modals
  const handleMobileMenuClick = () => {
    setActiveModal("mobile-menu");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeletePress = () => {
    setActiveModal("confirm");
  };

  //other functions

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === `C`) setCurrentTemperatureUnit(`F`);
    if (currentTemperatureUnit === `F`) setCurrentTemperatureUnit(`C`);
  };

  //useEffect functions
  useEffect(() => {
    if (localStorage.jwt) {
      const token = localStorage.jwt;
      checkToken(token)
        .then((res) => {
          setCurrentUser({
            _id: res._id,
            name: res.name,
            avatar: res.avatar,
            email: res.email,
          });
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
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
                      handleCardLike={handleCardLike}
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
                        setActiveModal={setActiveModal}
                        handleCardLike={handleCardLike}
                        setIsLoggedIn={setIsLoggedIn}
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
                isLoading={isLoading}
                setIsLoading={setIsLoading}
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
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              <RegisterModal
                activeModal={activeModal}
                closeActiveModal={closeActiveModal}
                handleAddUser={handleAddUser}
                setActiveModal={setActiveModal}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              <LoginModal
                activeModal={activeModal}
                closeActiveModal={closeActiveModal}
                handleLogin={handleLogin}
                setActiveModal={setActiveModal}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              <EditProfileModal
                activeModal={activeModal}
                closeActiveModal={closeActiveModal}
                handleProfileChange={handleProfileChange}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
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
