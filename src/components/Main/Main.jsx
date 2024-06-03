import "./Main.css";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import randomizeButton from "../../images/RandomizeButton.svg";

function Main({
  weatherData,
  handleCardClick,
  weatherCardBackground,
  clothingItems,
  handleCardLike,
}) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <main className="main">
      <WeatherCard
        weatherData={weatherData}
        weatherCardBackground={weatherCardBackground}
      />
      <p className="itemCard__text">
        Today is{" "}
        {currentTemperatureUnit === `F`
          ? weatherData.temp.F
          : weatherData.temp.C}{" "}
        / You may want to wear:
      </p>
      <ul className="itemCard__list">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                handleCardLike={handleCardLike}
              />
            );
          })}
      </ul>
      <button type="button" className="randomize-button">
        <img
          src={randomizeButton}
          alt="randomize"
          className="randomize-button-icon"
        />
        Randomize
      </button>
    </main>
  );
}

export default Main;
