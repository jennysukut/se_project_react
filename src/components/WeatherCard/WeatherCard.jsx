import "./WeatherCard.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData, weatherCardBackground }) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="weatherCard">
      <img
        src={weatherCardBackground}
        alt="Current Weather"
        className="weatherCard__image"
      />
      <p className="weatherCard__text">
        {currentTemperatureUnit === `F`
          ? weatherData.temp.F
          : weatherData.temp.C}
      </p>{" "}
      //adjust this to reflect the context console.log({currentTemperatureUnit}
      );
    </div>
  );
}

export default WeatherCard;
