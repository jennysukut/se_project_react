/*The WeatherCard component shows the current temperature. 
Weather data is sent here, in addition to the Header, as props. 
Note that the weather data is not stored in Main, so you need to pass it down 
from the App component.*/

//import array of the weather card images here so we can choose one based on the weather props ti display
import "./WeatherCard.css";
import sunnyDay from "../../images/Sunny.svg";

function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <img
        src={sunnyDay}
        alt="Current Weather"
        className="weatherCard__image"
      />
      <p className="weatherCard__text">100° F</p>
    </div>
  );
}

export default WeatherCard;
