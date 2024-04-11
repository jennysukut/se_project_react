import "./WeatherCard.css";
import sunnyDay from "../../images/Sunny.svg";

function WeatherCard({ weatherData }) {
  return (
    <div className="weatherCard">
      <img
        src={sunnyDay}
        alt="Current Weather"
        className="weatherCard__image"
      />
      <p className="weatherCard__text">{weatherData.temp.F}° F</p>
    </div>
  );
}

export default WeatherCard;
