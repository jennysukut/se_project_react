import "./WeatherCard.css";

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

export default WeatherCard;
