import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import randomizeButton from "../../images/RandomizeButton.svg";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Main({
  weatherData,
  handleCardClick,
  weatherCardBackground,
  clothingItems,
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
        {clothingItems //this looks like it's working weird after adding a card?
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
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
