import "./WeatherCard.css";
import sunnyDay from "../../images/Sunny.svg";
import { weatherCardBackground } from "../../utils/constants";

function WeatherCard({ weatherData, weatherCardBackground }) {
  return (
    <div className="weatherCard">
      <img
        src={weatherCardBackground}
        alt="Current Weather"
        className="weatherCard__image"
      />
      <p className="weatherCard__text">{weatherData.temp.F}° F</p>
    </div>
  );
}

export const filterWeatherCardBackground = (currentData) => {
  if (currentData.timeOfDay == "day" && currentData.style == "Clear") {
    const currentBackground = weatherCardBackground.sunny.day.sunnyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Clear") {
    const currentBackground = weatherCardBackground.sunny.night.sunnyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Cloudy") {
    const currentBackground = weatherCardBackground.cloudy.day.cloudyDay;
    return currentBackground;
  } else if (
    currentData.timeOfDay == "night" &&
    currentData.style == "Cloudy"
  ) {
    const currentBackground = weatherCardBackground.cloudy.night.cloudyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Rainy") {
    const currentBackground = weatherCardBackground.rainy.day.rainyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Rainy") {
    const currentBackground = weatherCardBackground.rainy.night.rainyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Stormy") {
    const currentBackground = weatherCardBackground.stormy.day.stormyDay;
    return currentBackground;
  } else if (
    currentData.timeOfDay == "night" &&
    currentData.style == "Stormy"
  ) {
    const currentBackground = weatherCardBackground.stormy.night.stormyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Snowy") {
    const currentBackground = weatherCardBackground.snowy.day.snowyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Snowy") {
    const currentBackground = weatherCardBackground.snowy.night.snowyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Foggy") {
    const currentBackground = weatherCardBackground.foggy.day.foggyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Foggy") {
    const currentBackground = weatherCardBackground.foggy.night.foggyNight;
    return currentBackground;
  } else {
    console.log(error);
  }
};

export default WeatherCard;
